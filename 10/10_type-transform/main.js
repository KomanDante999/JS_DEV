import { arrayStudentDefault } from './modules/array-default.js'; // массив студентов по умолчанию
import { createModal } from './modules/modal-window_bootstrap.js';  // оболочка модального окна bootstrap
import { createBtnAddStudent, createFilterForm, cleanFilterField, cleanFilterFieldAll } from './modules/create_filter-panel.js';  // панель фильтров
import { validInputForm } from './modules/valid_input-form.js';  // валидация формы ввода
import { createInputForm, inputFormData } from './modules/create_input-form.js';  // форма ввода в модальном окне
import { initNewTable } from './modules/create_table.js';  // таблица
import { debounce } from './modules/servise-function.js';  // вспомогательные функции
import { arrayFormat, filterArray, getDataFofm, sortedFormData, sortedArrayStudent, updateSortedData, headerDataTable } from './modules/array_filter_sort.js';  // фильтрация и сортировка массива

// основной масив (сохраняется)
let arrayStudentsInit = [];
// текущий массив
let arrayStudentsCurrent = [];
// данные формы фильтров
let filterFormData = [];
arrayStudentsInit = arrayStudentDefault.slice();

// актуализация данных и отрисовка таблицы
export function updateTable() {
  // текущий массив из основного
  arrayStudentsCurrent = arrayStudentsInit.slice();
  // форматировани
  arrayStudentsCurrent = arrayFormat(arrayStudentsCurrent);
  // фильтрация
  arrayStudentsCurrent = filterArray(arrayStudentsCurrent, filterFormData);
  // сортировка
  arrayStudentsCurrent = sortedArrayStudent(arrayStudentsCurrent, sortedFormData);
  // отрисовка новой таблицы
  initNewTable(arrayStudentsCurrent, sortedFormData, headerDataTable, 'student-control-panel', 'js-table-students');
}
(() => {


  document.addEventListener('DOMContentLoaded', () => {
    // контейнер
    const container = document.getElementById('student-control-panel');
    container.classList.add('container', 'container-my');

    // форма ввода в модальном окне
    const modalInputForm = createInputForm(inputFormData);
    modalInputForm.form.addEventListener('submit', (e) => {
      e.preventDefault();
      // валидация
      validInputForm();
      if (inputFormData.some(inputFormData => inputFormData.fieldValid === false)) {
        inputFormData.forEach(inputData => {
          if (inputData.fieldValid) {
            validInputTheme(inputData.inputNode, inputData.feedbackNode, inputData.feedbackText, inputData.fieldValue)
          }
          else {
            invalidInputTheme(inputData.inputNode, inputData.feedbackNode, inputData.feedbackText, inputData.fieldValue)
          }
        });
      }
      else {
        // добавление новой записи
        const newStudent = {
          surname: modalInputForm.inputName.value,
          name: modalInputForm.inputSurname.value,
          middleName: modalInputForm.inputMiddleName.value,
          birthDate: modalInputForm.inputBirthDate.valueAsDate,
          yearAdmission: modalInputForm.inputYearAdmission.valueAsNumber,
          faculty: modalInputForm.inputFaculty.value,
        }
        arrayStudentsInit.push(newStudent);
        updateTable();
        cleanInputForm();
      }

    });

    // модальное окно формы ввода
    const modalWrapForm = createModal('modal-input-form', modalInputForm.form);
    modalWrapForm.btnCloseX.addEventListener('click', () => {
      cleanInputForm();
    })
    modalWrapForm.btnClose.addEventListener('click', () => {
      cleanInputForm();
    })
    container.append(modalWrapForm.wrap);

    // заголовок
    const title = document.createElement('h1');
    title.textContent = 'Список студентов университета';
    title.classList.add('h1', 'text-center');
    container.append(title);

    // панель фильтров------------------------------------------------------
    const btnAddStudent = createBtnAddStudent('modal-input-form');
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


