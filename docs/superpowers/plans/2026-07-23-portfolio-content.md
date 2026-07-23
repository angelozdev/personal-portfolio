# Portfolio Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Llenar el portafolio con el contenido real decidido en la entrevista (ver `me.md`): hero, proyectos, experiencia, skills, about y contacto, en inglés y español, y construir las cuatro secciones que hoy están vacías.

**Architecture:** Se respeta el patrón existente por sección — `<section>.astro` (contenedor que resuelve el locale) → `get-<section>-data.ts` (función pura que traduce claves a un objeto tipado) → `components/<section>-view.astro` (presentacional, recibe `data`). Los textos viven en `src/i18n/translations/{en,es}.ts`; los datos no traducibles (nombres de tecnologías) viven en `src/data/`. Se introduce Vitest para probar las funciones puras de datos y garantizar la paridad de claves entre los dos idiomas.

**Tech Stack:** Astro 5, TypeScript, CSS con custom properties, Biome, Vitest.

## Global Constraints

- **Formato:** tabs para indentar, comillas dobles, imports organizados (Biome). Se aplica a `**/*.ts`, `**/*.js`, `**/*.json`.
- **Sin comentarios.** No escribas comentarios en ningún archivo que crees o reescribas: ni `//`, ni `/* */`, ni `<!-- -->`, ni marcadores de sección en los archivos de traducción. El código se explica con nombres. Esto incluye los snippets de código que se muestran en las cards de proyecto: si un snippet necesita un comentario para entenderse, reescríbelo con mejores nombres. Los comentarios que ya existen en archivos que no reescribes (por ejemplo `src/layouts/layout.astro`) se dejan como están — quitarlos no es parte de este plan.
- **Exports:** `export default` para funciones y componentes (regla de `CLAUDE.md`). Los tipos se exportan con `export interface`.
- **CSS:** BEM (`.block__element--modifier`), estilos scoped por componente, **solo** design tokens existentes: `--space-*`, `--text-*`, `--font-sans|mono|normal|medium|bold`, `--leading-*`, `--tracking-*`, `--color-text`, `--color-text-muted`, `--color-bg`, `--color-bg-secondary`, `--color-border`, `--color-border-hover`, `--color-accent`, `--color-success`, `--radius-*`, `--transition-fast`. **No inventar tokens nuevos ni usar valores hardcodeados.** Excepción única: `src/styles/tokens/brands.css` (Task 11) redefine **valores** de tokens existentes por marca — ahí sí viven hexes nuevos, en ningún otro archivo.
- **i18n:** `TranslationKey = keyof typeof es` (`src/i18n/utils.ts:20`). El archivo **español es la fuente de verdad de las claves**: toda clave nueva debe existir en `es.ts` o el tipo no la reconoce. Ambos archivos deben tener exactamente el mismo conjunto de claves.
- **Español:** ortografía completa con tildes y `ñ`. Nunca sustituir caracteres acentuados por ASCII.
- **Reutilización:** usar los componentes de `src/components/common/` (`container`, `divider`, `link`, `badge`, `button`, `inline-list`, `code-snippet`) en vez de reimplementar markup.
- **Dependencias:** la única dependencia nueva permitida es `vitest` (devDependency).
- **Contenido:** todo el copy aprobado está en `me.md` §9. No inventar métricas, cifras ni logros que no estén ahí.
- **Verificación visual:** los pasos de verificación visual (Task 5 Step 7, Task 10 Step 5, Task 11 Step 11) **los ejecuta el agente con el MCP de Chrome** (`claude-in-chrome`), no el humano: levanta `pnpm dev`, abre `http://localhost:4321` y `/es/` en una pestaña nueva, recorre el checklist del paso (incluyendo viewport móvil, tema oscuro y las 4 marcas donde aplique) y adjunta capturas como evidencia antes de marcar el paso como completo.

---

## File Structure

```
src/
├── data/
│   ├── skills.ts                                    CREAR  — grupos de tecnologías (no traducible)
│   ├── brands.ts                                    CREAR  — marcas del switcher white-label
│   ├── stack.ts                                     sin cambios
│   └── metrics.ts                                   BORRAR — código muerto (nadie lo importa)
├── i18n/translations/
│   ├── en.ts                                        REESCRIBIR
│   └── es.ts                                        REESCRIBIR
├── components/sections/
│   ├── hero/get-hero-data.ts                        MODIFICAR — nuevas claves de métricas + nota white-label
│   ├── about/get-about-data.ts                      MODIFICAR — 5 párrafos, stat "apps"
│   ├── projects/
│   │   ├── get-projects-data.ts                     REESCRIBIR — modelo `media` unificado
│   │   └── components/
│   │       ├── projects-view.astro                  MODIFICAR — una sola grilla
│   │       ├── project-card.astro                   MODIFICAR — delega el medio
│   │       ├── project-media.astro                  CREAR — imagen o snippet
│   │       └── oss-card.astro                       BORRAR — absorbido por project-card
│   ├── skills/
│   │   ├── skills.astro                             REESCRIBIR — contenedor
│   │   ├── get-skills-data.ts                       CREAR
│   │   └── components/skills-view.astro             CREAR
│   ├── experience/
│   │   ├── experience.astro                         REESCRIBIR — contenedor
│   │   ├── get-experience-data.ts                   CREAR
│   │   └── components/
│   │       ├── experience-view.astro                CREAR
│   │       └── experience-entry.astro               CREAR
│   ├── contact/
│   │   ├── contact.astro                            REESCRIBIR — contenedor
│   │   ├── get-contact-data.ts                      CREAR
│   │   ├── copy-email-client.ts                     CREAR — script de cliente
│   │   └── components/
│   │       ├── contact-view.astro                   CREAR
│   │       └── copy-email-button.astro              CREAR
│   ├── header/components/desktop-nav.astro          MODIFICAR — montar brand switcher (Task 11)
│   ├── header/components/mobile-nav.astro           MODIFICAR — montar brand switcher (Task 11)
│   └── header/get-nav-items.ts                      MODIFICAR — orden de navegación
├── components/common/brand-switcher/                CREAR  — switcher de marca (Task 11)
├── scripts/brand.ts                                 CREAR  — aplicar y persistir la marca
├── styles/tokens/brands.css                         CREAR  — overrides de tokens por marca
├── layouts/layout.astro                             MODIFICAR — SEO, OG, JSON-LD, init de marca
└── pages/
    ├── index.astro                                  MODIFICAR — orden de secciones
    └── es/index.astro                               MODIFICAR — orden de secciones

tests/
├── i18n-parity.test.ts                              CREAR
├── brands-data.test.ts                              CREAR
├── projects-data.test.ts                            CREAR
├── skills-data.test.ts                              CREAR
├── experience-data.test.ts                          CREAR
└── contact-data.test.ts                             CREAR

vitest.config.ts                                     CREAR
```

**Por qué esta forma.** Cada sección es una unidad cerrada: su texto entra por i18n, su forma la decide un único getter tipado y su markup vive en un view que no sabe de traducciones. Un cambio de copy toca un archivo; un cambio de layout toca otro. Las cards de proyecto se unifican en un solo componente con un medio polimórfico (`image | code`) porque hoy hay dos componentes casi idénticos separados por una distinción — "open source" vs "producto" — que el contenido nuevo ya no respeta: el design system y el sistema de flags llevan snippet pero no son open source.

**Identidad visual (por qué este sitio no es el template de siempre).** Dos decisiones (`me.md` §8.25–26): (1) el sitio entero es una **demo white-label** — un switcher de marca en el header rebrandea todo el portafolio vía overrides de tokens, el mismo mecanismo de `data-theme`; el diseño se vuelve la prueba en vivo del logro que no se puede linkear (Task 11). (2) Acento de **documento técnico**: rótulos de sección numerados (`// 01 · projects`) y highlights de Experience como líneas de diff (`+` verde monoespaciado). El branding actual (IBM Plex, grises neutros, rótulos `//`) se conserva como marca default.

**Nota de deuda detectada (fuera de alcance, no tocar):** varios componentes usan `var(--font-semibold)`, que no está definido en `src/styles/tokens/typography.css` (solo existen `--font-normal`, `--font-medium`, `--font-bold`). Esas reglas hoy no aplican peso. **No lo arregles dentro de este plan** — cambia el aspecto de componentes existentes y merece su propia decisión. En los componentes nuevos usa solo pesos definidos.

Segunda deuda detectada: el script inline anti-FOUC del tema (`src/layouts/layout.astro:70-104`) lee `localStorage` crudo, pero `src/libs/storage.ts` guarda JSON-serializado (`"dark"` con comillas), así que la preferencia guardada nunca coincide en el primer paint y siempre cae al tema del sistema. **Tampoco lo arregles aquí** — el init de marca de la Task 11 sí parsea JSON para no heredar el bug.

**Assets que el humano debe entregar** (Task 9 los cablea; sin ellos el sitio compila pero muestra huecos):
`public/images/projects/quaestor.webp` · `public/images/projects/ubidots-mobile.webp` · `public/og.png` (1200×630) · `public/favicon.svg` · `public/cv.pdf`

---

## Task 1: Vitest y paridad de traducciones

Instala el runner y deja una red de seguridad para el resto del plan: las dos traducciones no pueden divergir. Esta tarea es infraestructura — su test pasa desde el primer momento y protege las nueve tareas siguientes. A partir de la Task 2 todo va red → green.

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Test: `tests/i18n-parity.test.ts`

**Interfaces:**
- Consumes: `src/i18n/translations/en.ts`, `src/i18n/translations/es.ts` (default exports, objetos planos).
- Produces: script `pnpm test`; el patrón de tests que usan las tareas siguientes.

- [ ] **Step 1: Instalar Vitest**

```bash
cd /Users/angelozdev/me/personal-portfolio
pnpm add -D vitest@3.2.4
```

- [ ] **Step 2: Añadir el script de test**

En `package.json`, dentro de `"scripts"`, añade la entrada `test` manteniendo el orden alfabético existente (queda entre `preview` y ninguno más, al final):

```json
		"preview": "astro preview",
		"test": "vitest run"
```

- [ ] **Step 3: Crear la configuración de Vitest**

Crea `vitest.config.ts`. Se usa `getViteConfig` de Astro para que los tests resuelvan igual que el build:

```ts
import { getViteConfig } from "astro/config";

export default getViteConfig({
	test: {
		include: ["tests/**/*.test.ts"],
	},
});
```

- [ ] **Step 4: Escribir el test de paridad**

Crea `tests/i18n-parity.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import en from "../src/i18n/translations/en";
import es from "../src/i18n/translations/es";

describe("i18n translations", () => {
	it("has the same keys in both locales", () => {
		const enKeys = Object.keys(en).sort();
		const esKeys = Object.keys(es).sort();

		expect(enKeys).toEqual(esKeys);
	});

	it("has no empty values", () => {
		const emptyEn = Object.entries(en).filter(([, value]) => value === "");
		const emptyEs = Object.entries(es).filter(([, value]) => value === "");

		expect(emptyEn).toEqual([]);
		expect(emptyEs).toEqual([]);
	});
});
```

- [ ] **Step 5: Ejecutar los tests**

Run: `pnpm test`
Expected: el primer test PASA (las claves ya coinciden). El segundo **FALLA**: hoy `about.stats.clients.value` es `""` en ambos idiomas (`en.ts:49`, `es.ts:49`). Ese es el fallo esperado y lo cierra la Task 3.

- [ ] **Step 6: Marcar temporalmente el test que aún no aplica**

El segundo test documenta deuda que cierra la Task 3. Para dejar la suite verde al terminar esta tarea, márcalo como pendiente. Reemplaza el archivo `tests/i18n-parity.test.ts` completo por:

```ts
import { describe, expect, it } from "vitest";
import en from "../src/i18n/translations/en";
import es from "../src/i18n/translations/es";

describe("i18n translations", () => {
	it("has the same keys in both locales", () => {
		const enKeys = Object.keys(en).sort();
		const esKeys = Object.keys(es).sort();

		expect(enKeys).toEqual(esKeys);
	});

	it.todo("has no empty values — re-enabled in Task 3");
});
```

- [ ] **Step 7: Verificar que la suite pasa**

Run: `pnpm test`
Expected: PASS — 1 test pasado, 1 pendiente.

- [ ] **Step 8: Lint y commit**

```bash
pnpm lint:fix
git add package.json pnpm-lock.yaml vitest.config.ts tests/i18n-parity.test.ts
git commit -m "test: add vitest and i18n key parity guard"
```

---

## Task 2: Hero, SEO y navegación

Reemplaza el titular que reclama un cargo inexistente y las métricas sin fuente. Borra `src/data/metrics.ts`, que nadie importa.

**Files:**
- Modify: `src/i18n/translations/en.ts:1-33`, `src/i18n/translations/es.ts:1-33`
- Modify: `src/components/sections/hero/get-hero-data.ts:24-30`
- Modify: `src/components/sections/header/get-nav-items.ts:11-17`
- Delete: `src/data/metrics.ts`

