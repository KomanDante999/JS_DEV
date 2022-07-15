(() => {
  // название игры
  let nameGame = 'Найди пару';
  // размер поля игры
  let withField = 4;
  let heightField = 4;
  let numberOfPairs = (withField * heightField) / 2;
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
  let timeout = 700;

  // перемешивание массива
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // создание массива карточек
  function createCardsPaired(numberPairs, array) {
    for (let i = 0; i < numberPairs; i++) {
      let objCard = {};
      objCard.id = i;
      // символ или изображение на карте может быть любым
      objCard.simbol = i + 1;
      array.push(objCard);
      array.push(objCard);
    }
    return array;
  }

  // ___________________ оформление интерфейса _________________
  // заголовок
  function createTitle(name) {
    const titile = document.createElement('h2');
    titile.classList.add('paired-card__title')
    titile.textContent = name;
    return titile;
  }

  // модальное окно
  function createModal(contentBody) {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.tabIndex = -1;
    modal.id = 'js-modal-widow';
    modal.setAttribute('data-bs-backdrop', 'static');
    modal.setAttribute('data-bs-keyboard', 'false');
    modal.setAttribute('aria-labelledby', 'staticBackdropLabel');
    modal.setAttribute('aria-hidden', 'true');

    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog', 'modal-lg');
    const modalConten = document.createElement('div');
    modalConten.classList.add('modal-content');
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = 'Выберите размер игрового поля';
    const modalBtnClose = document.createElement('button');
    modalBtnClose.classList.add("btn-close");
    modalBtnClose.setAttribute('data-bs-dismiss', 'modal');
    modalBtnClose.ariaLabel = "Close";
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    const modalBtnStart = document.createElement('button');
    modalBtnStart.classList.add("btn", "btn-primary");
    modalBtnStart.setAttribute('data-bs-dismiss', 'modal');
    modalBtnStart.textContent = 'НАЧАТЬ ИГРУ!';

    modalHeader.append(modalTitle, modalBtnClose);
    modalBody.append(contentBody);
    modalFooter.append(modalBtnStart);
    modalConten.append(modalHeader, modalBody, modalFooter);
    modalDialog.append(modalConten);
    modal.append(modalDialog);

    return {modal, modalBtnStart};
  }

  // кнопка изменения размера игрового поля
  function createBtnSizeField() {
    const wrap = document.createElement('div');
    const btnSizeField = document.createElement('button');
    btnSizeField.classList.add("btn", "btn-primary");
    btnSizeField.setAttribute('data-bs-toggle', 'modal');
    btnSizeField.setAttribute('data-bs-target', '#js-modal-widow');
    btnSizeField.textContent = 'ВЫБРАТЬ РАЗМЕР ИГРОВОГО ПОЛЯ';
    wrap.append(btnSizeField);
    return wrap;
  }

  // радио чекбокс
  function createRadioCheck(inlineClass, name, index) {
    const wrapForm = document.createElement('div');
    wrapForm.classList.add('form-check');
    // инлайн класс для горизонтального расположение
    if (inlineClass) {
      wrapForm.classList.add(inlineClass);
    }
    const input = document.createElement('input');
    input.classList.add('form-check-input');
    input.type = 'radio';
    input.id = name + index;
    input.value = index;
    input.name = name;
    // событие выбора чекбокса
    input.setAttribute('onchange','rulesCreateField(this.id, this.value)')
    const label = document.createElement('label');
    label.classList.add('form-check-label');
    label.for = name + index;
    label.textContent = index;

    wrapForm.append(input, label);

    return {wrapForm, input};
  }

  // панель выбора размера игрового поля
  function createPanelSizeField(minSize = 1, maxSize = 4) {
    const wrap = document.createElement('div');
    const wrapWithField = document.createElement('div');
    wrapWithField.classList.add('with', 'd-flex', 'flex-nowrap', 'ps-5');
    const wrapHeightField = document.createElement('div');
    wrapHeightField.classList.add('height');
    wrapHeightField.style.width = '40px';
    wrap.append(wrapWithField, wrapHeightField)
    // горизонтальная строка
    for (let i = minSize; i <= maxSize; i++) {
      let radioChek = createRadioCheck('form-check-inline','withField', i).wrapForm;
      wrapWithField.append(radioChek);
    }
    // вертикальная колонка
    for (let i = minSize; i <= maxSize; i++) {
      let radioChek = createRadioCheck('form-check-reverse','heightField', i).wrapForm;
      wrapHeightField.append(radioChek);
    }
    return wrap;
  }


  // счетчтк числа ходов
  function createCountSteps() {
    const countWrap = document.createElement('div');
    const count = document.createElement('span');
    const caption = document.createElement('span');
    countWrap.classList.add('paired-card__count-wrap');
    caption.classList.add('paired-card__caption');
    count.classList.add('paired-card__count', 'js-count-step');
    caption.textContent = 'Число ходов';
    count.textContent = 0;
    countWrap.append(caption);
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
    card.classList.add('col', 'btn', 'm-1', 'btn-outline-primary', 'js-card-close')
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
      document.querySelector('.js-count-step').textContent = countStep;

      // проверка условий игры
      rulesGame(card);
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

  // оконяание игры
  function gameOver(counter, gameResult) {
    if (gameResult == 'win') {
      alert('Игра закончена за ', counter, 'ходов')
    }
  }


  // правила игры
  function rulesGame(element) {
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
        // проверка условия окончания игры
        if (countOpenPaired == numberOfPairs) {
          gameOver(countClick, 'win');
          return;
        }
        return;
      }
    }
  }

  // правила создания игрового поля
  function rulesCreateField(id, value) {
    if (value % 2 !== 0) {

      if (id.includes('withField')) {

        console.log(id, value);
      }

    }
  }

  document.addEventListener('DOMContentLoaded', () => {

    // создаем массив
    arrayCardsPaired = createCardsPaired(numberOfPairs, arrayCardsPaired);
    // перемешиваем массив
    arrayCardsPaired = shuffle(arrayCardsPaired);

    // создаем разметку
    const container = document.getElementById('game-paired-cards');
    container.classList.add('container');

    const PanelSizeField = createPanelSizeField(1, 10);

    const modalStartGame = createModal(PanelSizeField);
    container.append(modalStartGame.modal);

    const titleGame = createTitle(nameGame);
    container.append(titleGame);

    const btnResizeField = createBtnSizeField();
    container.append(btnResizeField);

    const panelCountSteps = createCountSteps();
    container.append(panelCountSteps.countWrap);

    // запускаем игру (фомируем игровое поле)
    const fieldGame = createField(withField, heightField, arrayCardsPaired);
    container.append(fieldGame);


  })

  window.rulesCreateField = rulesCreateField;

})();
