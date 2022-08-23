import { createPagination, createPaginationData, updatePagination, updatePaginationData, getCurrentPage,  } from './modules/pagination.js';
import { loadDataFromServer } from './modules/exchange-client-server.js';
import { createUrlRequest } from './modules/changes-rest-api-server.js';
import { createArticleList, createArticleDataByGoRest, changeArticleList} from './modules/articles-list.js';

let currentPage = 1;
let totalPage = 100;
let urlServer = '';
let dataPagesServer = [];
(() => {
document.addEventListener('DOMContentLoaded', async () => {
// get data for elements---------------------------
urlServer = createUrlRequest(currentPage);
// urlServer = 'https://jsonplaceholder.typicode.com/posts'
// urlServer = 'https://24pullrequests.com/users.json?page=2'
dataPagesServer = await loadDataFromServer(urlServer);
console.log('dataPagesServer', dataPagesServer);

let articleData = createArticleDataByGoRest(dataPagesServer);
console.log('articleData',articleData);

totalPage = dataPagesServer.meta.pagination.pages
const paginationData = createPaginationData(totalPage)

// create DOM elements------------------------------
const container = document.getElementById('blog-container');
container.classList.add('container');

const containerArticleList = document.createElement('div');
containerArticleList.id = 'container-article-list';
containerArticleList.classList.add('py-4');

const articleList = createArticleList(articleData);
const paginator = createPagination(paginationData);

containerArticleList.append(articleList)
container.append(containerArticleList, paginator);

const buttonsPaginator = document.querySelectorAll('.js-paginator-btn');
for (const button of buttonsPaginator) {
  button.addEventListener('click', async () => {
    // обновление данных пагинатора
    updatePaginationData(button.name, paginationData, totalPage);
    currentPage =  getCurrentPage(paginationData);
    // получение данных с сервера
    urlServer = createUrlRequest(currentPage);
    dataPagesServer = await loadDataFromServer(urlServer);
    // отрисовка нового списка
    articleData = createArticleDataByGoRest(dataPagesServer);
    changeArticleList('container-article-list', 'articles-list', articleData);
    // обновление пагинатора
    updatePagination(paginationData);

    // обновление списка
  });
}


})
})()











