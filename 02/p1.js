
let entrances = 4; //кол-во подъездов
let floors = 9; //кол-во этажей
let flatsPerFloor = 4; //квартир на этаже

let flatsPerEntr = floors * flatsPerFloor; 
console.log('Количество квартир в подъезде', flatsPerEntr);
let flats = flatsPerEntr * entrances; 
console.log('Количество квартир в доме', flats);

//Квадратное уравнение a*x^2 + b*x + c = 0
let a=3;
let b=8;
let c=2;

let d = b * b - 4 * a * c; //дискриминант
console.log(d);
let dRoot = Math.sqrt(d); //корень из дискриминанта
console.log(dRoot);
console.log('x1 = ', (-b + dRoot) / (2 * a));
console.log('x2 = ', (-b - dRoot) / (2 * a));


//Вычисление n ряда чисел Фибоначчи
let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
    prevPrev = prev;
    prev = current;
    current += prevPrev;
    console.log(current);
}