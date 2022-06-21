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
];

function filterArrayKeyVol(array, propName) {
  for (let item of array) {
    // console.log(item, typeof item);
    let entries = Object.entries(item);
    for (let entry of entries) {
      console.log(`${entry[0]}: ${entry[1]}`);
    }
  }
}

filterArrayKeyVol(panfilovtsev28, 'name');
