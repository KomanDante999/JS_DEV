(() => {
  // размер поля игры
  let withField = 4;
  let heightField = 4;
  let arrayCardsPaired = [];

  // перемешивание массива
  function shuffle(arrOrig) {
    for (let i = arrOrig.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrOrig[i], arrOrig[j]] = [arrOrig[j], arrOrig[i]];
    }
    return arrOrig;
  }

  // массив карточек
  function createCardsPaired(numberOfPairs, array) {
    for (let i = 0; i < numberOfPairs; i++) {
      let objCard = {};
      objCard.id = i;
      objCard.simbol = i + 1;
      array.push(objCard);
      array.push(objCard);
    }
    return array;
  }

  // создание строки сетки
  function createRow() {
    let row = document.createElement('div');
    row.classList.add('row');
    return row;
  }

  // создание карточки
  function createCard(id, simbol) {
    let card = document.createElement('button');
    card.classList.add('col', 'btn', 'btn-primary')
    card.textContent = simbol;
    card.value = id;

    return card;
  }

  // создание игрового поля
  function createField(withField, heightField, array) {
    let field = document.createElement('div');
    let counter = 0;
    for (let i = 0; i < heightField; i++) {
      let row = createRow();
      for (let j = 0; j < withField; j++) {
        let card = createCard(array[counter].id, array[counter].simbol);
        row.append(card);
        counter++;
      }
      field.append(row)
    }
    return field;
  }






  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('game-paired-cards');
    container.classList.add('container');

    // создаем массив
    arrayCardsPaired = createCardsPaired(withField + heightField, arrayCardsPaired);
    // перемешиваем массив

    arrayCardsPaired = shuffle(arrayCardsPaired);
    field = createField(withField, heightField, arrayCardsPaired);
    container.append(field);




  })


})();