**Interfaces:**
- Consumes: `getTranslations(lang)` y `TranslationKey` de `src/i18n/utils.ts`.
- Produces: claves `metrics.whiteLabel`, `metrics.users`, `metrics.designSystem`, `metrics.ai`, `metrics.timezone`; `hero.title` actualizado. `getHeroData(lang): HeroData` mantiene su firma.

- [ ] **Step 1: Escribir el test del hero**

Crea `tests/hero-content.test.ts`. El tercer test usa `Object.keys(...).not.toContain(...)` en vez de `not.toHaveProperty(...)`: las claves llevan puntos y `toHaveProperty("metrics.cicd")` las leería como una ruta anidada, pasando aunque la clave plana siguiera ahí.

```ts
import { describe, expect, it } from "vitest";
import en from "../src/i18n/translations/en";
import es from "../src/i18n/translations/es";

describe("hero content", () => {
	it("does not claim a job title that does not exist on paper", () => {
		expect(en["hero.title"]).not.toContain("Team Lead");
		expect(es["hero.title"]).not.toContain("Team Lead");
	});

	it("exposes the five approved metrics", () => {
		const keys = [
			"metrics.whiteLabel",
			"metrics.users",
			"metrics.designSystem",
			"metrics.ai",
			"metrics.timezone",
		] as const;

		for (const key of keys) {
			expect(en[key]).toBeTruthy();
			expect(es[key]).toBeTruthy();
		}
	});

	it("drops the unsourced metrics", () => {
		const keys = Object.keys(en);

		expect(keys).not.toContain("metrics.cicd");
		expect(keys).not.toContain("metrics.testing");
		expect(keys).not.toContain("metrics.consulting");
	});

	it("claims one MCP server and no agents", () => {
		expect(en["metrics.ai"]).not.toContain("servers");
		expect(en["metrics.ai"]).not.toContain("agents");
		expect(es["metrics.ai"]).not.toContain("servidores");
		expect(es["metrics.ai"]).not.toContain("agentes");
	});
});
```

- [ ] **Step 2: Ejecutar el test para verificar que falla**

Run: `pnpm test tests/hero-content.test.ts`
Expected: FAIL — `hero.title` contiene "Mobile Team Lead" y no existen las claves `metrics.whiteLabel` ni las otras cuatro.

- [ ] **Step 3: Actualizar el bloque SEO + Hero + Metrics en inglés**

En `src/i18n/translations/en.ts`, reemplaza las líneas 1 a 29 (desde `export default {` hasta el cierre del bloque `// Metrics`) por:

```ts
export default {
	"seo.title": "Angelo Zambrano | Software Engineer — Frontend, Mobile & AI",
	"seo.description":
		"Software engineer with 5+ years building products used by tens of thousands of people. Design systems, React Native at scale, and AI-native tooling. Remote from Medellín, Colombia.",
	"seo.keywords":
		"Angelo Zambrano, Software Engineer, Frontend Engineer, AI Engineer, React, TypeScript, React Native, Design Systems, MCP, Python, Medellín, Colombia, LATAM, remote",

	"nav.about": "About",
	"nav.projects": "Projects",
	"nav.skills": "Skills",
	"nav.experience": "Experience",
	"nav.contact": "Contact",
	"nav.menu": "Menu",

	"hero.title": "Software Engineer · Frontend, Mobile & AI",
	"hero.cta.projects": "View projects",
	"hero.cta.contact": "Contact",

	"metrics.whiteLabel": "1 codebase → 10 white-label apps in production",
	"metrics.users": "50K+ users across iOS and Android",
	"metrics.designSystem": "Design system powering an entire IoT platform",
	"metrics.ai": "AI-native workflow: MCP server, tool calling, LLM tooling",
	"metrics.timezone": "Based in Colombia — full overlap with US time zones",
```

Los grupos se separan solo con una línea en blanco. Al reescribir cada bloque, borra también los marcadores `// SEO`, `// Nav`, `// Hero` y `// Metrics` que hay hoy en el archivo.

- [ ] **Step 4: Actualizar el mismo bloque en español**

En `src/i18n/translations/es.ts`, reemplaza las líneas 1 a 28 por:

```ts
export default {
	"seo.title": "Angelo Zambrano | Software Engineer — Frontend, Mobile & AI",
	"seo.description":
		"Ingeniero de software con +5 años construyendo productos que usan decenas de miles de personas. Design systems, React Native a escala y tooling AI-native. Remoto desde Medellín, Colombia.",
	"seo.keywords":
		"Angelo Zambrano, Software Engineer, Frontend Engineer, AI Engineer, React, TypeScript, React Native, Design Systems, MCP, Python, Medellín, Colombia, LATAM, remoto",

	"nav.about": "Acerca",
	"nav.projects": "Proyectos",
	"nav.skills": "Habilidades",
	"nav.experience": "Experiencia",
	"nav.contact": "Contacto",
	"nav.menu": "Menú",

	"hero.title": "Software Engineer · Frontend, Mobile & AI",
	"hero.cta.projects": "Ver proyectos",
	"hero.cta.contact": "Contactar",

	"metrics.whiteLabel": "1 base de código → 10 apps white-label en producción",
	"metrics.users": "50K+ usuarios en iOS y Android",
	"metrics.designSystem":
		"Design system que sostiene toda una plataforma IoT",
	"metrics.ai": "Flujo AI-native: servidor MCP, tool calling, tooling de LLMs",
	"metrics.timezone":
		"Desde Colombia — solapamiento total con husos horarios de USA",
```

- [ ] **Step 5: Apuntar el hero a las claves nuevas**

En `src/components/sections/hero/get-hero-data.ts`, reemplaza el array `metricsKeys` (líneas 24-30) por:

```ts
const metricsKeys: TranslationKey[] = [
	"metrics.whiteLabel",
	"metrics.ai",
	"metrics.users",
	"metrics.designSystem",
	"metrics.timezone",
];
```

- [ ] **Step 6: Reordenar la navegación**

El orden del menú debe seguir al de las secciones (`Projects → Experience → Skills → About → Contact`). En `src/components/sections/header/get-nav-items.ts`, reemplaza el `return` (líneas 11-17) por:

```ts
	return [
		{ href: `#${Sections.PROJECTS}`, label: t("nav.projects") },
		{ href: `#${Sections.EXPERIENCE}`, label: t("nav.experience") },
		{ href: `#${Sections.SKILLS}`, label: t("nav.skills") },
		{ href: `#${Sections.ABOUT}`, label: t("nav.about") },
		{ href: `#${Sections.CONTACT}`, label: t("nav.contact") },
	];
```

- [ ] **Step 7: Borrar el código muerto**

`src/data/metrics.ts` no lo importa nadie: las métricas se resuelven por claves de traducción.

```bash
rm src/data/metrics.ts
grep -rn "data/metrics" src/ || echo "sin referencias"
```

Expected: `sin referencias`

- [ ] **Step 8: Ejecutar tests y type check**

Run: `pnpm test && pnpm check`
Expected: PASS en los tres tests del hero y en la paridad; `astro check` sin errores.

- [ ] **Step 9: Lint y commit**

```bash
pnpm lint:fix
git add src/i18n/translations src/components/sections/hero src/components/sections/header tests/hero-content.test.ts
git rm src/data/metrics.ts
git commit -m "feat(hero): replace headline and metrics with approved copy"
```

---

## Task 3: About

Cinco párrafos (uno nuevo sobre el trabajo AI-native), el tercer stat pasa de vacío a `10 apps in production`, y la línea de disponibilidad queda neutra: modalidad y ubicación, sin señal pública de búsqueda que pueda leer el empleador actual.

**Files:**
- Modify: `src/i18n/translations/en.ts` (bloque `// About`), `src/i18n/translations/es.ts` (bloque `// About`)
- Modify: `src/components/sections/about/get-about-data.ts:26-33,42-55`
- Modify: `tests/i18n-parity.test.ts`
- Test: `tests/about-data.test.ts`

**Interfaces:**
- Consumes: `getTranslations`, `TranslationKey`, `Sections.ABOUT`.
- Produces: `getAboutData(lang): AboutData` con `paragraphs: string[]` de longitud 5 y `stats: Stat[]` de longitud 3, todos con `value` no vacío. Claves nuevas: `about.paragraph5`, `about.stats.apps.value`, `about.stats.apps.label`. Claves eliminadas: `about.stats.clients.value`, `about.stats.clients.label`.

- [ ] **Step 1: Escribir el test**

Crea `tests/about-data.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import getAboutData from "../src/components/sections/about/get-about-data";

describe("getAboutData", () => {
	it("returns five paragraphs", () => {
		const data = getAboutData("en");

		expect(data.paragraphs).toHaveLength(5);
		for (const paragraph of data.paragraphs) {
			expect(paragraph).not.toBe("");
		}
	});

	it("returns three stats, all with a value", () => {
		const data = getAboutData("en");

		expect(data.stats).toHaveLength(3);
		for (const stat of data.stats) {
			expect(stat.value).not.toBe("");
			expect(stat.label).not.toBe("");
		}
	});

	it("keeps availability neutral, with no job-seeking signal", () => {
		for (const lang of ["en", "es"]) {
			const label = getAboutData(lang).availability.label;

			expect(label).not.toContain("Open to");
			expect(label).not.toContain("Abierto");
			expect(label).not.toContain("projects");
			expect(label).not.toContain("proyectos");
		}
	});

	it("claims a model layer, not an agent layer", () => {
		expect(getAboutData("en").paragraphs[4]).not.toContain("agent layer");
		expect(getAboutData("es").paragraphs[4]).not.toContain("capa de agentes");
	});
});
```

- [ ] **Step 2: Ejecutar el test para verificar que falla**

Run: `pnpm test tests/about-data.test.ts`
Expected: FAIL — hay 4 párrafos, el tercer stat tiene `value` vacío y la disponibilidad dice "Available for remote projects".

- [ ] **Step 3: Reescribir el bloque About en inglés**

En `src/i18n/translations/en.ts`, reemplaza el bloque completo desde `"about.comment"` hasta `"about.availability"` — incluido el marcador `// About` que lo precede — por:

```ts
	"about.comment": "// 04 · about",
	"about.headline": "A bit about me",
	"about.paragraph1": "I'm a software engineer based in Medellín, Colombia.",
	"about.paragraph2":
		"I started out building e-commerce for agency clients. Then I led mobile development for an IoT platform, where I designed a white-label architecture that turns a single React Native codebase into ten independently branded apps — now used by more than 50,000 people to monitor their devices in real time. Along the way I built the design system that the entire platform runs on today.",
	"about.paragraph3":
		"These days I work across the stack: React and Django at Ubidots, and React, Next.js, Node and FastAPI on internal products for a US strategy consultancy.",
	"about.paragraph4":
		"What I enjoy most is understanding the why behind technical decisions. I'm not satisfied with something just working; I want to know why it works, and make sure whoever comes next can understand it without struggling.",
	"about.paragraph5":
		"Lately my work has gone AI-native — the team restructured around it, and I've been building with LLMs myself: an MCP server and a provider-agnostic model layer.",
	"about.stats.years.value": "5+",
	"about.stats.years.label": "years of experience",
	"about.stats.users.value": "50K+",
	"about.stats.users.label": "users in production",
	"about.stats.apps.value": "10",
	"about.stats.apps.label": "apps in production",
	"about.availability": "Remote · Medellín, Colombia (UTC−5)",
```

- [ ] **Step 4: Reescribir el bloque About en español**

En `src/i18n/translations/es.ts`, reemplaza el mismo bloque, marcador `// About` incluido, por:

```ts
	"about.comment": "// 04 · about",
	"about.headline": "Un poco sobre mí",
	"about.paragraph1": "Soy ingeniero de software en Medellín, Colombia.",
	"about.paragraph2":
		"Empecé construyendo e-commerce para clientes de una agencia. Después lideré el desarrollo móvil de una plataforma IoT, donde diseñé una arquitectura white-label que convierte una sola base de código React Native en diez apps con marca independiente — hoy las usan más de 50 mil personas para monitorear sus dispositivos en tiempo real. En el camino construí el design system sobre el que funciona toda la plataforma.",
	"about.paragraph3":
		"Hoy trabajo en todo el stack: React y Django en Ubidots, y React, Next.js, Node y FastAPI en productos internos para una consultora de estrategia en Estados Unidos.",
	"about.paragraph4":
		"Lo que más disfruto es entender el porqué detrás de las decisiones técnicas. No me conformo con que algo funcione; quiero saber por qué funciona, y asegurarme de que quien venga después pueda entenderlo sin sufrir.",
	"about.paragraph5":
		"Últimamente mi trabajo se volvió AI-native — el equipo se reorganizó alrededor de eso, y yo mismo he estado construyendo con LLMs: un servidor MCP y una capa de modelos agnóstica de proveedor.",
	"about.stats.years.value": "5+",
	"about.stats.years.label": "años de experiencia",
	"about.stats.users.value": "50K+",
	"about.stats.users.label": "usuarios en producción",
	"about.stats.apps.value": "10",
	"about.stats.apps.label": "apps en producción",
	"about.availability": "Remoto · Medellín, Colombia (UTC−5)",
```

- [ ] **Step 5: Actualizar el getter**

