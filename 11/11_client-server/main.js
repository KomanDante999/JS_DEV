import { createPagination, createListPagination, updatePagination, updateListPagination,  } from './modules/pagination.js';
import { loadDataFromServer } from './modules/exchange-client-server.js';
import { createUrlRequest } from './modules/api-by-Go-Rest.js';

let currentPage = 1;
let totalPage = 100;




(() => {
document.addEventListener('DOMContentLoaded', () => {
// data
// let urlServer = createUrlRequest();
let dataPageServer = loadDataFromServer();
// dataPageServer = Array.from(dataPageServer)
console.log('dataPageServer', dataPageServer);


totalPage = dataPageServer.meta.pagination.pages
console.log('totalPage', totalPage);
const listPagination = createListPagination(totalPage)

const container = document.getElementById('blog-list');
container.classList.add('container');

const paginator = createPagination(listPagination);
container.append(paginator);



const buttonsPaginator = document.querySelectorAll('.js-paginator-btn');
for (const button of buttonsPaginator) {
  button.addEventListener('click', () => {
    // обновление данных пагинатора
    updateListPagination(button.name, listPagination, totalPage)

    // получение данных с сервера

    // синхронизация

    // обновление пагинатора
    updatePagination(listPagination);

    // обновление списка
  });
}


})
})()











