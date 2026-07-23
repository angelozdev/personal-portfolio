# White-Label Designs (base/raw) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar el brand switcher tímido por un sistema de diseños intercambiables donde cada diseño es una piel completa (tipografía, color, bordes, sombras, motion) definida en archivos propios, sin tocar componentes para agregar diseños nuevos.

**Architecture:** Contrato de tokens CSS en `src/styles/tokens/` (defaults `:root` = diseño Base). Cada diseño alterno vive en `src/designs/<id>/` (manifest.ts + tokens.css + elements.css) y hace override bajo `[data-design="<id>"]`. Registry `src/designs/index.ts` es la única fuente de verdad: de él derivan switcher, script anti-FOUC y carga de fuentes. Cambio con View Transitions API.

**Tech Stack:** Astro 5, TypeScript estricto, Vitest, Biome, @fontsource (IBM Plex ya instalado; Archivo Black / Archivo / Space Mono se agregan), CSS custom properties.

**Spec:** `docs/superpowers/specs/2026-07-23-white-label-designs-design.md`

## Global Constraints

- Biome: tabs, double quotes. Correr `pnpm lint` antes de cada commit; `pnpm lint:fix` si falla.
- Convención del repo: `export default` preferido para funciones/componentes.
- **Sin comentarios en el código** (preferencia del usuario). Ningún snippet de este plan lleva comentarios; no agregarlos.
- BEM para clases CSS: `.block__element--modifier`.
- i18n: toda key nueva va en `en.ts` Y `es.ts` (el test `i18n-parity.test.ts` lo vigila).
- Base (diseño default) debe quedar visualmente IDÉNTICO a hoy. Cualquier cambio visible en Base es un bug.
- Los diseños nunca referencian clases de componentes; `elements.css` solo usa selectores de elementos (`html`, `body`, `::selection`).
- Gestor de paquetes: `pnpm`.
- Los tests corren con `pnpm test` (vitest run). Type check: `pnpm check`. Build: `pnpm build`.

---

### Task 1: Contrato de tokens — nuevos tokens base

**Files:**
- Modify: `src/styles/tokens/typography.css`
- Create: `src/styles/tokens/borders.css`
- Modify: `src/styles/index.css`

**Interfaces:**
- Produces: tokens CSS `--font-display`, `--font-heading`, `--font-body`, `--heading-transform`, `--heading-tracking`, `--font-semibold`, `--border-width`, `--border-width-thick`. Tareas 2 y 4 los consumen.

- [ ] **Step 1: Agregar tokens tipográficos a typography.css**

En `src/styles/tokens/typography.css`, dentro del bloque `:root`, después de la línea `--font-mono: "IBM Plex Mono", ui-monospace, monospace;` agregar:

```css
  --font-display: var(--font-mono);
  --font-heading: var(--font-sans);
  --font-body: var(--font-sans);
  --heading-transform: none;
  --heading-tracking: var(--tracking-tight);
```

Y después de `--font-medium: 500;` agregar:

```css
  --font-semibold: 600;
```

(`--font-semibold` ya se usa en `project-card.astro:83` pero nunca fue definido — bug latente que este contrato cierra.)

- [ ] **Step 2: Crear borders.css**

Crear `src/styles/tokens/borders.css`:

```css
:root {
  --border-width: 1px;
  --border-width-thick: 2px;
}
```

- [ ] **Step 3: Importar borders.css**

En `src/styles/index.css`, después de `@import "./tokens/radii.css";` agregar:

```css
@import "./tokens/borders.css";
```

- [ ] **Step 4: Verificar**

Run: `pnpm check && pnpm lint && pnpm build`
Expected: sin errores. Cero cambio visual (solo se agregaron tokens, nadie los consume aún).

- [ ] **Step 5: Commit**

```bash
git add src/styles/tokens/typography.css src/styles/tokens/borders.css src/styles/index.css
git commit -m "feat(tokens): add design-contract tokens (fonts, heading, borders)"
```

