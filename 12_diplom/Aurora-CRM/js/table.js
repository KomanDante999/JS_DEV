import { iconArrowUp, iconArrowDown } from "./icons.js";

export let dataTableHead = [
  {
    name: '',
    class: [],
    childs: '',
  },
]


export class Table {

  constructor(container) {
    this.table = document.createElement('table')
    this.table.classList.add('table')
    // head table
    this.head = document.createElement('thead')
    this.headRow = document.createElement('tr')
    this.headId = document.createElement('th')
    this.headIdIcon = document.createElement('span')
    this.headFullName = document.createElement('th')
    this.headFullNameIcon = document.createElement('span')
    this.headCreateDate = document.createElement('th')
    this.headCreateDateIcon = document.createElement('span')
    this.headChangeDate = document.createElement('th')
    this.headChangeDateIcon = document.createElement('span')
    this.headContacts = document.createElement('th')
    this.headActions = document.createElement('th')

    this.head.classList.add('table__head')
    this.headRow.classList.add('table__head-row')
    this.headId.classList.add('table__head-cell')
    this.headId.textContent = 'ID'
    this.headIdIcon.classList.add('table__icon-sort', 'sort-up')
    this.headIdIcon.innerHTML = iconArrowDown
    this.headFullName.classList.add('table__head-cell')
    this.headFullName.textContent = 'Фамилия Имя Отчество'
    this.headFullNameIcon.classList.add('table__icon-sort', 'sort-up')
    this.headFullNameIcon.innerHTML = iconArrowDown
    this.headCreateDate.classList.add('table__head-cell')
    this.headCreateDate.textContent = 'Дата и время создания'
    this.headCreateDateIcon.classList.add('table__icon-sort', 'sort-up')
    this.headCreateDateIcon.innerHTML = iconArrowDown
    this.headChangeDate.classList.add('table__head-cell')
    this.headChangeDate.textContent = 'Последние изменения'
    this.headChangeDateIcon.classList.add('table__icon-sort', 'sort-up')
    this.headChangeDateIcon.innerHTML = iconArrowDown
    this.headContacts.classList.add('table__head-cell')
    this.headContacts.textContent = 'Контакты'
    this.headActions.classList.add('table__head-cell')
    this.headActions.textContent = 'Действия'


    this.headId.append(this.headIdIcon)
    this.headFullName.append(this.headFullNameIcon)
    this.headCreateDate.append(this.headCreateDateIcon)
    this.headChangeDate.append(this.headChangeDateIcon)
    this.headRow.append(this.headId, this.headFullName, this.headCreateDate, this.headChangeDate, this.headContacts, this.headActions)
    this.head.append(this.headRow)

    // body table
    this.body = document.createElement('tbody')




    this.table.append(this.head, this.body)
    container.append(this.table)
  }
};





