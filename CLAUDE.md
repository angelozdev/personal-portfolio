# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
pnpm dev      # Start dev server at localhost:4321
pnpm build    # Build for production to ./dist/
pnpm preview  # Preview production build locally
```

## Architecture

Astro 5 portfolio site with i18n support (EN default, ES) and file-based routing.

### Key Directories

- `src/pages/` - File-based routing. Default locale (EN) at root, ES at `/es/`
- `src/layouts/layout.astro` - HTML shell with SEO, fonts, Lenis smooth scroll
- `src/components/sections/` - Page sections (hero, about, projects, skills, experience, contact)
- `src/components/common/` - Reusable components (button, container, anchor, language-switcher)
- `src/i18n/` - Internationalization (translations + utilities)
- `src/styles/tokens/` - Design tokens (colors, typography, spacing, etc.)
- `src/data/` - Static data fixtures (stack, metrics)
- `src/constants/` - Enums and constants (section IDs)

### i18n System

Translations are TypeScript files for type safety:
- `src/i18n/translations/en.ts` - English (default)
- `src/i18n/translations/es.ts` - Spanish
- `src/i18n/utils.ts` - `getTranslations(lang)`, `getLangFromUrl()`, `getLocalizedPath()`

Usage in components:
```astro
---
import { getTranslations } from "../i18n/utils";
const t = getTranslations(Astro.currentLocale);
---
<h1>{t("hero.title")}</h1>
```

### Styling Conventions

- **BEM naming**: `.block__element--modifier`
- **Design tokens**: CSS custom properties in `src/styles/tokens/`
- **Scoped styles**: Default in Astro, use `is:global` when needed
- **Fonts**: IBM Plex Sans (body) and IBM Plex Mono (code)

### Linting

Uses Biome for linting/formatting. No script configured; run directly:
```bash
pnpm biome check .        # Check for issues
pnpm biome check --fix .  # Auto-fix issues
```

## TypeScript

Uses Astro's strict TypeScript config. Type definitions auto-generated in `.astro/types.d.ts`.

### Export Convention

Always use `export default` for functions and components. Prefer default exports over named exports.
