export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;

export const site = {
  name: 'Кайфын', city: 'Балашиха', phone: '8 495 522-67-68', email: 'info@kaifin.ru',
  address: 'Московская область, г. Балашиха, мкр. Ольгино, ул. Жилгородок, 43А',
  hours: ['Пн–Чт: 12:00–24:00', 'Пт–Сб: 12:00–01:00', 'Вс: 12:00–24:00'],
};
export const restaurantBooking = { href: 'tel:84955226768', label: 'Бронь стола', note: 'Скоро здесь будет доступно онлайн-бронирование через RestoPlace.' };
export const loyalty = { bonus: '500 бонусов', vkUrl: '', telegramUrl: '', unavailableNote: 'Ссылка на регистрацию будет добавлена после подключения канала.' };
export const generatedImages = {
  hero: withBase('/images/brief/home-hero.png'),
  about: withBase('/images/old-site/restaurant-interior-3.jpg'),
  kids: withBase('/images/brief/kids-room.png'),
  food: withBase('/images/brief/home-food.png'),
};
export const banquetFloors = [
  { slug: 'first-floor', number: '01', name: '1 этаж', subtitle: 'Панорамный зал и «Аквариум» для семейных праздников и небольших компаний.', hero: withBase('/images/banquet/panoramic.jpg'), rooms: [{ name: 'Панорамный зал', image: withBase('/images/banquet/panoramic.jpg') }, { name: 'Аквариум', image: withBase('/images/banquet/aquarium.jpg') }], conditions: ['При бронировании от 6 человек включается сервисный сбор 10% от суммы чека.', 'Свои напитки и еду приносить нельзя.'], menuPages: [withBase('/images/banquet/menu-1.jpg'), withBase('/images/banquet/menu-2.jpg')] },
  { slug: 'second-floor', number: '02', name: '2 этаж — банкетный', subtitle: 'Отдельный банкетный зал для свадеб, юбилеев и больших событий. 100–200 гостей', hero: withBase('/images/banquet/second-floor.jpg'), rooms: [{ name: 'Банкетный зал', image: withBase('/images/banquet/second-floor.jpg') }], conditions: ['Вместительность — 100–200 человек.', 'Минимальная сумма заказа — 5 500 ₽ с человека.', 'Можно свой алкоголь и торт.'], menuPages: [withBase('/images/banquet/menu-1.jpg'), withBase('/images/banquet/menu-2.jpg')] },
] as const;
export const teamRoles = [
  { role: 'Кухня', title: 'Бренд-шеф Павел Гранкин', caption: 'Создаёт вкус, соединяя европейские и азиатские мотивы в одном меню.', image: withBase('/images/brief/team-pavel-grankin.png'), position: '50% 24%' },
  { role: 'Сервис', title: '', caption: 'Делает так, чтобы в Кайфыне было легко, комфортно и приятно возвращаться снова.', image: withBase('/images/brief/team-service-1.png'), position: '50% 23%' },
  { role: 'Бар', title: '', caption: 'Отвечает за настроение за баром — от знакомой классики до авторских сочетаний.', image: withBase('/images/brief/team-bar.png'), position: '50% 20%' },
  { role: 'Кухня', title: '', caption: 'За атмосферой, вкусом и тем самым ощущением «здесь хорошо» всегда стоят люди.', image: withBase('/images/brief/team-kitchen-2.png'), position: '50% 23%' },
  { role: 'Сервис', title: '', caption: 'Тот человек, благодаря которому всё работает незаметно: гости отдыхают, а нужные детали складываются сами собой.', image: withBase('/images/brief/team-service-2.png'), position: '50% 18%' },
];
export const menuTypes = ['Основное меню', 'Меню бара', 'Банкетное меню', 'Сезонное меню', 'Паровые коктейли'];
export const menuPreview = [
  ['Закуски', 'Тартары, брускетты, роллы и лёгкие закуски для начала вечера.'],
  ['Салаты', 'Свежие овощи, морепродукты, мясо и авторские соусы.'],
  ['Горячее', 'Мясо, птица, рыба, паста и блюда азиатской кухни.'],
  ['Десерты', 'Классика и сезонные десерты к кофе или бокалу вина.'],
];
export const promotions = [{ title: 'Именинникам — скидка 20%', text: 'В день рождения и в течение 5 дней после него на всё меню ресторана, исключая банкетное.' }, { title: 'Кэшбэк до 10%', text: '10% на меню кухни по будням с 12:00 до 16:00; 7% от суммы чека — ежедневно.' }, { title: 'Самовывоз и доставка', text: 'Скидка 10% на доставку и 20% на самовывоз. Не действует в праздничные дни.' }];
