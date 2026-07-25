# angelozdev.com

Personal portfolio of Angelo Zambrano — software engineer, frontend, mobile and AI. Static Astro site, bilingual (EN/ES), with a design system where the entire skin is interchangeable at runtime.

**Live:** [angelozdev.com](https://angelozdev.com)

## Two things here that aren't boilerplate

**The site is its own proof.** It claims a white-label architecture that turns one React Native codebase into ten independently branded apps. Rather than assert that, the header carries a design switcher: one attribute on `<html>` swaps typography, color, borders, shadows and motion for a completely different skin, through a token contract that no component knows about. Same layout, same markup, different product.

**The tests guard the content, not the code.** A portfolio's real failure mode is overclaiming, so the suite asserts things like:

```
✓ does not claim a job title that does not exist on paper
✓ never claims a mobile team lead title
✓ leaves out technologies that cannot be defended in an interview
✓ keeps availability neutral, with no job-seeking signal
✓ drops the unsourced metrics
✓ never exposes a full email address in the markup data
✓ has no placeholder links
```

If a future edit inflates a claim, CI says so.

## Getting started

Requires Node `18.20.8 || ^20.3.0 || >=22` (Astro 5's range) and pnpm, pinned to 11.3.0 via `packageManager`.

```bash
pnpm install
pnpm dev          # localhost:4321
```

| Command | Action |
| :------ | :----- |
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Static build to `./dist/` |
| `pnpm preview` | Serve the build locally |
| `pnpm test` | Content-integrity suite (vitest) |
| `pnpm check` | Astro + TypeScript diagnostics |
| `pnpm lint` / `lint:fix` | Biome |

## Architecture

```
src/
├── pages/            # / (EN) and /es/ — file-based routing
├── layouts/          # HTML shell: SEO, JSON-LD, pre-paint theme + skin scripts
├── components/
│   ├── sections/     # hero, projects, experience, skills, about, contact, header
│   └── common/       # button, link, badge, popover, timeline, switchers…
├── designs/          # the skin system: contract + one folder per skin
├── styles/tokens/    # the default skin, as CSS custom properties
├── i18n/             # translations as TypeScript, for type-safe keys
├── data/             # static fixtures (stack, skills)
└── constants/        # section ids
```

Every section follows the same three-file split, so content decisions never hide inside markup:

```
sections/about/
├── get-about-data.ts        # content + translation lookups, unit-testable
├── components/about-view.astro   # markup and scoped styles, no data logic
└── about.astro              # resolves the locale, hands data to the view
```

## The design contract

`src/styles/tokens/` is the default skin (`base`). A skin overrides only the tokens listed in [`src/designs/contract.ts`](src/designs/contract.ts) — fonts, heading case, display sizes, semantic colors, radii, border widths, shadows, durations. Everything else is invariant: the spacing scale, body type sizes, breakpoints, container width, component structure.

Adding a skin never touches a component:

1. `src/designs/<id>/tokens.css` — a light block under `:root[data-design="<id>"]` and a dark block under `:root[data-theme="dark"][data-design="<id>"]`, defining **every** contract token. Both selectors need the `:root` prefix: without it they tie with the base blocks on specificity and the winner depends on bundle order.
2. `src/designs/<id>/elements.css` (optional) — bare element selectors only (`body`, `::selection`, scrollbars). A skin that needs to restyle a component means the component is missing a token.
3. `src/designs/<id>/manifest.ts` — `id`, `label`, the fonts to preload, and the `theme-color` for each theme, plus its font-CSS imports.
4. Register it in `src/designs/index.ts`.

`pnpm test` fails if a contract token is missing from any skin. The switcher, the pre-paint anti-FOUC script, the font preloads and the browser `theme-color` all derive from that registry, so there is nothing else to wire.

See [DESIGN.md](DESIGN.md) for the visual system itself: palette roles, type hierarchy, elevation doctrine and the named rules that govern them.

## i18n

Translations are TypeScript objects, so keys are typed and a missing one is a compile error:

```astro
---
import { getTranslations } from "../i18n/utils";
const t = getTranslations(Astro.currentLocale);
---
<h1>{t("hero.title")}</h1>
```

Every key must exist in both `en.ts` and `es.ts` — a test enforces parity, including accessible names and screen-reader-only text. English lives at `/`, Spanish at `/es/`; use `getLocalizedPath()` for cross-locale links.

## Accessibility

WCAG 2.2 level AA is a hard requirement, not an aspiration — the site advertises accessibility work, so a regression here contradicts its own pitch. Specifically:

- Focus is drawn by one global `:focus-visible` rule using design tokens, so every component inherits it and the browser default never appears.
- Motion respects `prefers-reduced-motion`, including the smooth-scroll library and the skin transition.
- In-page navigation moves focus and the URL, not just the viewport.
- Status changes (copying the email) are announced through a live region.

## Optional assets

Three files are referenced but not committed. Nothing breaks without them, and each appears on its own once dropped in:

| File | Effect when present |
| :--- | :--- |
| `public/cv.pdf` | The CV button renders in the contact section |
| `public/og.png` (1200×630) | Social cards use the image and upgrade to `summary_large_image` |
| `src/assets/projects/ubidots-mobile.*` | The Ubidots Mobile card gains its screenshot |

## Conventions

- **CSS:** BEM (`.block__element--modifier`), scoped by default, design tokens over literals.
- **TypeScript:** strict, `export default` for functions and components.
- **Formatting:** Biome — tabs, double quotes, organized imports.
- **Comments:** none. Reasons belong in the commit message.
- **Commits:** Conventional Commits, with a body explaining why when the diff doesn't.

## Docs

- [PRODUCT.md](PRODUCT.md) — who the site is for, what it must preserve, what must never be invented.
- [DESIGN.md](DESIGN.md) — the visual system and its rules.

## Deploy

Static output, deployed on Vercel. Set `ENABLE_EXPERIMENTAL_COREPACK=1` so Vercel honors the pinned pnpm version.
