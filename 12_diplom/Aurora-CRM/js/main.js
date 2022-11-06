import { header, headerContainer, main, mainContainer, footer, footerContainer, btnAddClient } from './layout.js';
import { CreateElement } from "./greate_element.js";
import { createSearchForm } from "./search.js";
import { dataTableHeader, createTableWrap } from "./table.js";
import { ModalWindow, removeModalWindow } from "./modal-window.js";
import { newDataInputForm, createInputForm, updateDataInputForm, updateInputForm} from "./input-form.js";
import { validInputForm } from "./valid_input-form.js";



(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const $container = document.getElementById('aurora-crm');
    $container.classList.add('aurora-crm');

    let $header = new CreateElement(header, $container)
    let $headerContainer = new CreateElement(headerContainer, $header.element)
    let $main = new CreateElement(main, $container)
    let $mainContainer = new CreateElement(mainContainer, $main.element)
    let $footer = new CreateElement(footer, $container)
    let $footerContainer = new CreateElement(footerContainer, $footer.element)
    let $btnAddClient = new CreateElement(btnAddClient, $footerContainer.element)
    $btnAddClient.element.addEventListener('click', () => {
      new ModalWindow(true)
    })









  })
})()

