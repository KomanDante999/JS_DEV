/* Общая сумма корзины
Количество товаров в корзине
Промокод (по умолчанию null)
Правила и порядок (порядок важен!) начисления скидок:
1 Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
2 При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
3 При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
4 Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
*/

function calculate(amount, quantity, promo = null) {
  amountFinal = amount;
  if (promo.includes('ДАРИМ300') && amount <= 300) {

    return amountFinal = 0;

  } else if (promo.includes('ДАРИМ300')) {

    amountFinal -= 300;
  }
  if (quantity >= 10) {

    amountFinal = amountFinal - (amountFinal / 100) * 5;
  }
  if (amount > 50000) {

    amountFinal = amountFinal - ((amount - 50000) / 100) * 20;
  }
  if (promo.includes('СКИДКА15') && amountFinal >= 2000) {

    amountFinal = amountFinal - (amountFinal / 100) * 15;
  }

  return amountFinal;
}


console.log(`сумма после скидок:  ${calculate(300, 1, '')} руб.`); //300
console.log(`сумма после скидок:  ${calculate(300, 1, 'ДАРИМ300')} руб.`); //0
console.log(`сумма после скидок:  ${calculate(1300, 10, 'ДАРИМ300')} руб.`); //950
console.log(`сумма после скидок:  ${calculate(50100, 1, '')} руб.`); //50080
console.log(`сумма после скидок:  ${calculate(20000, 1, '')} руб.`); //20000
console.log(`сумма после скидок:  ${calculate(20000, 1, 'СКИДКА15')} руб.`); //17000
console.log(`сумма после скидок:  ${calculate(60000, 20, ['СКИДКА15', 'ДАРИМ300'])} руб.`); //46507.75
