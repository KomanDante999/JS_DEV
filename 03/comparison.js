console.log('true === true', true === true);// true
console.log('true === true', true === true);// true
console.log('true !== true', true !== true);// false
console.log('true === false', true === false);// false
console.log('true === false', true === false);// false
console.log('true !== false', true !== false);// true

console.log(`"строка" === 'строка'`, "строка" === 'строка');// true
console.log(`"строка" === 'строка'`, "строка" === 'строка');// true
console.log(`\'строка\' === \`строка\``, 'строка' === `строка`);// true
console.log(`\"строка\" === \`строка\``, "строка" === `строка`);// true

console.log(`\"строка\" === \'строка\' === \`строка\``, "строка" === 'строка' === `строка`);
// false, важен порядок сравнения: "строка" === 'строка' даeт trye, и дальше trye === 'строка' дает false

console.log(`'строка1' !== 'строка2'`, 'строка1' !== 'строка2');// true

// сравнение (===) разных типов всегда false

console.log('false === 0', false === 0);// false
console.log('false !== 0', false !== 0);// true
console.log('0 === ``', 0 === ``);// false
console.log('0 !== ``', 0 !== ``);// true
console.log('3 === `3`', 3 === `3`);// false
console.log('3 !== `3`', 3 !== `3`);// true
console.log('false === ``', false === ``);// false
console.log('false !== ``', false !== ``);// true

//сравнение строк происходит посимвольно по кодам
console.log(`\'z\' > \'a\'`, 'z' > 'a');// true
console.log(`\'az\' > \'axzzz\'`, 'az' > 'axzzz');// true
console.log(`\'z\' > \'Z\'`, 'z' > 'Z');// true
console.log(`\'5\' > \'10'`, '5' > '10');// true
console.log(`\'10\' > \'05'`, '10' > '05');// true

// сравнение строк и чисел
console.log(`\'10\' > 5`, '10' > 5);// true
console.log(`10 > \'5\'`, 10 > '5');// true
console.log(`10 > \'x\'`, 10 > 'x');// false, 'x' не число (NaN)
console.log(`10 < \'x\'`, 10 < 'x');// false

// сравнение с boolean сводятся к сравнению чисел
// true = 1, false = 0
console.log(`1 > false`, 1 > false);// true, 1 > 0
console.log(`0 < true`, 0 < true);// true, 0 > 1
console.log(`\'10\' < true`, '10' < true);// true, 10 > 1
console.log(`\'1\' > false`, '1' > false);// true, 1 > 0
console.log(`\'1\' > true`, '1' > true);// false, 1 > 1
console.log(`\'x\' > true`, 'x' > true);// false, NaN > 1




