import { iconArrowUp, iconArrowDown } from "./icons.js";
import { ListClients } from "./List-clients.js";

// вид заголовка таблицы
export let dataTableHead = [
  {
    name: 'id',
    sortable: true,
    params: {
      classList: ['table__head-cell', 'sortable', 'table__head-cell_id'],
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
    sortable: true,
    params: {
      classList: ['table__head-cell', 'sortable', 'table__head-cell_full-name'],
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
    name: 'dateCreation',
    sortable: true,
    params: {
      classList: ['table__head-cell', 'sortable', 'table__head-cell_create-date'],
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
    name: 'dateChange',
    sortable: true,
    params: {
      classList: ['table__head-cell', 'sortable', 'table__head-cell_change-date'],
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
    sortable: false,
    params: {
      classList: ['table__head-cell', 'table__head-cell_contacts'],
      textContent: 'Контакты',
    },
  },
  {
    name: 'actions',
    sortable: false,
    params: {
      classList: ['table__head-cell', 'table__head-cell_actions'],
      textContent: 'Действия',
    },
  },
]

// создание ячейки заголовка таблицы ===========================
class CreateHeadCell {
  _sortDirect = false
  _sortActive = false
  _cellChilds = []

  constructor(options) {
    this.cell = document.createElement('th')

    this.name = options.name
    this.sortDirect = this._sortDirect
    this.sortable = options.sortable
    this.sortActive = this._sortActive

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

    if (this.sortable) {
      this.cell.addEventListener('click', () => {
        this.sortDirect = !this.sortDirect
      })
    }
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

  set sortDirect(value) {
    this._sortDirect = value

    if (value) {
      this.cell.classList.add('sort-up')
      if (this._cellChilds.length > 0)
      for (const child of this._cellChilds) {
        child.classList.add('sort-up')
        if (child.textContent === 'Я-А') child.textContent = 'А-Я'

      }

    } else {
      this.cell.classList.remove('sort-up')
      if (this._cellChilds.length > 0)
      for (const child of this._cellChilds) {
        child.classList.remove('sort-up')
        if (child.textContent === 'А-Я') child.textContent = 'Я-А'
      }
    }


  }
  get sortDirect() {return this._sortDirect}

  set sortActive(value) {
    this._sortActive = value
    if (this._sortActive) {
      this.cell.classList.add('is-sorted')
    } else {
      this.cell.classList.remove('is-sorted')
    }
  }

  get sortActive() {return this._sortActive}

};

// создание элементов строки таблицы ===========================
class CreateBodyRow {

  constructor(container, dataHead, dataClient) {
    for (const cellHead of dataHead) {
      this.cell = document.createElement('td')
      this.name = cellHead.name
      switch (cellHead.name) {
        case 'id':
          this.cell.textContent = dataClient.id
          break;
        case 'fullName':
          this.cell.textContent = dataClient.fullName
          break;
        case 'dateCreation':
          this.cell.textContent = dataClient.dateCreationStr()
          break;
        case 'dateChange':
          this.cell.textContent = dataClient.dateChangeStr()
          break;
        case 'contacts':
          this.cell.textContent = dataClient.id
          break;
        case 'actions':
          this.cell.textContent = dataClient.id
          break;
      }
      this.cell.classList.add('table__body-cell')
      container.append(this.cell)
    }
  }
};

// создание таблицы ============================================
export class Table {
  _bodyRows = []
  _currentSort = ''
  _sortDirect = true

  constructor(container, dataTable) {
    // data
    this.dataHead = dataTable.dataHead
    this.headCells = []
    // this.dataClient = null
    this.currentSort = dataTable.currentSort
    this.sortDirect = this._sortDirect
    this.dataClient = new ListClients(dataTable.dataBody)

    this.table = document.createElement('table')
    this.table.classList.add('table')

    // head table
    this.head = document.createElement('thead')
    this.headRow = document.createElement('tr')
    this.head.classList.add('table__head')
    this.headRow.classList.add('table__head-row')

    this.createHead()

    // body table
    this.body = document.createElement('tbody')
    this.body.classList.add('table__body')

    this.updateBody()


    this.head.append(this.headRow)
    this.table.append(this.head, this.body)
    container.append(this.table)
  }

  createHead() {
    if (this.dataHead.length > 0) {
      for (const cellObj of this.dataHead) {
        this.headCell = new CreateHeadCell(cellObj)
        if (this.currentSort == cellObj.name) {
          this.headCell.sortDirect = true
          this.headCell.sortActive = true
        }
        this.headCells.push(this.headCell)
        this.headRow.append(this.headCell.cell)
      }

      for (const headCell of this.headCells) {
        if (headCell.sortable) {
          headCell.cell.addEventListener('click', () => {
            console.log('headCell.name :>> ', headCell.name);
            console.log('this.currentSort :>> ', this.currentSort);
            if (headCell.name !== this.currentSort) {
              this.currentSort = headCell.name
              headCell.sortActive = true
            } else this.sortDirect = !this.sortDirect
          })
        }
      }
    }
  }

  updateBody() {
    let dataBody = []
    this.body.innerHTML = ''
    dataBody = this.dataClient._arrayClients

    if (dataBody.length > 0) {
      for (const client of dataBody) {
        this.row = document.createElement('tr')
        this.row.classList.add('table__body-row')
        new CreateBodyRow(this.row, this.headCells, client)
        this.body.append(this.row)
      }
    }
  }

  set currentSort(value) {
    this._currentSort = value
    for (const headCell of this.headCells) {
      headCell.sortDirect = false
      headCell.sortActive = false
      if (headCell.name == value) headCell.sortDirect = true
    }
    console.log('value :>> ', value);
    console.log('this.dataClient :>> ', this.dataClient);
    if (this.dataClient) {
      this.updateBody()
      this.dataClient.sortKey = value
    }
  }
  get currentSort() {
    return this._currentSort
  }

  set sortDirect(value) {
    this._sortDirect = value
    if (this.dataClient) {
      this.dataClient.sortDir = value
      this.updateBody()
    }
  }
  get sortDirect() {
    return this._sortDirect
  }

};





