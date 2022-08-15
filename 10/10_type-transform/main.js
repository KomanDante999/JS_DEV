import { arrayStudentDefault } from './modules/array-default.js'; // массив студентов по умолчанию
import { createModal } from './modules/modal-window_bootstrap.js';  // оболочка модального окна bootstrap
import { createBtnAddStudent, createFilterForm, cleanFilterField, cleanFilterFieldAll } from './modules/create_filter-panel.js';  // панель фильтров
import { validInputForm } from './modules/valid_input-form.js';  // валидация формы ввода
import { inputFormData, updateInputFormData , cleanInputFormData, renderingInputForm, addNewEntry } from './modules/create_input-form.js';  // форма ввода в модальном окне
import { initNewTable } from './modules/create_table.js';  // таблица
import { saveStorage } from './modules/servise-function.js';  // вспомогательные функции
import { arrayFormat, filterArray, getDataFofm, sortedFormData, sortedArrayStudent, headerDataTable, rectoreStorage } from './modules/array_filter_sort.js';  // фильтрация и сортировка массива

// основной масив (сохраняется)
let arrayStudentsInit = [];
// текущий массив (с которым все и происходит)
let arrayStudentsCurrent = [];
// данные формы фильтров
let filterFormData = [];
// имя ключа в Storage
const keyStorage = 'arrayStudenSave'

// arrayStudentsInit = arrayStudentDefault.slice();

// актуализация данных и отрисовка таблицы
export function updateTable() {
  arrayStudentsInit = arrayStudentDefault;
  // востановление из Storage
  let tempRestore = rectoreStorage(keyStorage)
  if (tempRestore.length > 0) {
    arrayStudentsInit = tempRestore
  }
  // текущий массив из основного
  arrayStudentsCurrent = arrayStudentsInit;
  // форматировани
  arrayStudentsCurrent = arrayFormat(arrayStudentsCurrent);
  // фильтрация
  arrayStudentsCurrent = filterArray(arrayStudentsCurrent, filterFormData);
  // сортировка
  arrayStudentsCurrent = sortedArrayStudent(arrayStudentsCurrent, sortedFormData);
  // отрисовка новой таблицы
  initNewTable(arrayStudentsCurrent, sortedFormData, headerDataTable, 'student-control-panel', 'js-table-students');
}

export function processingSubmitByFormInput() {
  updateInputFormData(inputFormData);
  validInputForm(inputFormData);
  // успешная валидация всех полей
  if (inputFormData.every(objData => objData.inputValid === 1)) {
    // добавление новой записи в таблицу
    addNewEntry(inputFormData, arrayStudentsInit);
    saveStorage(arrayStudentsInit, keyStorage)
    // очиска данных формы ввода
    cleanInputFormData(inputFormData);
    // отрисовка таблицы
    updateTable()
  }

  renderingInputForm(inputFormData, 'modal-input-form','modal-window-body');
}


(() => {
  document.addEventListener('DOMContentLoaded', () => {
    // контейнер
    const container = document.getElementById('student-control-panel');
    container.classList.add('container', 'container-my');

    // заголовок
    const title = document.createElement('h1');
    title.textContent = 'Список студентов университета';
    title.classList.add('h1', 'text-center');
    container.append(title);

    // модальное окно формы ввода--------------------------------------------------
    const modalWrapForm = createModal('modal-window');
    container.append(modalWrapForm.wrap);

    // кнопка вызова модального окна
    const btnAddStudent = createBtnAddStudent('modal-window');
    btnAddStudent.btnRunModal.addEventListener('click', () => {
      // очиска данных формы ввода
      cleanInputFormData(inputFormData);
      renderingInputForm(inputFormData, 'modal-input-form','modal-window-body');
    })

    // панель фильтров------------------------------------------------------
    const filterForm = createFilterForm();
    // фильтрация по submit
    filterForm.form.addEventListener('submit', (e) => {
      e.preventDefault();
      // получение данных фильтра
      filterFormData = getDataFofm('js-filter-input');
      updateTable();
    });

    // очистка отдельных фильтров
    filterForm.fullName.clean.addEventListener('click', () => {
      cleanFilterField(`fullName`);
      filterFormData = getDataFofm('js-filter-input');
      updateTable();
    });
    filterForm.faculty.clean.addEventListener('click', () => {
      cleanFilterField(`faculty`);
      filterFormData = getDataFofm('js-filter-input');
      updateTable();
    });
    filterForm.birthYear.clean.addEventListener('click', () => {
      cleanFilterField(`birthYear`);
      filterFormData = getDataFofm('js-filter-input');
      updateTable();
    });
    filterForm.yearAdmission.clean.addEventListener('click', () => {
      cleanFilterField(`yearAdmission`);
      filterFormData = getDataFofm('js-filter-input');
      updateTable();
    });
    filterForm.yearEnding.clean.addEventListener('click', () => {
      cleanFilterField(`yearEnding`);
      filterFormData = getDataFofm('js-filter-input');
      updateTable();
    });
    // очистка всех фильтров
    filterForm.btnCleanAll.addEventListener('click', () => {
      cleanFilterFieldAll();
      filterFormData = getDataFofm('js-filter-input');
      updateTable();
    });

    container.append(btnAddStudent.wrap, filterForm.form);

    // таблица
    updateTable();


  });

})();


