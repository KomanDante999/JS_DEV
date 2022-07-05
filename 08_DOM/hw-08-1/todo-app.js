(function() {
  // 0 список дел по умолчанию
  let todoItemList = [
    {name: 'дело 1', done: false},
    {name: 'дело 2', done: true},
    {name: 'дело 3', done: false},
    {name: 'дело 4', done: false},
  ];

  // 1 создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    // title = prompt('введите название списка', 'Планирование на день')
    appTitle.innerHTML = title;
    return appTitle;
  }

  // 2 создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrap = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'введите название нового дела';
    buttonWrap.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.setAttribute("disabled", "disabled");

    buttonWrap.append(button);
    form.append(input);
    form.append(buttonWrap);

    return {
      form,
      input,
      button,
    }
  }

  // 3 создаем и возвращаем список элементов
  function createTodoList(params) {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  // 4 создание элемента списка (дело)
  function createTodoItem(name = 'новое дело') {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // стилизация
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-item-center');
    item.textContent = name;
    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Завершено';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить'

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton,
    }
  }

  // сборка
  function createTodoApp(container, title = 'планирование') {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // активация и деактивация кнопки создания дела
    todoItemForm.input.addEventListener('input', function() {
      if (todoItemForm.input.value) {
        todoItemForm.button.removeAttribute("disabled");
      }
      else {
        todoItemForm.button.setAttribute("disabled", "disabled");
      }
    });

    // вывод списка дел по умолчанию
    for (const item of todoItemList) {
      let ItemDefaultValue = item.name;
      let ItemDefault = createTodoItem(ItemDefaultValue)
      todoList.append(ItemDefault.item)

      // обработчики событий на кнопках
      ItemDefault.doneButton.addEventListener('click', function() {
        ItemDefault.item.classList.toggle('list-group-item-success')
        console.log(ItemDefault.item);
      });
      ItemDefault.deleteButton.addEventListener('click', function() {
        if (confirm('Удалить дело?')) {
          ItemDefault.item.remove();
        }
      });

    }


    // реакция на событие submit
    todoItemForm.form.addEventListener('submit', function(e) {
      // предотвращаем перезагрузку страницы
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      // создаем новый элемент (дело)
      let todoItem = createTodoItem(todoItemForm.input.value);


      // обработчики событий на кнопках
      todoItem.doneButton.addEventListener('click', function() {
        todoItem.item.classList.toggle('list-group-item-success')
        console.log(todoItem);
      });
      todoItem.deleteButton.addEventListener('click', function() {
        if (confirm('Удалить дело?')) {
          todoItem.item.remove();
        }
      });

      // добавляем новый элемент (дело) в DOM
      todoList.append(todoItem.item);


      todoItemForm.input.value = '';
      todoItemForm.button.setAttribute("disabled", "disabled");

    });
  }

  // регистрируем функцию приложения как глобальный объект
  window.createTodoApp = createTodoApp;



}) ();



