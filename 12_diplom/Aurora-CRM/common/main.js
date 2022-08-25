import { exchangeDataFromServer } from '../modules/server-api.js';
let clientsDataFromServer = [];


(() => {
  document.addEventListener('DOMContentLoaded', async () => {
    // get data
    clientsDataFromServer = await exchangeDataFromServer('getList');
    console.log('clientsDataFromServer',clientsDataFromServer);
    // create DOM elements
    const container = document.getElementById('aurora-crm-container');
    container.classList.add('container');
  })
})()

