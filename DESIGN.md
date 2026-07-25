---
name: Angelo Zambrano Portfolio
description: A skinnable spec sheet — one token contract, many personalities, proving white-label architecture by being white-label.
colors:
  ink: "#33332d"
  paper: "#ffffff"
  surface: "#fafafa"
  muted: "#525252"
  border: "#e5e5e5"
  border-strong: "#a3a3a3"
  border-interactive: "#737373"
  accent: "#2563eb"
  accent-dark: "#93c5fd"
  success: "#15803d"
typography:
  display:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.025em"
rounded:
  sm: "0.125rem"
  md: "0.375rem"
  lg: "0.5rem"
  full: "9999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "16": "4rem"
  "20": "5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "#404040"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1rem"
    typography: "{typography.label}"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  nav-anchor:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.25rem"
    typography: "{typography.label}"
  nav-anchor-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  inline-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  inline-link-hover:
    textColor: "{colors.accent}"
  badge-default:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.5rem"
    typography: "{typography.label}"
  card-project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  switcher-option:
    textColor: "{colors.muted}"
    padding: "0.25rem 0.5rem"
    typography: "{typography.label}"
  switcher-option-active:
    textColor: "{colors.ink}"
---

# Design System: Angelo Zambrano Portfolio

## Overview

**Creative North Star: "The Skinnable Spec Sheet"**

This system is not an aesthetic. It is a **contract** that holds several aesthetics without flinching. One token contract (`src/designs/contract.ts`) defines what a skin may redefine; everything else — the grid, the spacing rhythm, the type hierarchy, the component structure, the required states, the accessibility floor — is law that no skin may touch. Base is the spec sheet printed on a laser printer. Raw is the same sheet run through a risograph. The visitor can flip between them in the header and nothing shifts but the skin: same reticule, same hierarchy, same token names. **The seam is the product.** The site claims a white-label architecture that turns one codebase into ten branded apps; rather than assert it, the site is that architecture.

The Base skin reads as a technical document rather than a marketing page: numbered comment markers (`// 01 · projects`) open every section, experience highlights read as diff additions (`+`), and monospace marks machine artifacts — stack lists, metrics, dates, code, controls. Density is high and deliberate: a visitor scanning for two minutes should hit evidence in every screen, never a decorative interlude. Nothing animates on scroll. Nothing floats that isn't floating.

The two skins are not two moods of one taste; they are two personalities served by one skeleton. Base is **precise and unadorned** — 2px corners, 1px hairlines, 100ms ease-out, judged by whether the alignment and rhythm are exactly right. Raw is **a printed poster** — Archivo Black in all caps, zero radius, 3px black rules, shadow as displaced ink with no blur, 50–80ms linear timing that feels mechanical rather than smooth, signal yellow and default-browser blue. Both are honest; neither is the other's decoration.

**Key Characteristics:**

- A token contract is the system; skins are interchangeable personalities on top of it
- Structure carried by hairlines and surface shifts, not shadows
- Monospace as machine notation, never as costume for prose
- Near-square geometry in Base (2px), zero in Raw — no skin uses friendly radii
- Content density over breathing room; evidence over atmosphere
- Motion is state feedback plus one authored moment (the skin change)

## Colors

A near-neutral system with a single accent, so that a skin's identity comes from its neutrals and its geometry rather than from a palette of hues.

### Primary

- **Signal Blue Deep** (`#2563eb`, 5.17:1 on paper): the interactive accent in Base light — link hover, focus rings, primary states. The 500 step of the same ramp (`#3b82f6`) reads brighter but only reaches 3.68:1, so it is not an accent value here: the accent is pinned to the lightest step that clears 4.5:1 as text. In dark mode the accent inverts to **Ice Blue** (`#93c5fd`, 9.94:1 on graphite) rather than dimming.

### Neutral