En `src/components/sections/about/get-about-data.ts`, reemplaza `statDefinitions` (líneas 26-33) por:

```ts
const statDefinitions: StatDefinition[] = [
	{ valueKey: "about.stats.years.value", labelKey: "about.stats.years.label" },
	{ valueKey: "about.stats.users.value", labelKey: "about.stats.users.label" },
	{ valueKey: "about.stats.apps.value", labelKey: "about.stats.apps.label" },
];
```

Y añade el quinto párrafo dentro del array `paragraphs` (líneas 42-47), después de `t("about.paragraph4")`:

```ts
		paragraphs: [
			t("about.paragraph1"),
			t("about.paragraph2"),
			t("about.paragraph3"),
			t("about.paragraph4"),
			t("about.paragraph5"),
		],
```

- [ ] **Step 6: Reactivar el test de valores vacíos**

En `tests/i18n-parity.test.ts`, sustituye la línea `it.todo(...)` por el test real:

```ts
	it("has no empty values", () => {
		const emptyEn = Object.entries(en).filter(([, value]) => value === "");
		const emptyEs = Object.entries(es).filter(([, value]) => value === "");

		expect(emptyEn).toEqual([]);
		expect(emptyEs).toEqual([]);
	});
```

- [ ] **Step 7: Ejecutar tests y type check**

Run: `pnpm test && pnpm check`
Expected: PASS en todo, incluido el test de valores vacíos que estaba pendiente.

- [ ] **Step 8: Lint y commit**

```bash
pnpm lint:fix
git add src/i18n/translations src/components/sections/about tests/
git commit -m "feat(about): rewrite copy, add AI-native paragraph and apps stat"
```

---

## Task 4: Unificar el modelo de tarjetas de proyecto

Hoy hay dos componentes casi idénticos (`project-card`, `oss-card`) separados por una distinción que el contenido nuevo rompe. Se sustituyen por una sola tarjeta cuyo medio es polimórfico: imagen o snippet de código. **Esta tarea solo cambia estructura; el contenido llega en la Task 5.**

**Files:**
- Modify: `src/components/sections/projects/get-projects-data.ts`
- Create: `src/components/sections/projects/components/project-media.astro`
- Modify: `src/components/sections/projects/components/project-card.astro:1-60`
- Modify: `src/components/sections/projects/components/projects-view.astro:1-58,88-128`
- Delete: `src/components/sections/projects/components/oss-card.astro`
- Test: `tests/projects-data.test.ts`

**Interfaces:**
- Consumes: `getTranslations`, `TranslationKey`, `Sections.PROJECTS`, `CodeSnippet` (`src/components/common/code-snippet.astro`).
- Produces:
  ```ts
  export type ProjectMedia =
  	| { type: "image"; src: string; alt: string }
  	| { type: "code"; snippet: string; language: string };

  export interface ProjectLink { label: string; url: string; external: boolean }

  export interface Project {
  	id: string;
  	name: string;
  	badge?: string;
  	description: string;
  	techStack: string[];
  	media: ProjectMedia;
  	links: ProjectLink[];
  	featured: boolean;
  }

  export interface ProjectsData {
  	sectionId: string;
  	commentLabel: string;
  	headline: string;
  	projects: Project[];
  }
  ```
  `getProjectsData(lang): ProjectsData` es el default export. Desaparecen `OSSProject` y `openSource`.

- [ ] **Step 1: Escribir el test del modelo**

Crea `tests/projects-data.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import getProjectsData from "../src/components/sections/projects/get-projects-data";

describe("getProjectsData", () => {
	it("returns a flat list of projects", () => {
		const data = getProjectsData("en");

		expect(Array.isArray(data.projects)).toBe(true);
		expect(data).not.toHaveProperty("openSource");
	});

	it("gives every project a media of a known type", () => {
		const data = getProjectsData("en");

		for (const project of data.projects) {
			expect(["image", "code"]).toContain(project.media.type);
		}
	});

	it("parses tech stack into an array", () => {
		const data = getProjectsData("en");

		for (const project of data.projects) {
			expect(project.techStack.length).toBeGreaterThan(0);
			for (const tech of project.techStack) {
				expect(tech).toBe(tech.trim());
			}
		}
	});
});
```

- [ ] **Step 2: Ejecutar el test para verificar que falla**

Run: `pnpm test tests/projects-data.test.ts`
Expected: FAIL — el objeto actual tiene `openSource` y los proyectos no tienen `media`.

- [ ] **Step 3: Reescribir el getter con el modelo nuevo**

Reemplaza el contenido completo de `src/components/sections/projects/get-projects-data.ts` por:

```ts
import { Sections } from "../../../constants/sections";
import { getTranslations, type TranslationKey } from "../../../i18n/utils";

export type ProjectMedia =
	| { type: "image"; src: string; alt: string }
	| { type: "code"; snippet: string; language: string };

export interface ProjectLink {
	label: string;
	url: string;
	external: boolean;
}

export interface Project {
	id: string;
	name: string;
	badge?: string;
	description: string;
	techStack: string[];
	media: ProjectMedia;
	links: ProjectLink[];
	featured: boolean;
}

export interface ProjectsData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	projects: Project[];
}

interface ProjectDefinition {
	id: string;
	prefix: string;
	featured: boolean;
	hasBadge: boolean;
	media: { kind: "image"; src: string } | { kind: "code"; language: string };
	linkCount: number;
}

const projectDefinitions: ProjectDefinition[] = [];

export default function getProjectsData(lang: string): ProjectsData {
	const t = getTranslations(lang);

	const parseTechStack = (prefix: string): string[] =>
		t(`${prefix}.techStack` as TranslationKey)
			.split(",")
			.map((tech) => tech.trim())
			.filter(Boolean);

	const buildLinks = (prefix: string, count: number): ProjectLink[] =>
		Array.from({ length: count }, (_, index) => ({
			label: t(`${prefix}.links.${index}.label` as TranslationKey),
			url: t(`${prefix}.links.${index}.url` as TranslationKey),
			external: true,
		}));

	const buildMedia = (definition: ProjectDefinition): ProjectMedia =>
		definition.media.kind === "image"
			? {
					type: "image",
					src: definition.media.src,
					alt: t(`${definition.prefix}.imageAlt` as TranslationKey),
				}
			: {
					type: "code",
					snippet: t(`${definition.prefix}.codeSnippet` as TranslationKey),
					language: definition.media.language,
				};

	return {
		sectionId: Sections.PROJECTS,
		commentLabel: t("projects.comment"),
		headline: t("projects.headline"),
		projects: projectDefinitions.map((definition) => ({
			id: definition.id,
			name: t(`${definition.prefix}.name` as TranslationKey),
			badge: definition.hasBadge
				? t(`${definition.prefix}.badge` as TranslationKey)
				: undefined,
			description: t(`${definition.prefix}.description` as TranslationKey),
			techStack: parseTechStack(definition.prefix),
			media: buildMedia(definition),
			links: buildLinks(definition.prefix, definition.linkCount),
			featured: definition.featured,
		})),
	};
}
```

`projectDefinitions` queda vacío a propósito: lo llena la Task 5 junto con sus claves de traducción.

- [ ] **Step 4: Crear el componente de medio**

Crea `src/components/sections/projects/components/project-media.astro`:

```astro
---
import CodeSnippet from "../../../common/code-snippet.astro";
import type { ProjectMedia } from "../get-projects-data";

interface Props {
  media: ProjectMedia;
}

const { media } = Astro.props;
---

{
  media.type === "image" ? (
    <div class="project-media project-media--image">
      <img
        src={media.src}
        alt={media.alt}
        class="project-media__image"
        loading="lazy"
      />
    </div>
  ) : (
    <div class="project-media project-media--code">
      <CodeSnippet code={media.snippet} language={media.language} />
    </div>
  )
}

<style>
  .project-media--image {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background-color: var(--color-bg);
  }

  .project-media__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-media--code {
    display: flex;
    align-items: center;
    padding: var(--space-6);
    background-color: var(--color-bg);
  }

  @container (min-width: 640px) {
    .project-media--image {
      aspect-ratio: 4 / 3;
      height: 100%;
    }
  }
</style>
```

- [ ] **Step 5: Apuntar la tarjeta al componente de medio**

En `src/components/sections/projects/components/project-card.astro`, reemplaza el frontmatter y el bloque de imagen (líneas 1-34) por:

```astro
---
import { ExternalLink } from "lucide-astro";
import Badge from "../../../common/badge.astro";
import InlineList from "../../../common/inline-list.astro";
import Link from "../../../common/link.astro";
import ProjectMediaView from "./project-media.astro";
import type { Project } from "../get-projects-data";

interface Props {
  project: Project;
}

const { project } = Astro.props;
---

<div class="project-card-container">
  <article class="project-card">
    <ProjectMediaView media={project.media} />
```

Y en el bloque `<style>`, borra las reglas `.project-card__image-wrapper`, `.project-card__image` y `.project-card:hover .project-card__image` (líneas 81-97 del archivo original) junto con la regla `.project-card__image-wrapper` dentro del `@container` — esos estilos ahora viven en `project-media.astro`.

- [ ] **Step 6: Simplificar la vista de proyectos**

En `src/components/sections/projects/components/projects-view.astro`, reemplaza el frontmatter y el markup (líneas 1-58) por:

```astro
---
import Container from "../../../common/container.astro";
import ProjectCard from "./project-card.astro";
import type { ProjectsData } from "../get-projects-data";

interface Props {
  data: ProjectsData;
}

const { data } = Astro.props;
---

<section class="projects" id={data.sectionId}>
  <Container>
    <div class="projects__content">
      <p class="projects__comment">{data.commentLabel}</p>
      <h2 class="projects__headline">{data.headline}</h2>

      <div class="projects__grid">
        {
          data.projects.map((project) => (
            <div
              class:list={[
                "projects__item",
                { "projects__item--featured": project.featured },
              ]}
            >
              <ProjectCard project={project} />
            </div>
          ))
        }
      </div>
    </div>
  </Container>
</section>
```

En el `<style>`, borra las reglas `.projects__oss-grid` y `.projects__oss-item--featured` (tanto en el bloque principal como dentro del `@media`). El resto de estilos se mantiene.

- [ ] **Step 7: Borrar el componente absorbido**

```bash
rm src/components/sections/projects/components/oss-card.astro
grep -rn "oss-card" src/ || echo "sin referencias"
```

Expected: `sin referencias`

- [ ] **Step 8: Ejecutar tests y type check**

Run: `pnpm test && pnpm check`
Expected: PASS. Los tres tests de `projects-data` pasan con la lista vacía; `astro check` sin errores.

- [ ] **Step 9: Lint y commit**

```bash
pnpm lint:fix
git add src/components/sections/projects tests/projects-data.test.ts
git rm src/components/sections/projects/components/oss-card.astro
git commit -m "refactor(projects): unify cards behind a polymorphic media model"
```

---

## Task 5: Contenido de los cinco proyectos

Llena el shortlist aprobado y elimina los links placeholder (`example.com`, `github.com`, `npmjs.com`).

**Files:**
- Modify: `src/i18n/translations/en.ts` (bloque `// Projects` completo), `src/i18n/translations/es.ts` (bloque `// Projects` completo)
- Modify: `src/components/sections/projects/get-projects-data.ts` (`projectDefinitions`)
- Modify: `tests/projects-data.test.ts`

**Interfaces:**
- Consumes: `ProjectDefinition`, `ProjectsData` de la Task 4.
- Produces: cinco proyectos con ids `quaestor`, `ubidotsMobile`, `designSystem`, `keystoneFlags`, `ossLibraries`, en ese orden.

- [ ] **Step 1: Añadir los tests de contenido**

Añade a `tests/projects-data.test.ts`, dentro del `describe` existente:

```ts
	it("ships the five approved projects in order", () => {
		const data = getProjectsData("en");

		expect(data.projects.map((project) => project.id)).toEqual([
			"quaestor",
			"ubidotsMobile",
			"designSystem",
			"keystoneFlags",
			"ossLibraries",
		]);
	});

	it("has no placeholder links", () => {
		const placeholders = ["example.com", "https://github.com", "https://npmjs.com"];

		for (const lang of ["en", "es"]) {
			for (const project of getProjectsData(lang).projects) {
				for (const link of project.links) {
					expect(placeholders).not.toContain(link.url);
					expect(link.url.startsWith("https://")).toBe(true);
				}
			}
		}
	});
```

- [ ] **Step 2: Ejecutar los tests para verificar que fallan**

Run: `pnpm test tests/projects-data.test.ts`
Expected: FAIL — `projects` está vacío, así que el test de orden falla.

- [ ] **Step 3: Escribir el bloque Projects en inglés**

En `src/i18n/translations/en.ts`, reemplaza todo desde `// Projects` hasta el final del archivo (justo antes de `} as const;`) por:

