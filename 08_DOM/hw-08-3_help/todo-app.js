(function() {
  let listCase = [],
  listNameStorage = '',
  myListCaseDefault = [
    {id: 0, name: 'моё запланированное дело 1', done: false},
    {id: 1, name: 'моё запланированное дело 2', done: false},
    {id: 2, name: 'моё запланированное дело 3', done: false},
    {id: 3, name: 'моё запланированное дело 4', done: false},
    {id: 4, name: 'моё запланированное дело 5', done: false},
  ],
  momListCaseDefault = [
    {id: 0, name: 'мамино запланированное дело 1', done: false},
    {id: 1, name: 'мамино запланированное дело 2', done: false},
    {id: 2, name: 'мамино запланированное дело 3', done: false},
    {id: 3, name: 'мамино запланированное дело 4', done: false},
    {id: 4, name: 'мамино запланированное дело 5', done: false},
  ],
  dadListCaseDefault = [
    {id: 0, name: 'папино запланированное дело 1', done: false},
    {id: 1, name: 'папино запланированное дело 2', done: false},
    {id: 2, name: 'папино запланированное дело 3', done: false},
    {id: 3, name: 'папино запланированное дело 4', done: false},
    {id: 4, name: 'папино запланированное дело 5', done: false},
  ];

  // дополнение
  // кнопки очистки списка и восстановлениея списка по умолчанию
  function createCleanDefaultBtn() {
    let buttonWrapper = document.createElement('div');
    let buttonClean = document.createElement('button');
    let buttonDefault = document.createElement('button');

    buttonWrapper.classList.add('d-flex', 'justify-content-end', 'align-items-center', 'mb-5');
    buttonClean.classList.add('btn', 'btn-outline-primary', 'mr-2');
    buttonClean.textContent = 'Очистить список дел';
    buttonDefault.classList.add('btn', 'btn-outline-primary');
    buttonDefault.textContent = 'Вернуть список дел по умолчанию';

    buttonWrapper.append(buttonClean);
    buttonWrapper.append(buttonDefault);

    return {
      buttonWrapper,
      buttonClean,
      buttonDefault,
    }
  }

  // 01 создаем и возврпщаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle
  }

  // 02 создаем и возврпщаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled = true;
    input.addEventListener('input', function() {
      if (input.value) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  };

 // 03 создаем и возврпщаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  // 04 получение уникального id
  function getUniqId(array) {
    let maxId = 0;
    for (const item of array) {
      if (item.id > maxId) {
        maxId = item.id;
      }
    }
    return maxId + 1;
  }
  // 05 сохранение в storage
  function saveListStorage(array, keyName) {
    localStorage.setItem(keyName, JSON.stringify(array))
  }

  // 06 создание дела
  function createTodoItem(obj) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // стили для элемента списка и для размещения кнопок
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = obj.name;
    item.value = obj.id;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    if (obj.done) {
      item.classList.add('list-group-item-success');
    }

    // добавляем обработчики событий на кнопки
    // done
    doneButton.addEventListener('click', function () {
      item.classList.toggle('list-group-item-success');
      for (const changeableCase of listCase) {
        if (changeableCase.id == item.value) {
          changeableCase.done = !changeableCase.done;
        }
      }
      // сохраняем в storage
      saveListStorage(listCase, listNameStorage);
    });
    // delete
    deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        item.remove();
        // удаление из массива
        for (let i = 0; i < listCase.length; i++) {
          let deletedCase = listCase[i];
          if (deletedCase.id == item.value) {
            listCase.splice(i, 1);
          }
        }
      }
      // сохраняем в storage
      saveListStorage(listCase, listNameStorage);
    });

    // вкладываем кнопки в один элемент
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ и к самому элементу, и к кнопкам, что бы отрабатывать события нажантия
    return {
      item,
      doneButton,
      deleteButton,
    };
  };

  // 07 восстановление данных из storage
  function restoredListStorage(keyName, array) {
    let localData = localStorage.getItem(keyName);
    if (localData !== null && localData !== '') {
      array = JSON.parse(localData);
    }
    return array;
  }

  // 08 создание списка элементов из массива
  function createItemFromList(array, targetNode) {
    for (const itemFromArray of array) {
      let todoItem = createTodoItem(itemFromArray);
      targetNode.append(todoItem.item);
    }
  }

  // основная функция
  function createTodoApp(container, title, keyName, listDefault = []) {
    // дополнение
    let todoCleanGroup = createCleanDefaultBtn();
    container.append(todoCleanGroup.buttonWrapper);

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();


    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    listNameStorage = keyName;

    listCase = listDefault;
    // восстанавливаем список из storage в массив
    listCase = restoredListStorage(listNameStorage, listCase);

    // формируем список элементов из массива в указанный узел
    createItemFromList(listCase, todoList);

    // обработка события submit на форме
    todoItemForm.form.addEventListener('submit', function(e) {
      // предотвращает перезагрузку страницы при событии submit
      e.preventDefault();

      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      if (!todoItemForm.input.value) {
        return;
      }
      // создание объекта с именем дела
      let newCase = {
        id: getUniqId(listCase),
        name: todoItemForm.input.value,
        done: false
      };
      // создаем и добавляем в список новое дело с названием из поля ввода
      let todoItem = createTodoItem(newCase);
      todoList.append(todoItem.item);


      // добавление нового дела в массив
      listCase.push(newCase);
      // сохраняем в storage
      saveListStorage(listCase, listNameStorage);

      // обнуляем значение в поле, что бы не пришлось стирать его вручную
      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
    });


    // дополнение
    // очистка списка дел
    console.log(todoCleanGroup.buttonClean);
    todoCleanGroup.buttonClean.addEventListener('click', function() {
      listCase = [];
      saveListStorage(listCase, listNameStorage);
      // удаление всех элементов списка
      while (todoList.firstElementChild) {
        todoList.firstElementChild.remove();
      }
    });

    todoCleanGroup.buttonDefault.addEventListener('click', function() {

    });
  }

  // засоряем глобальную облать видимости
  window.createTodoApp = createTodoApp;
  window.myListCaseDefault = myListCaseDefault;
  window.momListCaseDefault = momListCaseDefault;
  window.dadListCaseDefault = dadListCaseDefault;

})();
