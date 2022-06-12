//Вывести дробные части чисел
// Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
// Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
// Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.
// и сравнить их >, <, ≥, ≤, ===, ≠  fractional part

function fractPart(x, n) {
  return Math.trunc((x - Math.trunc(x)) * Math.pow(10, n));
}

let a = 13.123456789;
let b = 2.123;
let n = 5;
let fractPartA = fractPart(a, n);
let fractPartB = fractPart(b, n);
console.log('дробная часть числа', a, '=', fractPartA, 'с точностью до', n, 'знаков');
console.log('дробная часть числа', b, '=', fractPartB, 'с точностью до', n, 'знаков');
console.log(fractPartA, '>', fractPartB, '=', fractPartA > fractPartB);
console.log(fractPartA, '<', fractPartB, '=', fractPartA < fractPartB);
console.log(fractPartA, '>=', fractPartB, '=', fractPartA >= fractPartB);
console.log(fractPartA, '<=', fractPartB, '=', fractPartA <= fractPartB);
console.log(fractPartA, '===', fractPartB, '=', fractPartA  === fractPartB);
console.log(fractPartA, '!==', fractPartB, '=', fractPartA !== fractPartB);

a = 13.890123;
b = 2.891564;
n = 2;
fractPartA = fractPart(a, n);
fractPartB = fractPart(b, n);
console.log('дробная часть числа', a, '=', fractPartA, 'с точностью до', n, 'знаков');
console.log('дробная часть числа', b, '=', fractPartB, 'с точностью до', n, 'знаков');
console.log(fractPartA, '>', fractPartB, '=', fractPartA > fractPartB);
console.log(fractPartA, '<', fractPartB, '=', fractPartA < fractPartB);
console.log(fractPartA, '>=', fractPartB, '=', fractPartA >= fractPartB);
console.log(fractPartA, '<=', fractPartB, '=', fractPartA <= fractPartB);
console.log(fractPartA, '===', fractPartB, '=', fractPartA  === fractPartB);
console.log(fractPartA, '!==', fractPartB, '=', fractPartA !== fractPartB);

a = 13.890123;
b = 2.891564;
n = 3;
fractPartA = fractPart(a, n);
fractPartB = fractPart(b, n);
console.log('дробная часть числа', a, '=', fractPartA, 'с точностью до', n, 'знаков');
console.log('дробная часть числа', b, '=', fractPartB, 'с точностью до', n, 'знаков');
console.log(fractPartA, '>', fractPartB, '=', fractPartA > fractPartB);
console.log(fractPartA, '<', fractPartB, '=', fractPartA < fractPartB);
console.log(fractPartA, '>=', fractPartB, '=', fractPartA >= fractPartB);
console.log(fractPartA, '<=', fractPartB, '=', fractPartA <= fractPartB);
console.log(fractPartA, '===', fractPartB, '=', fractPartA  === fractPartB);
console.log(fractPartA, '!==', fractPartB, '=', fractPartA !== fractPartB);

// Альтернативное решение через расширение объекта Math
console.log('====================  Math  ====================');

Math.fractPart = function() {
  return Math.trunc((arguments[0] - Math.trunc(arguments[0])) * Math.pow(10, arguments[1]));
}


a = 13.123456789;
b = 2.123;
n = 5;
console.log('дробная часть числа', a, '=', Math.fractPart(a ,n), 'с точностью до', n, 'знаков');
console.log('дробная часть числа', b, '=', Math.fractPart(b ,n), 'с точностью до', n, 'знаков');
console.log(Math.fractPart(a ,n), '>', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) > Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '<', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) < Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '>=', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) >= Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '<=', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) <= Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '===', Math.fractPart(b ,n), '=', Math.fractPart(a ,n)  === Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '!==', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) !== Math.fractPart(b ,n));

a = 13.890123;
b = 2.891564;
n = 2;
console.log('дробная часть числа', a, '=', Math.fractPart(a ,n), 'с точностью до', n, 'знаков');
console.log('дробная часть числа', b, '=', Math.fractPart(b ,n), 'с точностью до', n, 'знаков');
console.log(Math.fractPart(a ,n), '>', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) > Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '<', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) < Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '>=', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) >= Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '<=', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) <= Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '===', Math.fractPart(b ,n), '=', Math.fractPart(a ,n)  === Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '!==', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) !== Math.fractPart(b ,n));

a = 13.890123;
b = 2.891564;
n = 3;
console.log('дробная часть числа', a, '=', Math.fractPart(a ,n), 'с точностью до', n, 'знаков');
console.log('дробная часть числа', b, '=', Math.fractPart(b ,n), 'с точностью до', n, 'знаков');
console.log(Math.fractPart(a ,n), '>', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) > Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '<', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) < Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '>=', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) >= Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '<=', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) <= Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '===', Math.fractPart(b ,n), '=', Math.fractPart(a ,n)  === Math.fractPart(b ,n));
console.log(Math.fractPart(a ,n), '!==', Math.fractPart(b ,n), '=', Math.fractPart(a ,n) !== Math.fractPart(b ,n));






