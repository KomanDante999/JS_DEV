//              математические функции

Math.abs(-20); //20

Math.PI;  //число Пи 3.141592653589793
console.log(Math.PI);
Math.sin(Math.PI / 2); // 1, синус 90 град
console.log(Math.sin(Math.PI / 2)); 
Math.cos(Math.PI * 2); // 1, косинус 360 град
Math.tan(0); // 0, тангенс 0 град

console.log(Math.E); //натуральное число 2.718281828459045
console.log(Math.log(Math.E)); // 1, натуральный логарифм

//округление
Math.round(3.8); // 4
Math.floor(3.8); // 3 округление вниз
Math.floor(3.2); // 4 округление вверх

Math.max(10, 1, -40, 12, 5); //12 наибольшее значение
Math.min(10, 1, -40, 12, 5); //-40 наименьшее значение

// возведение в степень
Math.pow(10, 3); // 10^3
10 ** 3 // 10^3  не везде поддерживается
Math.sqrt(16); // 4  квадратный корень
Math.pow(16, 0.5); // 4 дробрая степень

// случайные числа
Math.random();
console.log('случайное дробное число от 0 до 1', Math.random());

let n = 10;
while (n-- > 0) {
    console.log('случайное число от 0 до 100', Math.round(Math.random() * 100) );
}

n = 10;
while (n-- > 0) {
    console.log('случайное число от 50 до 120', Math.round(Math.random() * 70) + 50);
}

