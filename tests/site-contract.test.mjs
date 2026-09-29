import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

const header = await read('src/components/Header.astro');
const data = await read('src/data/site.ts');
const home = await read('src/pages/index.astro');
const booking = await read('src/pages/booking.astro');
const contentStyles = await read('src/styles/content.css');
const loyaltyModal = await read('src/components/LoyaltyModal.astro');
const loyaltyPage = await read('src/pages/loyalty.astro');
const firstFloor = await read('src/pages/banquet/first-floor.astro');
const secondFloor = await read('src/pages/banquet/second-floor.astro');

assert.doesNotMatch(header, /Галерея/);
assert.match(header, /Программа лояльности/);
assert.match(header, /Банкет/);
assert.match(data, /restaurantBooking/);
assert.match(data, /banquetFloors/);
assert.match(data, /menuPages/);
assert.match(data, /500 бонусов/);
assert.match(home, /LoyaltyModal/);
assert.match(home, /StickyBookingCTA/);
assert.match(home, /intro-grid__left/);
assert.match(home, /intro-grid__visual/);
assert.match(home, /banquet-section--full/);
assert.match(contentStyles, /grid-template-columns: repeat\(3, 1fr\)/);
assert.match(contentStyles, /justify-self: end/);
assert.match(contentStyles, /width:352px/);
assert.match(contentStyles, /\.intro-grid > a:hover/);
assert.match(booking, /restaurantBooking/);
assert.doesNotMatch(booking, /kaifin-booking-draft/);
assert.match(loyaltyModal, /window\.setTimeout\(.*4000\)/);
assert.match(loyaltyModal, /Дарим/);
assert.match(loyaltyModal, /500\s*<span>БОНУСОВ<\/span>/);
assert.match(loyaltyModal, /VK/);
assert.match(loyaltyModal, /Telegram/);
assert.match(loyaltyModal, /MAX/);
assert.doesNotMatch(loyaltyModal, /Регистрация в боте станет/);
assert.match(loyaltyPage, /Выберите удобный способ регистрации/);
assert.match(data, /Панорамный зал/);
assert.match(data, /Аквариум/);
assert.match(firstFloor, /Выберите блюда/);
assert.match(firstFloor, /second-floor/);
assert.match(data, /100–200/);
assert.match(secondFloor, /Выберите блюда/);
assert.match(secondFloor, /first-floor/);

for (const path of ['src/pages/banquet/first-floor.astro', 'src/pages/banquet/second-floor.astro', 'src/components/DemoForm.astro', 'src/components/TeamCarousel.astro']) {
  await read(path);
}
const carousel = await read('src/components/TeamCarousel.astro');
assert.match(carousel, /Предыдущая карточка/);
assert.match(carousel, /Следующая карточка/);
assert.match(carousel, /DOMContentLoaded/);
assert.match(carousel, /behavior: 'auto'/);

console.log('Site contract checks passed.');
