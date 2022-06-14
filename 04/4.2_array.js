let fruits = ['яблоко', 'груша', 'банан', 'апельсин', 'ананас']
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[3]);

let alfavit = []

// добавляет элементы в конец массива
alfavit.push('Г')
alfavit.push('Д')
alfavit.push('Е', 'Ж', 'З')

// добавляет элементы в начало массива
alfavit.unshift('В');
alfavit.unshift('O', 'А', 'Б');

console.log(alfavit, alfavit.length);
console.log(alfavit[alfavit.length - 1]);

//замена элемента
alfavit[6] = 'еЁ'
console.log(alfavit);

