//Решение квадратного уравнения

function squareX(a, b, c) {
    //дискриминант
    let d = b * b - 4 * a * c; 

    if (d < 0) {
        return [];
    } else {
        if (d === 0) {
            return [-b / (2 * a)];
        }
        // корень дискриминанта
        let dRoot = Math.sqrt(d);
        // [x1, x2]
        return [(-b + dRoot) / (2 * a), (-b - dRoot) / (2 * a)]
    }
}

console.log(squareX(1, 2, 3));
console.log(squareX(3, 8, 2));
console.log(squareX(1, 12, 2));
