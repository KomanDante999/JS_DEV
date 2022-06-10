let x = 10;
let y = 20;

console.log(x === y); // false
console.log(x === 10); // true

console.log(x !== y); //  true
console.log(x !== 10); // false

console.log(x <= y); //  true
console.log(x > y); //  false

console.log('Infinity > 100500', Infinity > 100500); //true, бесконечноcть
console.log('-Infinity < -100500', -Infinity < -100500); //true, - бесконечность
console.log('деление на 0   10 / 0 = ', 10 / 0); //Infinity бесконечность !!!!!!!

console.log('Infinity === Infinity', Infinity === Infinity); //true

console.log('Infinity > Infinity', Infinity > Infinity); // false
console.log('Infinity < Infinity', Infinity < Infinity); // false

console.log('Infinity >= Infinity', Infinity >= Infinity); // true
console.log('Infinity <= Infinity', Infinity <= Infinity); // true

console.log('Infinity + Infinity = ', Infinity + Infinity); // Infinity
console.log('-Infinity - Infinity = ', -Infinity - Infinity); // -Infinity

console.log('-Infinity - -Infinity = ', -Infinity - -Infinity); // NaN
console.log('Infinity - Infinity = ', Infinity - Infinity); // NaN O_o
console.log('-Infinity + Infinity = ', -Infinity + Infinity); // NaN o_O
console.log('-Infinity + Infinity = ', -Infinity + Infinity); // NaN o_O
console.log('Infinity / Infinity = ', Infinity / Infinity); // Nan

console.log('Infinity * Infinity = ', Infinity * Infinity); // Infinity
console.log('-Infinity * Infinity = ', -Infinity * Infinity); // -Infinity
console.log('-Infinity * -Infinity = ', -Infinity * -Infinity); // Infinity

console.log('Infinity / 10 = ', Infinity / 10); // Infinity
console.log('Infinity * 10 = ', Infinity * 10); // Infinity
console.log('Infinity ^ 10 = ', Infinity ** 10); // Infinity
console.log('Infinity ** Infinity = ', Infinity ** Infinity); // Infinity
console.log('Infinity ** -Infinity = ', Infinity ** -Infinity); // 0
console.log('-Infinity ** Infinity = ', (-Infinity) ** Infinity); // Infinity

console.log('10 / Infinity = 0', 0 / Infinity); // -Infinity
console.log('10 + -Infinity = -Infinity', 10 + -Infinity); // -Infinity
console.log('10 + (-Infinity) = -Infinity', 10 + (-Infinity)); // -Infinity
console.log('-Infinity + 10 = -Infinity', -Infinity + 10); // -Infinity
console.log('10 * -Infinity = -Infinity', 10 * -Infinity); // -Infinity

console.log('10 / -Infinity = -0', 10 / -Infinity); // -0 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log('10 / -Infinity = -0', 10 / (-Infinity)); // -0 !!!!!!!!!!!!!!!!!!!!!!!!!!!!








