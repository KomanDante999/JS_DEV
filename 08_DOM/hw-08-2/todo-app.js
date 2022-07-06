(function() {
  // список дел по умолчанию
  let myListTodos = [
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
    button.disabled = true;
    // if (!input.value) {
    // }

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
  function createTodoItem({name, done}) {
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
    deleteButton.textContent = 'Удалить';
    if (done) {
      item.classList.add('list-group-item-success');
    }

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton,
    }
  }

  // 5 вывод списка дел из массива
  function createItemFromList(list, todoList) {
    for (let i = 0; i < list.length; i++) {
      let element = createTodoItem(list[i]);
      todoList.append(element.item);

      // обработчики событий на кнопках
      element.doneButton.addEventListener('click', function() {
        element.item.classList.toggle('list-group-item-success');
        // изменение статуса дела в массиве
        if (list[i].done) {
          list[i].done = false;
        } else {
          list[i].done = true;
        }
      });
      element.deleteButton.addEventListener('click', function() {
        if (confirm('Удалить дело?')) {
          element.item.remove();

          // list.splice(i, 1)
          // console.log(list);
        }
      });
    }

  }


  // основная фнкция
  function createTodoApp(container, title = 'планирование', list) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // активация и деактивация кнопки создания дела
    todoItemForm.input.addEventListener('input', function() {
      if (todoItemForm.input.value) {
        todoItemForm.button.disabled = false;
      }
      else {
        todoItemForm.button.disabled = true;
      }
    });

    // создание списка элементов из сохраненного массива
    createItemFromList(list, todoList);

    // реакция на событие submit
    todoItemForm.form.addEventListener('submit', function(e) {
      // предотвращаем перезагрузку страницы
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      // добавляем новое дело в массив (список дел)
      list.push({name: todoItemForm.input.value, done: false})
      console.log(list);

      createItemFromList(list, todoList);

      // создаем новый элемент (дело)
      // let todoItem = createTodoItem(list[list.length - 1]);

      // обработчики событий на кнопках
      // todoItem.doneButton.addEventListener('click', function() {
      //   todoItem.item.classList.toggle('list-group-item-success')
      //   console.log(todoItem);
      // });
      // todoItem.deleteButton.addEventListener('click', function() {
      //   if (confirm('Удалить дело?')) {
      //     todoItem.item.remove();
      //   }
      // });

      // добавляем новый элемент (дело) в DOM
      // todoList.append(todoItem.item);


      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
      return list;
    });





  }




  // регистрируем функцию приложения как глобальный объект
  window.createTodoApp = createTodoApp;
  window.myListTodos = myListTodos;



}) ();



