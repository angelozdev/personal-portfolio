# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** hiring teams — recruiters, engineering managers and technical interviewers — at US startups and scaleups that hire in LATAM (EOR or contractor, USD, remote), plus remote-first European product companies. They arrive from LinkedIn, a CV or a referral, on desktop or phone, doing a fast credibility check between other candidates. They are deciding whether to start a conversation, not reading a portfolio for pleasure.

**Secondary:** engineers evaluating the open-source work (`rustify-ts`, `chrono-convert`, Quaestor) who land from npm or GitHub.

The site serves two readers at once: a frontend/full-stack senior reader (the entry door) and an AI-engineering reader (the destination). Both must find their evidence without the other's getting in the way.

## Product Purpose

A bilingual (EN/ES) personal portfolio for Angelo Zambrano at `angelozdev.com`. It exists to convert a fast credibility check into a conversation. Success is an inbound email or LinkedIn message from a hiring team that already understood the level of the work before writing.

It is not a blog, a personal brand project, or a freelance shopfront. There is no lead capture, no newsletter, no contact form.

## Positioning

Two claims a neighboring portfolio could not truthfully copy:

1. **White-label architecture at production scale.** One React Native codebase → 10 independently branded apps, each with its own store listing and CI pipeline (iOS schemes / Android flavors), 50K+ users, no critical crashes.
2. **The site is itself the demo of that claim.** A design switcher in the header re-skins the entire site through token overrides (`data-design`), the same mechanism as the theme switch. The white-label achievement cannot be published as a client list, so the site proves it by being white-label.

Supporting: a design system built solo that an entire IoT platform runs on, and applied AI engineering built by hand (own MCP server, tool calling from own backend, provider-agnostic LLM layer) rather than UI over someone else's AI feature.

Positioning is **AI Engineer as destination, senior frontend/full-stack as the entry door**. Machine learning is deliberately out of scope: the angle is applied AI engineering.

## Operating Context

- Visitors evaluate in minutes, often on a phone, often with several tabs open. Depth lives in the CV and LinkedIn; the site's job is signal density.
- The site is the primary written evidence in a hiring process where the spoken interview is the weaker link, so the writing and the code carry more weight than usual.
- Both languages ship for every change: every key exists in `src/i18n/translations/en.ts` **and** `es.ts`. The `i18n-parity` test enforces it.
- Content is authored from an internal reference document (`me.md`, untracked and not for publication). Product copy in the repo is the published subset of it — never copy internal strategy, self-assessments, or unpublished client detail into shipped copy.

## Capabilities and Constraints

**Shipped**

- Static Astro site, two routes: `/` (EN, default) and `/es/`.
- Sections in fixed order: Hero → Projects → Experience → Skills → About → Contact. Evidence first; About closes before contact.
- Light/dark theme plus a pluggable design system (`src/designs/`): each skin is a full skin — typography, color, borders, shadows, motion — declared in its own `tokens.css` / `elements.css` under `[data-design="<id>"]`, registered in `src/designs/index.ts`.
- Contact: copy-to-clipboard email (never plain text — scraper avoidance), LinkedIn, GitHub, CV download. **No contact form.**
- Five project cards, short-form. No case studies.
- Skills grouped by category with no declared levels, no percentage bars.

**Constraints that future work must preserve**

- **The design system is an open contract.** More skins will ship. Adding one must never require touching a component. Every skin overrides only tokens listed in `src/designs/contract.ts`; skins never reference component classes, and `elements.css` uses element selectors only (`html`, `body`, `::selection`).
- **The site does not declare an active job search.** Availability states modality and location only (`Remote · Medellín, Colombia (UTC−5)`). No "Open to roles", no "Available for hire".
- **No invented credentials or metrics.** No education section (no formal degree; courses are not listed). Only claims traceable to the internal reference document.
- **Client confidentiality.** Internal application names of the consultancy client are never published; code snippets use generic identifiers. The 10 white-label apps cannot be named. Publishing platform screenshots or naming apps requires written approval that does not yet exist.
- **Skills list only what is defensible for 20 minutes in an interview.** Rust and Swift are deliberately excluded despite being on GitHub.
- **`5+ years` of experience is valid through November 2026.** Revisit the claim then (start: November 2020).
- No blog. No analytics-driven content strategy. No testimonials.
- Deployed as a static build on Vercel, which needs `ENABLE_EXPERIMENTAL_COREPACK=1` to honor the pinned pnpm version. Recorded from build history; no platform config is committed.

**Undecided / not established**

- Missing verifiable numbers, not to be invented: the 0 → 50K user growth period, time to launch a new white-label app, exact component count and adoption of the design system, store ratings and download counts, performance before/after adopting error monitoring.

## Brand Commitments

- Name and identity: Angelo Zambrano. Domain `angelozdev.com`. Handle `angelozdev` on GitHub, LinkedIn and npm.
- Header monogram: `AZ`.
- Voice: first person, plain, specific, no superlatives. States mechanisms and numbers, not adjectives. Admits scope honestly ("built solo", "in daily use", "~3 weeks").
- Section labels read as a technical document: numbered comment markers (`// 01 · projects` … `// 05 · contact`); experience highlights read as diff additions (`+`).
- Both locales are first-class; neither is a translation afterthought.

## Evidence on Hand

**Real and public**

- Quaestor — `github.com/angelozdev/quaestor` (MIT, in daily use). ADRs in its own `docs/adr/`.
- `rustify-ts` and `chrono-convert` on npm. `chrono-convert` runs in production in the mobile app. Download counts exist but are deliberately not cited.
- Ubidots Mobile store listings: App Store and Google Play (linked from the Projects section).
- Profile photo: `src/assets/angelozam.avif`.
- Quaestor screenshot: `src/assets/projects/quaestor.avif` (chat over sample data).

**Missing — must not be faked or silently dropped**

- `public/cv.pdf` — the CV download currently 404s.
- `public/og.png` — 1200×630 social card; every shared link currently renders without an image.
- `public/favicon.svg` — present, but confirm it is the personal monogram and not the Astro default.
- `src/assets/projects/ubidots-mobile.*` — declared in `get-projects-data.ts` but absent; the card silently falls back to text-only.
- No public Storybook for the design system; that card ships without a link. No public proof for the "10 apps" claim.

## Product Principles

1. **Evidence before self-description.** Projects and experience come before About. Every claim names a mechanism, a scale, or a link.
2. **The site is the proof.** Where a claim cannot be published (white-label apps, private design system), the site demonstrates the capability instead of asserting it.
3. **Honest scope beats inflated scope.** Confirmed facts only; absences stay visible rather than being filled with plausible copy.
4. **Bilingual by construction, never by afterthought.** Anything a visitor can perceive — including accessible names and screen-reader-only text — ships in both languages.
5. **Signal density over depth.** Short cards, no case studies; depth lives in the CV and LinkedIn.

## Accessibility & Inclusion

**WCAG 2.2 level AA is a binding product requirement.** No shipped work may fall below it, and a regression is a defect, not a polish item.

Rationale, recorded so it is not relitigated: accessibility is a declared skill on this site and the design system it advertises ships accessibility tests. A contrast or keyboard failure here contradicts the product's central claim.

Specific requirements:

- Keyboard operability and a visible, design-system-owned focus indicator on every interactive element — never the browser default.
- Motion respects `prefers-reduced-motion`, including motion introduced by third-party libraries.
- In-page navigation moves focus, not only the viewport.
- Status changes (such as copy-to-clipboard confirmation) are announced to assistive technology.
- Accessible names and alternative text are localized in both EN and ES.
