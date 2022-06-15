// это функция, внутри которой нужно написать ваш код
// count, n и m будут задаваться в момент вызова функции, как в примере кода под ней

function randomArray(count, n, m) {
  let rndArray = [];

  for (let i = 0; i < count; i++) {
    rndArray.push(Math.round(Math.random() * (Math.max(n, m) - Math.min(n, m))) + Math.min(n, m));
  }
  return rndArray;
}

// вызов функции
randomArray(10, 10, 100); // вывести массив из 10-ти случайных чисел от 10 до 100
randomArray(2, 5, 1); // вывести массив из 2-х случайных чисел от 1 до 5
// можете вызывать функцию сколько угодно раз подряд с различными параметрами
console.log(randomArray(10, 10, 100));
console.log(randomArray(2, 5, 1));
console.log(randomArray(100, 0, 100));
console.log(randomArray(50, 2, 5));
console.log(randomArray(70, 100, -5));
console.log(randomArray(42, -3, -10));

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default randomArray;
