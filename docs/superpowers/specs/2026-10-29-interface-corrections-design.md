# Interface Corrections Design

## Intent

Restore the restaurant's existing visual system in the areas shown in the supplied screenshots. This is a corrective change, not a redesign.

## Goals

- Give the loyalty-page hero copy enough vertical spacing and keep the exact registration wording.
- Make the facade in the home hero naturally bright, position it higher to retain the lettering within the source photograph, and remove the visual darkening layer.
- Use transparent, amber-outlined pill-shaped menu actions.
- Restyle the loyalty popup with the site's burgundy, cream, amber, and red palette; make registration a real primary button.
- Keep the popup phrase “Дарим 500 БОНУСОВ” on one line, with the bonus portion emphasized.
- Maintain the desktop and mobile layout without horizontal overflow.

## Non-goals

- Do not redesign unrelated pages or replace existing typography.
- Do not alter the registration destination or the existing PDF-menu behavior.

## Approach

Use the existing Astro components and CSS tokens. Correct the hero overlay and image position in the shared stylesheet, apply the requested transparent menu-action styling, and give the loyalty modal semantic grouping classes rather than relying on broad overrides.

## Constraints

- Exact registration copy: “За регистрацию в программе лояльности”.
- Exact bonus phrase: “Дарим 500 БОНУСОВ”.
- Reuse existing colors and primary-button states.
- Validate at desktop, tablet, and phone breakpoints.
