// Рандомные нечетные числа
// n = 0, m = 100;
// n = 2, m = 5;
// n = 100, m = −5;
// n = -3, m = −10.


function randomOdd(n, m) {

  // обмен значениями если n > m
  if (n > m) {
    z = n
    n = m
    m = z
  }

  // получаем случайное число в диапазоне
  rndNum = Math.round(Math.random() * (m - n)) + n;
  // получаем остаток от деления на 2
  rem = rndNum % 2;
  if (rem === 0 && rndNum === m) {
    // преобразуем к нечетному числу вычитанием 1, что бы не выйти за границы диапазона
    rndNum = rndNum - 1;
  }
  else if (rem === 0) {
    // преобразуем к нечетному числу добавлением 1
    rndNum = rndNum + 1;
  }

  return rndNum;
}

let n = 0;
let m = 100;
let i = 10;

console.log('нечетное случайное число от', n, 'до', m, ':');

while (i-- > 0) {
  console.log(randomOdd(n, m));
}

n = 2;
m = 5;
i = 10;

console.log('нечетное случайное число от', n, 'до', m, ':');

while (i-- > 0) {
  console.log(randomOdd(n, m));
}

n = 100;
m = -5;
i = 10;

console.log('нечетное случайное число от', n, 'до', m, ':');

while (i-- > 0) {
  console.log(randomOdd(n, m));
}

n = -3;
m = -10;
i = 10;

console.log('нечетное случайное число от', n, 'до', m, ':');

while (i-- > 0) {
  console.log(randomOdd(n, m));
}

n = 4;
m = 3;
i = 10;

console.log('нечетное случайное число от', n, 'до', m, ':');

while (i-- > 0) {
  console.log(randomOdd(n, m));
}

n = 2;
m = 3;
i = 10;

console.log('нечетное случайное число от', n, 'до', m, ':');

while (i-- > 0) {
  console.log(randomOdd(n, m));
}








