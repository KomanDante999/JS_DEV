const str = 'Стока для проверки';

str.includes('для') // true
str.startsWith('Строка') // true
str.endsWith('ки') // true

str.toUpperCase().includes('ДЛЯ') // true
str.toLowerCase().startsWith('строка') // true

const strg = 'На ёлке ёжики ещё не перевелись'

strg.replace('ё', 'Е');
console.log('strg.replace', strg.replace('ё', 'Е')); // На Елке ёжики ещё не перевелись
console.log('strg', strg);  // На ёлке ёжики ещё не перевелись

strg.split(' ')  // ['На', 'ёлке', 'ёжики', 'ещё', 'не', 'перевелись']
console.log(strg.split(' '));

strg.split('ё')  // ['На ', 'лке ', 'жики ещ', ' не перевелись']
console.log(strg.split('ё'));
strg.split('ё').join('Е')  // 'На Елке Ежики ещЕ не перевелись'
console.log(strg.split('ё').join('Е'));

'\n\t 123 \n\t'.trim() // '123'

'0123456789'.substring(2, 5) // '23456'
'0123456789'.substring(2, 5000) // '23456789'
'0123456789'.substring(-5, 3) // '567'
'0123456789'.substring(-5000, 3) // '012'

// индексы
const fullName = 'Владимир Иванович Вернадский';
const surname = 'Вернадский';
let surnameIndex = fullName.indexOf(surname);
// surnameIndex = fullName.lastIndexOf(surname);
console.log('surnameIndex = ', surnameIndex);
let fullNameReplase;
if (surnameIndex > 0) {
  fullNameReplase = surname + ' ' + fullName.replace(surname, '').trim();
}
else {
  fullNameReplase = fullName;
}
console.log(fullNameReplase);


