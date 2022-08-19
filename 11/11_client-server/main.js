import { createPagination, listPagination, updatePagination, updateListPagination,  } from './modules/pagination.js';

// let currentPage = 1;
// let totalPage = 10;




(() => {
document.addEventListener('DOMContentLoaded', () => {

const container = document.getElementById('blog-list');
container.classList.add('container');

const paginator = createPagination(listPagination);
container.append(paginator);

const buttonsPaginator = document.querySelectorAll('.js-paginator-btn');
for (const button of buttonsPaginator) {
  button.addEventListener('click', () => {
    console.log('name', button.name);
    // обновление данных пагинатора
    updateListPagination(button.name,listPagination)

    // получение данных с сервера

    // синхронизация

    // обновление пагинатора
    updatePagination(listPagination);

    // обновление списка
  });
}


})
})()











