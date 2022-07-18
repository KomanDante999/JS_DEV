(() => {
  // название игры
  let nameGame = 'Найди пару';
  // размер поля игры
  let withFieldSize = 4;
  let heightFieldSize = 4;
  // массив для формирования карточек
  let arrayCardsPaired = [];

  // счетчик кликов
  let countClick = 0;
  // счетчик количества ходов (кликов) в игре
  let countStep = 0;
  // счетчик открытых пар
  let countOpenPaired = 0;
  // таймер
  let timerCame = 60;

  // контейнер для первой открытой карты
  let cardOpenSave = '';
  // таймаут показа открытых карт
  let timeout = 700;

  // определение числа пар
  function numberOfPairs(withField, heightField) {
    return (withField * heightField) / 2
  }

  // создание массива карточек
  function createCardsPaired(numberPairs, array) {
    array = [];
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

  // перемешивание массива
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // ___________________ оформление интерфейса _________________
  // заголовок
  function createTitle(name) {
    const titile = document.createElement('h1');
    titile.classList.add('paired-card__title')
    titile.textContent = name;
    return titile;
  }

  // модальное окно
  function createModal(contentBody) {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.tabIndex = -1;
    // modal.id = idModal;
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

    modalHeader.append(modalTitle, modalBtnClose);
    modalBody.append(contentBody);
    modalFooter.append(modalBtnStart);
    modalConten.append(modalHeader, modalBody, modalFooter);
    modalDialog.append(modalConten);
    modal.append(modalDialog);

    return {modal, modalTitle, modalBtnStart};
  }

  // кнопка изменения размера игрового поля
  function createBtnSizeField() {
    const wrap = document.createElement('div');
    const btnSizeField = document.createElement('button');
    btnSizeField.classList.add("btn", "btn-primary");
    btnSizeField.setAttribute('data-bs-toggle', 'modal');
    btnSizeField.setAttribute('data-bs-target', '#modal-size-field');
    btnSizeField.textContent = 'ВЫБРАТЬ РАЗМЕР ИГРОВОГО ПОЛЯ';
    wrap.append(btnSizeField);
    return wrap;
  }

  // радио чекбокс
  function createRadioCheck(optionClass, name, index) {
    const wrapForm = document.createElement('div');
    wrapForm.classList.add('form-check');
    wrapForm.classList.add(optionClass);
    const input = document.createElement('input');
    input.classList.add('form-check-input');
    input.type = 'radio';
    input.id = name + index;
    input.value = index;
    input.name = name;
    // событие выбора чекбокса
    input.setAttribute('onchange','rulesCreateField(this.name, this.value)');
    const label = document.createElement('label');
    label.classList.add('form-check-label');
    label.for = name + index;
    label.textContent = index;

    wrapForm.append(input, label);

    return {wrapForm, input};
  }

  // панель выбора размера игрового поля с радио чекбоксами
  function createPanelSizeField(minSize = 1, maxSize = 4) {
    const wrap = document.createElement('div');
    const wrapWithField = document.createElement('div');
    wrapWithField.classList.add('with-line', 'd-flex', 'flex-nowrap', 'ps-5');
    const wrapHeightField = document.createElement('div');
    wrapHeightField.classList.add('height-line');
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

  // панель установки таймера (input range)
  function createSetTimerPanel() {
    const timerSet = document.createElement('div');
    timerSet.classList.add('timer-set');
    const timerSetWindov = document.createElement('div');
    timerSetWindov.classList.add('timer-set__windov-output', 'js-timer-set-windov');

    const timerSetLabel = document.createElement('label');
    timerSetLabel.classList.add('timer-set__label', 'form-label');
    timerSetLabel.for = 'timer-set-range';
    timerSetLabel.textContent = 'время в мин';
    const timerSetInput = document.createElement('input');
    timerSetInput.classList.add('timer-set__input-range', 'form-range');
    timerSetInput.id = 'timer-set-range';
    timerSetInput.type = 'range';
    // обработчик события на input range
    timerSetInput.setAttribute('onchange','rulesTimerset(this.value)')

    timerSetWindov.textContent = timerSetInput.value;

    timerSet.append(timerSetWindov, timerSetLabel, timerSetInput);

    return {timerSet, timerSetWindov, timerSetInput}
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
    countWrap.append(caption, count);
    return {countWrap, count};
  }

  // панель таймера
  function createTimerPanel(time = '1 мин 00 сек') {
    const timerWrap = document.createElement('div');
    timerWrap.classList.add('timer');
    const timerTitle = document.createElement('h3');
    timerTitle.classList.add('timer__title');
    timerTitle.textContent = 'ИГРАТЬ НА ВРЕМЯ';
    const timerBtnPanel = document.createElement('div');
    timerBtnPanel.classList.add('timer__panel-button');
    const timerWindow = document.createElement('div');
    timerWindow.classList.add('timer__window');
    timerWindow.textContent = time;
    const timerBtnSet = document.createElement('button');
    timerBtnSet.classList.add('timer__button-set', "btn", "btn-primary");
    timerBtnSet.textContent = 'УСТАНОВИТЬ ТАЙМЕР';
    timerBtnSet.setAttribute('data-bs-toggle', 'modal');
    timerBtnSet.setAttribute('data-bs-target', '#modal-timer-set');

    const timerBtnStart = document.createElement('button');
    timerBtnStart.classList.add('timer__button-start', "btn", "btn-danger");
    timerBtnStart.textContent = 'СТАРТ!!!';

    timerBtnPanel.append(timerBtnStart, timerBtnSet, timerWindow);
    timerWrap.append(timerTitle, timerBtnPanel);

    return {timerWrap, timerBtnStart, timerBtnSet, timerWindow}
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
  function createField(withFieldSize, heightFieldSize, array) {
    const field = document.createElement('div');
    field.classList.add('paired-card__field', 'js-field-game')
    let counter = 0;
    for (let i = 0; i < heightFieldSize; i++) {
      let row = createRow();
      for (let j = 0; j < withFieldSize; j++) {
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
        if (countOpenPaired == numberOfPairs(withFieldSize, heightFieldSize)) {
          gameOver(countClick, 'win');
          return;
        }
        return;
      }
    }
  }

  // правила создания игрового поля (исключение выбора нечетного числа полей)
  function rulesCreateField(nameRadio, value) {
    // горизонтальный ряд
    if (nameRadio == 'withField') {
      withFieldSize = value;
      const listRadio = document.getElementsByName('heightField');
      if (value % 2 !== 0) {
        for (const radio of listRadio) {
          if (radio.value % 2 !== 0) {
            // блокируем нечетные чекбоксы в вертикальном ряду
            radio.disabled = true;
          }
        }
      } else {
        for (const radio of listRadio) {
          if (radio.disabled == true) {
            radio.disabled = false;
          }
        }
      }
    }
    // вертикальный ряд
    if (nameRadio == 'heightField') {
      heightFieldSize = value;
      const listRadio = document.getElementsByName('withField');
      if (value % 2 !== 0) {
        for (const radio of listRadio) {
          if (radio.value % 2 !== 0) {
            // блокируем нечетные чекбоксы в горизонтальном ряду
            radio.disabled = true;
          }
        }
      } else {
        for (const radio of listRadio) {
          if (radio.disabled == true) {
            radio.disabled = false;
          }
        }
      }
    }
  }

  // правила установки таймера
  function rulesTimerset(value) {
    windowOut = document.querySelector('.js-timer-set-windov');
    windowOut.textContent = value;
    timerCame = value;
  }

  // запуск таймера
  function runTimer(timerValue) {
    function timeOut(params) {

    }

    let timerID;
    clearInterval(timerID);
    timerID = setInterval(timeOut, timerValue * 100, 1)
  }

  document.addEventListener('DOMContentLoaded', () => {

    // создаем массив
    arrayCardsPaired = createCardsPaired(numberOfPairs(withFieldSize, heightFieldSize), arrayCardsPaired);
    // перемешиваем массив
    arrayCardsPaired = shuffle(arrayCardsPaired);

    // создаем разметку
    const container = document.getElementById('game-paired-cards');
    container.classList.add('container');

    // модальное окно выбора размера игрового поля
    const panelSizeField = createPanelSizeField(1, 10);
    const modalSizeField = createModal(panelSizeField);
    modalSizeField.modal.id = 'modal-size-field';
    modalSizeField.modalTitle.textContent = 'ВЫБЕРИТЕ РАЗМЕР ИГРОВОГО ПОЛЯ';
    modalSizeField.modalBtnStart.textContent = 'СФОРМИРОВАТЬ ИГРОВОЕ ПОЛЕ';
    container.append(modalSizeField.modal);

    // модальное окно установки таймера
    const panelSetTimer = createSetTimerPanel();
    const modallSetTimer = createModal(panelSetTimer.timerSet);
    modallSetTimer.modal.id = 'modal-timer-set';
    modallSetTimer.modalTitle.textContent = 'ВЫБЕРИТЕ ВРЕМЯ ИГРЫ';
    modallSetTimer.modalBtnStart.textContent = 'УСТАНОВИТЬ ТАЙМЕР';
    console.log(panelSetTimer.timerSetInput.value);

    container.append(modallSetTimer.modal);


    const titleGame = createTitle(nameGame);
    container.append(titleGame);

    const btnResizeField = createBtnSizeField();
    container.append(btnResizeField);

    const timerPanel = createTimerPanel();
    container.append(timerPanel.timerWrap);

    const panelCountSteps = createCountSteps();
    container.append(panelCountSteps.countWrap);

    // событие на кнопке 'СФОРМИРОВАТЬ ИГРОВОЕ ПОЛЕ'
    modalSizeField.modalBtnStart.addEventListener('click', () => {
      // создаем массив
      arrayCardsPaired = createCardsPaired(numberOfPairs(withFieldSize, heightFieldSize), arrayCardsPaired);
      // перемешиваем массив
      arrayCardsPaired = shuffle(arrayCardsPaired);
      // удаляем предыдущее игровое поле
      const fieldGameOld = document.querySelector('.js-field-game');
      if (fieldGameOld) {
        container.removeChild(fieldGameOld);
      }
      // фомируем игровое поле
      const fieldGameNew = createField(withFieldSize, heightFieldSize, arrayCardsPaired);
      container.append(fieldGameNew);
    })

    // событие на кнопке "УСТАНОВИТЬ ТАЙМЕР"
    modallSetTimer.modalBtnStart.addEventListener('click', () => {
      timerPanel.timerWindow.textContent = timerCame;
    })

    // событие на кнопке "СТАРТ"
    timerPanel.timerBtnStart.addEventListener('click', () => {
      runTimer(timerCame);
    })



    // фомируем игровое поле по умолчанию
    const fieldGame = createField(withFieldSize, heightFieldSize, arrayCardsPaired);
    container.append(fieldGame);


  })

  window.rulesCreateField = rulesCreateField;
  window.rulesTimerset = rulesTimerset;
})();
