(() => {
  // название игры
  let nameGame = 'Найди пару';
  // размер поля игры
  let withField = 6;
  let heightField = 6;
  // массив для формирования карточек
  let arrayCardsPaired = [];
  // счетчик кликов
  let countClick = 0;
  // счетчик количества ходов (кликов) в игре
  let countStep = 0;
  // счетчик открытых пар
  let countOpenPaired = 0;

  // контейнер для первой открытой карты
  let cardOpenSave = '';
  // таймаут показа открытых карт
  let timeout = 1000;

  // перемешивание массива
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // создание массива карточек
  function createCardsPaired(numberOfPairs, array) {
    for (let i = 0; i < numberOfPairs; i++) {
      let objCard = {};
      objCard.id = i;
      objCard.status = 'close';
      objCard.find = false;
      // символ или изображение на карте может быть любым
      objCard.simbol = i + 1;
      array.push(objCard);
      array.push(objCard);
    }
    return array;
  }

  // заголовок
  function createTitle(name) {
    let titile = document.createElement('h2');
    titile.classList.add('paired-card__title')
    titile.textContent = name;
    return titile;
  }



  // создание строки сетки
  function createRow() {
    let row = document.createElement('div');
    row.classList.add('row');
    return row;
  }

  // создание карточки
  function createCard(objCard) {
    let card = document.createElement('button');
    card.classList.add('col', 'btn', 'btn-outline-primary', 'js-card-close')
    card.textContent = '?';
    card.value = objCard.id;
    // обработчик клика по карте
    card.addEventListener('click', () => {
      card.classList.remove('btn-outline-primary');
      card.classList.add('btn-primary', 'js-card-open');
      card.style.opacity = '1';
      card.textContent = objCard.simbol;
      card.disabled = true;
      countClick++;
      countStep++;
      // проверка условий игры
      checkPaired(card);
    })
    return card;
  }

  // возврат карты в исходное состояние
  function toInitialState(element) {
    element.disabled = false;
    element.classList.remove('btn-primary', 'js-card-open');
    element.classList.add('btn-outline-primary', 'js-card-close')
    element.textContent = '?';
  }

  // создание игрового поля
  function createField(withField, heightField, array) {
    let field = document.createElement('div');
    let counter = 0;
    for (let i = 0; i < heightField; i++) {
      let row = createRow();
      for (let j = 0; j < withField; j++) {
        let card = createCard(array[counter]);
        row.append(card);
        counter++;
      }
      field.append(row)
    }
    return field;
  }

  // проверка условий игры
  function checkPaired(element) {
    // если открыта первая карта запоминаем ее
    if (countClick == 1) {
      cardOpenSave = element;
      console.log('открыта карта', cardOpenSave);
      return;
    }
    // если открыта вторая карта
    if (countClick == 2) {
      let cardOpenCurrent = element;
      // если карты не совпадают = возвращаем их в исходное состояние с задержкой
      if (cardOpenCurrent.value !== cardOpenSave.value) {
        setTimeout(toInitialState, timeout, cardOpenSave);
        setTimeout(toInitialState, timeout, cardOpenCurrent);
        // брасываем счетчик кликов
        countClick = 0;
        cardOpenSave = '';
        return;
      } else {
        // если карты совпадают
        cardOpenSave = '';
        countClick = 0;
        countOpenPaired++;
        return
      }
    }

  }




  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('game-paired-cards');
    container.classList.add('container');

    title = createTitle(nameGame);
    container.append(title);

    // создаем массив
    arrayCardsPaired = createCardsPaired(withField + heightField, arrayCardsPaired);
    // перемешиваем массив
    arrayCardsPaired = shuffle(arrayCardsPaired);

    // запускаем игру (фомируем игровое поле)
    field = createField(withField, heightField, arrayCardsPaired);
    container.append(field);

  })


})();