---

### Task 2: Pasada de enriquecimiento — componentes consumen el contrato

**Files:**
- Modify: `src/styles/base.css:11`
- Modify: `src/components/sections/hero/components/hero-view.astro:77,90`
- Modify: `src/components/sections/about/components/about-view.astro:69`
- Modify: `src/components/sections/projects/components/projects-view.astro:56`
- Modify: `src/components/sections/skills/components/skills-view.astro:54,76`
- Modify: `src/components/sections/experience/components/experience-view.astro:56`
- Modify: `src/components/sections/contact/components/contact-view.astro:63`
- Modify: `src/components/sections/projects/components/project-card.astro:54,57`
- Modify: `src/components/sections/header/header.astro:45`
- Modify: `src/components/sections/header/components/mobile-nav.astro:59,82`
- Modify: `src/components/common/code-snippet.astro:32`
- Modify: `src/components/common/popover.astro:57`
- Modify: `src/components/common/badge.astro:43,49,55,61,67`
- Modify: `src/components/common/button.astro:77`
- Modify: `src/components/common/divider.astro:25`
- Modify: `src/components/common/timeline-item.astro:41`
- Modify: `src/components/common/switcher.astro:56`

**Interfaces:**
- Consumes: tokens de Task 1.
- Produces: componentes 100 % dirigidos por el contrato. Ningún cambio de firma.

Los números de línea son los del estado actual; localizar por contenido si se desplazaron.

- [ ] **Step 1: Tipografía semántica**

Sustituciones exactas (una por archivo):

1. `src/styles/base.css` — en `body`: `font-family: var(--font-sans);` → `font-family: var(--font-body);`
2. `hero-view.astro` — en `.hero__name`: `font-family: var(--font-mono);` → `font-family: var(--font-display);`
3. En las cinco vistas de sección, la clase headline (`.about__headline`, `.projects__headline`, `.skills__headline`, `.experience__headline`, `.contact__headline` — nombre análogo en cada archivo):
   - `font-family: var(--font-sans);` → `font-family: var(--font-heading);`
   - `letter-spacing: var(--tracking-tight);` → `letter-spacing: var(--heading-tracking);`
   - Agregar declaración: `text-transform: var(--heading-transform);`

Las clases `__comment` (mono) y metadatos mono NO se tocan: `--font-mono` sigue siendo su token correcto.

- [ ] **Step 2: Anchos de borde**

En cada archivo listado, reemplazar el ancho literal `1px` por `var(--border-width)` SOLO en las declaraciones que usan `var(--color-border)`, `var(--color-border-hover)` o los bordes de color de badge (`--color-primary-200`, `--color-success-200`, `--color-warning-200`, `--color-error-200`), y en `switcher.astro` / bordes `transparent` que participan del mismo patrón hover:

```
border: 1px solid var(--color-border);          → border: var(--border-width) solid var(--color-border);
border-bottom: 1px solid var(--color-border);   → border-bottom: var(--border-width) solid var(--color-border);
border-top: 1px solid var(--color-border);      → border-top: var(--border-width) solid var(--color-border);
border-left: 1px solid var(--timeline-rail-color, var(--color-border)); → border-left: var(--border-width) solid var(--timeline-rail-color, var(--color-border));
border: 1px solid transparent;                  → border: var(--border-width) solid transparent;
border: 1px solid var(--color-primary-200);     → border: var(--border-width) solid var(--color-primary-200);
```

(y análogo para success/warning/error en `badge.astro`). Los `border: none` y los `outline: 2px` de focus NO se tocan.

- [ ] **Step 3: Detalles sueltos**

1. `hero-view.astro` — en `.hero__image`: `background-color: var(--color-gray-200);` → `background-color: var(--color-border);` (mismo valor hoy: gray-200).
2. `project-card.astro` — en `.project-card`: `transition: border-color 0.2s ease;` → `transition: border-color var(--transition-normal);` (mismo timing hoy: 0.2s ease-out ≈ ease).