```ts
	"projects.comment": "// 01 · projects",
	"projects.headline": "Some things I've built",

	"projects.quaestor.name": "Quaestor",
	"projects.quaestor.badge": "PERSONAL",
	"projects.quaestor.description":
		"Local-first personal finance backend with an agent-native MCP layer. A chat that answers questions about your own data by calling your own tools, with a provider-agnostic LLM layer. Built AI-assisted in ~3 weeks; in daily use.",
	"projects.quaestor.techStack":
		"Python, FastAPI, MCP, LiteLLM, Next.js, Docker",
	"projects.quaestor.imageAlt":
		"Quaestor chat answering a question about sample finance data",
	"projects.quaestor.links.0.label": "GitHub",
	"projects.quaestor.links.0.url": "https://github.com/angelozdev/quaestor",

	"projects.ubidotsMobile.name": "Ubidots Mobile",
	"projects.ubidotsMobile.badge": "PRODUCT",
	"projects.ubidotsMobile.description":
		"One React Native codebase, ten independently branded apps shipping to both stores with their own pipelines. 50K+ users monitoring IoT devices in real time.",
	"projects.ubidotsMobile.techStack": "React Native, TypeScript, Firebase",
	"projects.ubidotsMobile.imageAlt":
		"Ubidots Mobile app running on iOS and Android",
	"projects.ubidotsMobile.links.0.label": "App Store",
	"projects.ubidotsMobile.links.0.url":
		"https://apps.apple.com/app/ubidots/id1190666194",
	"projects.ubidotsMobile.links.1.label": "Play Store",
	"projects.ubidotsMobile.links.1.url":
		"https://play.google.com/store/apps/details?id=com.ubidots.ubidots",

	"projects.designSystem.name": "Ubidots Design System",
	"projects.designSystem.description":
		"The design system the entire Ubidots platform runs on — ~25 components on Radix primitives, CSS-variable tokens, and a 3-layer component spec. Built solo; every new feature ships on it.",
	"projects.designSystem.techStack":
		"TypeScript, React, Radix, Storybook, a11y",
	"projects.designSystem.codeSnippet":
		"export default function DatePicker(props: DatePickerProps) {\n  const state = useDatePickerLogic(props);\n\n  return <DatePickerView {...state} />;\n}",

	"projects.keystoneFlags.name": "Role & Feature Flag System",
	"projects.keystoneFlags.badge": "KEYSTONE",
	"projects.keystoneFlags.description":
		"A custom authorization layer spanning three internal applications: ~10 roles, ~30 flags, own admin UI. Built in a week after evaluating off-the-shelf options.",
	"projects.keystoneFlags.techStack":
		"React, Next.js, Node.js, FastAPI",
	"projects.keystoneFlags.codeSnippet":
		'const { can } = useFlags();\n\nif (!can("billing.invoice.approve")) {\n  return <Forbidden />;\n}',

	"projects.ossLibraries.name": "rustify-ts · chrono-convert",
	"projects.ossLibraries.badge": "OPEN SOURCE",
	"projects.ossLibraries.description":
		"Rust's Result and Option types brought to TypeScript, and a chainable time-conversion library running in production in an app with 50K+ users.",
	"projects.ossLibraries.techStack": "TypeScript",
	"projects.ossLibraries.codeSnippet":
		"const user = await findUser(id);\nif (user.isOk()) render(user.unwrap());\n\nconst timeoutInMinutes = chrono(2).hours().toMinutes();",
	"projects.ossLibraries.links.0.label": "rustify-ts",
	"projects.ossLibraries.links.0.url":
		"https://www.npmjs.com/package/rustify-ts",
	"projects.ossLibraries.links.1.label": "chrono-convert",
	"projects.ossLibraries.links.1.url":
		"https://www.npmjs.com/package/chrono-convert",
```

- [ ] **Step 4: Escribir el bloque Projects en español**

En `src/i18n/translations/es.ts`, reemplaza todo desde `// Projects` hasta antes de `} as const;` por:

```ts
	"projects.comment": "// 01 · proyectos",
	"projects.headline": "Algunas cosas que he construido",

	"projects.quaestor.name": "Quaestor",
	"projects.quaestor.badge": "PERSONAL",
	"projects.quaestor.description":
		"Backend de finanzas personales local-first con una capa MCP agent-native. Un chat que responde sobre tus propios datos llamando a tus propias tools, con una capa de LLM agnóstica de proveedor. Construido con asistencia de IA en ~3 semanas; en uso diario.",
	"projects.quaestor.techStack":
		"Python, FastAPI, MCP, LiteLLM, Next.js, Docker",
	"projects.quaestor.imageAlt":
		"Chat de Quaestor respondiendo una pregunta sobre datos financieros de ejemplo",
	"projects.quaestor.links.0.label": "GitHub",
	"projects.quaestor.links.0.url": "https://github.com/angelozdev/quaestor",

	"projects.ubidotsMobile.name": "Ubidots Mobile",
	"projects.ubidotsMobile.badge": "PRODUCTO",
	"projects.ubidotsMobile.description":
		"Una sola base de código React Native, diez apps con marca y despliegue independientes en ambas tiendas. 50K+ usuarios monitoreando dispositivos IoT en tiempo real.",
	"projects.ubidotsMobile.techStack": "React Native, TypeScript, Firebase",
	"projects.ubidotsMobile.imageAlt":
		"App Ubidots Mobile corriendo en iOS y Android",
	"projects.ubidotsMobile.links.0.label": "App Store",
	"projects.ubidotsMobile.links.0.url":
		"https://apps.apple.com/app/ubidots/id1190666194",
	"projects.ubidotsMobile.links.1.label": "Play Store",
	"projects.ubidotsMobile.links.1.url":
		"https://play.google.com/store/apps/details?id=com.ubidots.ubidots",

	"projects.designSystem.name": "Design System de Ubidots",
	"projects.designSystem.description":
		"El design system sobre el que funciona toda la plataforma de Ubidots — ~25 componentes sobre primitivas de Radix, tokens en variables CSS y una especificación de 3 capas por componente. Construido en solitario; todo lo nuevo sale con él.",
	"projects.designSystem.techStack":
		"TypeScript, React, Radix, Storybook, a11y",
	"projects.designSystem.codeSnippet":
		"export default function DatePicker(props: DatePickerProps) {\n  const state = useDatePickerLogic(props);\n\n  return <DatePickerView {...state} />;\n}",

	"projects.keystoneFlags.name": "Sistema de roles y feature flags",
	"projects.keystoneFlags.badge": "KEYSTONE",
	"projects.keystoneFlags.description":
		"Capa de autorización propia, transversal a tres aplicaciones internas: ~10 roles, ~30 flags y UI de administración propia. Construida en una semana tras evaluar alternativas de mercado.",
	"projects.keystoneFlags.techStack":
		"React, Next.js, Node.js, FastAPI",
	"projects.keystoneFlags.codeSnippet":
		'const { can } = useFlags();\n\nif (!can("billing.invoice.approve")) {\n  return <Forbidden />;\n}',

	"projects.ossLibraries.name": "rustify-ts · chrono-convert",
	"projects.ossLibraries.badge": "CÓDIGO ABIERTO",
	"projects.ossLibraries.description":
		"Los tipos Result y Option de Rust llevados a TypeScript, y una librería de conversión de tiempo encadenable que corre en producción en una app con 50K+ usuarios.",
	"projects.ossLibraries.techStack": "TypeScript",
	"projects.ossLibraries.codeSnippet":
		"const user = await findUser(id);\nif (user.isOk()) render(user.unwrap());\n\nconst timeoutInMinutes = chrono(2).hours().toMinutes();",
	"projects.ossLibraries.links.0.label": "rustify-ts",
	"projects.ossLibraries.links.0.url":
		"https://www.npmjs.com/package/rustify-ts",
	"projects.ossLibraries.links.1.label": "chrono-convert",
	"projects.ossLibraries.links.1.url":
		"https://www.npmjs.com/package/chrono-convert",
```

- [ ] **Step 5: Registrar los cinco proyectos**

En `src/components/sections/projects/get-projects-data.ts`, reemplaza `const projectDefinitions: ProjectDefinition[] = [];` por:

```ts
const projectDefinitions: ProjectDefinition[] = [
	{
		id: "quaestor",
		prefix: "projects.quaestor",
		featured: true,
		hasBadge: true,
		media: { kind: "image", src: "/images/projects/quaestor.webp" },
		linkCount: 1,
	},
	{
		id: "ubidotsMobile",
		prefix: "projects.ubidotsMobile",
		featured: false,
		hasBadge: true,
		media: { kind: "image", src: "/images/projects/ubidots-mobile.webp" },
		linkCount: 2,
	},
	{
		id: "designSystem",
		prefix: "projects.designSystem",
		featured: false,
		hasBadge: false,
		media: { kind: "code", language: "tsx" },
		linkCount: 0,
	},
	{
		id: "keystoneFlags",
		prefix: "projects.keystoneFlags",
		featured: false,
		hasBadge: true,
		media: { kind: "code", language: "tsx" },
		linkCount: 0,
	},
	{
		id: "ossLibraries",
		prefix: "projects.ossLibraries",
		featured: false,
		hasBadge: true,
		media: { kind: "code", language: "typescript" },
		linkCount: 2,
	},
];
```

- [ ] **Step 6: Ejecutar tests y type check**

Run: `pnpm test && pnpm check`
Expected: PASS — cinco proyectos en orden, sin links placeholder, paridad de claves intacta.

- [ ] **Step 7: Verificar visualmente**

```bash
pnpm dev
```

Abre `http://localhost:4321` y `http://localhost:4321/es/`. La sección Projects todavía no se renderiza (está comentada en las páginas; se activa en la Task 10). Confirma solo que el dev server arranca sin errores y detén el proceso.

- [ ] **Step 8: Lint y commit**

```bash
pnpm lint:fix
git add src/i18n/translations src/components/sections/projects tests/projects-data.test.ts
git commit -m "feat(projects): add the five approved project cards"
```

---

## Task 6: Sección Skills

Construye la sección desde cero siguiendo el patrón de secciones. Los nombres de tecnologías no se traducen; solo los títulos de grupo.

**Files:**
- Create: `src/data/skills.ts`
- Create: `src/components/sections/skills/get-skills-data.ts`
- Create: `src/components/sections/skills/components/skills-view.astro`
- Modify: `src/components/sections/skills/skills.astro` (reescritura completa)
- Modify: `src/i18n/translations/en.ts`, `src/i18n/translations/es.ts`
- Test: `tests/skills-data.test.ts`

**Interfaces:**
- Consumes: `getTranslations`, `TranslationKey`, `Sections.SKILLS`, `Container`.
- Produces:
  ```ts
  export interface SkillGroup { id: string; title: string; items: string[] }
  export interface SkillsData {
  	sectionId: string;
  	commentLabel: string;
  	headline: string;
  	groups: SkillGroup[];
  }
  ```
  `getSkillsData(lang): SkillsData` (default export). `src/data/skills.ts` exporta `skillGroups: { id: string; items: string[] }[]` como named export, igual que `stack` en `src/data/stack.ts`.

- [ ] **Step 1: Escribir el test**

Crea `tests/skills-data.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import getSkillsData from "../src/components/sections/skills/get-skills-data";

describe("getSkillsData", () => {
	it("returns the seven groups in strength order", () => {
		const data = getSkillsData("en");

		expect(data.groups.map((group) => group.id)).toEqual([
			"frontend",
			"mobile",
			"backend",
			"ai",
			"data",
			"testing",
			"devops",
		]);
	});

	it("gives every group a translated title and at least one item", () => {
		const data = getSkillsData("en");

		for (const group of data.groups) {
			expect(group.title).not.toBe("");
			expect(group.title).not.toContain("skills.");
			expect(group.items.length).toBeGreaterThan(0);
		}
	});

	it("leaves out technologies that cannot be defended in an interview", () => {
		const allItems = getSkillsData("en").groups.flatMap((group) => group.items);

		expect(allItems).not.toContain("Rust");
		expect(allItems).not.toContain("Swift");
	});
});
```

- [ ] **Step 2: Ejecutar el test para verificar que falla**

Run: `pnpm test tests/skills-data.test.ts`
Expected: FAIL — `Cannot find module '.../skills/get-skills-data'`.

- [ ] **Step 3: Crear el fixture de tecnologías**

Crea `src/data/skills.ts`:

```ts
export const skillGroups = [
	{
		id: "frontend",
		items: [
			"TypeScript",
			"React",
			"Next.js",
			"Astro",
			"CSS architecture",
			"Design tokens",
			"Radix",
			"Storybook",
			"Accessibility (WCAG)",
		],
	},
	{
		id: "mobile",
		items: [
			"React Native",
			"iOS schemes",
			"Android flavors",
			"App Store & Play Store releases",
			"Push notifications",
		],
	},
	{
		id: "backend",
		items: ["Python", "FastAPI", "Django", "Node.js", "REST APIs"],
	},
	{
		id: "ai",
		items: [
			"LiteLLM",
			"MCP servers",
			"Tool calling",
			"Claude Code",
			"Spec-driven development",
		],
	},
	{
		id: "data",
		items: ["SQL", "PostgreSQL", "MongoDB", "Firebase", "ORMs", "Alembic"],
	},
	{
		id: "testing",
		items: [
			"Vitest",
			"Jest",
			"Testing Library",
			"pytest",
			"Storybook tests",
			"Accessibility tests",
			"Sentry",
		],
	},
	{
		id: "devops",
		items: [
			"Docker",
			"Docker Compose",
			"GitHub Actions",
			"Bitbucket Pipelines",
			"CI/CD",
		],
	},
];
```

