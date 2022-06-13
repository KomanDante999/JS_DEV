//Квадратное уравнение a*x^2 + b*x + c = 0
let a=3;
let b=8;
let c=2;


// Старое решение
// let d = b * b - 4 * a * c; //дискриминант
// console.log(d);
// let dRoot = Math.sqrt(d); //корень из дискриминанта
// console.log(dRoot);
// console.log('x1 = ', (-b + dRoot) / (2 * a));
// console.log('x2 = ', (-b - dRoot) / (2 * a));

// решение с условиями
function squareX(a, b, c) {
    //дискриминант
    let d = b * b - 4 * a * c; 

    if (d < 0) {
        console.log('Квадратное уравнение не имеет решений');
        return [];
    } 
    else if (d === 0) {
        console.log('Квадратное уравнение имеет одно решение');
        return [-b / (2 * a)];
    }
    else {
        // корень дискриминанта
        let dRoot = Math.sqrt(d);
        // [x1, x2]
        console.log('Квадратное уравнение имеет два решения');
        return [(-b + dRoot) / (2 * a), (-b - dRoot) / (2 * a)];
    }
    
}

console.log(squareX(a, b, c));