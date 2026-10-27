# Homepage Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (recommended) or superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Kaifin home page around the supplied Desktop-1 structure while retaining the existing image assets and separate content pages.

**Architecture:** `src/pages/index.astro` becomes a concise, data-driven sequence of hero, story, cuisine, venue and contacts sections. `src/data/site.ts` provides copy, image lists, statistics and the opt-in team feature flag. The global visual system is flattened to solid surfaces, with page-specific CSS in `content.css`.

**Tech Stack:** Astro 5, TypeScript, CSS, Node test runner.

**Spec:** User-approved brief in this conversation, based on the supplied Desktop-1 screenshots.

## Global Constraints

- Keep existing image files; do not edit or replace them.
- Use only title and supporting-text hierarchy; do not use gradients.
- Do not render the hero label «Ресторан · Балашиха».
- Remove promotions and loyalty blocks from the home page while retaining their standalone routes.
- Keep the team section in code behind a default-off configuration flag.
- Use one solid base background and solid block surfaces.

## Review Focus

- Desktop and mobile navigation continue to expose booking, phone and the retained standalone pages.
- Home has no promotion or loyalty content even though their routes still exist.
- Team markup remains recoverable but is absent by default.
- All homepage image URLs resolve through `withBase` for GitHub Pages.
- Small viewports retain readable single-column layout and horizontally scrollable image rows.

---

### Task 1: Add a homepage content contract

**Files:**
- Modify: `tests/site-contract.test.mjs`
- Modify: `src/data/site.ts`

- [ ] Write a failing test asserting the homepage data contains the team visibility flag and venue/gallery content.
- [ ] Run `npm test` and verify the missing contract fails.
- [ ] Add typed static content that reuses existing asset paths.
- [ ] Run `npm test` and verify it passes.

### Task 2: Replace the homepage composition

**Files:**
- Modify: `tests/site-contract.test.mjs`
- Modify: `src/pages/index.astro`

- [ ] Write failing tests asserting the hero, history, cuisine, venue, contact sections and absence of home promotions/loyalty labels.
- [ ] Run `npm test` and verify the missing structure fails.
- [ ] Implement semantic Astro sections and conditionally render the team section from the flag.
- [ ] Run `npm test` and verify it passes.

### Task 3: Flatten styling and make the layout responsive

**Files:**
- Modify: `tests/site-contract.test.mjs`
- Modify: `src/styles/global.css`
- Modify: `src/styles/content.css`

- [ ] Write failing tests that prohibit `linear-gradient` in homepage styling and require responsive homepage section classes.
- [ ] Run `npm test` and verify the styling contract fails.
- [ ] Replace homepage gradients with solid color surfaces; add desktop/mobile layout rules and accessible interaction states.
- [ ] Run `npm test`, then `npm run build`, and verify both pass.