- [ ] **Step 4: Añadir las claves de traducción**

En `src/i18n/translations/en.ts`, justo antes de la clave `"projects.comment"`, inserta:

```ts
	"skills.comment": "// 03 · skills",
	"skills.headline": "What I work with",
	"skills.group.frontend": "Frontend",
	"skills.group.mobile": "Mobile",
	"skills.group.backend": "Backend",
	"skills.group.ai": "AI & Tooling",
	"skills.group.data": "Data",
	"skills.group.testing": "Testing & Quality",
	"skills.group.devops": "DevOps",
```

En `src/i18n/translations/es.ts`, en la misma posición:

```ts
	"skills.comment": "// 03 · skills",
	"skills.headline": "Con qué trabajo",
	"skills.group.frontend": "Frontend",
	"skills.group.mobile": "Mobile",
	"skills.group.backend": "Backend",
	"skills.group.ai": "IA y tooling",
	"skills.group.data": "Datos",
	"skills.group.testing": "Testing y calidad",
	"skills.group.devops": "DevOps",
```

- [ ] **Step 5: Crear el getter**

Crea `src/components/sections/skills/get-skills-data.ts`:

```ts
import { Sections } from "../../../constants/sections";
import { skillGroups } from "../../../data/skills";
import { getTranslations, type TranslationKey } from "../../../i18n/utils";

export interface SkillGroup {
	id: string;
	title: string;
	items: string[];
}

export interface SkillsData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	groups: SkillGroup[];
}

export default function getSkillsData(lang: string): SkillsData {
	const t = getTranslations(lang);

	return {
		sectionId: Sections.SKILLS,
		commentLabel: t("skills.comment"),
		headline: t("skills.headline"),
		groups: skillGroups.map((group) => ({
			id: group.id,
			title: t(`skills.group.${group.id}` as TranslationKey),
			items: group.items,
		})),
	};
}
```

- [ ] **Step 6: Ejecutar el test para verificar que pasa**

Run: `pnpm test tests/skills-data.test.ts`
Expected: PASS — los tres tests.

- [ ] **Step 7: Crear la vista**

Crea `src/components/sections/skills/components/skills-view.astro`:

```astro
---
import Container from "../../../common/container.astro";
import InlineList from "../../../common/inline-list.astro";
import type { SkillsData } from "../get-skills-data";

interface Props {
  data: SkillsData;
}

const { data } = Astro.props;
---

<section class="skills" id={data.sectionId}>
  <Container>
    <div class="skills__content">
      <p class="skills__comment">{data.commentLabel}</p>
      <h2 class="skills__headline">{data.headline}</h2>

      <dl class="skills__groups">
        {
          data.groups.map((group) => (
            <div class="skills__group">
              <dt class="skills__group-title">{group.title}</dt>
              <dd class="skills__group-items">
                <InlineList items={group.items} />
              </dd>
            </div>
          ))
        }
      </dl>
    </div>
  </Container>
</section>

<style>
  .skills {
    padding: var(--space-20) var(--space-0);
  }

  .skills__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  .skills__comment {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin: var(--space-0);
  }

  .skills__headline {
    font-family: var(--font-sans);
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    color: var(--color-text);
    margin: var(--space-0);
  }

  .skills__groups {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    margin: var(--space-0);
  }

  .skills__group {
    display: grid;
    grid-template-columns: 12rem 1fr;
    gap: var(--space-4);
    align-items: baseline;
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--color-border);
  }

  .skills__group:last-child {
    padding-bottom: var(--space-0);
    border-bottom: none;
  }

  .skills__group-title {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--color-text);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
  }

  .skills__group-items {
    margin: var(--space-0);
  }

  @media (max-width: 768px) {
    .skills__headline {
      font-size: var(--text-2xl);
    }

    .skills__group {
      grid-template-columns: 1fr;
      gap: var(--space-2);
    }
  }
</style>
```

- [ ] **Step 8: Reescribir el contenedor de sección**

Reemplaza el contenido completo de `src/components/sections/skills/skills.astro` por:

```astro
---
import SkillsView from "./components/skills-view.astro";
import getSkillsData from "./get-skills-data";
import { defaultLocale } from "../../../i18n/utils";

const skillsData = getSkillsData(Astro.currentLocale ?? defaultLocale);
---

<SkillsView data={skillsData} />
```

- [ ] **Step 9: Ejecutar tests y type check**

Run: `pnpm test && pnpm check`
Expected: PASS en todo.

- [ ] **Step 10: Lint y commit**

```bash
pnpm lint:fix
git add src/data/skills.ts src/components/sections/skills src/i18n/translations tests/skills-data.test.ts
git commit -m "feat(skills): build skills section grouped by category"
```

---

## Task 7: Sección Experience

Tres entradas: Ubidots (una sola, sin títulos inventados), Keystone marcada como *Contract*, y GradiWeb en una línea. Los highlights se pintan como líneas de diff — marcador `+` monoespaciado en verde en lugar de viñetas: el acento "documento técnico" del sitio.

**Files:**
- Create: `src/components/sections/experience/get-experience-data.ts`
- Create: `src/components/sections/experience/components/experience-view.astro`
- Create: `src/components/sections/experience/components/experience-entry.astro`
- Modify: `src/components/sections/experience/experience.astro` (reescritura completa)
- Modify: `src/i18n/translations/en.ts`, `src/i18n/translations/es.ts`
- Test: `tests/experience-data.test.ts`

**Interfaces:**
- Consumes: `getTranslations`, `TranslationKey`, `Sections.EXPERIENCE`, `Container`, `Badge`.
- Produces:
  ```ts
  export interface ExperienceEntry {
  	id: string;
  	role: string;
  	company: string;
  	location: string;
  	period: string;
  	badge?: string;
  	highlights: string[];
  }
  export interface ExperienceData {
  	sectionId: string;
  	commentLabel: string;
  	headline: string;
  	entries: ExperienceEntry[];
  }
  ```
  `getExperienceData(lang): ExperienceData` (default export).

- [ ] **Step 1: Escribir el test**

Crea `tests/experience-data.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import getExperienceData from "../src/components/sections/experience/get-experience-data";

describe("getExperienceData", () => {
	it("lists the three roles, most recent first", () => {
		const data = getExperienceData("en");

		expect(data.entries.map((entry) => entry.id)).toEqual([
			"ubidots",
			"keystone",
			"gradiweb",
		]);
	});

	it("labels the keystone role as a contract", () => {
		const keystone = getExperienceData("en").entries.find(
			(entry) => entry.id === "keystone",
		);

		expect(keystone?.badge).toBe("CONTRACT");
	});

	it("never claims a mobile team lead title", () => {
		for (const lang of ["en", "es"]) {
			for (const entry of getExperienceData(lang).entries) {
				expect(entry.role).not.toContain("Team Lead");
			}
		}
	});

	it("gives every entry highlights", () => {
		for (const entry of getExperienceData("en").entries) {
			expect(entry.highlights.length).toBeGreaterThan(0);
			for (const highlight of entry.highlights) {
				expect(highlight).not.toBe("");
			}
		}
	});
});
```

- [ ] **Step 2: Ejecutar el test para verificar que falla**

Run: `pnpm test tests/experience-data.test.ts`
Expected: FAIL — `Cannot find module '.../experience/get-experience-data'`.

- [ ] **Step 3: Añadir las claves en inglés**

En `src/i18n/translations/en.ts`, justo antes de la clave `"skills.comment"`, inserta:

```ts
	"experience.comment": "// 02 · experience",
	"experience.headline": "Where I've worked",

	"experience.ubidots.role": "Software Engineer",
	"experience.ubidots.company": "Ubidots",
	"experience.ubidots.location": "Medellín, Colombia",
	"experience.ubidots.period": "2021 — Present",
	"experience.ubidots.highlight1":
		"Built the platform's design system solo — ~25 components on Radix primitives, CSS-variable tokens, a 3-layer component spec and accessibility tests. Every new feature ships on it.",
	"experience.ubidots.highlight2":
		"Architected the white-label mobile system: one React Native codebase, ten branded apps with independent pipelines and store listings. 50K+ users, no critical crashes.",
	"experience.ubidots.highlight3":
		"Technical lead for mobile — architecture, code review and onboarding for a rotating team of up to 4 engineers, as the sole full-time mobile engineer.",
	"experience.ubidots.highlight4":
		"Shipped Incidents and Escalation Policies end to end — spec, React frontend, Django backend, testing, QA and delivery — after the team restructured around AI-native, vertical-slice ownership.",
	"experience.ubidots.highlight5":
		"Built multi-layer dashboards, a widget-replication system, and the frontends for the Functions editor and the AI chat and agents experience.",

	"experience.keystone.role": "Software Engineer",
	"experience.keystone.company": "Keystone Strategy",
	"experience.keystone.location": "Remote · United States",
	"experience.keystone.period": "2025 — Present",
	"experience.keystone.badge": "CONTRACT",
	"experience.keystone.highlight1":
		"Full-stack across three interconnected internal applications on a shared API gateway and database, for a strategy consultancy serving Fortune 500 clients.",
	"experience.keystone.highlight2":
		"Designed a custom role and feature-flag system spanning all three apps — ~10 roles, ~30 flags, purpose-built admin UI — delivered in a week after a build-vs-buy evaluation.",
	"experience.keystone.highlight3":
		"Own the firm's time-tracking and billing application across frontend and backend.",
	"experience.keystone.highlight4":
		"Own critical error triage via Sentry across frontend and backend.",

	"experience.gradiweb.role": "Frontend Developer",
	"experience.gradiweb.company": "GradiWeb",
	"experience.gradiweb.location": "Bogotá, Colombia",
	"experience.gradiweb.period": "2020 — 2021",
	"experience.gradiweb.highlight1":
		"Built client web products with React, Next.js and Shopify at a web agency.",
```

Nota: los valores `"// 01 · projects"`, `"// 02 · experience"`, `"// 03 · skills"`, `"// 04 · about"` y `"// 05 · contacto"` **no son comentarios de código** — son el rótulo monoespaciado que va encima de cada titular, parte de la identidad visual. La numeración sigue el orden de las secciones en la página (acento "documento técnico").

- [ ] **Step 4: Añadir las claves en español**

En `src/i18n/translations/es.ts`, en la misma posición:

```ts
	"experience.comment": "// 02 · experiencia",
	"experience.headline": "Dónde he trabajado",

	"experience.ubidots.role": "Software Engineer",
	"experience.ubidots.company": "Ubidots",
	"experience.ubidots.location": "Medellín, Colombia",
	"experience.ubidots.period": "2021 — Actualidad",
	"experience.ubidots.highlight1":
		"Construí en solitario el design system de la plataforma — ~25 componentes sobre primitivas de Radix, tokens en variables CSS, una especificación de 3 capas por componente y tests de accesibilidad. Todo lo nuevo sale con él.",
	"experience.ubidots.highlight2":
		"Diseñé la arquitectura white-label de mobile: una base de código React Native, diez apps con marca, pipelines y fichas de tienda independientes. 50K+ usuarios, sin crashes críticos.",
	"experience.ubidots.highlight3":
		"Líder técnico de mobile — arquitectura, code review y onboarding de un equipo rotativo de hasta 4 personas, siendo el único ingeniero full-time en mobile.",
	"experience.ubidots.highlight4":
		"Entregué Incidents y Escalation Policies de punta a punta — especificación, frontend en React, backend en Django, testing, QA y entrega — después de que el equipo se reorganizara alrededor de un modelo AI-native de vertical slicing.",
	"experience.ubidots.highlight5":
		"Construí los dashboards multicapa, el sistema de replicación de widgets y los frontends del editor de Functions y de la experiencia de chat y agentes de IA.",

	"experience.keystone.role": "Software Engineer",
	"experience.keystone.company": "Keystone Strategy",
	"experience.keystone.location": "Remoto · Estados Unidos",
	"experience.keystone.period": "2025 — Actualidad",
	"experience.keystone.badge": "CONTRACT",
	"experience.keystone.highlight1":
		"Full-stack en tres aplicaciones internas interconectadas sobre un gateway y una base de datos compartidos, para una consultora de estrategia con clientes Fortune 500.",
	"experience.keystone.highlight2":
		"Diseñé un sistema propio de roles y feature flags transversal a las tres apps — ~10 roles, ~30 flags y UI de administración propia — entregado en una semana tras evaluar comprar vs. construir.",
	"experience.keystone.highlight3":
		"Soy dueño de la aplicación de registro de horas y facturación de la firma, en frontend y backend.",
	"experience.keystone.highlight4":
		"Administro el triage de errores críticos con Sentry, en frontend y backend.",

	"experience.gradiweb.role": "Frontend Developer",
	"experience.gradiweb.company": "GradiWeb",
	"experience.gradiweb.location": "Bogotá, Colombia",
	"experience.gradiweb.period": "2020 — 2021",
	"experience.gradiweb.highlight1":
		"Construí productos web para clientes de una agencia con React, Next.js y Shopify.",
```

