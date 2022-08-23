import { createPagination, createPaginationData, updatePagination, updateListPagination,  } from './modules/pagination.js';
import { loadDataFromServer } from './modules/exchange-client-server.js';
import { createUrlRequest } from './modules/api-by-Go-Rest.js';
import { createArticleList } from './modules/articles-list.js';

let currentPage = 1;
let totalPage = 100;




(() => {
document.addEventListener('DOMContentLoaded', async () => {
// data
let urlServer = createUrlRequest(currentPage);
let dataPageServer = await loadDataFromServer(urlServer);
console.log('dataPageServer', dataPageServer);

totalPage = dataPageServer.meta.pagination.pages
console.log('totalPage', totalPage);
const paginationData = createPaginationData(totalPage)

const container = document.getElementById('blog-list');
container.classList.add('container');

const paginator = createPagination(paginationData);
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











