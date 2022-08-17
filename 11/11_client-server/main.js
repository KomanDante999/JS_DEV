// async function loadTodoItems() {
//   const response = await fetch('http://localhost:3000/api/todos');
//   const data = await response.json();
//   console.log(data);
// }

// async function createTodoItem() {
//   const response = await fetch('http://localhost:3000/api/todos', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       name: 'Сходить за хлебом',
//       owner: 'Тимофей'
//     })
//   });
//   const data = await response.json();
//   console.log(data);
// }

// async function getTodoItem() {
//   const response = await fetch('http://localhost:3000/api/todos/1608029025426');
//   const data = await response.json();
//   console.log(data);
// }

// async function markTodoAsDone() {
//   const response = await fetch('http://localhost:3000/api/todos/1608029025426', {
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ done: true })
//   });
//   const data = await response.json();
//   console.log(data);
// }

// async function deleteTodoItem() {
//   const response = await fetch('http://localhost:3000/api/todos/1608029025426', {
//     method: 'DELETE',
//   });
//   if (response.status === 404)
//     console.log('Не удалось удалить дело, так как его не существует');
//   const data = await response.json();
//   console.log(data);
// }

async function loadListPage() {
  const response = await fetch('https://gorest.co.in/public-api/posts?page=0');
  const listPade = await response.json() ;
  console.log('listPade', listPade);
  return listPade;
}

function createPagination(currentPage, totalPege) {

}

function createListArticle(currentPage, totalPege) {

}




(() => {
document.addEventListener('DOMContentLoaded', () => {

const container = document.getElementById('blog-list');
container.classList.add('container');
loadListPage()





})
})()











