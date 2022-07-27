// преобразование к boolean---------------------------------------
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

console.log( `true`, hasSomething(true));    // true
console.log( `false`, hasSomething(false));  // false
console.log( `10`, hasSomething(10));        // true
console.log( `0`, hasSomething(0));          // false
console.log( `'0'`, hasSomething('0'));      // true
console.log( `''`, hasSomething(''));        // false
let obj = {name: 0}
let obj1 = {}
let obj2;
console.log( `{name: 0}`, hasSomething(obj));  // true
console.log( `{}`, hasSomething(obj1));        // true
console.log( ``, hasSomething(obj2));          // false
function fn() {}
console.log( `fn()`, hasSomething(fn));        // true

// преобразование к Number-----------------------------------------------
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


// преобразование к string
console.log(`String(true)= ${String(true)}`) // 'true'
console.log(`String(false)= ${String(false)}`) // 'false'
console.log(`String(42)= ${String(42)}`) // '42'
console.log(`String(null)= ${String(null)}`) // 'null'
console.log(`String(undefined)= ${String(undefined)}`) // 'undefined'

console.log(`String({})= ${String({})}`) // '[objekt Objekt]'
console.log(`метод объекта toString= ${String({
  toString() {return 'строковое значение, которое должен возвращать объект'}
})}`) // 'строковое значение, которое должен возвращать объект'

console.log(`array = ${String([
  true,
  false,
  123,
  {},
  null, // вернет ''
  undefined, // вернет ''
])}`) // 'true,false,123,[objekt Objekt],,'


// неявные преобразхования типов===============================================

if (Boolean('false')) {}  // => if (true) {}
if ('false') {}           // операторы сравнения и условия всегда приводят к boolean

if (Boolean('' && 0 || 32.3)) {}  // => if (false && false || true) {}
if ('' && 0 || 32.3) {}  // => if (false && false || true) {}

// number
'2' + '2' // 4
'4' * 'два' // NuN
+'42' // 42
-'42' // -42
-'сорок два' // NaN
true / false // 1 / 0 = Infinity
true * false // 0
'100500' ** false // 100500 sqr0 = 1console.log();

'4' + 2 // '42' - конкатинация
42 + {} // '42[objekt Objekt]'
42 + [1,2,3] // '421,2,3'
42 +10 + '15' + true // 42 + 10 = 52 => 52 + '15' = '5215' => '5215' + true = '5215true'



// нестрогие сравнения
'1' == 1 // 1 == 1 => true
true == 1 // 1 == 1 => true
if (({}) == 0) {} // NaN == 0 => false
({toString() { return '3'}}) == 3 // 3 == 3 => true

'1' != 1 // false

'1' > 2 // false
true < 5 // true
if (({}) <= 0) {} // NaN <= 0 => false
({toString() { return '1'}}) >= false // 1 >= 0 => true

