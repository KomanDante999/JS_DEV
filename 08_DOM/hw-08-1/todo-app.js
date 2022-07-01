
// создаем и возвращаем заголовок приложения
function createAppTitle(title) {
  let appTitle = document.createElement('h2');
  title = prompt('введите название списка', 'Планирование на день')
  appTitle.innerHTML = title;
  return appTitle;
}

// создаем и возвращаем форму для создания дела
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

  // активация и деактивация кнопки создания дела
  input.addEventListener('input', function() {
    if (input.value) {
      button.removeAttribute("disabled");
    }
    if (!input.value) {
      button.setAttribute("disabled", "disabled");
    }
  });

  buttonWrap.append(button);
  form.append(input);
  form.append(buttonWrap);

  return {
    form,
    input,
    button,
  }
}

// создаем и возвращаем список элементов
function createTodoList(params) {

}



document.body.append(createAppTitle());

document.body.append(createTodoItemForm().form);
console.log(createTodoItemForm());



// createTodoItemForm().input.addEventListener('input', function() {
//   if (createTodoItemForm().input.value) {
//     createTodoItemForm().button.removeAttribute("disabled");
//   }
// });


