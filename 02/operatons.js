//operations
let x = 15 + 5;
console.log(x);

let y = 15 - 5;
console.log(y);

let z = 15 * 5;
console.log(z);

let q = 15 / 5;
console.log(q);

let w = 10 % 3 // остаток
console.log(w);

let compl = 8 + 10 * 5 - 8 / 4;
console.log(compl);
let compl2 = (8 + 10) * 5 - 8 / 4;
console.log(compl2);

//инкрименты и дикременты
let a = 10;
a++; //11 постфикс
a--; //9
console.log(a++); //10
console.log(a); //11
console.log(a--); //11
console.log(a); //10

++a; //11 префикс
--a; //9 префикс
console.log(++a); //11
console.log(a); //11

x += 5; //действие для одной переменной x = x + 5
console.log(x += 5); //30
x -= 5;
x *= 5;
x /= 5;
x %= 3;
console.log(x); //1