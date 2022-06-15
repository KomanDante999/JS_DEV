// Напишите генератор массивов длиной count со случайными числами от n до m.
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите результат с помощью console.log.
// n = 0, m = 100, count = 100;
// n = 2, m = 5, count = 50;
// n = 100, m = -5, count = 70;
// n = -3, m = -10, count = 42.

// функция случайного числа в диапазоне от n до m
function randomize(n, m) {

  return Math.round(Math.random() * (Math.max(n, m) - Math.min(n, m))) + Math.min(n, m);
  }
// 01
let n = 0;
let m = 100;
let count = 100;
let rndArray = []

for (let i = 0; i < count; i++) {
  rndArray.push(randomize(n, m))
}
console.log(`массив случайных чисел от ${n} до ${m} длиной ${rndArray.length}
${rndArray}`);

// 02
n = 2;
m = 5;
count = 50;
rndArray = []

for (let i = 0; i < count; i++) {
  rndArray.push(randomize(n, m))
}
console.log(`массив случайных чисел от ${n} до ${m} длиной ${rndArray.length}
${rndArray}`);

// 03
n = 100;
m = -5;
count = 70;
rndArray = []

for (let i = 0; i < count; i++) {
  rndArray.push(randomize(n, m))
}
console.log(`массив случайных чисел от ${n} до ${m} длиной ${rndArray.length}
${rndArray}`);

// 04
n = -3;
m = -10;
count = 42;
rndArray = []

for (let i = 0; i < count; i++) {
  rndArray.push(randomize(n, m))
}
console.log(`массив случайных чисел от ${n} до ${m} длиной ${rndArray.length}
${rndArray}`);






