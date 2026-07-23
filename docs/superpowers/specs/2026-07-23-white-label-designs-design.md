# White-label real: diseños intercambiables por archivo de configuración

**Fecha:** 2026-07-23
**Estado:** Aprobado en brainstorming, pendiente de plan de implementación

## Problema

El white-label actual (`data-brand` + `brands.css`) solo cambia el color primario, el botón y los radii. Como demo de arquitectura es débil: parece un theme picker, no white-label. Se quiere que un "diseño" sea una piel completa —tipografía, color, bordes, sombras, texturas, motion— sobre el mismo layout/HTML, y que agregar un diseño nuevo sea agregar archivos y una línea de registro, sin tocar componentes.

Principios rectores: bajo acoplamiento, alta cohesión, YAGNI.

## Decisiones

| Decisión | Elección |
| --- | --- |
| Marcas viejas (ember/tide/bloom) | Se eliminan. Quedan 2 diseños: Base (actual) y Raw (nuevo) |
| Estética del segundo diseño | Brutalismo crudo |
| Transición de cambio | View Transitions API con fallback instantáneo |
| Arquitectura | A+: contrato de tokens rico + `elements.css` opcional restringido a elementos semánticos |
| Nombres | Diseño default: `base`. Diseño brutalista: `raw` |

## Arquitectura

```
src/designs/
  types.ts        ← DesignManifest: { id, label } (las fuentes son side-effect imports del manifest)
  index.ts        ← registry: [base, raw] + defaultDesign ("base")
  base/
    manifest.ts   ← label "Base"; imports fontsource de IBM Plex (side-effect)
  raw/
    manifest.ts   ← label "Raw"; imports fontsource propios
    tokens.css    ← [data-design="raw"] { redefine el contrato completo }
    elements.css  ← [data-design="raw"] solo elementos: textura body, ::selection, scrollbar
```

### Reglas del sistema

1. **El contrato son los tokens base** (`src/styles/tokens/*.css`). Los valores default de `:root` SON el diseño Base. Un diseño alterno hace override bajo `[data-design="<id>"]`. Base no duplica nada.
2. **El registry es la única fuente de verdad.** De `src/designs/index.ts` derivan: las opciones del switcher, los ids válidos del script inline anti-FOUC (generados en build, no hardcodeados), y los imports de fuentes (cada manifest importa sus fontsource).
3. **Los componentes conocen solo el contrato.** Nunca referencian un diseño. Un diseño nunca referencia una clase de componente: `elements.css` se restringe a selectores de elementos semánticos (`body`, `::selection`, scrollbar, `h1–h6`) y atributos data. El HTML semántico es API estable; las clases BEM no.
4. **Agregar un diseño #3** = crear carpeta con `manifest.ts` + `tokens.css` (+ `elements.css` opcional) y agregar una línea en `index.ts`. Nada más.
5. **Dark mode ortogonal.** Cada diseño define su dark con `[data-theme="dark"][data-design="<id>"]`. Los ejes theme × design no se conocen entre sí.

### Renombrados y semántica

- `data-brand` → `data-design` en `<html>`.
- Storage key `brand-preference` → `design-preference`. La key vieja se ignora (no se migra).
- `brand-switcher` → `design-switcher`. Keys i18n de brand se reemplazan por keys de design.

### Fuentes

`@font-face` es lazy: el browser solo descarga los woff2 del diseño activo. El preload en `<head>` cubre solo las fuentes del diseño default (Base), como hoy. Al activar Raw por primera vez hay FOUT breve; aceptable.

## Contrato de tokens expandido

Tokens nuevos (defaults = Base actual; cero cambio visual en Base):

- **Tipografía:** `--font-display` (hero name; Base: IBM Plex Mono), `--font-heading` (headlines de sección; Base: IBM Plex Sans), `--font-body` (Base: IBM Plex Sans), `--heading-transform` (Base: `none`), `--heading-tracking` (Base: `var(--tracking-tight)`). `--font-sans`/`--font-mono` quedan como primitivas.
- **Bordes:** `--border-width` (Base: `1px`), `--border-width-thick` (Base: `2px`).
- **Sombras y motion:** `--shadow-*` y `--transition-*` existentes pasan a ser contrato oficial.
- **Colores semánticos:** los existentes (`--color-text`, `--color-background`, `--color-surface`, `--color-border`, `--color-primary*`, `--color-button-*`) sin cambio de nombre.

Se agrega un token solo si un diseño real lo necesita. La lista final exacta emerge de la pasada de enriquecimiento (ver Migración); esta es la base.

### Pasada de enriquecimiento (costo único)