- [ ] **Step 4: Verificar regresión cero**

Run: `pnpm check && pnpm lint && pnpm build && pnpm test`
Expected: todo verde.

Luego `pnpm dev`, abrir `localhost:4321` y comparar visualmente contra producción/main: home EN light debe ser idéntica (tipos, bordes, tarjetas, hero).

- [ ] **Step 5: Commit**

```bash
git add -A src/
git commit -m "refactor(styles): route hardcoded values through the design-token contract"
```

---

### Task 3: Módulo designs — registry, contrato TS, diseño raw

**Files:**
- Create: `src/designs/types.ts`
- Create: `src/designs/contract.ts`
- Create: `src/designs/index.ts`
- Create: `src/designs/base/manifest.ts`
- Create: `src/designs/raw/manifest.ts`
- Create: `src/designs/raw/tokens.css`
- Create: `src/designs/raw/elements.css`
- Test: `tests/designs-registry.test.ts`, `tests/design-contract.test.ts`
- Modify: `package.json` (nuevas fuentes)

**Interfaces:**
- Produces:
  - `src/designs/index.ts`: `export default designs: DesignManifest[]` y `export const defaultDesignId: string` ("base"). Tasks 4 y 5 los importan.
  - `src/designs/types.ts`: `export default interface DesignManifest { id: string; label: string }`.
  - `src/designs/contract.ts`: `export default contractTokens: string[]`.

- [ ] **Step 1: Instalar fuentes**

Run: `pnpm add @fontsource/archivo-black @fontsource/archivo @fontsource/space-mono`
Expected: 3 paquetes agregados a `dependencies`.

- [ ] **Step 2: Escribir tests que fallan**

Crear `tests/designs-registry.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import designs, { defaultDesignId } from "../src/designs";

describe("designs registry", () => {
	it("ships the default design first", () => {
		expect(designs.length).toBeGreaterThanOrEqual(2);
		expect(designs[0].id).toBe(defaultDesignId);
	});

	it("uses unique lowercase ids", () => {
		const ids = designs.map((design) => design.id);

		expect(new Set(ids).size).toBe(ids.length);
		for (const id of ids) {
			expect(id).toMatch(/^[a-z]+$/);
		}
	});

	it("labels every design", () => {
		for (const design of designs) {
			expect(design.label.length).toBeGreaterThan(0);
		}
	});
});
```

Crear `tests/design-contract.test.ts`:

```ts
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import designs, { defaultDesignId } from "../src/designs";
import contractTokens from "../src/designs/contract";

const skinDesigns = designs.filter((design) => design.id !== defaultDesignId);

describe("design token contract", () => {
	it("covers at least one skin design", () => {
		expect(skinDesigns.length).toBeGreaterThanOrEqual(1);
	});

	for (const design of skinDesigns) {
		const cssUrl = new URL(
			`../src/designs/${design.id}/tokens.css`,
			import.meta.url,
		);
		const css = readFileSync(fileURLToPath(cssUrl), "utf-8");

		it(`${design.id} defines every contract token`, () => {
			for (const token of contractTokens) {
				expect(css, `missing ${token}`).toContain(`${token}:`);
			}
		});

		it(`${design.id} defines a dark variant`, () => {
			expect(css).toContain(
				`[data-theme="dark"][data-design="${design.id}"]`,
			);
		});
	}
});
```

- [ ] **Step 3: Correr tests, verificar que fallan**

Run: `pnpm test`
Expected: FAIL — `Cannot find module '../src/designs'` (o equivalente de resolución).

- [ ] **Step 4: Implementar el módulo**

Crear `src/designs/types.ts`:

```ts
export default interface DesignManifest {
	id: string;
	label: string;
}
```

Crear `src/designs/contract.ts`:

```ts
const contractTokens = [
	"--font-display",
	"--font-heading",
	"--font-body",
	"--font-mono",
	"--heading-transform",
	"--heading-tracking",
	"--border-width",
	"--border-width-thick",
	"--color-text",
	"--color-text-muted",
	"--color-background",
	"--color-surface",
	"--color-border",
	"--color-border-hover",
	"--color-primary",
	"--color-primary-hover",
	"--color-primary-focus",
	"--color-button-primary-bg",
	"--color-button-primary-bg-hover",
	"--color-button-primary-text",
	"--radius-sm",
	"--radius-md",
	"--radius-lg",
	"--radius-full",
	"--shadow-sm",
	"--shadow-md",
	"--shadow-lg",
	"--duration-fast",
	"--duration-normal",
	"--duration-slow",
];

export default contractTokens;
```

Crear `src/designs/base/manifest.ts`:

```ts
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import type DesignManifest from "../types";

const base: DesignManifest = {
	id: "base",
	label: "Base",
};

export default base;
```

Crear `src/designs/raw/tokens.css`:

```css
[data-design="raw"] {
	--font-display: "Archivo Black", sans-serif;
	--font-heading: "Archivo Black", sans-serif;
	--font-body: "Archivo", system-ui, sans-serif;
	--font-sans: "Archivo", system-ui, sans-serif;
	--font-mono: "Space Mono", ui-monospace, monospace;

	--heading-transform: uppercase;
	--heading-tracking: 0;

	--text-3xl: 2.125rem;
	--text-4xl: 2.75rem;

	--color-text: #000000;
	--color-text-muted: #444439;
	--color-background: #fffef2;
	--color-surface: #f5f2df;
	--color-border: #000000;
	--color-border-hover: #000000;

	--color-primary: #0000ee;
	--color-primary-hover: #0000bb;
	--color-primary-focus: #0000ee;

	--color-button-primary-bg: #ffe600;
	--color-button-primary-bg-hover: #ffd000;
	--color-button-primary-text: #000000;

	--radius-sm: 0;
	--radius-md: 0;
	--radius-lg: 0;
	--radius-xl: 0;
	--radius-2xl: 0;
	--radius-full: 0;

	--border-width: 3px;
	--border-width-thick: 4px;

	--shadow-sm: 3px 3px 0 0 #000000;
	--shadow-md: 6px 6px 0 0 #000000;
	--shadow-lg: 9px 9px 0 0 #000000;
	--shadow-xl: 12px 12px 0 0 #000000;

	--duration-fast: 0.05s;
	--duration-normal: 0.08s;
	--duration-slow: 0.15s;
	--ease-out: linear;
	--ease-in-out: linear;
}

[data-theme="dark"][data-design="raw"] {
	--color-text: #f5f5f0;
	--color-text-muted: #b9b9ae;
	--color-background: #0a0a0a;
	--color-surface: #161616;
	--color-border: #f5f5f0;
	--color-border-hover: #ffe600;

	--color-primary: #ffe600;
	--color-primary-hover: #fff266;
	--color-primary-focus: #ffe600;

	--color-button-primary-bg: #ffe600;
	--color-button-primary-bg-hover: #fff266;
	--color-button-primary-text: #000000;

	--shadow-sm: 3px 3px 0 0 #ffe600;
	--shadow-md: 6px 6px 0 0 #ffe600;
	--shadow-lg: 9px 9px 0 0 #ffe600;
	--shadow-xl: 12px 12px 0 0 #ffe600;
}
```

Crear `src/designs/raw/elements.css`:

```css
[data-design="raw"] body {
	background-image:
		repeating-linear-gradient(
			0deg,
			transparent,
			transparent 23px,
			rgb(0 0 0 / 0.05) 23px,
			rgb(0 0 0 / 0.05) 24px
		),
		repeating-linear-gradient(
			90deg,
			transparent,
			transparent 23px,
			rgb(0 0 0 / 0.05) 23px,
			rgb(0 0 0 / 0.05) 24px
		);
}

[data-theme="dark"][data-design="raw"] body {
	background-image:
		repeating-linear-gradient(
			0deg,
			transparent,
			transparent 23px,
			rgb(255 255 255 / 0.06) 23px,
			rgb(255 255 255 / 0.06) 24px
		),
		repeating-linear-gradient(
			90deg,
			transparent,
			transparent 23px,
			rgb(255 255 255 / 0.06) 23px,
			rgb(255 255 255 / 0.06) 24px
		);
}

[data-design="raw"] ::selection {
	background-color: #ffe600;
	color: #000000;
}

html[data-design="raw"] {
	scrollbar-color: #000000 #fffef2;
}

html[data-design="raw"][data-theme="dark"] {
	scrollbar-color: #ffe600 #0a0a0a;
}
```

Crear `src/designs/raw/manifest.ts`:

```ts
import "@fontsource/archivo-black/400.css";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./tokens.css";
import "./elements.css";
import type DesignManifest from "../types";

const raw: DesignManifest = {
	id: "raw",
	label: "Raw",
};

export default raw;
```

Crear `src/designs/index.ts`:

```ts
import base from "./base/manifest";
import raw from "./raw/manifest";
import type DesignManifest from "./types";

const designs: DesignManifest[] = [base, raw];

export const defaultDesignId = base.id;
export default designs;
```

- [ ] **Step 5: Correr tests, verificar que pasan**

Run: `pnpm test`
Expected: PASS todos (registry + contract + los preexistentes; `brands-data.test.ts` sigue verde porque sus fuentes aún existen).

- [ ] **Step 6: Verificar tipos y lint**

Run: `pnpm check && pnpm lint`
Expected: sin errores.

- [ ] **Step 7: Commit**

```bash
git add src/designs tests/designs-registry.test.ts tests/design-contract.test.ts package.json pnpm-lock.yaml
git commit -m "feat(designs): design registry with token contract and raw skin"
```

---

### Task 4: Wiring en layout — data-design, anti-FOUC, fuentes vía registry

**Files:**
- Modify: `src/layouts/layout.astro`
- Modify: `src/styles/base.css` (duración de view transition)

**Interfaces:**
- Consumes: `designs` y `defaultDesignId` de `src/designs`.
- Produces: `<html data-design="…">` aplicado antes del primer paint; CSS y fuentes de todos los diseños en el bundle.

- [ ] **Step 1: Importar registry y retirar imports de fuentes del layout**

En el frontmatter de `src/layouts/layout.astro`:

1. Eliminar las cinco líneas de imports fontsource (`@fontsource/ibm-plex-sans/400.css` … `@fontsource/ibm-plex-mono/500.css`) — ahora viven en `src/designs/base/manifest.ts`.
2. Los tres imports `?url` de preload se QUEDAN en el layout.
3. Agregar después de la línea `import { getTranslations, defaultLocale } from "../i18n/utils";`:

```ts
import designs, { defaultDesignId } from "../designs";

const designIds = designs.map((design) => design.id);
```

- [ ] **Step 2: Reemplazar el atributo y el script inline de brand**

Cambiar la etiqueta html:

```astro
<html lang={lang} data-theme="light" data-design={defaultDesignId}>
```

Reemplazar el bloque `<script is:inline>` de brand (el que define `STORAGE_KEY = "brand-preference"` y `BRANDS = [...]`) por:

```astro
<script is:inline define:vars={{ designIds, defaultDesignId }}>
  (function () {
    const STORAGE_KEY = "design-preference";

    function getStoredDesign() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return designIds.includes(parsed) ? parsed : null;
      } catch (e) {
        return null;
      }
    }

    document.documentElement.setAttribute(
      "data-design",
      getStoredDesign() || defaultDesignId,
    );
  })();
</script>
```

- [ ] **Step 3: Duración de la view transition**

