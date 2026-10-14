# Site Brief Corrections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the site match the supplied Russian content and layout brief, including the Mina-inspired team carousel.

**Architecture:** Keep content in `src/data/site.ts` where it is shared, render page-specific sections in their existing Astro pages, and extend `content.css` only with component-scoped rules. The existing carousel keeps keyboard buttons and touch dragging while its card geometry changes to the Mina-style composition.

**Tech Stack:** Astro, TypeScript, CSS, Node test runner.

**Spec:** `docs/superpowers/specs/2026-10-14-site-brief-design.md`

## Global Constraints

- Use exact text from `правки 2.docx`; do not invent new marketing copy.
- Keep rectangular UI at `var(--corner-radius)` (10px).
- Use the confirmed second-floor capacity: `до 150 гостей`.
- Do not imply that unavailable loyalty channels are active.

## Review Focus

- Desktop carousel shows three complete team cards with working previous/next buttons.
- Narrow layouts remain scrollable and do not crop primary card copy.
- Current-nav state is correct with the `/kaifin/` base path and trailing slashes.
- Loyalty amounts and restrictions preserve the exact percentages and redemption limits.
- Banquet capacity is never rendered as 100–200 after the correction.

---

### Task 1: Shared content and home-page blocks

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/pages/index.astro`
- Modify: `src/components/TeamCarousel.astro`
- Modify: `src/styles/content.css`
- Test: `tests/site-contract.test.mjs`

- [ ] Write failing assertions for up-to-150 capacity, team card structure, and the revised home labels.
- [ ] Run `npm test`; expect the new assertions to fail.
- [ ] Update shared floor, team, and home content; render Mina-style rectangular team cards while preserving carousel controls.
- [ ] Add responsive styles for three desktop cards and touch-scrollable mobile cards.
- [ ] Run `npm test && npm run build`; expect both to pass.
- [ ] Commit `feat: align home team section with brief`.

### Task 2: Loyalty programme content and tiers

**Files:**
- Modify: `src/pages/loyalty.astro`
- Modify: `src/styles/content.css`
- Test: `tests/site-contract.test.mjs`

- [ ] Write failing assertions for all three replacement steps and tiers 5%, 7%, and 10%.
- [ ] Run `npm test`; expect failure.
- [ ] Add supplied step copy, tier cards, and all supplied restrictions and expiry terms.
- [ ] Add responsive tier and terms styling using the shared radius token.
- [ ] Run `npm test && npm run build`; expect both to pass.
- [ ] Commit `feat: add loyalty programme tiers and rules`.

### Task 3: Banquet content and booking guidance

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/pages/banquet/index.astro`
- Modify: `src/pages/banquet/first-floor.astro`
- Modify: `src/pages/banquet/second-floor.astro`
- Modify: `src/styles/content.css`
- Test: `tests/site-contract.test.mjs`

- [ ] Write failing assertions for revised banquet text, hall names, the up-to-150 capacity, and the enquiry phone.
- [ ] Run `npm test`; expect failure.
- [ ] Apply exact supplied headings and hall descriptions; add the phone and form CTA without changing the form delivery behavior.
- [ ] Keep gallery/menu source files local until replacement source images are available.
- [ ] Run `npm test && npm run build`; expect both to pass.
- [ ] Commit `feat: align banquet pages with brief`.

### Task 4: About, promotions, and team-page copy

**Files:**
- Modify: `src/pages/about.astro`
- Modify: `src/pages/promotions.astro`
- Modify: `src/pages/team.astro`
- Modify: `src/data/site.ts`
- Modify: `src/styles/content.css`
- Test: `tests/site-contract.test.mjs`

- [ ] Write failing assertions for each supplied heading, promotion, events placeholder, and career copy.
- [ ] Run `npm test`; expect failure.
- [ ] Replace the page copy and add the events banner; remove the duplicate About-page address as instructed.
- [ ] Run `npm test && npm run build`; expect both to pass.
- [ ] Commit `feat: apply remaining site brief copy`.

### Task 5: Visual verification and publication

**Files:**
- Modify: `tests/site-contract.test.mjs` only if verification identifies an untested brief requirement.

- [ ] Run `npm test`, `npm run build`, and `git diff --check`.
- [ ] Inspect home, loyalty, banquet, about, promotions, and team routes at desktop and mobile widths.
- [ ] Commit any visual-only correction with a dedicated message.
- [ ] Push the verified branch to `origin/main`.
