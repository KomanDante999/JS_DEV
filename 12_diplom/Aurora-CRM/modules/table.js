import { iconArrowUp, iconArrowDown } from "./icons.js";

// data by header table
export let dataTableHeader = [
  {
    cellName: 'id',
    cellCaption: 'ID',
    sortedDirection: 1,
    sortedType: 'num',
    sortedActive: true,
  },
  {
    cellName: 'fullName',
    cellCaption: 'Фамилия Имя Отчество',
    sortedDirection: -1,
    sortedType: 'str',
    sortedActive: false,
  },
  {
    cellName: 'dateCreate',
    cellCaption: 'Дата и время создания',
    sortedDirection: -1,
    sortedType: 'date',
    sortedActive: false,
  },
  {
    cellName: 'dateChange',
    cellCaption: 'Последние изменения',
    sortedDirection: -1,
    sortedType: 'date',
    sortedActive: false,
  },
  {
    cellName: 'contacts',
    cellCaption: 'Контакты',
    sortedDirection: 0,
    sortedType: '',
    sortedActive: false,
  },
  {
    cellName: 'actions',
    cellCaption: 'Действия',
    sortedDirection: 0,
    sortedType: '',
    sortedActive: false,
  },
]
 // head table
function createCellHead(objHeader) {
  const cell = document.createElement('th');
  cell.classList.add('table', 'table-header__cell');
  const btnSort = document.createElement('button');
  btnSort.name = `${objHeader.cellName}`
  btnSort.classList.add('js-btn-sort', 'table-header__btn-sort');
  // active
  if (objHeader.sortedActive) {
    btnSort.classList.add('table-header__btn-sort_active');
  }
  // disable
  if (objHeader.sortedDirection === 0) {
    btnSort.disabled = 'true';
    btnSort.classList.add('btn-disabled');
  }
  const btnCaption = document.createElement('span');
  btnCaption.classList.add('table-header__btn-caption');
  btnCaption.textContent = `${objHeader.cellCaption}`
  const iconSort = document.createElement('span');
  iconSort.classList.add('table-header__icon-sort');
  if (objHeader.sortedDirection === 1) {
    iconSort.innerHTML = iconArrowUp;
  }
  if (objHeader.sortedDirection === -1) {
    iconSort.innerHTML = iconArrowDown;
  }
  btnSort.append(btnCaption, iconSort);
  if (objHeader.sortedType === 'str') {
    const typeSorted = document.createElement('span');
    typeSorted.classList.add('table-header__type-sort');
    typeSorted.textContent = 'А-Я';
    btnSort.append(typeSorted)
  }

  cell.append(btnSort);
  return cell;
}

export function createTableWrap(dataHeader) {
  const table = document.createElement('table');
  const head = document.createElement('thead');
  const body = document.createElement('tbody');

  table.classList.add('table-clients');
  table.id = 'aurora-table';
  body.id = 'aurora-table-body'

  // head
  const rowHead = document.createElement('tr');
  for (const objHeader of dataHeader) {
    const cellHead = createCellHead(objHeader);
    rowHead.append(cellHead)
  }

  head.append(rowHead);

  table.append(head, body);
  return {table, body};
}
