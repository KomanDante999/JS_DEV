let me = {
  birthDate: {year: 1974, month: 12, day: 6},
  age: 47, // устареет через год
  // getAge: function () {
  getAge() {                // короткая запись метода
    let now = new Date();
    let born = new Date(
      this.birthDate.year,
      this.birthDate.month + 1,
      this.birthDate.day,
    );
    let diffMilliSec = now.getTime() - born.getTime();
    return Math.floor(diffMilliSec / 1000 / 60 / 60 / 24 / 365.25 )
  }
}
console.log(Date());
console.log(me.getAge());

// this зависит от контекста вызова
let name = 'Петя';
let surname = 'Васечкин';

function getFullName() {
  return this.name + ' ' + this.surname;
}

let obj = {name, surname, getFullName}
console.log(obj.getFullName());

obj.whoAmI = function() {
  console.log(`Меня зовут ${this.name} ${this.surname}`);
}
obj.whoAmI();

delete obj.getFullName;

// console.log(obj.getFullName()); // Error

// добавняем функцию (метод) другому объекту 2 раза с разными названиями
let objOther = {
  someMethod: getFullName,
};
objOther.someMethodOther = getFullName;

console.log(objOther.someMethod());
console.log(objOther.someMethodOther());

objOther.name = 'Кот';
objOther.surname = 'Матроскин';

console.log(objOther.someMethod());
console.log(objOther.someMethodOther());
