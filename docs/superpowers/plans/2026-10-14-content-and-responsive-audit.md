# Content and Responsive Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every approved text correction from the supplied brief appear in the correct hierarchy, then verify the site remains stable at desktop and mobile widths.

**Architecture:** Keep editorial content in page templates and `src/data/site.ts`; use narrow, component-scoped CSS overrides for hierarchy instead of broadly changing global heading styles. The shared team carousel is retained, while the homepage banquet copy and About facts get semantic roles matching the brief.

**Tech Stack:** Astro, CSS, Node test runner, Astro check/build, browser visual QA.

**Spec:** `/Users/nikitaalekseev/Downloads/правки 2.docx`

## Global Constraints

- Preserve the user-confirmed banquet capacity: до 150 гостей.
- Keep all rectangular UI surfaces rounded by `--corner-radius: 10px`.
- Use the supplied text exactly except where the user explicitly resolved a conflict.
- Verify desktop and mobile layouts for overflow, clipping and unintended large headings.

## Review Focus

- Long banquet description must be body copy, not a display heading.
- About facts must retain readable line lengths without applying display type to explanatory copy.
- The same shared team carousel must render on the homepage and `/team`.
- Narrow screens must not create horizontal page overflow.
- No deprecated brief text or unresolved 100–200 capacity remains in source.

---

### Task 1: Correct editorial hierarchy

**Files:**
- Modify: `src/pages/index.astro`, `src/pages/about.astro`, `src/styles/content.css`
- Test: `tests/site-contract.test.mjs`

- [ ] Add failing source-contract assertions for the homepage body-copy class and About fact labels.
- [ ] Verify the assertions fail with the current markup.
- [ ] Mark the homepage banquet sentence as supporting copy and split About fact labels from fact values.
- [ ] Add scoped CSS with a smaller readable type scale and controlled maximum line width.
- [ ] Run `npm test` and commit.

### Task 2: Audit remaining brief copy and banquet media data

**Files:**
- Modify: `src/data/site.ts`, banquet pages if required
- Test: `tests/site-contract.test.mjs`

- [ ] Compare all final-document copy values against templates and data.
- [ ] Add failing tests for any missing text or gallery data found during the comparison.
- [ ] Make the minimal copy/data corrections, preserving the confirmed 150-guest capacity.
- [ ] Run `npm test` and commit.

### Task 3: Responsive regression verification

**Files:**
- Modify: only files required by observed defects
- Test: `tests/site-contract.test.mjs`

- [ ] Build the site and inspect homepage, About, banquet, promotions, loyalty and team at desktop and mobile widths.
- [ ] Assert no horizontal overflow on representative mobile pages.
- [ ] Correct any observed layout faults and rerun `npm test`, `npm run build` and `git diff --check`.
- [ ] Commit and push the verified changes to `main`.
