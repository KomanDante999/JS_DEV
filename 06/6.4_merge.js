let mother = {
  usb: 8,
  chip: 'AMD X570',
  socket: 'AM3/AM4'
};
let cpu = {
  core: 8,
  manufacture: 'AMD',
  socket: 'AM4'
};
let ram = {
  ramType: 'DDR4',
  ramVol: 8192,
  ranFreq: 3200
};
let comp = {
  prise: 100000,
  ...mother,
  ...cpu,
  ...ram
};

let compWithAssign = Object.assign(
  {prise: 10000},
  mother, cpu, ram
);

console.log(comp);
console.log(compWithAssign);

console.log(Object.keys(comp));
console.log(Object.values(comp));
console.log(Object.entries(comp));

// ссылка на объект
let digit = 20;
let otheDigit = digit;

otheDigit += 5;

console.log(digit); // исходное значение не меняется,
console.log(otheDigit);// так как otheDigit копирует значение из digit

let obj = {model: 'Suzuki'};
let otheObj = obj;

console.log(obj.model);
console.log(otheObj.model);

otheObj.model = 'Nissan X-trail';

 // obj и otheObj ссылаются на один и тот же объект
 // поэтому свойство поиеняется и там, и там
console.log(obj.model);
console.log(otheObj.model);

// obj1 и obj2 - ссылки на один и тот же объект
let obj1 = {name: 'Какой-то Вася'}
let obj2 = obj1;
console.log(obj1 === obj2 ); // true

// теперь ooj2 становится ссылкой на другой объект,
//хотя и с таким же свойством
obj2 = {name: 'Какой-то Вася'}
console.log(obj1 === obj2 ); // false!!!



// при подмешивании исходный объект тоже будет изменяться
let moto = {
  model: 'Suzuki'
};
console.log(moto);

let moto2 = Object.assign(
  moto,
  {speed: 400}
  )
  console.log(moto);
  console.log(moto2);

  moto2.model = 'Dukati';

  console.log(moto);
  console.log(moto2);
  console.log(moto === moto2); // true

  // избежать этого можно указав в начале пустой объект,
  //в который и буду запясаны все остальный

  let moto0 = {
    model: 'Suzuki'
  };
  let moto3 = Object.assign(
    {},
    moto0,
    {speed: 500}
    )
    console.log(moto0);
    console.log(moto3);

    moto3.model = 'Honda';

    console.log(moto0);
    console.log(moto3);
    console.log(moto0 === moto3); // false

    // то же самое
    let moto4 = {
      ...moto0,
      speed: 600,
      model: 'Kavasaki'
    }

    console.log(moto0);
    console.log(moto3);
    console.log(moto4);



