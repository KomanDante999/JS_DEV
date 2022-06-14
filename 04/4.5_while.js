// чай
let teaVolume = 200;

console.log('Вы налили себе ' + teaVolume + 'мл чая');

while (teaVolume > 0) {
  teaVolume -= 10;
  console.log('В чашке осталось ' + teaVolume + 'мл чая');
}

console.log('Вы выпили весь чай');

//русская рулетка
//в револьвьере 5 мест под птрон
// вероятность выстрела 20%

do {
  console.log('Нажимаем на курок');
} while (Math.random() > 0.2);

console.log('Выстрел');
