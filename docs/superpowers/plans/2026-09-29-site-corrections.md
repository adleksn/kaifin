# Site corrections implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the supplied website corrections and display the loyalty offer four seconds after entering the site.

**Architecture:** Reuse the Astro page and component structure. Shared interaction behavior lives in dedicated components; content updates stay in `site.ts` and the relevant route pages; visual consistency is enforced in the global/content stylesheets.

**Tech Stack:** Astro, TypeScript, CSS, Node test runner.

**Spec:** `docs/superpowers/specs/2026-09-29-site-corrections-design.md`

## Global Constraints

- Loyalty dialog delay is 3–5 seconds; use 4 seconds.
- Do not invent live registration or booking integrations; keep unavailable destinations clear.
- Keep booking and form controls keyboard accessible.

## Review Focus

- Modal must not throw when a visitor closes it before the delay fires.
- The fixed booking control must be hidden in the first viewport and avoid covering mobile content.
- Disabled messenger buttons must not present a false registration path.
- Every banquet floor must offer a route to the other floor.
- Narrow screens retain a usable carousel and readable call-to-action controls.

### Task 1: Lock the requested public contract

**Files:**
- Modify: `tests/site-contract.test.mjs`

- [ ] Write contract assertions for loyalty copy, 4-second timing, third messenger, booking order, fixed booking component, floor navigation and floor-menu sections.
- [ ] Run `npm test` to verify the assertions fail before implementation.

### Task 2: Shared promotion and booking behavior

**Files:**
- Create: `src/components/StickyBookingCTA.astro`
- Modify: `src/components/LoyaltyModal.astro`, `src/pages/index.astro`, `src/pages/loyalty.astro`, `src/styles/content.css`

- [ ] Implement the accessible four-second loyalty dialog and distinguish the three messenger actions.
- [ ] Implement a scroll-triggered booking control and compact, centered main-page actions.
- [ ] Run the contract test and Astro build.

### Task 3: Content routes and banquet navigation

**Files:**
- Modify: `src/data/site.ts`, `src/pages/about.astro`, `src/pages/banquet/index.astro`, `src/pages/banquet/first-floor.astro`, `src/pages/banquet/second-floor.astro`, `src/pages/promotions.astro`, `src/pages/team.astro`, `src/styles/content.css`, `src/styles/global.css`

- [ ] Update copy, hall names/capacity, cross-floor navigation, both menu-selection sections, campaign links and career surface.
- [ ] Run test and build, then inspect changed routes in a browser.
