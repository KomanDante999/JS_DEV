import { AppAurora } from "./App-Aurora.js";
import { dataTableHead } from "./Table.js";
import { dataClientsDefault } from "./data-clients-default.js";

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const $container = document.getElementById('aurora-crm');
    $container.classList.add('aurora-crm');

    let listClients = dataClientsDefault
    let dataTable = {
      dataHead: dataTableHead,
      currentSort: 'fullName',
      dataBody: listClients,
    }

    let Aurora = new AppAurora($container, dataTable)

  })
})()

