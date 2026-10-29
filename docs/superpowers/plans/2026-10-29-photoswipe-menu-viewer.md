# PhotoSwipe Menu Viewer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace embedded browser PDF viewers with a consistent, full-screen PhotoSwipe 5 menu viewer.

**Architecture:** Static WebP assets represent each PDF page. `src/data/site.ts` provides reusable page metadata and `MenuViewer.astro` renders each trigger plus a hidden PhotoSwipe source; the viewer adds a compact page-jump panel through PhotoSwipe's UI lifecycle.

**Tech Stack:** Astro 5, PhotoSwipe 5, WebP, Node test runner.

**Spec:** `docs/superpowers/specs/2026-10-29-photoswipe-menu-viewer-design.md`

## Global Constraints

- Preserve original PDFs in `public/menus` and `public/images/banquet`.
- Never load all full-size pages eagerly.
- Use one-based page numbers in the visitor-facing UI.
- Preserve the existing separate banquet gallery.

## Review Focus

- Page jump validates zero, negatives, blank, letters, and out-of-range values.
- Switching pages resets zoom so the new page fits.
- Mobile controls stay within safe viewing margins and do not cover menu text.
- Closing restores scroll position and focus to the original trigger.

### Task 1: Generate page assets and configuration

- [ ] Add test contracts for WebP configurations and remove iframe references.
- [ ] Generate WebP pages from all supplied PDFs at readable zoom resolution.
- [ ] Add reusable page metadata for the 45, 6, 8, and 2-page menus.

### Task 2: Implement one PhotoSwipe viewer

- [ ] Replace the iframe dialog with PhotoSwipe source links, fit/zoom settings, and branded controls.
- [ ] Add current-page indicator and validated in-viewer jump panel.
- [ ] Wire all existing menu actions to the correct configuration.

### Task 3: Verify and publish

- [ ] Verify opening, zoom, keyboard/sweep navigation, jump behavior, mobile layout, and scroll restoration.
- [ ] Run tests and build, then commit and push `main`.
