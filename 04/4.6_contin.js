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

for (let item of cards) {

}



