export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;

export const site = {
  name: 'Кайфын', city: 'Балашиха', phone: '8 495 522-67-68', email: 'info@kaifin.ru',
  address: 'Московская область, г. Балашиха, мкр. Ольгино, ул. Жилгородок, 43А',
  hours: ['Вс–Чт: 12.00–00.00, Пт–Сб: 12.00–01.00'],
};
export const restaurantBooking = { href: 'tel:84955226768', label: 'Бронь стола', note: 'Онлайн-бронирование доступно через RestoPlace.' };
export const loyalty = { bonus: '500 бонусов', registrationUrl: 'https://bti.xyz/wDEeWR' };
export const loyaltyProgram = {
  registrationUrl: 'https://bti.xyz/wDEeWR',
  levels: [
    { value: '5%', description: 'Сразу после регистрации и первого заказа' },
    { value: '7%', description: 'При общей сумме заказов от 30 000 ₽' },
    { value: '10%', description: 'При общей сумме заказов от 80 000 ₽' },
  ],
  bonuses: [
    { value: '1 бонус = 1 ₽', note: '' },
    { value: '500 бонусов за регистрацию', note: 'Действует 14 дней' },
    { value: 'Списание до 100%', note: 'В ресторане' },
    { value: 'Списание до 50%', note: 'При оформлении доставки или самовывоза' },
    { value: '1 год', note: 'Срок действия бонусов' },
  ],
  faq: [
    { question: 'Как зарегистрироваться?', answer: 'Регистрация будет доступна по ссылке в этом блоке после подключения программы лояльности.' },
    { question: 'Когда начисляются бонусы?', answer: 'Временный текст: правила начисления будут добавлены перед запуском программы.' },
    { question: 'Как использовать бонусы?', answer: 'Временный текст: подробные условия использования бонусов будут опубликованы здесь.' },
    { question: 'Где проверить баланс?', answer: 'Временный текст: способ проверки баланса будет указан после подключения программы.' },
  ],
} as const;
export const generatedImages = {
  hero: withBase('/images/Kaifyn_fasad_7728x4248.jpg'),
  about: withBase('/images/old-site/restaurant-interior-3.jpg'),
  kids: withBase('/images/brief/kids-room.png'),
  food: withBase('/images/brief/home-food.png'),
};
export const homeSettings = { showTeamOnHome: false } as const;
export const homeCuisine = {
  title: 'Кухня',
  description: 'Китайская и европейская кухня для спокойного обеда, семейного ужина и большого повода.',
  images: [
    withBase('/images/kitchen/01-pasta.jpg'), withBase('/images/kitchen/02-syrniki.png'),
    withBase('/images/kitchen/03-pasta-carbonara.png'), withBase('/images/kitchen/04-burger.png'),
    withBase('/images/kitchen/05-salad.png'), withBase('/images/kitchen/06-snacks.png'),
    withBase('/images/kitchen/07-chicken.png'), withBase('/images/kitchen/08-noodles.png'),
    withBase('/images/kitchen/09-beef.png'), withBase('/images/kitchen/10-sushi.png'),
  ],
} as const;
export const homeVenue = {
  title: 'Пространство',
  description: 'Ресторан и банкетные залы для встреч любого масштаба.',
  facts: [
    { value: '200', label: 'квадратных метров' },
    { value: '500', label: 'посадочных мест' },
    { value: '2', label: 'банкетных зала' },
  ],
  images: [
    withBase('/images/halls/aquarium/aquarium-01.jpg'),
    withBase('/images/halls/bar/bar-01.jpg'),
    withBase('/images/halls/banquet/banquet-01.jpg'),
    withBase('/images/halls/aquarium/aquarium-03.jpg'),
  ],
} as const;
export const hallImages = {
  bar: Array.from({ length: 7 }, (_, index) => withBase(`/images/halls/bar/bar-${String(index + 1).padStart(2, '0')}.jpg`)),
  aquarium: Array.from({ length: 7 }, (_, index) => withBase(`/images/halls/aquarium/aquarium-${String(index + 1).padStart(2, '0')}.jpg`)),
  banquet: Array.from({ length: 9 }, (_, index) => withBase(`/images/halls/banquet/banquet-${String(index + 1).padStart(2, '0')}.jpg`)),
};
export const banquetFloors = [
  { slug: 'first-floor', number: '01', name: '1 этаж', subtitle: 'Светлый зал «Аквариум» подойдёт для семейных праздников и уютных встреч, а тёмный зал с барной атмосферой — для компаний и отдыха, в том числе с кальяном.', hero: withBase('/images/banquet/panoramic.jpg'), rooms: [{ name: 'Панорамный зал «Аквариум»', image: withBase('/images/banquet/panoramic.jpg') }, { name: 'Бар', image: withBase('/images/banquet/bar.jpg') }], conditions: ['При бронировании от 6 человек включается сервисный сбор 10% от суммы чека.', 'Свои напитки и еду приносить нельзя.'], menuPages: [withBase('/images/banquet/menu-1.jpg'), withBase('/images/banquet/menu-2.jpg')] },
  { slug: 'second-floor', number: '02', name: '2 этаж — Банкетный зал', subtitle: 'От свадеб и юбилеев до выпускных и корпоративов — отдельный банкетный зал для праздников большого масштаба. Зал рассчитан на 100–200 гостей.', hero: withBase('/images/banquet/second-floor.jpg'), rooms: [{ name: 'Банкетный зал', image: withBase('/images/banquet/second-floor.jpg') }], conditions: ['Вместительность — до 200 человек.', 'Минимальная сумма заказа — 5 500 ₽ с человека.', 'Можно свой алкоголь и торт.'], menuPages: [withBase('/images/banquet/menu-1.jpg'), withBase('/images/banquet/menu-2.jpg')] },
] as const;
export const teamRoles = [
  { role: 'Кухня', positionTitle: 'Бренд-шеф', title: 'Павел Гранкин', showRole: true, caption: 'Создаёт вкус, соединяя европейские и азиатские мотивы в одном меню.', image: withBase('/images/brief/team-pavel-grankin.png'), position: '50% 14%' },
  { role: 'Сервис', title: '', showRole: false, caption: 'Делает так, чтобы в Кайфыне было легко, комфортно и приятно возвращаться снова.', image: withBase('/images/brief/team-service-1.png'), position: '50% 14%' },
  { role: 'Бар', title: '', showRole: false, caption: 'Отвечает за настроение за баром — от знакомой классики до авторских сочетаний.', image: withBase('/images/brief/team-bar.png'), position: '50% 12%' },
  { role: 'Кухня', title: '', showRole: false, caption: 'За атмосферой, вкусом и тем самым ощущением «здесь хорошо» всегда стоят люди.', image: withBase('/images/brief/team-kitchen-2.png'), position: '50% 14%' },
  { role: 'Сервис', title: '', showRole: false, caption: 'Тот человек, благодаря которому всё работает незаметно: гости отдыхают, а нужные детали складываются сами собой.', image: withBase('/images/brief/team-service-2.png'), position: '50% 12%' },
];
export const menuTypes = ['Основное меню', 'Меню бара', 'Банкетное меню', 'Сезонное меню', 'Паровые коктейли'];
export const menuPreview = [
  ['Закуски', 'Тартары, брускетты, роллы и лёгкие закуски для начала вечера.'],
  ['Салаты', 'Свежие овощи, морепродукты, мясо и авторские соусы.'],
  ['Горячее', 'Мясо, птица, рыба, паста и блюда азиатской кухни.'],
  ['Десерты', 'Классика и сезонные десерты к кофе или бокалу вина.'],
];
export const menuGalleries = {
  primary: { label: 'Основное меню', pages: [withBase('/images/banquet/menu-1-full.webp'), withBase('/images/banquet/menu-2-full.webp')] },
  banquet: { label: 'Банкетное меню', pages: [withBase('/images/banquet/menu-1-full.webp'), withBase('/images/banquet/menu-2-full.webp')] },
  children: { label: 'Детское меню', pages: [withBase('/images/banquet/menu-1-full.webp'), withBase('/images/banquet/menu-2-full.webp')] },
} as const;
export const menuFiles = {
  main: { label: 'Основное меню', file: withBase('/menus/Основное меню.pdf') },
  kids: { label: 'Детское меню', file: withBase('/menus/Детское меню.pdf') },
  hookah: { label: 'Кальянное меню', file: withBase('/menus/меню кальянов копия 7.pdf') },
  banquet: { label: 'Банкетное меню', file: withBase('/images/banquet/banquet-menu.pdf') },
} as const;
export const promotions = [{ title: 'Именинникам — скидка 20%', text: 'В день рождения и в течение 5 дней после него на меню ресторана, исключая банкетное и барное меню. Не суммируется с другими акциями и предложениями.' }, { title: '500 бонусов новым гостям', text: 'Зарегистрируйтесь в программе лояльности и получите 500 приветственных бонусов. Копите от 5% до 10% с заказов и используйте бонусы при следующих визитах.' }, { title: 'Скидка 20% на самовывоз', text: 'Заказывайте любимые блюда с собой со скидкой 20%. Не действует на банкетное и барное меню, не суммируется с другими акциями.' }];
