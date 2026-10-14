# Site Brief Corrections Design

## Scope

Apply the supplied `правки 2.docx` copy and layout instructions to the restaurant site. The document's stated copy is authoritative; no replacement marketing copy will be invented. The confirmed capacity for the second-floor banquet hall is **up to 150 guests**.

## Global UI Rules

- Use the existing `--corner-radius: 10px` token for every rectangular card, image block, button, input, and modal.
- The header marks the current route with an amber label and underline in desktop and mobile navigation.
- Keep circular controls circular and preserve current site typography and colour tokens.

## Home and Team

The home page retains its current narrative cards and banquet links, but the team section becomes a Mina-style horizontal carousel: a section heading followed by three visible, rectangular portrait cards on desktop, with previous/next controls and horizontal touch scrolling. Each card contains the supplied image, name/role, and the exact supplied caption. Use the five existing team images until the linked replacement image set is available.

## Loyalty

Keep the existing offer and registration channels. Replace the three explanatory steps with the supplied registration, accrual, and redemption copy. Add a three-card tier section for 5%, 7%, and 10%; add the supplied redemption, validity, and welcome-bonus terms below it. Do not make inactive messenger buttons appear functional.

## Banquets

Update headings, introductions, floor-card text, and hall names as specified. The second floor reads as a banquet hall for up to 150 guests. Retain the existing form and menu material; route its CTA to the form. Replace duplicate address content with a single contact point where instructed. Keep missing gallery assets as the existing locally available photography until the linked source images can be incorporated.

## About, Promotions, and Team Page

Replace copy exactly with the supplied text. The about page removes the redundant address beneath the fact panels. Promotions have the new three offers, terms, and a reserved events banner. The team page uses the revised title, introduction, career title, and career copy.

## Verification

The static contract test asserts all newly required copy and structural hooks. Run `npm test`, `npm run build`, inspect representative desktop and mobile renders, and push only after a clean verification pass.
