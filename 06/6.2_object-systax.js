let name = 'Эрнесто';
let surname = 'Че';
let middle = 'Геввара';

let me = {
  // name: name,
  name,
  // surname: surname,
  surname,
  middleName: middle,
  birthDate: {
    year: 1974,
    month: 12,
    day: 06
  },
  occupation: 'системный администратор',
  married: true,
  'property with spaces': null, // свойство - строка
  'property.with.dots': undefined,
};

// создание нового свойства объекта
me.education = 'ЛГПИ';
// изменение свойства
me.occupation = 'web developer';
me['property with spaces'] = 42;
me['property.with.dots'] = 45;
// удаление свойства
delete me.married;
delete me['property with spaces'];

// получение значения свойства
let myName = me.name;
console.log(myName);
console.log(me.name);
console.log(me.birthDate);
console.log(me.birthDate.year);
console.log(me);
// значение несуществующего свойства
let emptyProp = me.someProp; // undefined
console.log(emptyProp);
// emptyProp = emptyObject.someProp1; // error
// console.log(emptyProp);

// пустой обект
let emptyObject = {};

// динамическое свойство

function printObjProp(obj, propName) {
  console.log(obj[propName]);
}

printObjProp(me, 'name'); // Эрнесто
printObjProp(me, 'surname'); // Че
printObjProp(me, 'middleName'); // Геввара


