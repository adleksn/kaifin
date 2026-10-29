import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const data = await read('src/data/site.ts');
const home = await read('src/pages/index.astro');
const delivery = await read('src/pages/delivery.astro');
const loyalty = await read('src/pages/loyalty.astro');
const modal = await read('src/components/LoyaltyModal.astro');
const menu = await read('src/pages/menu.astro');
const styles = await read('src/styles/content.css');
const globalStyles = await read('src/styles/global.css');

assert.match(data, /Kaifyn_fasad_7728x4248\.jpg/);
assert.match(data, /01-pasta\.jpg/);
assert.match(data, /10-sushi\.png/);
assert.match(data, /https:\/\/bti\.xyz\/wDEeWR/);
assert.match(data, /Детское меню\.pdf/);
assert.match(data, /меню кальянов копия 7\.pdf/);
assert.match(home, /PhotoCarousel ariaLabel="Кухня Кайфына"/);
assert.match(home, /https:\/\/kaifin-delivery\.ru\//);
assert.match(home, /LoyaltyModal/);
assert.match(delivery, /Astro\.redirect\('https:\/\/kaifin-delivery\.ru\//);
assert.match(menu, /MenuViewer/);
assert.match(loyalty, /За регистрацию в программе лояльности/);
assert.match(data, /Списание до 100%/);
assert.match(data, /Списание до 50%/);
assert.doesNotMatch(loyalty, /FaqAccordion/);
assert.match(modal, /Зарегистрироваться/);
assert.match(styles, /menu-viewer__dialog/);

assert.match(modal, /Дарим\s*<strong>500 БОНУСОВ<\/strong>/);
assert.match(modal, /class="loyalty-register primary-button"/);
assert.match(globalStyles, /\.home-hero::before\s*\{[^}]*display:none/);
assert.match(globalStyles, /\.home-hero\s*\{[^}]*background-position:center 52%/);
assert.match(styles, /\.home-cuisine__actions \.menu-viewer__trigger\s*\{[^}]*border:1px solid var\(--amber\)[^}]*border-radius:999px[^}]*background:transparent/s);
assert.match(styles, /\.loyalty-modal__offer\s*\{[^}]*white-space:nowrap/);
assert.match(styles, /\.loyalty-register\.primary-button\s*\{/);
assert.match(styles, /\.loyalty-modal \.modal-close\s*\{[^}]*display:grid[^}]*padding:0[^}]*place-items:center/s);
assert.match(styles, /\.home-hero \.hero-actions\s*\{[^}]*margin-top:28px/);

console.log('Site contract checks passed.');