- [ ] **Step 5: Crear el getter**

Crea `src/components/sections/experience/get-experience-data.ts`:

```ts
import { Sections } from "../../../constants/sections";
import { getTranslations, type TranslationKey } from "../../../i18n/utils";

export interface ExperienceEntry {
	id: string;
	role: string;
	company: string;
	location: string;
	period: string;
	badge?: string;
	highlights: string[];
}

export interface ExperienceData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	entries: ExperienceEntry[];
}

interface EntryDefinition {
	id: string;
	hasBadge: boolean;
	highlightCount: number;
}

const entryDefinitions: EntryDefinition[] = [
	{ id: "ubidots", hasBadge: false, highlightCount: 5 },
	{ id: "keystone", hasBadge: true, highlightCount: 4 },
	{ id: "gradiweb", hasBadge: false, highlightCount: 1 },
];

export default function getExperienceData(lang: string): ExperienceData {
	const t = getTranslations(lang);

	return {
		sectionId: Sections.EXPERIENCE,
		commentLabel: t("experience.comment"),
		headline: t("experience.headline"),
		entries: entryDefinitions.map((definition) => ({
			id: definition.id,
			role: t(`experience.${definition.id}.role` as TranslationKey),
			company: t(`experience.${definition.id}.company` as TranslationKey),
			location: t(`experience.${definition.id}.location` as TranslationKey),
			period: t(`experience.${definition.id}.period` as TranslationKey),
			badge: definition.hasBadge
				? t(`experience.${definition.id}.badge` as TranslationKey)
				: undefined,
			highlights: Array.from(
				{ length: definition.highlightCount },
				(_, index) =>
					t(
						`experience.${definition.id}.highlight${index + 1}` as TranslationKey,
					),
			),
		})),
	};
}
```

- [ ] **Step 6: Ejecutar el test para verificar que pasa**

Run: `pnpm test tests/experience-data.test.ts`
Expected: PASS — los cuatro tests.

- [ ] **Step 7: Crear la tarjeta de entrada**

Crea `src/components/sections/experience/components/experience-entry.astro`:

```astro
---
import Badge from "../../../common/badge.astro";
import type { ExperienceEntry } from "../get-experience-data";

interface Props {
  entry: ExperienceEntry;
}

const { entry } = Astro.props;
---

<article class="experience-entry">
  <header class="experience-entry__header">
    <time class="experience-entry__period">{entry.period}</time>
    <div class="experience-entry__identity">
      <h3 class="experience-entry__role">{entry.role}</h3>
      <p class="experience-entry__company">
        {entry.company} · {entry.location}
      </p>
    </div>
    {entry.badge && <Badge>{entry.badge}</Badge>}
  </header>

  <ul class="experience-entry__highlights">
    {
      entry.highlights.map((highlight) => (
        <li class="experience-entry__highlight">{highlight}</li>
      ))
    }
  </ul>
</article>

<style>
  .experience-entry {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .experience-entry__header {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .experience-entry__period {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    white-space: nowrap;
  }

  .experience-entry__identity {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .experience-entry__role {
    font-size: var(--text-lg);
    font-weight: var(--font-bold);
    color: var(--color-text);
    margin: var(--space-0);
  }

  .experience-entry__company {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin: var(--space-0);
  }

  .experience-entry__highlights {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin: var(--space-0);
    padding-left: var(--space-0);
    list-style: none;
  }

  .experience-entry__highlight {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-3);
    font-size: var(--text-sm);
    line-height: var(--leading-relaxed);
    color: var(--color-text);
  }

  .experience-entry__highlight::before {
    content: "+";
    font-family: var(--font-mono);
    font-weight: var(--font-medium);
    color: var(--color-success);
  }
</style>
```

- [ ] **Step 8: Crear la vista**

Crea `src/components/sections/experience/components/experience-view.astro`:

```astro
---
import Container from "../../../common/container.astro";
import Divider from "../../../common/divider.astro";
import ExperienceEntryCard from "./experience-entry.astro";
import type { ExperienceData } from "../get-experience-data";

interface Props {
  data: ExperienceData;
}

const { data } = Astro.props;
---

<section class="experience" id={data.sectionId}>
  <Container>
    <div class="experience__content">
      <p class="experience__comment">{data.commentLabel}</p>
      <h2 class="experience__headline">{data.headline}</h2>

      <ol class="experience__timeline">
        {
          data.entries.map((entry, index) => (
            <li class="experience__item">
              {index > 0 && <Divider spacing="lg" />}
              <ExperienceEntryCard entry={entry} />
            </li>
          ))
        }
      </ol>
    </div>
  </Container>
</section>

<style>
  .experience {
    padding: var(--space-20) var(--space-0);
  }

  .experience__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  .experience__comment {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin: var(--space-0);
  }

  .experience__headline {
    font-family: var(--font-sans);
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    color: var(--color-text);
    margin: var(--space-0);
  }

  .experience__timeline {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    margin: var(--space-0);
  }

  @media (max-width: 768px) {
    .experience__headline {
      font-size: var(--text-2xl);
    }
  }
</style>
```

- [ ] **Step 9: Reescribir el contenedor de sección**

Reemplaza el contenido completo de `src/components/sections/experience/experience.astro` por:

```astro
---
import ExperienceView from "./components/experience-view.astro";
import getExperienceData from "./get-experience-data";
import { defaultLocale } from "../../../i18n/utils";

const experienceData = getExperienceData(Astro.currentLocale ?? defaultLocale);
---

<ExperienceView data={experienceData} />
```

- [ ] **Step 10: Ejecutar tests y type check**

Run: `pnpm test && pnpm check`
Expected: PASS en todo.

- [ ] **Step 11: Lint y commit**

```bash
pnpm lint:fix
git add src/components/sections/experience src/i18n/translations tests/experience-data.test.ts
git commit -m "feat(experience): build experience timeline with real roles"
```

---

## Task 8: Sección Contact

Sin formulario. Email protegido de scrapers (se arma en el cliente a partir de dos partes), CV descargable, LinkedIn y GitHub.

**Files:**
- Create: `src/components/sections/contact/get-contact-data.ts`
- Create: `src/components/sections/contact/copy-email-client.ts`
- Create: `src/components/sections/contact/components/copy-email-button.astro`
- Create: `src/components/sections/contact/components/contact-view.astro`
- Modify: `src/components/sections/contact/contact.astro` (reescritura completa)
- Modify: `src/i18n/translations/en.ts`, `src/i18n/translations/es.ts`
- Test: `tests/contact-data.test.ts`

**Interfaces:**
- Consumes: `getTranslations`, `Sections.CONTACT`, `Container`, `Button`, `Link`.
- Produces:
  ```ts
  export interface ContactLink { label: string; url: string }
  export interface ContactData {
  	sectionId: string;
  	commentLabel: string;
  	headline: string;
  	intro: string;
  	email: { user: string; domain: string; copyLabel: string; copiedLabel: string };
  	cv: { href: string; label: string };
  	links: ContactLink[];
  }
  ```
  `getContactData(lang): ContactData` (default export). `copy-email-client.ts` exporta por defecto `initCopyEmail(): void`.

- [ ] **Step 1: Escribir el test**

Crea `tests/contact-data.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import getContactData from "../src/components/sections/contact/get-contact-data";

describe("getContactData", () => {
	it("never exposes a full email address in the markup data", () => {
		const data = getContactData("en");

		expect(data.email.user).not.toContain("@");
		expect(data.email.domain).not.toContain("@");
		expect(JSON.stringify(data)).not.toContain("angelozam17@gmail.com");
	});

	it("points to the downloadable CV", () => {
		expect(getContactData("en").cv.href).toBe("/cv.pdf");
	});

	it("links to LinkedIn and GitHub only", () => {
		const data = getContactData("en");

		expect(data.links.map((link) => link.label)).toEqual([
			"LinkedIn",
			"GitHub",
		]);
	});
});
```

- [ ] **Step 2: Ejecutar el test para verificar que falla**

Run: `pnpm test tests/contact-data.test.ts`
Expected: FAIL — `Cannot find module '.../contact/get-contact-data'`.

- [ ] **Step 3: Añadir las claves en inglés**

En `src/i18n/translations/en.ts`, justo antes de la clave `"experience.comment"`, inserta:

```ts
	"contact.comment": "// 05 · contact",
	"contact.headline": "Let's talk",
	"contact.intro":
		"The fastest way to reach me is email. Remote from Medellín, Colombia (UTC−5) — full overlap with US time zones.",
	"contact.email.copy": "Copy email",
	"contact.email.copied": "Copied",
	"contact.cv": "Download CV",
	"contact.links.linkedin": "LinkedIn",
	"contact.links.github": "GitHub",
```

- [ ] **Step 4: Añadir las claves en español**

En `src/i18n/translations/es.ts`, en la misma posición:

```ts
	"contact.comment": "// contacto",
	"contact.headline": "Hablemos",
	"contact.intro":
		"La forma más rápida de contactarme es por email. Remoto desde Medellín, Colombia (UTC−5) — solapamiento total con husos horarios de USA.",
	"contact.email.copy": "Copiar email",
	"contact.email.copied": "Copiado",
	"contact.cv": "Descargar CV",
	"contact.links.linkedin": "LinkedIn",
	"contact.links.github": "GitHub",
```

- [ ] **Step 5: Crear el getter**

Crea `src/components/sections/contact/get-contact-data.ts`:

```ts
import { Sections } from "../../../constants/sections";
import { getTranslations } from "../../../i18n/utils";

export interface ContactLink {
	label: string;
	url: string;
}

export interface ContactData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	intro: string;
	email: {
		user: string;
		domain: string;
		copyLabel: string;
		copiedLabel: string;
	};
	cv: {
		href: string;
		label: string;
	};
	links: ContactLink[];
}

export default function getContactData(lang: string): ContactData {
	const t = getTranslations(lang);

	return {
		sectionId: Sections.CONTACT,
		commentLabel: t("contact.comment"),
		headline: t("contact.headline"),
		intro: t("contact.intro"),
		email: {
			user: "angelozam17",
			domain: "gmail.com",
			copyLabel: t("contact.email.copy"),
			copiedLabel: t("contact.email.copied"),
		},
		cv: {
			href: "/cv.pdf",
			label: t("contact.cv"),
		},
		links: [
			{
				label: t("contact.links.linkedin"),
				url: "https://www.linkedin.com/in/angelozdev/",
			},
			{
				label: t("contact.links.github"),
				url: "https://github.com/angelozdev",
			},
		],
	};
}
```

- [ ] **Step 6: Ejecutar el test para verificar que pasa**

Run: `pnpm test tests/contact-data.test.ts`
Expected: PASS — los tres tests.

- [ ] **Step 7: Crear el script de cliente**

Crea `src/components/sections/contact/copy-email-client.ts`. El email nunca aparece completo en el HTML: se arma en tiempo de ejecución.

```ts
const SELECTOR = ".copy-email";
const RESET_DELAY_MS = 2000;

const clickHandlers = new WeakMap<Element, () => void>();

function buildEmail(button: HTMLElement): string {
	const user = button.dataset.emailUser ?? "";
	const domain = button.dataset.emailDomain ?? "";
	return `${user}@${domain}`;
}

async function copy(button: HTMLElement): Promise<void> {
	const label = button.querySelector(".copy-email__label");
	const copiedLabel = button.dataset.copiedLabel ?? "";
	const idleLabel = button.dataset.copyLabel ?? "";

	if (!label) return;

	try {
		await navigator.clipboard.writeText(buildEmail(button));
		label.textContent = copiedLabel;
		button.setAttribute("data-copied", "true");

		window.setTimeout(() => {
			label.textContent = idleLabel;
			button.removeAttribute("data-copied");
		}, RESET_DELAY_MS);
	} catch {
		label.textContent = buildEmail(button);
	}
}

function cleanup(): void {
	for (const button of document.querySelectorAll(SELECTOR)) {
		const handler = clickHandlers.get(button);
		if (handler) {
			button.removeEventListener("click", handler);
			clickHandlers.delete(button);
		}
	}
}

function init(): void {
	cleanup();

	for (const button of document.querySelectorAll<HTMLElement>(SELECTOR)) {
		const handler = () => {
			void copy(button);
		};
		clickHandlers.set(button, handler);
		button.addEventListener("click", handler);
	}
}

export default function initCopyEmail(): void {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	document.addEventListener("astro:before-swap", cleanup);
}
```

- [ ] **Step 8: Crear el botón**

Crea `src/components/sections/contact/components/copy-email-button.astro`:

