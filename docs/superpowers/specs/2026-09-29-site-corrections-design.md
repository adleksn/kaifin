# Site corrections design

## Intent

Bring the public restaurant site in line with the supplied correction list while retaining its dark, warm, editorial visual language. The page should lead with a clear booking action, explain the loyalty offer without misleading unavailable registration links, and make the restaurant, banquets and careers easier to navigate.

## Decisions

- The loyalty dialog appears once per page load after 4 seconds. It is dismissible, does not open repeatedly during the same session, and provides visually distinct VK, Telegram and MAX action states.
- The booking action becomes a compact red fixed control once a visitor has scrolled beyond the first viewport. Existing header booking remains available at the top.
- Main-page controls are ordered as booking, menu, delivery, centered and compact. Decorative button outlines and pill treatments are removed from public call-to-action controls.
- The team carousel remains horizontally scrollable with round items and explicit previous/next controls; the candidate form stays available directly below it.
- Banquet content distinguishes the two available halls: panoramic and aquarium on floor 01, with a stated temporary capacity of 100–200 guests for floor 02. Each floor links to the other and includes a menu-selection section.
- The "О ресторане" content becomes an atmospheric naming-origin story. The family card keeps the children’s-room destination but uses a different crop of the available image until a final photograph is supplied.

## Verification

Static contract tests cover the requested content, order and modal timing. Astro check/build validates the pages. A browser pass verifies dialog timing, dismissing the dialog, the scroll-triggered booking action, carousel controls, desktop and narrow layouts.
