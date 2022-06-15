// действия по счетчику
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// заполнить массив на основе счетчика
let array = [];
for (let i = 0; i < 10; i++) {

  array.push(i**i);
  console.log(`${i} = ${array[i]}`);
}

// заполнить массив на основе другого массива
let array1 = [];
for (let item of array) {
  array1.push(item / 2);
  console.log(array1);
}

// заполнить массив на основе другого массива с неизвестной длинной
let c = [];
let file = `ододап воыпд двао овад пдовадп дваодподваоп двадо пдвдапдваопдва
рылоар плварл рлвалпрлварп лрвла выалпвалп рлвап
врал варл прлварпрвлыоралварплрывлпрлывра`;
let next;
while (next = file.nextLine()) {
  c.push(next)
}
console.log(c);