- **Warm Graphite** (`#33332d`): all primary text. Not pure black — a green-warm cast that reads as ink rather than as screen black, and the reason the site never looks harsh at large display sizes.
- **Paper** (`#ffffff`): the page ground in light mode.
- **Tinted Paper** (`#fafafa`): the raised-by-tone surface for project cards and secondary-button hover. This is the depth mechanism.
- **Quiet Slate** (`#525252`, 7.81:1 on paper): secondary text — section markers, metadata, stack lists, labels.
- **Hairline** (`#e5e5e5`): the 1px rule that separates everything. Decorative separation only — at 1.26:1 it is a whisper, which is the point.
- **Hairline Strong** (`#a3a3a3`): the hover-state border and timeline separators.
- **Interactive Edge** (`#737373`, 4.74:1 on paper / 3.78:1 on graphite): the border of a control whose outline *is* its affordance — the secondary button. Separate from Hairline precisely because a decorative rule may whisper and a control boundary may not: WCAG 1.4.11 asks 3:1 of anything that tells you where a control is. One value serves both themes.

Dark mode is not an inversion of tint but a re-mapping of the same roles: **Graphite** ground (`#171717`), **Graphite Raised** surface (`#262626`), text at `#f5f5f5` (16.44:1), secondary at `#a3a3a3` (7.11:1), hairlines at `#404040`.

### Tertiary

- **Live Green** (`#15803d` light, `#4ade80` dark): status only — the availability indicator and the `+` diff marker on experience highlights. Nothing else. A green fill on a button reads as a foreign skin, especially in Raw, where the primary button is signal yellow: confirmation is expressed by the icon and the label, never by recoloring the control.

### Skin: Raw

Raw replaces the neutrals wholesale and keeps the same roles: **Newsprint Cream** ground (`#fffef2`), pure black text and 3px black rules, **Signal Yellow** (`#ffe600`) as the primary button and the dark-mode accent, and `#0000ee` — the browser's own default link blue, used deliberately as a period reference rather than as a brand color. Its dark mode drops to near-black (`#0a0a0a`) with yellow rules and yellow shadows.

### Named Rules

**The Contract Rule.** A component never names a color. It names a role token (`--color-text`, `--color-surface`, `--color-border`). If a component needs a hex, the system is missing a token — add the token, and add it to the contract if a skin should be able to retune it.

**The AA Floor Rule.** Interactive text clears 4.5:1 in every skin and both themes; non-text UI clears 3:1. The accent step is chosen per skin to clear the floor — never the floor lowered to fit the accent.

**The One Accent Rule.** One accent hue per skin. A second hue must earn its place by carrying a distinct semantic (status green does; nothing else has), never by decorating.

## Typography

**Display Font:** IBM Plex Mono (with `ui-monospace`, `monospace`) — Base; Archivo Black (with `sans-serif`) — Raw
**Body Font:** IBM Plex Sans (with `system-ui`, `sans-serif`) — Base; Archivo — Raw
**Label/Mono Font:** IBM Plex Mono — Base; Space Mono — Raw

**Character:** Base pairs a humanist sans that stays legible at 14px with the monospace from the same family, so the machine voice and the prose voice are visibly related — one typeface family doing two jobs. The name in the hero is set in the *mono* face at display size, which is the system's clearest statement of intent: the person is presented in the same notation as the code. Raw breaks the relationship on purpose: a display face with no text sibling (Archivo Black), a workhorse sans, and a mono with slab-like terminals.

### Hierarchy

- **Display** (700, 2.25rem, mono, uppercase, -0.025em): the name in the hero. Once per page.
- **Headline** (700, 1.875rem → 1.5rem below 768px, 1.25 leading, -0.025em): section titles. Skin-controlled optical size.
- **Title** (600–700, 1.125rem; 1.5rem in project cards at container ≥640px): project names, role names.
- **Body** (400, 1rem, 1.625 leading): prose paragraphs and metric lists. The measure is bounded by the `md` container (768px) in the hero and by column width elsewhere — never full-width prose at 1280px.
- **Label** (400–500, 0.75–0.875rem, mono; uppercase with 0.025em tracking for badges and group titles): section markers, metadata, stack lists, controls, badges, timeline periods.

### Named Rules