```astro
---
import { Copy } from "lucide-astro";
import type { ContactData } from "../get-contact-data";

interface Props {
  email: ContactData["email"];
}

const { email } = Astro.props;
---

<button
  type="button"
  class="copy-email"
  data-email-user={email.user}
  data-email-domain={email.domain}
  data-copy-label={email.copyLabel}
  data-copied-label={email.copiedLabel}
>
  <Copy size={16} aria-hidden="true" />
  <span class="copy-email__label">{email.copyLabel}</span>
</button>

<script>
  import initCopyEmail from "../copy-email-client";

  initCopyEmail();
</script>

<style>
  .copy-email {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-sm);
    border: none;
    cursor: pointer;
    background-color: var(--color-button-primary-bg);
    color: var(--color-button-primary-text);
    transition:
      background-color var(--transition-fast),
      color var(--transition-fast);
  }

  .copy-email:hover {
    background-color: var(--color-button-primary-bg-hover);
  }

  .copy-email:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  .copy-email[data-copied="true"] {
    background-color: var(--color-success);
  }
</style>
```

- [ ] **Step 9: Crear la vista**

Crea `src/components/sections/contact/components/contact-view.astro`:

```astro
---
import { ExternalLink } from "lucide-astro";
import Button from "../../../common/button.astro";
import Container from "../../../common/container.astro";
import Link from "../../../common/link.astro";
import CopyEmailButton from "./copy-email-button.astro";
import type { ContactData } from "../get-contact-data";

interface Props {
  data: ContactData;
}

const { data } = Astro.props;
---

<section class="contact" id={data.sectionId}>
  <Container maxWidth="md">
    <div class="contact__content">
      <p class="contact__comment">{data.commentLabel}</p>
      <h2 class="contact__headline">{data.headline}</h2>
      <p class="contact__intro">{data.intro}</p>

      <div class="contact__actions">
        <CopyEmailButton email={data.email} />
        <Button href={data.cv.href} variant="secondary">{data.cv.label}</Button>
      </div>

      <ul class="contact__links">
        {
          data.links.map((link) => (
            <li>
              <Link href={link.url} external={true} label={link.label}>
                {link.label}
                <ExternalLink slot="suffix" size={14} aria-hidden="true" />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </Container>
</section>

<style>
  .contact {
    padding: var(--space-20) var(--space-0);
  }

  .contact__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .contact__comment {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin: var(--space-0);
  }

  .contact__headline {
    font-family: var(--font-sans);
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    color: var(--color-text);
    margin: var(--space-0);
  }

  .contact__intro {
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text);
    margin: var(--space-0);
  }

  .contact__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .contact__links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin: var(--space-0);
  }

  @media (max-width: 768px) {
    .contact__headline {
      font-size: var(--text-2xl);
    }
  }
</style>
```

- [ ] **Step 10: Reescribir el contenedor de sección**

Reemplaza el contenido completo de `src/components/sections/contact/contact.astro` por:

```astro
---
import ContactView from "./components/contact-view.astro";
import getContactData from "./get-contact-data";
import { defaultLocale } from "../../../i18n/utils";

const contactData = getContactData(Astro.currentLocale ?? defaultLocale);
---

<ContactView data={contactData} />
```

- [ ] **Step 11: Ejecutar tests y type check**

Run: `pnpm test && pnpm check`
Expected: PASS en todo.

- [ ] **Step 12: Lint y commit**

```bash
pnpm lint:fix
git add src/components/sections/contact src/i18n/translations tests/contact-data.test.ts
git commit -m "feat(contact): build contact section with scraper-safe email"
```

---

## Task 9: SEO, Open Graph y assets

El `<head>` todavía anuncia el cargo viejo y usa el retrato como preview de link.

**Files:**
- Modify: `src/layouts/layout.astro:22-63,151-157`
- Create (assets, los entrega el humano): `public/og.png`, `public/favicon.svg`, `public/cv.pdf`, `public/images/projects/quaestor.webp`, `public/images/projects/ubidots-mobile.webp`

**Interfaces:**
- Consumes: `t("seo.title")`, `t("seo.description")`, `t("seo.keywords")` (actualizadas en la Task 2).
- Produces: `<head>` con OG dedicada y JSON-LD coherente con el posicionamiento.

- [ ] **Step 1: Apuntar el SEO a la imagen Open Graph**

En `src/layouts/layout.astro`, reemplaza el objeto `seo` (líneas 22-30) por:

```ts
const seo = {
  title: t("seo.title"),
  description: t("seo.description"),
  keywords: t("seo.keywords"),
  url: "https://angelozdev.com",
  image: "/og.png",
  author: "Angelo Zambrano",
};
```

Se elimina `twitterHandle`: no hay cuenta de Twitter confirmada y una etiqueta que apunta a un perfil inexistente es peor que su ausencia.

- [ ] **Step 2: Quitar la etiqueta de Twitter huérfana**

En el bloque `<!-- Twitter -->`, borra la línea:

```astro
    <meta name="twitter:creator" content={seo.twitterHandle} />
```

- [ ] **Step 3: Actualizar el JSON-LD**

Reemplaza el objeto `jsonLd` (líneas 34-63) por:

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Angelo Zambrano",
  url: seo.url,
  image: `${seo.url}${seo.image}`,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Ubidots",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medellín",
    addressCountry: "Colombia",
  },
  sameAs: [
    "https://www.linkedin.com/in/angelozdev/",
    "https://github.com/angelozdev",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "React Native",
    "Design Systems",
    "Accessibility",
    "Python",
    "FastAPI",
    "Model Context Protocol",
    "LLM application development",
  ],
};
```

`jobTitle` deja de reclamar "Mobile Team Lead", que no existe en papel.

- [ ] **Step 4: Canonical por página y hreflang**

Hoy el canonical apunta a la raíz en las dos páginas (`src/layouts/layout.astro:141`), así que `/es/` se canonicaliza a la home en inglés y Google no la indexa. Reemplaza la línea:

```astro
    <link rel="canonical" href={seo.url} />
```

por:

```astro
    <link rel="canonical" href={`${seo.url}${Astro.url.pathname}`} />
    <link rel="alternate" hreflang="en" href={`${seo.url}/`} />
    <link rel="alternate" hreflang="es" href={`${seo.url}/es/`} />
    <link rel="alternate" hreflang="x-default" href={`${seo.url}/`} />
```

Y en las etiquetas `og:url` (línea 145) y `twitter:url` (línea 153), reemplaza `content={seo.url}` por ``content={`${seo.url}${Astro.url.pathname}`}``.

- [ ] **Step 5: Colocar los assets**

Estos archivos los produce el humano; el código ya los referencia. Copia en su sitio:

```bash
ls -la public/og.png public/favicon.svg public/cv.pdf \
  public/images/projects/quaestor.webp \
  public/images/projects/ubidots-mobile.webp
```

Expected: los cinco archivos existen. Requisitos: `og.png` 1200×630 con nombre, titular y la métrica de las 10 apps; `favicon.svg` con monograma propio (el actual es el de Astro); `cv.pdf` en inglés; las dos capturas en WebP, ratio 16/9 o 4/3.

Si algún asset todavía no existe, la página compila igual: la imagen faltante deja un hueco y el link del CV da 404. **Registra en `me.md` los que falten en vez de sustituirlos por placeholders.**

- [ ] **Step 6: Verificar el build**

Run: `pnpm check && pnpm build`
Expected: build sin errores.

- [ ] **Step 7: Lint y commit**

```bash
pnpm lint:fix
git add src/layouts/layout.astro public/
git commit -m "feat(seo): dedicated OG image and honest structured data"
```

---

## Task 10: Composición de la página y verificación final

Activa las cuatro secciones comentadas y las ordena: evidencia primero, About de cierre.

**Files:**
- Modify: `src/pages/index.astro:11-18`
- Modify: `src/pages/es/index.astro`

**Interfaces:**
- Consumes: los seis componentes de sección, ya funcionales tras las tareas 2-8.
- Produces: la página completa en ambos idiomas.

- [ ] **Step 1: Revisar la página en español**

```bash
cat src/pages/es/index.astro
```

Confirma qué secciones están comentadas ahí antes de editar.

- [ ] **Step 2: Componer la página en inglés**

Reemplaza el contenido completo de `src/pages/index.astro` por:

```astro
---
import Layout from "../layouts/layout.astro";
import Hero from "../components/sections/hero/hero.astro";
import Projects from "../components/sections/projects/projects.astro";
import Experience from "../components/sections/experience/experience.astro";
import Skills from "../components/sections/skills/skills.astro";
import About from "../components/sections/about/about.astro";
import Contact from "../components/sections/contact/contact.astro";
---

<Layout>
  <Hero />
  <Projects />
  <Experience />
  <Skills />
  <About />
  <Contact />
</Layout>
```

- [ ] **Step 3: Componer la página en español**

Reemplaza el contenido completo de `src/pages/es/index.astro` por el mismo markup, ajustando la profundidad de los imports en un nivel:

```astro
---
import Layout from "../../layouts/layout.astro";
import Hero from "../../components/sections/hero/hero.astro";
import Projects from "../../components/sections/projects/projects.astro";
import Experience from "../../components/sections/experience/experience.astro";
import Skills from "../../components/sections/skills/skills.astro";
import About from "../../components/sections/about/about.astro";
import Contact from "../../components/sections/contact/contact.astro";
---

<Layout>
  <Hero />
  <Projects />
  <Experience />
  <Skills />
  <About />
  <Contact />
</Layout>
```

- [ ] **Step 4: Verificación completa**

Run: `pnpm test && pnpm check && pnpm build`
Expected: tests PASS, `astro check` con 0 errores, build exitoso.

- [ ] **Step 5: Verificación visual en ambos idiomas**

```bash
pnpm dev
```

Recorre `http://localhost:4321` y `http://localhost:4321/es/` y confirma:

1. Las seis secciones aparecen en orden: Hero, Projects, Experience, Skills, About, Contact.
2. La navegación salta correctamente a cada `id` de sección.
3. Los cinco proyectos se ven: dos con imagen, tres con snippet de código.
4. El botón "Copy email" copia `angelozam17@gmail.com` y muestra "Copied" durante dos segundos.
5. El botón de tema alterna claro/oscuro sin que ninguna sección nueva pierda contraste.
6. En viewport móvil (<768px) ninguna sección desborda horizontalmente.
7. El español no tiene textos en inglés colados ni tildes faltantes.

Detén el dev server.

- [ ] **Step 6: Commit final**

```bash
pnpm lint:fix
git add src/pages
git commit -m "feat(pages): compose sections evidence-first in both locales"
```

---

## Task 11: El sitio como demo white-label

El logro central (1 codebase → 10 apps) no se puede probar con links. Esta tarea lo prueba con el sitio mismo: un switcher en el header cambia la marca de todo el portafolio en vivo — mismo contenido, otra piel — calcando el mecanismo del tema oscuro (`data-theme` → `data-brand`). La marca actual es la default (`az`); tres marcas ficticias (Ember, Tide, Bloom) demuestran el sistema. Una nota en el hero conecta la demo con la métrica de las 10 apps.

**Files:**
- Create: `src/data/brands.ts`
- Create: `src/styles/tokens/brands.css`
- Create: `src/scripts/brand.ts`
- Create: `src/components/common/brand-switcher/brand-switcher.astro`
- Create: `src/components/common/brand-switcher/get-brand-switcher-data.ts`
- Create: `src/components/common/brand-switcher/brand-switcher-client.ts`
- Create: `src/components/common/brand-switcher/components/brand-switcher-view.astro`
- Modify: `src/styles/index.css`, `src/layouts/layout.astro:66-104`
- Modify: `src/components/sections/header/components/desktop-nav.astro:38`, `src/components/sections/header/components/mobile-nav.astro:43`
- Modify: `src/components/sections/hero/get-hero-data.ts`, `src/components/sections/hero/components/hero-view.astro`
- Modify: `src/i18n/translations/en.ts`, `src/i18n/translations/es.ts`
- Test: `tests/brands-data.test.ts`

**Interfaces:**
- Consumes: `getItem`/`setItem` (`src/libs/storage.ts`), `getTranslations`, el patrón `data-*` + overrides de `src/styles/tokens/theme.css`.
- Produces:
  ```ts
  export const defaultBrand = "az";
  export const brands: { id: string; label: string }[];
  ```
  `getBrandSwitcherData(lang): BrandSwitcherData` (default export). Atributo `data-brand` en `<html>`, persistido en `localStorage` bajo `brand-preference`. Claves nuevas: `brand.switcherLabel`, `brand.heroNote`. `HeroData` gana `whiteLabelNote: string`.

- [ ] **Step 1: Escribir el test**

Crea `tests/brands-data.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { brands, defaultBrand } from "../src/data/brands";

describe("brands", () => {
	it("ships four brands with the current one first", () => {
		expect(brands).toHaveLength(4);
		expect(brands[0].id).toBe(defaultBrand);
	});

	it("uses unique lowercase ids", () => {
		const ids = brands.map((brand) => brand.id);

		expect(new Set(ids).size).toBe(ids.length);
		for (const id of ids) {
			expect(id).toMatch(/^[a-z]+$/);
		}
	});
});
```

- [ ] **Step 2: Ejecutar el test para verificar que falla**

Run: `pnpm test tests/brands-data.test.ts`
Expected: FAIL — `Cannot find module '.../data/brands'`.

- [ ] **Step 3: Crear el fixture de marcas**

Crea `src/data/brands.ts` (named export, igual que `stack`):

