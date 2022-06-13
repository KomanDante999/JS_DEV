let x = 0;

if (Math.random() > 0.5) {
    x = 10;
} else {
    x = 20;
}
console.log(x);

// ternary operator

x = Math.random() > 0.5 ? 10 : 20;
console.log(x);

// плохой пример

let age = 23;
let isAdult = age > 18 ? true : false;
console.log(isAdult);

// правильный пример\

let isAdultDoneRight = age > 18;
console.log('isAdultDoneRight = ', isAdultDoneRight);


