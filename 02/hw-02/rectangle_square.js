// Площадь прямоугольника S = |X2 - X1|*|Y2 - Y1|
// Для x1 = 2, y1 = 3, x2 = 10, y2 = 5 площадь равна 16;
// Для x1 = 10, y1 = 5, x2 = 2, y2 = 3 площадь равна 16;
// Для x1 = -5, y1 = 8, x2 = 10, y2 = 5 площадь равна 45;
// Для x1 = 5, y1 = 8, x2 = 5, y2 = 5 площадь равна 0;
// Для x1 = 8, y1 = 1, x2 = 5, y2 = 1 площадь равна 0.

function rectangleSquare(x1, y1, x2, y2) {
  return Math.abs(x2 - x1) * Math.abs(y2 - y1);
}

console.log('Для прямоугольника с координатами :');
console.log('x1 = 2, y1 = 3, x2 = 10, y2 = 5 площадь равна', rectangleSquare(2, 3, 10, 5));
console.log('x1 = 10, y1 = 5, x2 = 2, y2 = 3 площадь равна', rectangleSquare(10, 5, 2, 3));
console.log('x1 = -5, y1 = 8, x2 = 10, y2 = 5 площадь равна', rectangleSquare(-5, 8, 10, 5));
console.log('x1 = 5, y1 = 8, x2 = 5, y2 = 5 площадь равна', rectangleSquare(5, 8, 5, 5));
console.log('x1 = 8, y1 = 1, x2 = 5, y2 = 1 площадь равна', rectangleSquare(8, 1, 5, 1));
