let numbers = [0,1,2,3,4,5,6,7,8,9];

const first = numbers.shift();
console.log('first = ', first);     // 0
console.log('numbers = ', numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const last = numbers.pop();
console.log('last = ', last);     // 9
console.log('numbers = ', numbers); // [1, 2, 3, 4, 5, 6, 7, 8]

while (numbers.length) {
  console.log(`numbers.last = ${numbers.pop()}`);
  console.log('numbers =', numbers);

}

// splice
numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12];

const middle = numbers.splice(2, 3);
console.log('middle',middle);   // [2, 3, 4]
console.log('numbers',numbers); // [0, 1, 5, 6, 7, 8, 9, 10, 11, 12]

console.log('splice(100, 100)', numbers.splice(100, 100) ); // []
console.log('numbers',numbers); // [0, 1, 5, 6, 7, 8, 9, 10, 11, 12]

console.log('splice(8)', numbers.splice(8) ); // [11, 12]
console.log('numbers',numbers); // [0, 1, 5, 6, 7, 8, 9, 10]

console.log('splice(2, 0, 3, 4, 5)', numbers.splice(3, 0, 3, 4, 5) ); // []
console.log('numbers',numbers); // [0, 1, 5, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('splice(11, 0, 11, 12, 13, 14)', numbers.splice(11, 0, 11, 12, 13, 14) ); // []
console.log('numbers',numbers); // [0, 1, 5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// разрезать массив
console.log('splice(10)', numbers.splice(10) ); // [10, 11, 12, 13, 14]
console.log('numbers',numbers); // [0, 1, 5, 3, 4, 5, 6, 7, 8, 9]

// сортировка массива
numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12];

// переписывает сам массив
console.log(numbers.reverse()); //  [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(numbers);           //  [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(numbers.reverse()); //  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// сравнивает посимвольно, переписывает массив
console.log(numbers.sort()); // [0, 1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers);        // [0, 1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9]

// принимает функцию в качестве аргумента
console.log(numbers.sort((a, b) => a - b)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(numbers.sort((a, b) => b - a)); // [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// копирование массива
console.log(numbers.slice()); // полная копия
console.log(numbers.slice(3)); // копия с 3 индекса
console.log(numbers.slice(3, 6)); // копия с 3 индекса до индекса 6
console.log(numbers.slice(-5)); // копия с 5 индекса от конца
console.log(numbers.slice(3, -2)); // копия с 3 индекса до индекса 2 с конца
console.log(numbers.slice(100, 100)); // []

// поиск в масиве
numbers = [0,1,2,3,4,5,6,7,8,9,10,0,1];

numbers.includes(100) // false
numbers.includes(8) // true
numbers.indexOf(0) // 0
numbers.indexOf(100) // -1
numbers.lastIndexOf(0) // 12

const students = [
  {name: 'Василий', age: 18},
  {name: 'Геннадий', age: 23},
  {name: 'Андрей', age: 17},
  {name: 'Тимофей', age: 29},
  {name: 'Иннокентий', age: 17},
]

console.log(
  students.includes({name: 'Василий', age: 18}) // false, объекты нельзя сравнивать
);
console.log(
  students.find(students => students.name === 'Василий' && students.age === 18) // {name: 'Василий', age: 18}
);
console.log(
  students.findIndex(students => students.name === 'Василий' && students.age === 18) // 0
);
console.log(
  students.find(students => students.age <= 16) // undefined
);
console.log(
  students.findIndex(students => students.name === 'Панкратий') // -1
);
// каждый элемент массива
console.log(
  students.every(students => students.age < 30) // true, все студенты младше 30
);
console.log(
  students.every(students => students.age <= 16) // false, младше 16 нет
);
// хотя бы один элемент
console.log(
  students.some(students => students.age < 18) // true, есть младше 18
);
console.log(
  students.some(students => students.name === 'Иван') // false
);

// фильтр
console.log(
  students.filter(students => students.age < 18) // [{name: 'Андрей', age: 17}, {name: 'Иннокентий', age: 17}]
);
console.log(
  students.filter(students => students.name !== 'Андрей') // все кроме Андрея
);

// преобразование к строке
console.log(
  students.map(st => st.name) // ['Василий', 'Геннадий', 'Андрей', 'Тимофей', 'Иннокентий']
);

// подсчет внутри массива
const cartItem = [ // корзина
  {name: 'Гречка', prise: 50, quantity: 3},
  {name: 'Сок', prise: 100, quantity: 1},
  {name: 'Перфоратор', prise: 8000, quantity: 2},
]

// сумма к оплате
console.log(
  cartItem.reduce((total, item) => total + item.prise * item.quantity, 0) // 0 - начальное значение для total
);

students.forEach((student, index) => {
  console.log(`Студент №${index + 1}: ${student.name} `);
})
