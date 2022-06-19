// Правила и порядок (порядок важен!) начисления скидок:
// 1 Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей.
// При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
// 2 При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
// 3 При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения
// (то есть к разнице суммы корзины и 50 000)
// 4 Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%,
// но только если сумма ≥20 000

function calculateDiscount(amount, quantity, promo = null) {
  let amountFinal = amount;
  if (promo === 'ДАРИМ300' && amount <= 300) {
    amountFinal = 0;
    return amountFinal;
  }
  if (promo === 'ДАРИМ300') {
    amountFinal -= 300;
  }
  if (quantity >= 10) {
    amountFinal -= (amountFinal / 100) * 5;
  }
  if (amountFinal > 50000) {
    amountFinal -= ((amountFinal - 50000) / 100) * 20;
  }
  if (promo === 'СКИДКА15' && amountFinal >= 20000) {
    amountFinal -= (amountFinal / 100) * 15;
  }

  return amountFinal;
}

console.log(`сумма после скидок:  ${calculateDiscount(300, 1)} руб.`);
console.log(`сумма после скидок:  ${calculateDiscount(49999, 3)} руб.`);

console.log(`(300, 1, 'ДАРИМ300') сумма после скидок:  ${calculateDiscount(300, 1, 'ДАРИМ300')} руб.`);
console.log(`(1000, 2, 'ДАРИМ300') сумма после скидок:  ${calculateDiscount(1000, 2, 'ДАРИМ300')} руб.`);
console.log(`(100, 15, 'ДАРИМ300') сумма после скидок:  ${calculateDiscount(100, 15, 'ДАРИМ300')} руб.`);

console.log(`(100, 10) = 95 сумма после скидок:  ${calculateDiscount(100, 10)} руб.`);
console.log(`(500, 15) = 475 сумма после скидок:  ${calculateDiscount(500, 15)} руб.`);
console.log(`(500, 17, ДАРИМ300) = 190 сумма после скидок:  ${calculateDiscount(500, 17, 'ДАРИМ300')} руб.`);
console.log(`(180, 12, ДАРИМ300) = 0 сумма после скидок:  ${calculateDiscount(180, 12, 'ДАРИМ300')} руб.`);

console.log(`(50000, 2) = 50000  сумма после скидок:  ${calculateDiscount(50000, 2)} руб.`);
console.log(`(50100, 1, 'ДАРИМ300') = 49800  сумма после скидок:  ${calculateDiscount(50100, 1, 'ДАРИМ300')} руб.`);
console.log(`(52300, 30, 'ДАРИМ300') = 49400  сумма после скидок:  ${calculateDiscount(52300, 30, 'ДАРИМ300')} руб.`);
console.log(`(52000, 22) = 49400  сумма после скидок:  ${calculateDiscount(52000, 22)} руб.`);
console.log(`(60300, 1, 'ДАРИМ300') = 58000  сумма после скидок:  ${calculateDiscount(60300, 1, 'ДАРИМ300')} руб.`);
console.log(`(70000, 12) = 63200  сумма после скидок:  ${calculateDiscount(70000, 12)} руб.`);
console.log(`(70300, 12, 'ДАРИМ300') = 63200  сумма после скидок:  ${calculateDiscount(70300, 12, 'ДАРИМ300')} руб.`);

console.log(`(60000, 1, СКИДКА15 = 49300  сумма после скидок:  ${calculateDiscount(60000, 1, 'СКИДКА15')} руб.`);
console.log(`(60000, 94, СКИДКА15 = 47260  сумма после скидок:  ${calculateDiscount(60000, 94, 'СКИДКА15')} руб.`);

export default calculateDiscount;