Al final de `src/styles/base.css` agregar:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.4s;
}
```

- [ ] **Step 4: Verificar**

Run: `pnpm check && pnpm lint && pnpm build && pnpm test`
Expected: todo verde.

Luego `pnpm dev` y en el browser:
1. `localhost:4321` se ve idéntico (Base).
2. En DevTools console: `localStorage.setItem("design-preference", JSON.stringify("raw")); location.reload()` → la página carga YA en Raw (hueso/amarillo/Archivo Black) sin flash del diseño Base.
3. `localStorage.removeItem("design-preference"); location.reload()` → vuelve a Base.

- [ ] **Step 5: Commit**

```bash
git add src/layouts/layout.astro src/styles/base.css
git commit -m "feat(layout): drive design attribute, fonts and anti-FOUC from the registry"
```

---

### Task 5: design-switcher + i18n + View Transitions

**Files:**
- Create: `src/scripts/design.ts`
- Create: `src/components/common/design-switcher/design-switcher.astro`
- Create: `src/components/common/design-switcher/get-design-switcher-data.ts`
- Create: `src/components/common/design-switcher/design-switcher-client.ts`
- Create: `src/components/common/design-switcher/components/design-switcher-view.astro`
- Modify: `src/i18n/translations/en.ts`, `src/i18n/translations/es.ts`
- Modify: `src/components/sections/hero/get-hero-data.ts:52`
- Modify: `src/components/sections/header/components/desktop-nav.astro`, `src/components/sections/header/components/mobile-nav.astro`

**Interfaces:**
- Consumes: `designs`/`defaultDesignId` del registry; `getItem`/`setItem` de `src/libs/storage`; keys i18n nuevas.
- Produces: `setDesign(designId: string): void` en `src/scripts/design.ts`; componente `<DesignSwitcher />`.

- [ ] **Step 1: Keys i18n**

En `src/i18n/translations/en.ts`, reemplazar las keys `"brand.switcherLabel"` y `"brand.heroNote"` por:

```ts
	"design.switcherLabel": "Site design — white-label demo",
	"design.heroNote":
		"This site is white-label too — flip the design switcher in the header and the entire skin changes. Same layout, different product.",
```

En `src/i18n/translations/es.ts`, reemplazar las equivalentes por:

```ts
	"design.switcherLabel": "Diseño del sitio — demo white-label",
	"design.heroNote":
		"Este sitio también es white-label — usa el switcher de diseño del header y cambia la piel completa. Mismo layout, otro producto.",
```

En `src/components/sections/hero/get-hero-data.ts` cambiar `t("brand.heroNote")` → `t("design.heroNote")`.

- [ ] **Step 2: Script de dominio**

Crear `src/scripts/design.ts`:

```ts
import designs, { defaultDesignId } from "../designs";
import { getItem, setItem } from "../libs/storage";

const STORAGE_KEY = "design-preference";
const DESIGN_ATTRIBUTE = "data-design";

export function getStoredDesign(): string | null {
	const stored = getItem<string>(STORAGE_KEY);
	if (stored && designs.some((design) => design.id === stored)) {
		return stored;
	}
	return null;
}

export function getResolvedDesign(): string {
	return getStoredDesign() ?? defaultDesignId;
}

export function applyDesign(designId: string): void {
	if (typeof window === "undefined") return;
	document.documentElement.setAttribute(DESIGN_ATTRIBUTE, designId);
}

export function setDesign(designId: string): void {
	if (typeof window === "undefined") return;
	setItem(STORAGE_KEY, designId);
	applyDesign(designId);
}
```

- [ ] **Step 3: Data provider**

Crear `src/components/common/design-switcher/get-design-switcher-data.ts`:

```ts
import designs from "../../../designs";
import { getTranslations } from "../../../i18n/utils";

export interface DesignSwitcherData {
	label: string;
	designs: { id: string; label: string }[];
}

export default function getDesignSwitcherData(
	lang: string,
): DesignSwitcherData {
	const t = getTranslations(lang);

	return {
		label: t("design.switcherLabel"),
		designs: designs.map(({ id, label }) => ({ id, label })),
	};
}
```

- [ ] **Step 4: Cliente con View Transitions**

Crear `src/components/common/design-switcher/design-switcher-client.ts`:

```ts
import { setDesign } from "../../../scripts/design";

