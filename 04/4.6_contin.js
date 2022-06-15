// карты
let cards = ['2', 'Король', 'Туз', '5', '6', 'Дама', 'Король'];
// карты в руке
let hand = [];

// собираем только королей и тузов
for (let card of cards) {
  // выполняем только для нечетного индекса
  if (card !== 'Король' && card !== 'Туз') continue;
  hand.push(card);
  console.log('Карта ' + card + ' добавлена в руку');
}

console.log('карты в руке ', hand);

// ищем Туз
let found = false;

for (let card of cards) {
  console.log(`Из колоды вытянута карта ${card}`);
  if (card === 'Туз') {
    found = true;
    break;
  }
}
console.log(found ? 'Мы нашли туз': 'В колоде нет туза');


// цикл for
console.log('Цикл for');
let i;
for (i = 0; i < 11; i += 2) {

  console.log(i);
}

console.log('Цикл for');
i = 0;
while (true) { //бесконечный цикл

  if (i > 10) break;
  console.log(i);
  i += 2;
}



