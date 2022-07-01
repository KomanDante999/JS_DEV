
// создаем и возвращаем заголовок приложения
function createAppTitle(title) {
  let appTitle = document.createElement('h2');
  appTitle.innerHTML = title;
  return appTitle;
}

// создаем и возвращаем форму для создания дела
function createTodoItemForm() {
  let form = document.createElement('form');
  let input = document.createElement('input');
  let buttonWrap = document.createElement('div');
  let button = document.createElement('button');


  return {
    form,
    input,
    button,
  }
}

// создаем и возвращаем список элементов
function createTodoList(params) {

}

console.log(createAppTitle('МОИ вседела'));
document.body.append(createAppTitle('такие дела брат'));
console.log(createTodoItemForm());
document.body.append(createTodoItemForm());

