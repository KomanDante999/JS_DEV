let BakuСommissars26 = [
  {name: 'Степан', surname: 'Шаумян'},
  {name: 'Мешади', surname: 'Азизбеков'},
  {name: 'Прокопий', surname: 'Джапаридзе'},
  {name: 'Иван', surname: 'Фиолетов'},
  {name: 'Мир-Гасан', surname: 'Вазиров'},
  {name: 'Григорий', surname: 'Корганов'},
  {name: 'Яков', surname: 'Зевин'},
  {name: 'Григорий', surname: 'Петров'},
  {name: 'Иван', surname: 'Малыгин'},
  {name: 'Арсен', surname: 'Амирян'},
  {name: 'Мейер', surname: 'Басин'},
  {name: 'Сурен', surname: 'Осепян'},
  {name: 'Эйжен', surname: 'Берг'},
  {name: 'Владимир', surname: 'Полухин'},
  {name: 'Федор', surname: 'Солнцев'},
  {name: 'Арменак', surname: 'Бориян'},
  {name: 'Иван', surname: 'Габышев'},
  {name: 'Марк', surname: 'Коганов'},
  {name: 'Багдасар', surname: 'Авакян'},
  {name: 'Ираклий', surname: 'Метакса'},
  {name: 'Иван', surname: 'Николашвили'},
  {name: 'Арам', surname: 'Костандян'},
  {name: 'Соломон', surname: 'Богданов'},
  {name: 'Анатолий', surname: 'Богданов'},
  {name: 'Исай', surname: 'Мишне'},
  {name: 'Татевос', surname: 'Амиров'},
]

let panfilovtsev28 = [
  {name: 'Василий', surname: 'Клочков'},
  {name: 'Иван', surname: 'Добробабин'},
  {name: 'Иван', surname: 'Шепетков'},
  {name: 'Абрам', surname: 'Крючков'},
  {name: 'Гавриил', surname: 'Митин'},
  {name: 'Аликбай', surname: 'Касаев'},
  {name: 'Григорий', surname: 'Петренко'},
  {name: 'Нарсутбай', surname: 'Есибулатов'},
  {name: 'Дмитрий', surname: 'Калейников'},
  {name: 'Иван', surname: 'Натаров'},
  {name: 'Григорий', surname: 'Шемякин'},
  {name: 'Петр', surname: 'Дутов'},
  {name: 'Никита', surname: 'Митченко'},
  {name: 'Дуйшенкул', surname: 'Шопоков'},
  {name: 'Григорий', surname: 'Конкин'},
  {name: 'Иван', surname: 'Шадрин'},
  {name: 'Николай', surname: 'Москаленко'},
  {name: 'Петр', surname: 'Емцов'},
  {name: 'Даниил', surname: 'Кужебергенов'},
  {name: 'Дмитрий', surname: 'Тимофеев'},
  {name: 'Николай', surname: 'Трофимов'},
  {name: 'Яков', surname: 'Бондаренко'},
  {name: 'Ларион', surname: 'Васильев'},
  {name: 'Николай', surname: 'Белашев'},
  {name: 'Григорий', surname: 'Безродный'},
  {name: 'Мусабек', surname: 'Сенгирбаев'},
  {name: 'Николай', surname: 'Максимов'},
  {name: 'Николай', surname: 'Ананьев'},
]

function filterArrayKeyVol(array, propName, val) {
  let found = [];
  for (let item of array) {
    for (let i of Object.keys(item)) {
      if (i === propName) {
        for (let p of Object.values(item)) {
          if (p === val) {
            found.push(item)
          }
        }
      }
    }
  }
  return found;
}

console.log(filterArrayKeyVol(panfilovtsev28, 'name', 'Николай'));
console.log(filterArrayKeyVol(BakuСommissars26, 'name', 'Иван'));
