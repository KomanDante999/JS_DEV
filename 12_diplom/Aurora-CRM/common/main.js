import { exchangeDataFromServer } from '../modules/server-api.js';
import { createHeader, createMain, createFooter } from '../modules/layout.js';
import { createSearchForm } from "../modules/search.js";
import { dataTableHeader, createTableWrap } from "../modules/table.js";
import { createModalWindow, removeModalWindow } from "../modules/modal-window.js";
import { newDataInputForm, createInputForm, updateDataInputForm,} from "../modules/input-form.js";
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
      // submit input form
      inpuFormAddClient.form.addEventListener('submit', (e) => {
        e.preventDefault();
        updateDataInputForm(dataInputForm);
        validInputForm(dataInputForm);

        // validation successfully
        if (dataInputForm.every(objData => objData.inputValid === 1)) {
          // добавление новой записи в таблицу
          // очиска данных формы ввода
          // отрисовка таблицы
        }

        // validation unsuccessful
        else {
          console.log('проверочка', dataInputForm);
        }
      })

    })

    container.append(header.wrap, main.wrap, footer.wrap);


    // get data
    // clientsDataFromServer = await exchangeDataFromServer('getList');
    // console.log('clientsDataFromServer',clientsDataFromServer);
    // create table
  })
})()

