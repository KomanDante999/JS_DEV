(function() {
  // создаем и возврпщаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle
  }

  // создаем и возврпщаем форму для создания дела
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

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  };

  // создаем и возврпщаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  // создание дела
  function createTodoItem(name) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // стили для элемента списка и для размещения кнопок
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

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

  function createTodoApp(container, title = 'Список дел') {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // браузер создает событие submit на форма по нажатию на Enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function(e) {
      // эта строчка необходима, что бы предотвратить стандартное действие браузера
      // в данном случае предотвращает перезагрузку страницы при событии submit
      e.preventDefault();

      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      if (!todoItemForm.input.value) {
        return;
      }
      // создаем и добавляем в список новое дело с названием из поля ввода
      // todoList.append(createTodoItem(todoItemForm.input.value).item);
      // замена на обработчик событий

      let todoItem = createTodoItem(todoItemForm.input.value);

      // добавляем обработчики событий на кнопки
      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
      });
      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
        }
      });

      // создаем и добавляем в список новое дело с названием из поля ввода
      todoList.append(todoItem.item);

      // обнуляем значение в поле, что бы не пришлось стирать его вручную
      todoItemForm.input.value = '';
    });
  }


  document.addEventListener('DOMContentLoaded', function() {
    createTodoApp(document.getElementById('my-todos'), 'Мои дела');
    createTodoApp(document.getElementById('mom-todos'), 'Дела для мамы');
    createTodoApp(document.getElementById('dad-todos'), 'Дела для папы');
  });


})();
