import { AppAurora } from "./App-Aurora.js";
import { dataTableHead } from "./Table.js";
import { dataClients } from "./Data-clients.js";

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const $container = document.getElementById('aurora-crm');
    $container.classList.add('aurora-crm');

    let Aurora = new AppAurora($container, dataTableHead, dataClients)
    console.log('Aurora :>> ', Aurora);

  })
})()

