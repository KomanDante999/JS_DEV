// switch

let fruit = 'Яблоко'
// fruit = 'Банан'
// fruit = 'Вишня'
// fruit = 'Хрен'

switch (fruit) {
    case 'Яблоко':
        console.log('перед нами яблоко');
        break;
    case 'Банан':
        console.log('перед нами банан');
        break;
    case 'Арбуз':
    case 'Вишня':
    case 'Клубника':
        console.log('это ягода, а не фрукт');
        break;
    default:
        console.log('Не знаю такого фрукта');
        break;
}