**The Optical Size Rule.** A skin may retune the display sizes (`--text-2xl` … `--text-4xl`) to its face's optical weight — Archivo Black at 1.875rem reads far larger than IBM Plex Sans at 1.875rem, so matching the numbers would be the error. It may never reorder the hierarchy: 4xl > 3xl > 2xl in every skin, and body sizes are invariant so prose never changes size between skins.

**The Mono-Means-Machine Rule.** Monospace marks machine artifacts: code, section markers, stack lists, metrics, dates, periods, controls, badges. Prose is never monospace. The one deliberate exception is the hero name at display size — a claim, not a habit.

**The No-Eyebrow Rule.** The `// NN · section` marker is the *only* pre-heading device. Never add a second kicker style, tracked uppercase eyebrow, or decorative rule above a heading; the numbered sequence is the grammar and a competing one dilutes it.

## Layout

One column, one container, one rhythm. Everything sits inside a max-1280px container (`--breakpoint-xl`) with 1rem gutters and auto margins; the hero narrows to 768px so its prose keeps a readable measure. Sections are separated by 5rem of vertical padding (`--space-20`) top and bottom — the only vertical rhythm in the system — and section internals stack in a flex column with 1.5–2rem gaps.

Multi-column moments are rare and each is earned:

- **Project grid:** two equal columns with 1.5rem gaps; the featured project spans both. Collapses to one column below 768px.
- **Skills:** a definition list on a `12rem 1fr` grid — mono group title left, inline term list right, separated by hairlines. Collapses to stacked below 768px.
- **Experience timeline:** a `max-content 1fr` grid with the period column left and a hairline rail with dot markers right, using CSS subgrid so every entry shares the parent's columns. Below 640px the rail moves to a pseudo-element on the left edge and the period sits above the entry.
- **Hero:** photo and content side by side with a 4rem gap; stacks and centers below 768px.

Density is high: 4–8px inside a group, 16–24px between groups, 80px between sections. Breakpoints are 640 / 768 / 1024 / 1280 / 1536, but only three are used — 640 (timeline), 768 (section reflow), 1024 (desktop nav → burger).

### Named Rules

**The Single Container Rule.** Everything is inside `Container`. Nothing bleeds full-width, nothing sets its own max-width, nothing centers itself with its own margins.

**The Container Query Rule.** Project cards respond to *their own* width, not the viewport (`container-type: inline-size`, `@container (min-width: 640px)`). A card placed in a narrow slot reflows itself correctly with no breakpoint bookkeeping. New composite components follow this, not media queries.

## Elevation & Depth

**This system is flat.** Depth comes from two devices only: a 1px hairline border and a tonal surface shift (`paper` → `tinted paper`, `graphite` → `graphite raised`). Project cards, badges, code blocks and the header are all flat at rest and stay flat on hover — the hover response is a *border color* change, never a lift. The shadow scale exists in tokens, but exactly one shadow renders anywhere on the page: the popover, because a popover genuinely floats above the document.

Raw keeps the same doctrine and changes the material: its shadows are hard offsets with zero blur (`3px 3px 0 #000`, yellow in dark mode), which read as misregistered print rather than as light. Same rule, different physics.

### Shadow Vocabulary

- **Overlay** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): popovers, menus, dialogs. The only shadow in use.
- **Displaced ink — Raw** (`box-shadow: 3px 3px 0 0 #000000`): Raw's overlay and border-adjacent depth. Offset, zero blur, full opacity.

### Named Rules

**The Only-What-Floats Rule.** A shadow is permitted only on an element that is physically above the page: popover, menu, modal, dropdown. A card, a badge, a section or an input never gets one. If something needs to feel separated, give it a hairline or a surface tint.

## Shapes

Corners are almost square. Base radius is 2px (`--radius-sm`) on buttons, badges, code blocks and focus rings — enough to avoid a raw cut corner, far too little to read as "rounded". Cards go to 6px (`--radius-md`), and 8px (`--radius-lg`) only when a card widens past its 640px container query. The single full radius in the system is the hero portrait.

