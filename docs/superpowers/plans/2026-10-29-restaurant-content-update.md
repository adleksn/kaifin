# Restaurant Content Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update restaurant imagery, menus, delivery navigation, and loyalty registration.

**Architecture:** Local assets and paths are centralized in `src/data/site.ts`. Reusable UI components render the kitchen gallery and PDF-menu viewer; pages compose those components. The static source-contract test protects required content and links.

**Tech Stack:** Astro 5, TypeScript, CSS, Node test runner.

**Spec:** `docs/superpowers/specs/2026-10-29-restaurant-content-design.md`

## Global Constraints

- Keep the existing dark green, cream, and amber site treatment.
- Use `withBase` for internal asset paths.
- Delivery and registration links are absolute URLs.
- Kitchen navigation is swipe/scroll based, with no dots.

## Review Focus

- External delivery links do not receive the GitHub Pages base path.
- PDF menu links work when the site is hosted under `/kaifin`.
- Kitchen gallery remains keyboard and touch scrollable with visible progress affordance.
- Popup has an accessible close action and cannot attempt to re-open after a close.
- The facade image is used as the actual homepage hero, not only copied into static assets.

### Task 1: Static assets and content contracts

**Files:**
- Modify: `src/data/site.ts`, `tests/site-contract.test.mjs`
- Create: `public/images/kitchen/*`, `public/menus/*`

- [ ] Write failing assertions for facade hero, 10 kitchen assets, external delivery URL, menu PDF paths, and registration URL.
- [ ] Run `npm test` and confirm the assertions fail.
- [ ] Copy supplied media to the public asset directories and add the data exports.
- [ ] Run `npm test` and confirm the content contract passes.

### Task 2: Kitchen, delivery, and menu interactions

**Files:**
- Create: `src/components/MenuViewer.astro`
- Modify: `src/pages/index.astro`, `src/pages/menu.astro`, `src/pages/delivery.astro`, `src/pages/banquet/first-floor.astro`, `src/pages/banquet/second-floor.astro`, `src/styles/content.css`, `tests/site-contract.test.mjs`

- [ ] Write failing assertions for the kitchen carousel, external delivery redirect, and all four menu actions.
- [ ] Run `npm test` and confirm failure.
- [ ] Implement the small reusable PDF modal viewer and compose it into the pages.
- [ ] Run `npm test` and `npm run build`.

### Task 3: Loyalty content and popup

**Files:**
- Modify: `src/pages/loyalty.astro`, `src/components/LoyaltyModal.astro`, `src/layouts/BaseLayout.astro`, `src/styles/content.css`, `tests/site-contract.test.mjs`

- [ ] Write failing assertions for supplied loyalty copy, registration link, FAQ removal, and global popup mounting.
- [ ] Run `npm test` and confirm failure.
- [ ] Implement the loyalty page and themed popup with the one registration action.
- [ ] Run `npm test` and `npm run build`.

