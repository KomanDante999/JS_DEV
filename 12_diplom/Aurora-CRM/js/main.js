import { AppAurora } from "./App-Aurora.js";
import { dataTableHead } from "./Table.js";
import { dataClients } from "./Data-clients.js";

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const $container = document.getElementById('aurora-crm');
    $container.classList.add('aurora-crm');

    let dataTable = {
      dataHead: dataTableHead,
      currentSort: 'id',
      dataBody: dataClients,
    }

    let Aurora = new AppAurora($container, dataTable)
    console.log('Aurora :>> ', Aurora);

  })
})()

