let singleQuote = 'Строка в одиночных кавычках';
console.log(singleQuote);
let doubleQuote = "Строка в двойных кавычках";
console.log(doubleQuote);
let tickQuote = `Строка в обратных кавычках`;
console.log(tickQuote);

let multiline1 = 'Строка\n c\n переносами';
console.log(multiline1);
let multiline2 = `Строка
c
переносами`;
console.log(multiline1);

//конкатинация строк concatenation
let str1 = 'Первая строка';
let str2 = 'Вторая строка';

let concat = str1 + '\n' + str2;
console.log(concat);

let tickConcat = `${str1}
${str2}`
console.log(tickConcat);

let greeting = 'Привет';
let nane = 'Мария';
console.log(`${greeting}, ${nane}!
Добро пожаловать!`);

console.log(' "Кавычка в кавычках: \'"');
console.log(" 'Кавычка в кавычках: \'\"\` ' ");
console.log(` "Кавычка в кавычках:" `);
console.log(` 'Кавычка в кавычках:' `);
console.log('Символ табуляции:===\t===');
console.log('Символ обратный слэш: \\');
console.log('\x31 \tцифра 1 в UTF-8 в hex');
console.log('\u0031 \tцифра 1 в UTF-16 в hex');
console.log('\u{1F354} \tсимвол эмодзи гамбургер в UTF-32 в hex');