const clickHandlers = new WeakMap<Element, () => void>();

function updateActiveState(): void {
	const current = document.documentElement.getAttribute("data-design");
	const buttons = document.querySelectorAll<HTMLElement>(
		".design-switcher__option",
	);

	for (const button of buttons) {
		const isActive = button.dataset.designId === current;
		button.setAttribute("aria-pressed", String(isActive));
	}
}

function switchDesign(designId: string): void {
	const apply = () => {
		setDesign(designId);
		updateActiveState();
	};

	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	if (prefersReducedMotion || !document.startViewTransition) {
		apply();
		return;
	}

	document.startViewTransition(apply);
}

function cleanup(): void {
	for (const button of document.querySelectorAll(".design-switcher__option")) {
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
		".design-switcher__option",
	)) {
		const handler = () => {
			const designId = button.dataset.designId;
			if (designId) {
				switchDesign(designId);
			}
		};
		clickHandlers.set(button, handler);
		button.addEventListener("click", handler);
	}
}

export default function initDesignSwitcher(): void {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	document.addEventListener("astro:before-swap", cleanup);
}
```

- [ ] **Step 5: Vista y wrapper**

Crear `src/components/common/design-switcher/components/design-switcher-view.astro`:

```astro
---
import type { DesignSwitcherData } from "../get-design-switcher-data";

interface Props {
  data: DesignSwitcherData;
}

const { data } = Astro.props;
---

<div class="design-switcher" role="group" aria-label={data.label}>
  {
    data.designs.map((design) => (
      <button
        type="button"
        class="design-switcher__option"
        data-design-id={design.id}
        aria-pressed="false"
      >
        {design.label}
      </button>
    ))
  }
</div>

<script>
  import initDesignSwitcher from "../design-switcher-client";

  initDesignSwitcher();
</script>

<style>
  .design-switcher {
    display: flex;
    gap: var(--space-1);
  }

  .design-switcher__option {
    padding: var(--space-1) var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--color-text-muted);
    background: none;
    border: var(--border-width) solid transparent;
    cursor: pointer;
    transition: var(--transition-fast);
  }

  .design-switcher__option:hover {
    color: var(--color-text);
    border-color: var(--color-border);
  }

  .design-switcher__option[aria-pressed="true"] {
    color: var(--color-text);
    border-color: var(--color-border-hover);
  }

  .design-switcher__option:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
</style>
```

Crear `src/components/common/design-switcher/design-switcher.astro`:

```astro
---
import { defaultLocale } from "../../../i18n/utils";
import DesignSwitcherView from "./components/design-switcher-view.astro";
import getDesignSwitcherData from "./get-design-switcher-data";

const designSwitcherData = getDesignSwitcherData(
  Astro.currentLocale ?? defaultLocale,
);
---

