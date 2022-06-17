function filterNoException(listAll, listExceptions) {
  let listNoExceptions = [];
  for (const item of listAll) {
    if (!listExceptions.includes(item)) {
      listNoExceptions.push(item);
    }
  }
  return listNoExceptions;
}

let emaleAll = [
  'a@malo.ru',
  'b@malo.ru',
  'c@malo.ru',
  'd@malo.ru',
  'e@malo.ru',
  'f@malo.ru',
  'g@malo.ru',
  'h@malo.ru',
  'i@malo.ru',
  'j@malo.ru',
  'k@malo.ru',
  'l@malo.ru',
  'm@malo.ru',
];
let emaleExceptions = [
  'a@malo.ru',
  'f@malo.ru',
  'k@malo.ru',
  'm@malo.ru',
];

console.log(filterNoException(emaleAll, emaleExceptions));
