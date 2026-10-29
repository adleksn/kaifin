# Interface Corrections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the requested layout, hero-photo, menu-button, and loyalty-popup details without changing the site design language.

**Architecture:** `src/styles/content.css` remains the responsive styling layer. `LoyaltyModal.astro` supplies semantic markup for the popup; page templates keep the exact copy. Existing contract tests gain source-level assertions for the user-visible requirements.

**Tech Stack:** Astro 5, TypeScript, CSS, Node test runner.

**Spec:** `docs/superpowers/specs/2026-10-29-interface-corrections-design.md`

## Global Constraints

- Preserve the existing burgundy, cream, amber, and red palette; use the amber outline with transparent fill for menu actions.
- Do not redesign unrelated UI or change registration/PDF-menu destinations.
- Keep “За регистрацию в программе лояльности” and “Дарим 500 БОНУСОВ” exact.
- Test desktop, tablet, and phone CSS breakpoints; avoid horizontal overflow.

## Review Focus

- The home hero photo stays unfiltered at every breakpoint and source lettering is not cropped.
- Menu actions remain distinct, tappable buttons at narrow widths.
- The modal phrase cannot wrap between “Дарим” and “500 БОНУСОВ”.
- Registration is a keyboard-accessible primary action, not bare link text.
- CSS overrides do not unintentionally affect other buttons or dialogs.

### Task 1: Add correction contracts

**Files:**
- Modify: `tests/site-contract.test.mjs`

- [ ] Add assertions for the exact loyalty copy, grouped bonus phrase, registration action class, hero overlay removal, and menu-button style selectors.
- [ ] Run `npm test` and confirm the new assertions fail against the current implementation.
- [ ] Commit the failing contract test.

### Task 2: Restore the site visuals and loyalty markup

**Files:**
- Modify: `src/components/LoyaltyModal.astro`
- Modify: `src/pages/loyalty.astro`
- Modify: `src/styles/content.css`

**Interfaces:**
- Consumes: the source-level behavior asserted in Task 1.
- Produces: semantic popup groups and breakpoint-safe styles consumed by the Astro pages.

- [ ] Replace the popup's split gift markup with a single non-wrapping phrase and mark its bonus part as strong.
- [ ] Use the existing primary-button treatment for the registration link, including hover, focus, and active states.
- [ ] Increase the loyalty hero's copy spacing without changing its type scale or hierarchy.
- [ ] Remove the home-hero darkening overlay and adjust the photo's vertical focal point.
- [ ] Restore the known-good rounded red menu action styles and their mobile sizing.
- [ ] Run `npm test` and `npm run build`; both must pass.
- [ ] Commit the implementation.

### Task 3: Verify rendered breakpoints

**Files:**
- Test: `tests/site-contract.test.mjs`

- [ ] Start the Astro preview and inspect the homepage, menu actions, loyalty page, and loyalty popup at desktop, tablet, and 375px widths.
- [ ] Confirm no horizontal page overflow; confirm the photo has no dark overlay, the modal phrase is one line, and primary-button states remain visible.
- [ ] Run the complete `npm test` and `npm run build` suite.
- [ ] Commit any test-only adjustments required by discovered regressions.

## Self-review

- Each stated requirement maps to Task 2, with Task 1 pinning exact copy and styling intent.
- No attached PDF-viewer instruction is included because the explicit request covers only the six screenshot corrections; existing menu behavior remains unchanged.
- Task 3 owns responsive and overflow risk identified in Review Focus.
