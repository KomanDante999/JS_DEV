import { arrayStudentDefault } from './modules/array-default.js'; // массив студентов по умолчанию
import { createModal } from './modules/modal-window_bootstrap.js';  // оболочка модального окна bootstrap
import { createBtnAddStudent, createFilterForm, cleanFilterField } from './modules/create_filter-panel.js';  // панель фильтров
import { validInputForm } from './modules/valid_input-form.js';  // валидация формы ввода
import { createInputForm, invalidInputTheme, validInputTheme, cleanInputForm } from './modules/create_input-form.js';  // форма ввода в модальном окне
import { creatTable, initNewTable } from './modules/create_table.js';  // таблица
import { arrayFormat, filterArray, getDataFofm } from './modules/array_filter_sort.js';  // фильтрация и сортировка массива

export let inputFormData = [];

(() => {

  let arrayStudentsInit = [];
  let arrayStudentsFormat = [];
  let arrayStudentsFilters = [];
  let arrayStudentsSortes = [];
  // данные формы фильтров
  let filterFormData = [];

  arrayStudentsInit = arrayStudentDefault;

  // очиска одного поля фильтрации
  function cleanFilterOneField(arrayFilter, fieldName, fieldJsClass) {
    cleanFilterField(`${fieldName}`);
    arrayFilter= getDataFofm(`${fieldJsClass}`);
  }


  document.addEventListener('DOMContentLoaded', () => {
    // контейнер
    const container = document.getElementById('student-control-panel');
    container.classList.add('container');

    // форма ввода в модальном окне
    const modalInputForm = createInputForm();
    modalInputForm.form.addEventListener('submit', (e) => {
      e.preventDefault();
      inputFormData = [
        {
          fieldName: 'surname',
          fieldValue: modalInputForm.inputSurname.value,
          fieldValid: false,
          feedbackText: '',
          inputNode: modalInputForm.inputSurname,
          feedbackNode: modalInputForm.inputSurnameFeedback,
        },
        {
          fieldName: 'name',
          fieldValue: modalInputForm.inputName.value,
          fieldValid: false,
          feedbackText: '',
          inputNode: modalInputForm.inputName,
          feedbackNode: modalInputForm.inputNameFeedback,
        },
        {
          fieldName: 'middleName',
          fieldValue: modalInputForm.inputMiddleName.value,
          fieldValid: false,
          feedbackText: '',
          inputNode: modalInputForm.inputMiddleName,
          feedbackNode: modalInputForm.inputMiddleNameFeedback,
        },
        {
          fieldName: 'birthDate',
          fieldValue: modalInputForm.inputBirthDate.valueAsDate,
          fieldValid: false,
          feedbackText: '',
          inputNode: modalInputForm.inputBirthDate,
          feedbackNode: modalInputForm.inputBirthDateFeedback,
        },
        {
          fieldName: 'yearAdmission',
          fieldValue: modalInputForm.inputYearAdmission.valueAsNumber,
          fieldValid: false,
          feedbackText: '',
          inputNode: modalInputForm.inputYearAdmission,
          feedbackNode: modalInputForm.inputYearAdmissionFeedback,
        },
        {
          fieldName: 'faculty',
          fieldValue: modalInputForm.inputFaculty.value,
          fieldValid: false,
          feedbackText: '',
          inputNode: modalInputForm.inputFaculty,
          feedbackNode: modalInputForm.inputFacultyFeedback,
        },
      ]

      validInputForm();

      if (inputFormData.some(inputFormData => inputFormData.fieldValid === false)) {
        inputFormData.forEach(inputData => {
          if (inputData.fieldValid) {
            validInputTheme(inputData.inputNode, inputData.feedbackNode, inputData.feedbackText)
          }
          else {
            invalidInputTheme(inputData.inputNode, inputData.feedbackNode, inputData.feedbackText)
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
        arrayStudentsFormat = arrayFormat(arrayStudentsInit);
        // отрисовка новой таблицы
        initNewTable(arrayStudentsFormat, 'student-control-panel', 'js-table-students');
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

    // панель фильтров
    const btnAddStudent = createBtnAddStudent('modal-input-form');
    const filterForm = createFilterForm();

    // очтска фильтров
    filterForm.inputFullNameClean.addEventListener('click', () => {
      cleanFilterOneField(filterFormData, 'fullName', 'js-filter-input');
    })
    filterForm.inputFacultyClean.addEventListener('click', () => {
      cleanFilterOneField(filterFormData, 'faculty', 'js-filter-input');
    })
    filterForm.inputBirthYearClean.addEventListener('click', () => {
      cleanFilterOneField(filterFormData, 'birthYear', 'js-filter-input');
    })
    filterForm.inputYearAdmissionClean.addEventListener('click', () => {
      cleanFilterOneField(filterFormData, 'yearAdmission', 'js-filter-input');
    })
    filterForm.inputYearEndingClean.addEventListener('click', () => {
      cleanFilterOneField(filterFormData, 'yearEnding', 'js-filter-input');
    })

    filterForm.form.addEventListener('submit', (e) => {
      e.preventDefault();
      filterFormData = getDataFofm('js-filter-input');

      // фильтрация таблицы
      // arrayStudentsFilters = arrayStudentsFormat;
      arrayStudentsFilters = filterArray(arrayStudentsFormat, filterFormData);
      // console.log(arrayStudentsFilters);
      // console.log(filterFormData);
      // отрисовка новой таблицы
      initNewTable(arrayStudentsFilters, 'student-control-panel', 'js-table-students');

    })

    container.append(btnAddStudent.wrap, filterForm.form);

    // таблица
    arrayStudentsFormat = arrayFormat(arrayStudentsInit);
    initNewTable(arrayStudentsFormat, 'student-control-panel', 'js-table-students');

  });

})();


