export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;

export const site = {
  name: 'Кайфын', city: 'Балашиха', phone: '8 495 522-67-68', email: 'info@kaifin.ru',
  address: 'Московская область, г. Балашиха, мкр. Ольгино, ул. Жилгородок, 43А',
  hours: ['Пн–Чт: 12:00–24:00', 'Пт–Сб: 12:00–01:00', 'Вс: 12:00–24:00'],
};
export const restaurantBooking = { href: 'tel:84955226768', label: 'Бронь стола', note: 'Онлайн-бронирование доступно через RestoPlace.' };
export const loyalty = { bonus: '500 бонусов', vkUrl: '', telegramUrl: '', unavailableNote: 'Ссылка на регистрацию будет добавлена после подключения канала.' };
export const generatedImages = {
  hero: withBase('/images/brief/home-hero.png'),
  about: withBase('/images/old-site/restaurant-interior-3.jpg'),
  kids: withBase('/images/brief/kids-room.png'),
  food: withBase('/images/brief/home-food.png'),
};
export const banquetFloors = [
  { slug: 'first-floor', number: '01', name: '1 этаж', subtitle: 'Уютные залы для семейных встреч, ужинов с друзьями и небольших праздников.', hero: withBase('/images/banquet/panoramic.jpg'), rooms: [{ name: 'Панорамный зал «Аквариум»', image: withBase('/images/banquet/panoramic.jpg') }, { name: 'Бар', image: withBase('/images/banquet/aquarium.jpg') }], conditions: ['При бронировании от 6 человек включается сервисный сбор 10% от суммы чека.', 'Свои напитки и еду приносить нельзя.'], menuPages: [withBase('/images/banquet/menu-1.jpg'), withBase('/images/banquet/menu-2.jpg')] },
  { slug: 'second-floor', number: '02', name: '2 этаж — банкетный', subtitle: 'Просторный зал для свадеб, юбилеев, корпоративов, выпускных, банкетов и фуршетов до 150 гостей.', hero: withBase('/images/banquet/second-floor.jpg'), rooms: [{ name: 'Банкетный зал', image: withBase('/images/banquet/second-floor.jpg') }], conditions: ['Вместительность — до 150 человек.', 'Минимальная сумма заказа — 5 500 ₽ с человека.', 'Можно свой алкоголь и торт.'], menuPages: [withBase('/images/banquet/menu-1.jpg'), withBase('/images/banquet/menu-2.jpg')] },
] as const;
export const teamRoles = [
  { role: 'Кухня', title: 'Бренд-шеф Павел Гранкин', caption: 'Создаёт вкус, соединяя европейские и азиатские мотивы в одном меню.', image: withBase('/images/brief/team-pavel-grankin.png'), position: '50% 14%' },
  { role: 'Сервис', title: '', caption: 'Делает так, чтобы в Кайфыне было легко, комфортно и приятно возвращаться снова.', image: withBase('/images/brief/team-service-1.png'), position: '50% 14%' },
  { role: 'Бар', title: '', caption: 'Отвечает за настроение за баром — от знакомой классики до авторских сочетаний.', image: withBase('/images/brief/team-bar.png'), position: '50% 12%' },
  { role: 'Кухня', title: '', caption: 'За атмосферой, вкусом и тем самым ощущением «здесь хорошо» всегда стоят люди.', image: withBase('/images/brief/team-kitchen-2.png'), position: '50% 14%' },
  { role: 'Сервис', title: '', caption: 'Тот человек, благодаря которому всё работает незаметно: гости отдыхают, а нужные детали складываются сами собой.', image: withBase('/images/brief/team-service-2.png'), position: '50% 12%' },
];
export const menuTypes = ['Основное меню', 'Меню бара', 'Банкетное меню', 'Сезонное меню', 'Паровые коктейли'];
export const menuPreview = [
  ['Закуски', 'Тартары, брускетты, роллы и лёгкие закуски для начала вечера.'],
  ['Салаты', 'Свежие овощи, морепродукты, мясо и авторские соусы.'],
  ['Горячее', 'Мясо, птица, рыба, паста и блюда азиатской кухни.'],
  ['Десерты', 'Классика и сезонные десерты к кофе или бокалу вина.'],
];
export const promotions = [{ title: 'Именинникам — скидка 20%', text: 'В день рождения и в течение 5 дней после него на меню ресторана, исключая банкетное и барное меню. Не суммируется с другими акциями и предложениями.' }, { title: '500 бонусов новым гостям', text: 'Зарегистрируйтесь в программе лояльности и получите 500 приветственных бонусов. Копите от 5% до 10% с заказов и используйте бонусы при следующих визитах.' }, { title: 'Скидка 20% на самовывоз', text: 'Заказывайте любимые блюда с собой со скидкой 20%. Не действует на банкетное и барное меню, не суммируется с другими акциями.' }];
