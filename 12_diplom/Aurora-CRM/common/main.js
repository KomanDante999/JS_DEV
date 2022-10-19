import { exchangeDataFromServer } from '../modules/server-api.js';
import { createHeader, createMain, createFooter } from '../modules/layout.js';
import { createSearchForm } from "../modules/search.js";
import { dataTableHeader, createTableWrap } from "../modules/table.js";
import { createModalWindow, removeModalWindow } from "../modules/modal-window.js";
import { newDataInputForm, createInputForm, updateDataInputForm, updateInputForm} from "../modules/input-form.js";
import { validInputForm } from "../modules/valid_input-form.js";


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

    const btnAddClient = footer.btn;
    btnAddClient.addEventListener('click', () => {
      let dataInputForm = newDataInputForm()
      const inpuFormAddClient = createInputForm(dataInputForm, 'add');
      createModalWindow(inpuFormAddClient.form);
      // remove modal window
      inpuFormAddClient.btnRemoveClient.addEventListener('click', () => {
        removeModalWindow('modal-window', 'modal-window-container');
      })

    })

    container.append(header.wrap, main.wrap, footer.wrap);


    // get data
    // clientsDataFromServer = await exchangeDataFromServer('getList');
    // console.log('clientsDataFromServer',clientsDataFromServer);
    // create table
  })
})()

