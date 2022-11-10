import { iconArrowUp, iconArrowDown } from "./icons.js";


export let dataTableHead = [
  {
    name: 'id',
    params: {
      classList: ['table__head-cell', 'table__head-cell_id'],
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
    name: 'fullName',
    params: {
      classList: ['table__head-cell', 'table__head-cell_full-name'],
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
          textContent: 'Я-А',
        },
      },
    ],
  },
  {
    name: 'createDate',
    params: {
      classList: ['table__head-cell', 'table__head-cell_create-date'],
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
    name: 'changeDate',
    params: {
      classList: ['table__head-cell', 'table__head-cell_change-date'],
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
    name: 'contacts',
    params: {
      classList: ['table__head-cell', 'table__head-cell_contacts'],
      textContent: 'Контакты',
    },
  },
  {
    name: 'actions',
    params: {
      classList: ['table__head-cell', 'table__head-cell_actions'],
      textContent: 'Действия',
    },
  },
]

class CreateHeadCell {

  _sort = 0
  _cellChilds = []

  constructor(options) {
    this.cell = document.createElement('th')
    // this.cell.dataset.name = options.name

    this.name = options.name
    this.sort = this._sort

    if (options.params) {
      this.addAttributes(this.cell, options.params)
    }

    if (options.childs) {
      for (const child of options.childs) {
        this.cellChild = document.createElement(child.tag)
        this.addAttributes(this.cellChild, child.params)
        this.cell.append(this.cellChild)
        this._cellChilds.push(this.cellChild)
      }
    }

    this.cell.addEventListener('click', () => {
      console.log(this);
      switch (this.sort) {
        case 0:
          this.sort = 1
          break;
        case 1:
          this.sort = -1
          break;
        case -1:
          this.sort = 1
          break;

        default:
          break;
      }
    })
  }

  set sort(value) {
    this._sort = value
    switch (this._sort) {
      case 0:
        this.cell.classList.remove('is-sorted')
        for (const child of this._cellChilds) {
          child.classList.remove('sort-up')
          if (child.textContent === 'Я-А' || child.textContent === 'А-Я') child.textContent = 'А-Я'
        }
        break;
        case 1:
          this.cell.classList.add('is-sorted')
          for (const child of this._cellChilds) {
            child.classList.toggle('sort-up')
            if (child.textContent === 'Я-А') child.textContent = 'А-Я'
          }
          break;
          case -1:
            for (const child of this._cellChilds) {
              child.classList.toggle('sort-up')
              if (child.textContent === 'А-Я') child.textContent = 'Я-А'
            }
        break;
    }
  }
  get sort() {
    return this._sort;
  }

  addAttributes(targetNode, objParams) {
    for (const[key, value] of Object.entries(objParams)) {
      if (key == 'classList') {
        if (Array.isArray(value)) {
          for (const newClass of value) targetNode.classList.add(newClass)
        } else targetNode.classList.add(value)
      } else targetNode[key] = value
    }
  }
}

export class Table {
  _headCells = []
  _currentSort = 'id'

  constructor(container, dataTableHead, dataClients) {
    this.table = document.createElement('table')
    this.table.classList.add('table')
    // head table
    this.head = document.createElement('thead')
    this.headRow = document.createElement('tr')
    this.head.classList.add('table__head')
    this.headRow.classList.add('table__head-row')

    for (const cellObj of dataTableHead) {
      this.headCell = new CreateHeadCell(cellObj)
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