Borders are the primary structural device: 1px hairlines everywhere, from the header logo box to the card outline to the timeline rail to the skills separators. The secondary button *is* its border — transparent ground, 1px outline, surface tint on hover.

Raw takes every radius to zero, including the portrait, and every border to 3px. The grid paper background (24px repeating linear gradients at 5% opacity) is drawn on `body` in Raw only, and belongs to the skin's `elements.css`, never to a component.

### Named Rules

**The Almost-Square Rule.** 2px is the house radius. Anything softer than 8px is out of the system, and a pill shape is reserved for the portrait alone.

**The Element-Selector Rule.** A skin's `elements.css` may only style bare elements (`html`, `body`, `::selection`, scrollbars). It never references a component class. A skin that needs a component to change is a signal that the component is missing a token.

## Components

### Buttons

- **Shape:** Almost-square (2px radius), no border on primary.
- **Primary:** Warm graphite ground with paper text, mono medium at 0.875rem, 0.5rem × 1rem padding at `md`. Hover darkens the ground one step (`#404040`). In dark mode the pair inverts (light ground, graphite text); in Raw it becomes signal yellow with black text.
- **Secondary:** Transparent ground, a 1px **Interactive Edge** border (not Hairline), graphite text; hover fills with the surface tint. The border is the whole affordance, which is why it clears 3:1 in every skin.
- **Focus:** an outline of `--border-width-thick` (2px in Base, 4px in Raw) at 2px offset in `--color-primary-focus`, with the house radius. **Declared once globally on `:focus-visible`**, so every control — including any component added later — inherits it. A browser default focus ring anywhere in this project is a defect.
- **Sizes:** `sm` (0.75rem type, 0.25 × 0.75rem), `md` (0.875rem, 0.5 × 1rem), `lg` (1rem, 0.75 × 1.5rem).

### Cards / Containers

- **Corner style:** 6px, widening to 8px when the card's own container passes 640px.
- **Background:** Tinted paper (`surface`), one step off the page ground.
- **Shadow strategy:** None. See Elevation.
- **Border:** 1px hairline; on hover the border moves to hairline-strong. Nothing else changes.
- **Internal padding:** 1.5rem, widening to 2rem past the 640px container query.
- **Behavior:** Below the query the card stacks media over content; above it becomes a two-column grid, and a card with no media collapses back to one column via `:has()`.

### Navigation

- **Desktop (≥1024px):** mono anchors at 1.125rem medium in a flex row, with the controls cluster (skin switcher, theme toggle, language switcher) pushed right. Anchor hover **inverts**: graphite ground, paper text, 2px radius. This inversion is the site's signature interaction.
- **Mobile (<1024px):** a burger trigger opens a native `popover` anchored bottom-end, containing the same anchors at 1.25rem plus the controls cluster below a hairline separator. Links close the popover on click.
- **Active state:** carried by `aria-current="page"` on the language switcher and `aria-pressed` on skin options — visually a border and a text-color step, never a fill.

### Badges

- **Style:** mono, uppercase, semibold, 0.025em tracking, 2px radius, 1px border, paper ground. Used for project qualifiers (`PERSONAL`, `PRODUCT`, `OPEN SOURCE`) and code-block language tags.
- **Semantic variants** (primary / success / warning / error) exist in the component but only `default` ships. They are not part of the visual language until a real status needs them, and their light-mode pairs must be re-derived to clear 4.5:1 before use.

### Skin Switcher (signature component)

A `role="group"` of mono text buttons — one per registered skin, labels from the design registry, `aria-pressed` marking the active one. Visually the quietest control in the header; functionally the loudest thing on the page. Activating it runs a **View Transition** with an authored 1250ms diagonal curtain: the incoming page is revealed through an animated mask gradient at 135° while the outgoing page drifts and scales 4%, with the mask feather tightening from 14% to 5% as it sweeps. This is the system's one authored motion moment. It is skipped entirely under `prefers-reduced-motion`, and the whole skin change is a single attribute flip on `<html>` persisted to `localStorage`, applied pre-paint by an inline script so there is no flash.

### Skip Link

