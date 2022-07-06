(function() {
  // создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle
  }
  // создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttomWrapper = document.createElement('div');
    let buttom = document.createElement('button');
    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttomWrapper.classList.add('input-group-append');
    buttom.classList.add('btn', 'btn-primary');
    buttom.textContent = 'Добавить дело';
    // делаем кнопку недоступной при создании формы
    if (!input.value) {
      buttom.disabled = true;
    };
    buttomWrapper.append(buttom);
    form.append(input);
    form.append(buttomWrapper);
    return {
      form,
      input,
      buttom,
    };
  }
  // создаем и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }
  // создаем и возвращаем элемент списка с кнопками Готово/ Удалить
  function createTodoItem(name) {
    let item = document.createElement('li');
    let buttomGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;
    buttomGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';
    buttomGroup.append(doneButton);
    buttomGroup.append(deleteButton);
    item.append(buttomGroup);
    return {
      item,
      doneButton,
      deleteButton,
    }
  }
  // создает и возвращает список дел
  function createTodoApp(container, title = 'Список дел', todoArray = null) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    // вывод списка из массива объектов todoArray
    if (todoArray !== null) {
      for (let i in todoArray) {
        localStorage.setItem(i, JSON.stringify(todoArray[i]) );
        let objTodo = todoArray[i];
        let todoArrayItem = createTodoItem(objTodo.name);
        if (objTodo.done) {
          todoArrayItem.item.classList.toggle('list-group-item-success');
        }
        todoArrayItem.doneButton.addEventListener('click', function() {
          todoArrayItem.item.classList.toggle('list-group-item-success');
        });
        todoArrayItem.deleteButton.addEventListener('click', function() {
          if (confirm('Вы уверены?')) {
            todoArrayItem.item.remove();
          }
        });
        todoList.append(todoArrayItem.item);
      }
    };
    // при вводе в поле ввода кнопка становится доступной, при очистке - недоступной
    todoItemForm.input.addEventListener('input', function() {
      if (todoItemForm.input.value) {
        todoItemForm.buttom.disabled = false;
      } else {
        todoItemForm.buttom.disabled = true;
      }
    })
    todoItemForm.form.addEventListener('submit', function(e) {
      e.preventDefault();
      let objTodo = {name: todoItemForm.input.value, done: false};
      let todoItem = createTodoItem(todoItemForm.input.value);
      todoItem.doneButton.addEventListener('click', function() {
        todoItem.item.classList.toggle('list-group-item-success');
        objTodo.done = true;
      });
      todoItem.deleteButton.addEventListener('click', function() {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
        }
      });
      todoArray.push(objTodo);
      let i = todoArray.indexOf(objTodo);
      localStorage.setItem(i, JSON.stringify(todoArray[i]) );
      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
      // после ввода дела кнапка становится недоступной
      todoItemForm.buttom.disabled = true;
    });
  }
  window.createTodoApp = createTodoApp;
}) ();
