# Restaurant Content Update Design

## Intent

Bring the restaurant site in line with the supplied food photography and menu files, reduce dead-end navigation, and make loyalty registration actionable.

## Goals

- Present the ten supplied food photographs as a swipeable kitchen gallery using the site's existing scrollable-gallery language.
- Use the supplied facade photo as the homepage hero.
- Make delivery navigation leave for `https://kaifin-delivery.ru/`.
- Open the three supplied PDF menus in a readable, page-by-page modal viewer; retain the banquet menu and add a hookah-menu action beside it.
- Simplify the loyalty page and modal to the supplied copy and registration link, restoring a styled timed popup.

## Non-goals

- No edits to PDF content or external delivery/loyalty sites.
- No new backend, CMS, analytics, or booking integration.

## Approach

Use the existing Astro components and the `PhotoCarousel` interaction model. Add a focused `MenuViewer` component that embeds a PDF in a modal with browser-native page navigation and download/open fallback. Assets are local static files so the current GitHub Pages deployment path continues to work.

Alternative approaches considered: separate menu routes (adds unnecessary navigation) and third-party PDF rendering (adds a dependency without benefit). The modal viewer matches the existing photo lightbox while keeping the original PDFs crisp.

## Constraints

- Preserve the existing dark green, cream, and amber visual system.
- All internal paths must be built with `withBase`; external delivery and registration links remain absolute.
- The kitchen gallery must use scroll snapping and a visible horizontal scrollbar, rather than dot pagination.
- Registration link: `https://bti.xyz/wDEeWR`.

