import { getIdPageFromUrl, loadDataFromServer } from './modules/exchange-client-server.js';
import { createUrlRequest, restServersApi } from './modules/changes-rest-api-server.js';
import { createPage } from './modules/page-article.js';

let dataRestServer = [];
let dataPage = [];
let commentsPade = [];

(() => {
  document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('page-article-container');
    container.classList.add('container');

    const pageId = getIdPageFromUrl();
    dataRestServer = restServersApi();
    // ? checking status of servers
    const pageUrlServer = createUrlRequest(dataRestServer[0].domen, dataRestServer[0].uriPage, pageId);
    dataPage = await loadDataFromServer(pageUrlServer);

    const commentsId = dataPage.data.user_id;
    let commentsUrlServer = createUrlRequest(dataRestServer[0].domen, dataRestServer[0].uriComments, commentsId);
    console.log('commentsUrlServer',commentsUrlServer);

    commentsPade = await loadDataFromServer(commentsUrlServer)
    console.log('commentsPade',commentsPade);

    const article = createPage(dataPage);


    container.append(article);
  })
})()







