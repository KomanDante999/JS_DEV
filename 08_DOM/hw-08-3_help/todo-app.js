(function() {
  let listCase = [],
      my = '',
      listName = '';


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
  function saveListCase(array, keyName) {
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
        if (changeableCase.id == item.id) {
          changeableCase.done = !changeableCase.done;
          console.log('смена состояния', listCase);
        }
      }
      // сохраняем в storage
      saveListCase(listCase, listName);
    });
    // delete
    deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        item.remove();
        // удаление из массива
        for (let i = 0; i < listCase.length; i++) {
          let deletedCase = listCase[i];
          if (deletedCase.id == item.id) {
            listCase.splice(i, 1);
            console.log('удаление элемента', listCase);
          }
        }
      }
      // сохраняем в storage
      saveListCase(listCase, listName);
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

  // основная функция
  function createTodoApp(container, title, keyName) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    listName = keyName;

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

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

      let todoItem = createTodoItem(newCase);
      todoItem.item.id = newCase.id;



      // создаем и добавляем в список новое дело с названием из поля ввода
      todoList.append(todoItem.item);

      // добавление нового дела в массив
      listCase.push(newCase);
      console.log('добавление в массив', listCase);
      // сохраняем в storage
      saveListCase(listCase, listName);


      // обнуляем значение в поле, что бы не пришлось стирать его вручную
      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
    });
  }

  window.createTodoApp = createTodoApp;
  window.my = my;

})();