<DesignSwitcherView data={designSwitcherData} />
```

- [ ] **Step 6: Reemplazar en los navs**

En `desktop-nav.astro` y `mobile-nav.astro`:
- `import BrandSwitcher from "../../../common/brand-switcher/brand-switcher.astro";` → `import DesignSwitcher from "../../../common/design-switcher/design-switcher.astro";`
- `<BrandSwitcher />` → `<DesignSwitcher />`

- [ ] **Step 7: Verificar**

Run: `pnpm check && pnpm lint && pnpm test && pnpm build`
Expected: todo verde (`i18n-parity` incluido).

`pnpm dev` en el browser:
1. Header muestra "Base | Raw".
2. Click en Raw → crossfade (~0.4s) hacia la piel brutalist; click Base → vuelve.
3. Reload conserva el diseño elegido.
4. `aria-pressed` refleja el activo.

- [ ] **Step 8: Commit**

```bash
git add src/scripts/design.ts src/components/common/design-switcher src/components/sections/header src/components/sections/hero/get-hero-data.ts src/i18n
git commit -m "feat(designs): design switcher with view transitions"
```

---

### Task 6: Limpieza del sistema brand

**Files:**
- Delete: `src/components/common/brand-switcher/` (carpeta completa)
- Delete: `src/scripts/brand.ts`
- Delete: `src/data/brands.ts`
- Delete: `src/styles/tokens/brands.css`
- Delete: `tests/brands-data.test.ts`
- Modify: `src/styles/index.css` (quitar import de brands.css)

**Interfaces:**
- Consumes: nada. Produces: nada — solo elimina el sistema reemplazado.

- [ ] **Step 1: Borrar archivos**

```bash
git rm -r src/components/common/brand-switcher
git rm src/scripts/brand.ts src/data/brands.ts src/styles/tokens/brands.css tests/brands-data.test.ts
```

- [ ] **Step 2: Quitar el import**

En `src/styles/index.css` eliminar la línea:

```css
@import "./tokens/brands.css";
```

- [ ] **Step 3: Verificar que no quedan referencias**

Run: `grep -rn "brand" src/ tests/ --include="*.ts" --include="*.astro" --include="*.css" | grep -vi "white-label"`
Expected: sin resultados de código (solo pueden quedar menciones de contenido tipo "branded apps" en traducciones — esas son texto del CV y se quedan).

Run: `pnpm check && pnpm lint && pnpm test && pnpm build`
Expected: todo verde.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore(designs): remove superseded brand switcher system"
```

---

### Task 7: Verificación final — suite completa + revisión visual UX/UI con Chrome MCP

**Files:**
- Ninguno nuevo; correcciones puntuales si la revisión encuentra defectos.

- [ ] **Step 1: Suite completa**

Run: `pnpm test && pnpm check && pnpm lint && pnpm build`
Expected: todo verde.

- [ ] **Step 2: Revisión visual con Chrome MCP (mentalidad UX/UI profesional)**

Con `pnpm dev` corriendo, usar las herramientas de Chrome MCP (cargar vía ToolSearch, crear tab nueva) y recorrer las 8 combinaciones: {Base, Raw} × {light, dark} × {`/`, `/es/`}. Esto NO es un smoke test — es crítica de diseño. En cada combinación, con capturas de pantalla completas, evaluar:

1. **Jerarquía tipográfica:** ¿el hero manda? ¿los headlines de sección dominan sobre el cuerpo? En Raw: ¿Archivo Black uppercase se ve intencional y no roto (sin overflow, sin wraps feos en ES, que suele ser más largo)?
2. **Contraste:** texto muted legible en ambos fondos; amarillo #ffe600 NUNCA como color de texto sobre claro; links azul #0000ee visibles en Raw light; verificar dark Raw (amarillo sobre #0a0a0a).
3. **Espaciado y alineación:** el layout no debe romperse con bordes de 3px ni con la escala tipográfica de Raw (revisar cards, timeline, badges, header en mobile ~375px y desktop ~1280px).
4. **Estados interactivos:** hover de botones/cards/switchers en ambos diseños; focus-visible con teclado (Tab por el header); `aria-pressed` correcto.
5. **Coherencia de cada piel:** Base debe seguir siendo el minimal actual sin UN píxel cambiado; Raw debe sentirse un producto distinto pero terminado (textura de grid visible pero sutil, selection amarilla, scrollbar negra/amarilla).
6. **El switch:** transición fluida sin flash blanco; sin FOUC al recargar en Raw.

- [ ] **Step 3: Corregir defectos encontrados**

Cada defecto se corrige respetando las fronteras: defecto de piel → `src/designs/raw/*.css`; defecto de contrato → tokens base + componente; JAMÁS reglas de diseño dentro de componentes. Re-verificar la combinación afectada tras cada fix.

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "fix(designs): polish raw skin after visual UX review"
```

(Si no hubo defectos, omitir este commit.)
