# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is an Astro 5 portfolio site using the basics starter template with file-based routing.

**Key directories:**
- `src/pages/` - File-based routing (each .astro file becomes a route)
- `src/layouts/` - Page wrapper components (Layout.astro provides HTML shell)
- `src/components/` - Reusable Astro components
- `src/assets/` - Images/assets processed by Astro's build pipeline
- `public/` - Static assets served as-is (favicon, etc.)

**Astro component structure:**
- Frontmatter (between `---` fences) runs at build time on the server
- Template below frontmatter renders to HTML
- `<style>` tags are scoped to the component by default
- Use `<slot />` in layouts to inject child content

## TypeScript

Uses Astro's strict TypeScript config. Type definitions are auto-generated in `.astro/types.d.ts`.
