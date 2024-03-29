import { updateTable } from '../main.js';
import { sortedFormData, updateSortedData, headerDataTable, syncHeaderDataTable } from './array_filter_sort.js';

function createRow(objStudent, index, targetNode) {
  const rowBody = document.createElement('tr');
  const cellBody0 = document.createElement('th')
  cellBody0.scope = 'row';
  cellBody0.textContent = index;
  const cellBody1 = document.createElement('td')
  cellBody1.textContent = objStudent.fullName;
  const cellBody2 = document.createElement('td')
  cellBody2.textContent = objStudent.faculty;
  const cellBody3 = document.createElement('td')
  cellBody3.textContent = objStudent.birthDateAge;
  const cellBody4 = document.createElement('td')
  cellBody4.textContent = objStudent.yearsStudy;
  rowBody.append(
    cellBody0,
    cellBody1,
    cellBody2,
    cellBody3,
    cellBody4,
  );
  targetNode.append(rowBody);
}

function createIcon(direction, typeIcon) {
  const icon = document.createElement('span');
  // arrow-down-up
  if (direction === 0) {
    icon.innerHTML =
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
    </svg>`;
    icon.style.width = '22px'
    icon.style.height = '22px'
    icon.style.color = 'grey'

    return icon;
  }

  if (typeIcon === 'str' ) {
    // alpha-up
    if (direction === 1) {
      icon.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-sort-alpha-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
      <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
      </svg>`
    }
    // alpha-down
    if (direction === -1) {
      icon.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
      <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
      <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
      <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
      </svg>`
    }
  }
  if (typeIcon === 'num' ) {
    // numeric-up
    if (direction === 1) {
      icon.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-sort-numeric-up" viewBox="0 0 16 16">
        <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
        <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
        <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
      </svg>`
    }
    // numeric-down
    if (direction === -1) {
      icon.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-sort-numeric-down-alt" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
        <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
      </svg>`
    }
  }
  return icon;
}

function createCellHead(objHeader, targetNode) {
  const cell = document.createElement('th');
  cell.scope = 'col';
  cell.classList.add('px-2');
  const btnSort = document.createElement('button');
  btnSort.name = `${objHeader.cellName}`
  btnSort.classList.add('js-table-sort', 'button-reset', 'd-flex', 'justify-content-between', 'w-100');
  btnSort.addEventListener('click', () => {
    updateSortedData(sortedFormData, btnSort.name);
    updateTable();
  });
  const iconWrap = document.createElement('span');
  const iconSort = createIcon(objHeader.sortedDirection, objHeader.cellType);
  const indexSort = document.createElement('span');
  if (objHeader.indexSort) {
    indexSort.textContent = objHeader.indexSort;
  }
  indexSort.classList.add('text-primary', 'px-1')
  const caption = document.createElement('span');
  caption.textContent = `${objHeader.cellCaption}`;

  iconWrap.append(
    indexSort,
    iconSort,
  )
  btnSort.append(
    caption,
    iconWrap,
  )
  cell.append(btnSort);
  targetNode.append(cell);
}

// table
function creatTable(arrayStudents, sortedData, headerData) {
  headerData = syncHeaderDataTable(headerData, sortedData);
  const table = document.createElement('table');
  table.id = 'js-table-students';
  table.classList.add('table', 'table-striped', 'table-success');

  // head
  const head = document.createElement('thead');
  const rowHead = document.createElement('tr');
  rowHead.classList.add('table-primary');

  for (const objHeader of headerData) {
    createCellHead(objHeader, rowHead)
  }
  head.append(rowHead);

   // body
  const body = document.createElement('tbody');
  let index = 0;
  for (const objStudent of arrayStudents) {
    createRow(objStudent, index + 1, body);
    index++;
  }

  table.append(head, body);
  return {
    table,

  }
}

export function initNewTable(arrayStudents, sortedData, headerDataTable, idContainer, idTable) {
  const tableNew = creatTable(arrayStudents, sortedData, headerDataTable);
  const container = document.getElementById(idContainer);
  const tableOld = document.getElementById(idTable);
  if (tableOld) {
    container.removeChild(tableOld);
  }
  container.append(tableNew.table);
}