Barrido por los componentes para reemplazar valores hoy hardcodeados por tokens del contrato: `border: 1px solid …` → `var(--border-width)`, `text-transform` en headings → `var(--heading-transform)`, familias tipográficas directas → `--font-display`/`--font-body`, etc. Se hace una vez; después, los componentes no se vuelven a tocar por diseño nuevo.

## Diseño "Raw"

- **Fuentes:** display Archivo Black; body Archivo 400/500/700; mono Space Mono.
- **Light:** fondo hueso `#FFFEF2`, texto `#000`, primary amarillo eléctrico `#FFE600` con texto negro, bordes negros `3px`, sombras duras `6px 6px 0 #000` sin blur, radius `0` en todo.
- **Dark:** fondo `#0A0A0A`, texto hueso, bordes blancos, amarillo se mantiene, sombras duras amarillas.
- **Headings:** uppercase, tracking apretado, `--font-display`.
- **Hover:** oscurecimiento seco del acento, ≤80ms, easing lineal (sin suavidad; los efectos por-componente quedan fuera para no violar la regla de `elements.css`).
- **elements.css:** `::selection` amarillo/negro, scrollbar cuadrada gruesa, textura sutil de papel cuadriculado en `body`.
- **Accesibilidad:** ambos modos deben cumplir contraste WCAG AA (amarillo `#FFE600` siempre con texto negro encima).

## Experiencia de cambio

- `design-switcher` renderiza las opciones desde el registry.
- El cambio se envuelve en `document.startViewTransition()` → crossfade nativo (~400ms). Fallback: sin soporte o con `prefers-reduced-motion`, cambio instantáneo. El switcher solo setea `data-design` y persiste; no conoce los diseños.
- Anti-FOUC: script inline en `<head>` valida la key guardada contra los ids del registry (inyectados en build) y aplica `data-design` antes del primer paint.

## Contrato de especificidad de selectores

Detalle no obvio, ya vivido como bug real en Raw: `:root` y un atributo suelto como `[data-design="raw"]` empatan en especificidad CSS (0,1,0), y en un empate gana el selector que aparece después en el bundle — orden que no está garantizado entre builds. Por eso todo diseño nuevo debe seguir esta regla al escribir su `tokens.css`:

- **Bloque light:** siempre `:root[data-design="<id>"]` (especificidad (0,2,0)), nunca el atributo suelto `[data-design="<id>"]`. El prefijo `:root` es lo que garantiza ganarle al `:root` de Base pase lo que pase con el orden de imports.
- **Bloque dark:** siempre `:root[data-theme="dark"][data-design="<id>"]` (especificidad (0,3,0)), por el mismo motivo, y además debe redeclarar ahí todos los tokens del contrato que el dark de Base (`[data-theme="dark"]`) sobreescribe. Si un token queda sin redeclarar, el bloque light del propio diseño ((0,2,0), más específico que el dark de Base) gana y su valor claro se filtra al modo oscuro de ese diseño.
- `tests/design-contract.test.ts` vigila estructuralmente que ambos bloques usen la forma exacta con prefijo `:root` (comparación de string sobre el CSS fuente, no una evaluación real de la cascada). No sustituye la revisión visual: el dark mode de un diseño nuevo se sigue verificando a ojo en navegador.

## Testing

- `tests/designs-registry.test.ts` (reemplaza `brands-data.test.ts`): ids únicos, `defaultDesign` existe en el registry, manifests con campos completos.
- **Test de contrato:** verifica que `raw/tokens.css` define todos los tokens de la lista del contrato, y que sus bloques light/dark usan selectores con prefijo `:root` (ver "Contrato de especificidad de selectores"). Un diseño futuro que olvide un token, o que use un selector sin `:root`, rompe el test — el contrato se auto-vigila.
- `pnpm check` y `pnpm lint` limpios.
- **Revisión visual final obligatoria con el MCP de Chrome**, con ojo de UX/UI profesional: recorrer 2 diseños × 2 themes × 2 idiomas en vivo evaluando jerarquía tipográfica, contraste, espaciado, estados hover/focus, legibilidad y coherencia de cada piel. No es un smoke test — es crítica de diseño; los defectos encontrados se corrigen antes de dar por terminado.

## Limpieza

Se eliminan: `src/styles/tokens/brands.css`, `src/data/brands.ts`, `src/scripts/brand.ts`, `src/components/common/brand-switcher/`, keys i18n de brand, `tests/brands-data.test.ts`.

## Criterios de éxito

1. Base se ve idéntico a hoy (regresión visual cero).
2. Raw se percibe como un producto distinto: otra tipografía, otro color, otra textura, otro motion — mismo layout.
3. Cambiar de diseño es fluido (View Transition) y persiste entre visitas sin FOUC.
4. Agregar un diseño #3 hipotético requiere solo carpeta nueva + 1 línea en el registry, y el test de contrato lo vigila.
5. Ningún componente contiene referencia a diseño alguno.
