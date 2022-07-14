(() => {
  // название игры
  let nameGame = 'Найди пару';
  // размер поля игры
  let withField = 4;
  let heightField = 4;
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
      // символ или изображение на карте может быть любым
      objCard.simbol = i + 1;
      array.push(objCard);
      array.push(objCard);
    }
    return array;
  }

  // заголовок
  function createTitle(name) {
    const titile = document.createElement('h2');
    titile.classList.add('paired-card__title')
    titile.textContent = name;
    return titile;
  }

  // счетчтк числа ходов
  function createCountSteps(number = 0) {
    const countWrap = document.createElement('div');
    const count = document.createElement('span');
    countWrap.classList.add('paired-card__count-wrap');
    count.classList.add('paired-card__count', 'js-count-step');
    count.textContent = number;
    countWrap.append(count);
    return {countWrap, count};
  }


  // создание строки сетки
  function createRow() {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
  }

  // создание карточки
  function createCard(objCard) {
    const card = document.createElement('button');
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
      // число ходов
      countStep++;
      // вывод числа ходов

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
    const field = document.createElement('div');
    field.classList.add('paired-card__field')
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

  // вывод информации в заданный элемент
  function outInform(info, targetName) {
    let targetElement = document.querySelector(targetName);
    console.log(targetElement);
    targetElement.textContent = info;
  }



  document.addEventListener('DOMContentLoaded', () => {

    // создаем массив
    arrayCardsPaired = createCardsPaired((withField * heightField) / 2, arrayCardsPaired);
    // перемешиваем массив
    arrayCardsPaired = shuffle(arrayCardsPaired);

    // создаем разметку
    const container = document.getElementById('game-paired-cards');
    container.classList.add('container');

    const titleGame = createTitle(nameGame);
    container.append(titleGame);

    const panelCountSteps = createCountSteps();
    container.append(panelCountSteps.countWrap);

    // запускаем игру (фомируем игровое поле)
    const fieldGame = createField(withField, heightField, arrayCardsPaired);
    container.append(fieldGame);

    let panel = document.getElementsByClassName('js-count-step')
    // let t = document.getElementsByClassName('js-count-step');

  })


})();
