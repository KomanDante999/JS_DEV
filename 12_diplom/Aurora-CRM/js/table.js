import { iconArrowUp, iconArrowDown } from "./icons.js";

export let dataTableHead = [
  {
    tag: 'th',
    name: 'id',
    params: {
      classList: 'table__head-cell',
      textContent: 'ID',
    },
    childs: [
      {
        tag: 'span',
        params: {
          classList: 'table__icon-sort',
          innerHTML: iconArrowDown,
        },
      },
    ],
  },
  {
    tag: 'th',
    name: 'fullName',
    params: {
      classList: 'table__head-cell',
      textContent: 'Фамилия Имя Отчество',
    },
    childs: [
      {
        tag: 'span',
        params: {
          classList: 'table__icon-sort',
          innerHTML: iconArrowDown,
        },
      },
      {
        tag: 'span',
        params: {
          classList: 'table__type-sort',
          textContent: 'А-Я',
        },
      },
    ],
  },
  {
    tag: 'th',
    name: 'createDate',
    params: {
      classList: 'table__head-cell',
      textContent: 'Дата и время создания',
    },
    childs: [
      {
        tag: 'span',
        params: {
          classList: 'table__icon-sort',
          innerHTML: iconArrowDown,
        },
      },
    ],
  },
  {
    tag: 'th',
    name: 'changeDate',
    params: {
      classList: 'table__head-cell',
      textContent: 'Последние изменения',
    },
    childs: [
      {
        tag: 'span',
        params: {
          classList: 'table__icon-sort',
          innerHTML: iconArrowDown,
        },
      },
    ],
  },
  {
    tag: 'th',
    name: 'contacts',
    params: {
      classList: 'table__head-cell',
      textContent: 'Контакты',
    },
  },
  {
    tag: 'th',
    name: 'actions',
    params: {
      classList: 'table__head-cell',
      textContent: 'Действия',
    },
  },
]

class CreateCell {


  constructor(options) {
    this.cell = document.createElement(options.tag)
    this.cell.dataset.name = options.name

    for (const[key, value] of Object.entries(options.params)) {
      if (key == 'classList') {
        if (Array.isArray(value)) {
          for (const newClass of value) this.cell.classList.add(newClass)
        } else this.cell.classList.add(value)
      } else this.cell[key] = value
    }

    if (options.childs) {
      for (const child of options.childs) {
        this.childCell = document.createElement(child.tag)
        for (const[key, value] of Object.entries(child.params)) {
          if (key == 'classList') {
            if (Array.isArray(value)) {
              for (const newClass of value) this.childCell.classList.add(newClass)
            } else this.childCell.classList.add(value)
          } else this.childCell[key] = value
        }
        this.cell.append(this.childCell)
      }

    }
  }
}

export class Table {
  _headCells = []

  constructor(container, dataTableHead) {
    this.table = document.createElement('table')
    this.table.classList.add('table')
    // head table
    this.head = document.createElement('thead')
    this.headRow = document.createElement('tr')
    this.head.classList.add('table__head')
    this.headRow.classList.add('table__head-row')

    for (const cellObj of dataTableHead) {
      this.headCell = new CreateCell(cellObj)
      this._headCells.push(this.headCell)
      this.headRow.append(this.headCell.cell)
    }


    this.head.append(this.headRow)

    // body table
    this.body = document.createElement('tbody')




    this.table.append(this.head, this.body)
    container.append(this.table)
  }
};