A mono pill in the primary-button colors, parked off-screen with a transform and translated into view only on `:focus-visible`, at the top-left over the header. First tab stop on every page; targets `#main`, which carries `tabindex="-1"` so focus actually lands there.

### Theme Toggle

A 44×44 transparent button holding both sun and moon icons stacked absolutely, cross-fading by opacity class. Scales 1.1 on hover; 2px accent outline on focus. The only component in the system with a transform on hover.

### Code Snippet

A bordered, 2px-radius block on the page ground, opened by a right-aligned language-badge bar over a hairline. The badge sits in the flow rather than over the code: the code area scrolls horizontally, so an overlaid badge would eat a slice of every long line at some scroll position. The `<pre>` is keyboard-reachable (`tabindex="0"`, `role="region"`, localized label) because a region that scrolls must be scrollable without a pointer. Snippets are real code from the described work, never lorem.

### Timeline

A subgrid `<ol>` where each item shares the parent's `max-content 1fr` columns: mono period left, hairline rail right with a 0.5rem dot straddling the rail. Highlights inside an entry are a `+` in mono green on a `auto 1fr` grid — a diff, not a bullet list.

### Named Rules

**The Complete-States Rule.** A component is not done until hover, `:focus-visible`, disabled, error and empty are all designed, in both themes and every skin. Focus is drawn by the system; a browser default focus ring in this project is a defect.

**The Hover-Is-A-Border Rule.** The default hover response is a border-color or text-color step. Fills are for the nav anchor inversion and the primary button. Lifts, scales and shadows are not hover responses — the theme toggle's 1.1 scale is the single sanctioned exception.

**The No-Recolor-On-Success Rule.** A control never changes hue to report success. It swaps its icon and its label, and announces the change to assistive technology through a live region. A control's color belongs to the skin, not to its state.

## Do's and Don'ts

### Do:

- **Do** add a token to `src/designs/contract.ts` when a skin should be able to retune it, and give it a value in **every** skin's `tokens.css` — the contract test enforces total coverage so a skin can never half-inherit.
- **Do** declare a skin's light block as `:root[data-design="<id>"]` and its dark block as `:root[data-theme="dark"][data-design="<id>"]`, re-declaring every contract token the base dark block overrides. Specificity ties resolve by bundle order, which is not stable between builds.
- **Do** express depth with a 1px hairline or a surface tint (`--color-surface`).
- **Do** set section markers, stack lists, metrics, periods, badges and controls in mono, and prose in the sans.
- **Do** use container queries for components that can appear in slots of different widths.
- **Do** keep 5rem (`--space-20`) between sections, 1.5–2rem between groups, 0.25–0.5rem inside a group.
- **Do** let the global `:focus-visible` rule draw focus (`--border-width-thick` outline at 2px offset in `--color-primary-focus`); override it per component only to reposition it, never to remove it.
- **Do** ship real content — real code, real screenshots, real numbers — or ship the honest empty state.

### Don't:

- **Don't** put a hex value in a component. Role tokens only.
- **Don't** reference a component class from a skin's `elements.css`; bare element selectors only.
- **Don't** add a shadow to a card, badge, section, input or button. Shadows belong to things that actually float.
- **Don't** animate on scroll, stagger section entrances, or add a second authored motion moment. The curtain is the one.
- **Don't** exceed 8px of corner radius, and don't use a pill shape on anything but the portrait.
- **Don't** set prose in monospace, and don't add a second pre-heading device alongside `// NN ·`.
- **Don't** lower a contrast ratio to keep an accent value. Move to the next step of the ramp instead.
- **Don't** use Hairline (`--color-border`) as the only boundary of an interactive control; that is what `--color-border-interactive` is for.
- **Don't** recolor a control to report success, and don't spend the status green on anything but the availability dot and the diff marker.
- **Don't** change body type sizes, the spacing scale, breakpoints, the container width, or component structure in a skin. Those are invariants; the skin owns face, color, geometry, depth material and timing only.
- **Don't** let a skin change what a component *means* — same hierarchy, same reading order, same affordances in every skin.
