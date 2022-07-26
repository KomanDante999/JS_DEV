// проверка разных типов на нулевое значение
// приведение к boolean
function hasSomething(value) {
  switch (typeof value) {
    // для boolean возвращаем как есть
    case 'boolean': return value;
    // для number проверяем значение на 0
    case 'number': return value !== 0;
    // для string проверяем значение на пустую строку
    case 'string': return value !== '';
    // для objekt явно проверяем на null, то есть отсутствие объекта
    case 'object': return value !== null;
    // undefined всегда пустое
    case 'undefined': return false;
    // function тоже object
    case 'function': return true;
  }
  // return Boolean(value);
  // неявно приводится к типу boolean при выполнении логической операции
  // return !value;
  // return !!value;
}

console.log( `true`, hasSomething(true));
console.log( `false`, hasSomething(false));
console.log( `10`, hasSomething(10));
console.log( `0`, hasSomething(0));
console.log( `'0'`, hasSomething('0'));
console.log( `''`, hasSomething(''));
let obj = {name: 0}
let obj1 = {}
let obj2;
console.log( `{name: 0}`, hasSomething(obj));
console.log( `{}`, hasSomething(obj1));
console.log( ``, hasSomething(obj2));
function fn() {}
console.log( `fn()`, hasSomething(fn));

// преобразование к Number
console.log(`Number('-230.9') ${Number('-230.9')}`) // -230.9
console.log(`Number('-230,9') ${Number('-230,9')}`) // NaN
console.log(`Number('\n\t-230.9\n\t') ${Number('\n\t-230.9\n\t')}`) // -230.9
console.log(`Number('не число') ${Number('не число')}`) // NaN

console.log(`Number(true) ${Number(true)}`) // 1
console.log(`Number(false) ${Number(false)}`) // 0

console.log(`Number(null) ${Number(null)}`) // 0
console.log(`Number(undefined) ${Number(undefined)}`) // NaN

console.log(`Number({})= ${Number({})}`) // NaN
console.log(`Number([0, 5, 6,])= ${Number([0, 5, 6,])}`) // NaN
console.log(`Number(() => {})= ${Number(() => {})}`) // NaN

parseInt('-230.979879') // преобразует в целое число
console.log(`parseInt('-230.9')= ${parseInt('-230.9')}`) // -230
parseFloat('3.14')
console.log(`parseFloat('3.14')= ${parseFloat('3.14')}`) // 3.14

// сравнение с NaN всегда вернет false
console.log(`NaN === NaN вернет ${NaN === NaN}`) // false
console.log(`NaN >= NaN вернет ${NaN >= NaN}`) // false
console.log(`NaN <= 0 вернет ${NaN <= 0}`) // false


// невозможно выявить NaN с посощью сравнения
let abc = '';
if (Number(abc) === NaN ) {
  console.log(abc);
} else console.log('не сработало'); // не сработало (так как сравнение с NaN всегда false)

isNaN
if (isNaN(Number(abc))) {
  console.log(abc);
}                              // точно не число



