import { exchangeDataFromServer } from '../modules/server-api.js';
import { createHeader, createMain, createFooter } from '../modules/layout.js';
import { createSearchForm } from "../modules/search.js";
import { dataTableHeader, createTableWrap } from "../modules/table.js";

let clientsDataFromServer = [];


(() => {
  document.addEventListener('DOMContentLoaded', async () => {
    // create wrap table
    const container = document.getElementById('aurora-crm');
    container.classList.add('aurora-crm');
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();
    const searchForm = createSearchForm();
    header.searchContainer.append(searchForm.btnSearch, searchForm.input);
    const table = createTableWrap(dataTableHeader);
    main.tableContainer.append(table.table);

    container.append(header.wrap, main.wrap, footer.wrap);


    // get data
    // clientsDataFromServer = await exchangeDataFromServer('getList');
    // console.log('clientsDataFromServer',clientsDataFromServer);
    // create table
  })
})()
