import { exchangeDataFromServer } from '../modules/server-api.js';
import { createHeader, createMain, createFooter } from '../modules/layout.js';

let clientsDataFromServer = [];


(() => {
  document.addEventListener('DOMContentLoaded', async () => {
    // create wrap table
    const container = document.getElementById('aurora-crm');
    container.classList.add('aurora-crm');
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();
    container.append(header.wrap, main.wrap, footer.wrap);


    // get data
    // clientsDataFromServer = await exchangeDataFromServer('getList');
    // console.log('clientsDataFromServer',clientsDataFromServer);
    // create table
  })
})()

