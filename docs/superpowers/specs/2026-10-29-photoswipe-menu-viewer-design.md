# PhotoSwipe Menu Viewer Design

## Intent

Replace the browser PDF iframe with one full-screen PhotoSwipe 5 experience for the restaurant's four menus.

## Goals

- Convert supplied menu PDFs into high-resolution WebP page assets while retaining the original PDFs.
- Open each menu directly on its first page in PhotoSwipe.
- Provide fit-to-screen opening, zoom/pan, keyboard and swipe navigation, close control, previous/next arrows, a page indicator, and a compact jump-to-page panel.
- Reuse the restaurant's burgundy, cream, and amber visual language.
- Change the loyalty-page support copy to “Дарим 500 бонусов за регистрацию в программе лояльности.”

## Constraints

- No iframe, native PDF controls, separate viewer page, or additional library.
- Do not alter the source PDF design or existing banquet gallery behavior.
- PhotoSwipe page indices remain zero-based internally while the visitor enters one-based numbers.
- Do not preload the entire menu; PhotoSwipe loads only the active and neighbouring pages.
