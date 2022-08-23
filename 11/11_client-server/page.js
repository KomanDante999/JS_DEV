import { getIdPageFromUrl, loadDataPageFromServer, loadCommentsPageFromServer } from './modules/exchange-client-server.js';
import {  } from './modules/changes-rest-api-server.js';
import {  } from './modules/page-article.js';

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('page-article-container');
    container.classList.add('container');

    getIdPageFromUrl()


  })
})()