```ts
export const defaultBrand = "az";

export const brands = [
	{ id: "az", label: "AZ" },
	{ id: "ember", label: "Ember" },
	{ id: "tide", label: "Tide" },
	{ id: "bloom", label: "Bloom" },
];
```

Run: `pnpm test tests/brands-data.test.ts` → PASS.

- [ ] **Step 4: Crear los overrides de tokens por marca**

Crea `src/styles/tokens/brands.css`. Cada marca redefine solo acento, botón primario y radios; los neutros no cambian (así funciona un white-label real). Los pares cumplen AA: `#c2410c`, `#0f766e` y `#be123c` dan ≥4.5:1 sobre blanco; las variantes 300 dan >7:1 sobre `#171717`. Ember es angulosa (radios 0), Tide conserva los radios default, Bloom es redonda.

```css
[data-brand="ember"] {
	--color-primary: #c2410c;
	--color-primary-hover: #9a3412;
	--color-primary-focus: #c2410c;
	--color-button-primary-bg: #c2410c;
	--color-button-primary-bg-hover: #9a3412;
	--color-button-primary-text: #ffffff;
	--radius-sm: 0;
	--radius-md: 0;
	--radius-lg: 0;
	--radius-xl: 0;
	--radius-2xl: 0;
}

[data-theme="dark"][data-brand="ember"] {
	--color-primary: #fdba74;
	--color-primary-hover: #fed7aa;
	--color-primary-focus: #fdba74;
	--color-button-primary-bg: #fdba74;
	--color-button-primary-bg-hover: #fed7aa;
	--color-button-primary-text: #171717;
}

[data-brand="tide"] {
	--color-primary: #0f766e;
	--color-primary-hover: #115e59;
	--color-primary-focus: #0f766e;
	--color-button-primary-bg: #0f766e;
	--color-button-primary-bg-hover: #115e59;
	--color-button-primary-text: #ffffff;
}

[data-theme="dark"][data-brand="tide"] {
	--color-primary: #5eead4;
	--color-primary-hover: #99f6e4;
	--color-primary-focus: #5eead4;
	--color-button-primary-bg: #5eead4;
	--color-button-primary-bg-hover: #99f6e4;
	--color-button-primary-text: #171717;
}

[data-brand="bloom"] {
	--color-primary: #be123c;
	--color-primary-hover: #9f1239;
	--color-primary-focus: #be123c;
	--color-button-primary-bg: #be123c;
	--color-button-primary-bg-hover: #9f1239;
	--color-button-primary-text: #ffffff;
	--radius-sm: 0.5rem;
	--radius-md: 0.75rem;
	--radius-lg: 1rem;
	--radius-xl: 1.25rem;
	--radius-2xl: 1.5rem;
}

[data-theme="dark"][data-brand="bloom"] {
	--color-primary: #fda4af;
	--color-primary-hover: #fecdd3;
	--color-primary-focus: #fda4af;
	--color-button-primary-bg: #fda4af;
	--color-button-primary-bg-hover: #fecdd3;
	--color-button-primary-text: #171717;
}

.brand-dot--az {
	background-color: #3b82f6;
}

.brand-dot--ember {
	background-color: #c2410c;
}

.brand-dot--tide {
	background-color: #0f766e;
}

.brand-dot--bloom {
	background-color: #be123c;
}

[data-theme="dark"] .brand-dot--az {
	background-color: #93c5fd;
}

[data-theme="dark"] .brand-dot--ember {
	background-color: #fdba74;
}

[data-theme="dark"] .brand-dot--tide {
	background-color: #5eead4;
}

[data-theme="dark"] .brand-dot--bloom {
	background-color: #fda4af;
}
```

En `src/styles/index.css`, añade el import al final del bloque de tokens, después de `theme.css`:

```css
@import "./tokens/brands.css";
```

- [ ] **Step 5: Crear el módulo de marca**

Crea `src/scripts/brand.ts` (espejo de `theme.ts`, mismos named exports por consistencia con ese archivo):

```ts
import { brands, defaultBrand } from "../data/brands";
import { getItem, setItem } from "../libs/storage";

const STORAGE_KEY = "brand-preference";
const BRAND_ATTRIBUTE = "data-brand";

export function getStoredBrand(): string | null {
	const stored = getItem<string>(STORAGE_KEY);
	if (stored && brands.some((brand) => brand.id === stored)) {
		return stored;
	}
	return null;
}

export function getResolvedBrand(): string {
	return getStoredBrand() ?? defaultBrand;
}

export function applyBrand(brandId: string): void {
	if (typeof window === "undefined") return;
	document.documentElement.setAttribute(BRAND_ATTRIBUTE, brandId);
}

export function setBrand(brandId: string): void {
	if (typeof window === "undefined") return;
	setItem(STORAGE_KEY, brandId);
	applyBrand(brandId);
}

export function initBrand(): void {
	applyBrand(getResolvedBrand());
}
```

- [ ] **Step 6: Init anti-FOUC en el layout**

En `src/layouts/layout.astro`: (1) en la etiqueta `<html>`, añade el atributo por defecto — `<html lang={lang} data-theme="light" data-brand="az">`; (2) inmediatamente después del script inline del tema, añade este otro (parsea JSON porque `libs/storage.ts` serializa — no copies el bug del script del tema):

```astro
    <script is:inline>
      (function () {
        const STORAGE_KEY = "brand-preference";
        const BRANDS = ["az", "ember", "tide", "bloom"];

        function getStoredBrand() {
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw === null) return null;
            const parsed = JSON.parse(raw);
            return BRANDS.includes(parsed) ? parsed : null;
          } catch (e) {
            return null;
          }
        }

        document.documentElement.setAttribute(
          "data-brand",
          getStoredBrand() || "az",
        );
      })();
    </script>
```

- [ ] **Step 7: Crear el switcher**

Crea `src/components/common/brand-switcher/get-brand-switcher-data.ts`:

```ts
import { brands } from "../../../data/brands";
import { getTranslations } from "../../../i18n/utils";

export interface BrandSwitcherData {
	label: string;
	brands: { id: string; label: string }[];
}

export default function getBrandSwitcherData(lang: string): BrandSwitcherData {
	const t = getTranslations(lang);

	return {
		label: t("brand.switcherLabel"),
		brands,
	};
}
```

Crea `src/components/common/brand-switcher/brand-switcher-client.ts`:

```ts
import { setBrand } from "../../../scripts/brand";

const clickHandlers = new WeakMap<Element, () => void>();

function updateActiveState(): void {
	const current = document.documentElement.getAttribute("data-brand");
	const buttons = document.querySelectorAll<HTMLElement>(
		".brand-switcher__option",
	);

	for (const button of buttons) {
		const isActive = button.dataset.brandId === current;
		button.setAttribute("aria-pressed", String(isActive));
	}
}

function cleanup(): void {
	for (const button of document.querySelectorAll(".brand-switcher__option")) {
		const handler = clickHandlers.get(button);
		if (handler) {
			button.removeEventListener("click", handler);
			clickHandlers.delete(button);
		}
	}
}

function init(): void {
	cleanup();
	updateActiveState();

	for (const button of document.querySelectorAll<HTMLElement>(
		".brand-switcher__option",
	)) {
		const handler = () => {
			const brandId = button.dataset.brandId;
			if (brandId) {
				setBrand(brandId);
				updateActiveState();
			}
		};
		clickHandlers.set(button, handler);
		button.addEventListener("click", handler);
	}
}

export default function initBrandSwitcher(): void {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	document.addEventListener("astro:before-swap", cleanup);
}
```

Crea `src/components/common/brand-switcher/components/brand-switcher-view.astro`:

```astro
---
import type { BrandSwitcherData } from "../get-brand-switcher-data";

interface Props {
  data: BrandSwitcherData;
}

const { data } = Astro.props;
---

<div class="brand-switcher" role="group" aria-label={data.label}>
  {
    data.brands.map((brand) => (
      <button
        type="button"
        class="brand-switcher__option"
        data-brand-id={brand.id}
        aria-pressed="false"
        aria-label={brand.label}
        title={brand.label}
      >
        <span class:list={["brand-switcher__dot", `brand-dot--${brand.id}`]} />
      </button>
    ))
  }
</div>

<script>
  import initBrandSwitcher from "../brand-switcher-client";

  initBrandSwitcher();
</script>

<style>
  .brand-switcher {
    display: flex;
    gap: var(--space-1);
  }

  .brand-switcher__option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-1);
    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: var(--transition-fast);
  }

  .brand-switcher__option:hover {
    border-color: var(--color-border);
  }

  .brand-switcher__option[aria-pressed="true"] {
    border-color: var(--color-border-hover);
  }

  .brand-switcher__option:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  .brand-switcher__dot {
    width: var(--space-3);
    height: var(--space-3);
    border-radius: var(--radius-full);
  }
</style>
```

Nota: `.brand-dot--*` viene global desde `brands.css`; los estilos scoped del componente no la pisan.

Crea `src/components/common/brand-switcher/brand-switcher.astro`:

```astro
---
import BrandSwitcherView from "./components/brand-switcher-view.astro";
import getBrandSwitcherData from "./get-brand-switcher-data";
import { defaultLocale } from "../../../i18n/utils";

const brandSwitcherData = getBrandSwitcherData(
  Astro.currentLocale ?? defaultLocale,
);
---

<BrandSwitcherView data={brandSwitcherData} />
```

- [ ] **Step 8: Montarlo en el header**

En `src/components/sections/header/components/desktop-nav.astro`, importa el switcher y renderízalo justo antes de `<ThemeToggle />` (línea 38):

```astro
import BrandSwitcher from "../../../common/brand-switcher/brand-switcher.astro";
```

```astro
  <BrandSwitcher />
  <ThemeToggle />
```

Haz lo mismo en `src/components/sections/header/components/mobile-nav.astro` (el `<ThemeToggle />` de la línea 43).

- [ ] **Step 9: Claves de traducción y nota en el hero**

En `src/i18n/translations/en.ts`, justo después del bloque `seo.*`, inserta:

```ts
	"brand.switcherLabel": "Site brand — white-label demo",
	"brand.heroNote":
		"This site is white-label too — try the brand switcher in the header. One codebase, four brands.",
```

En `src/i18n/translations/es.ts`, en la misma posición:

```ts
	"brand.switcherLabel": "Marca del sitio — demo white-label",
	"brand.heroNote":
		"Este sitio también es white-label — prueba el switcher de marca en el header. Una base de código, cuatro marcas.",
```

En `src/components/sections/hero/get-hero-data.ts`, añade `whiteLabelNote: string` a la interfaz `HeroData` y `whiteLabelNote: t("brand.heroNote")` al objeto retornado.

En `src/components/sections/hero/components/hero-view.astro`, después del `<div class="hero__stack">…</div>`, añade:

```astro
        <p class="hero__note">{data.whiteLabelNote}</p>
```

Y en el `<style>`:

```css
  .hero__note {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--color-text-muted);
    margin: var(--space-0);
  }
```

- [ ] **Step 10: Ejecutar tests y type check**

Run: `pnpm test && pnpm check`
Expected: PASS — incluida la paridad i18n con las dos claves nuevas.

- [ ] **Step 11: Verificación visual**

```bash
pnpm dev
```

En `http://localhost:4321` y `/es/`:

1. El switcher muestra 4 puntos de color junto al toggle de tema, en desktop y en el menú móvil.
2. Cambiar de marca rebrandea acento, botones y radios en todo el sitio, sin recargar.
3. Recargar la página conserva la marca elegida (sin flash de la marca default).
4. Cada marca es legible en tema claro y oscuro (botones, links, focus).
5. La nota white-label aparece bajo el stack del hero en ambos idiomas.

Detén el dev server.

- [ ] **Step 12: Lint y commit**

```bash
pnpm lint:fix
git add src/data/brands.ts src/styles src/scripts/brand.ts src/components/common/brand-switcher src/components/sections/header src/components/sections/hero src/i18n/translations src/layouts/layout.astro tests/brands-data.test.ts
git commit -m "feat(brand): white-label brand switcher — the site demos the architecture"
```

---

## Notas de seguimiento (no son tareas de código)

Estas quedaron decididas en la entrevista y viven en `me.md` §10. No las ejecuta este plan:

- Añadir evals a Quaestor.
- Pedir el trabajo de IA dentro de Ubidots.
- Reescribir el README de Quaestor como texto de decisiones técnicas — **antes de mover tráfico al sitio**: la card destacada linkea a ese repo.
- Limpiar el perfil de GitHub y configurar pinned repos.
- Conseguir el OK por escrito de Ubidots para publicar capturas.
- Conseguir el OK por escrito de Keystone para nombrar apps internas o mostrar snippets reales; mientras no llegue, el sitio no las nombra y el snippet usa claves genéricas.
- **Confirmado:** el Storybook del design system no es público y las apps white-label no se pueden nombrar — las claims del design system y del "10 apps" quedan sin prueba pública. Única vía de mejora: pedir a Ubidots, junto con el OK de capturas, un Storybook público o permiso para nombrar 2–3 white-labels.
- Confirmar los datos faltantes: periodo del 0→50K, tiempo de lanzamiento de una app white-label, qué es Stacks, números de performance de Sentry.
