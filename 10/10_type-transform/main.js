import { arrayStudentDefault } from './modules/array-default.js'; // массив студентов по умолчанию
import { createModal } from './modules/modal-window_bootstrap.js';  // оболочка модального окна bootstrap
import { createBtnAddStudent, createFilterForm, cleanFilterField } from './modules/create_filter-panel.js';  // панель фильтров
import { validInputForm } from './modules/valid_input-form.js';  // валидация формы ввода
import { createInputForm, invalidInputTheme, validInputTheme, cleanInputForm } from './modules/create_input-form.js';  // форма ввода в модальном окне
import { creatTable, initNewTable } from './modules/create_table.js';  // таблица
import { arrayFormat, filterArray } from './modules/array_filter_sort.js';  // фильтрация и сортировка массива

export let inputFormData = [];

(() => {

  let arrayStudentsInit = [];
  let arrayStudentsFormat = [];
  let filterFormData = [];
  arrayStudentsInit = arrayStudentDefault;

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
      cleanFilterField('fullName')
      // filterForm.inputFullName.value = '';
      // filterForm.inputFullNameClean.classList.add('visually-hidden');
      // for (const objInput of filterFormData) {
      //   if (objInput.fieldName === 'fullName') {
      //     objInput.fieldValue = ''
      //   }
      // }
      console.log(filterFormData);
    })

    filterForm.form.addEventListener('submit', (e) => {
      e.preventDefault();
      filterFormData = [
        {
          fieldName: 'fullName',
          fieldValue: filterForm.inputFullName.value,
          fieldValid: false,
          feedbackText: '',
          inputNode: filterForm.inputFullName,
          feedbackNode: filterForm.inputFullNameFeedback,
        },
        {
          fieldName: 'faculty',
          fieldValue: filterForm.inputFaculty.value,
          fieldValid: false,
          feedbackText: '',
          inputNode: filterForm.inputFaculty,
          feedbackNode: filterForm.inputFacultyFeedback,
        },
        {
          fieldName: 'birthYear',
          fieldValue: filterForm.inputBirthYear.valueAsNumber,
          fieldValid: false,
          feedbackText: '',
          inputNode: filterForm.inputBirthYear,
          feedbackNode: filterForm.inputBirthYearFeedback,
        },
        {
          fieldName: 'yearAdmission',
          fieldValue: filterForm.inputYearAdmission.valueAsNumber,
          fieldValid: false,
          feedbackText: '',
          inputNode: filterForm.inputYearAdmission,
          feedbackNode: filterForm.inputYearAdmissionFeedback,
        },
        {
          fieldName: 'yearEnding',
          fieldValue: filterForm.inputYearEnding.valueAsNumber,
          fieldValid: false,
          feedbackText: '',
          inputNode: filterForm.inputYearEnding,
          feedbackNode: filterForm.inputYearEndingFeedback,
        },
      ]
      // фильтрация таблицы
      arrayStudentsFormat = filterArray(arrayStudentsInit, filterFormData);
      // отрисовка новой таблицы
      // initNewTable(arrayStudentsFormat, 'student-control-panel', 'js-table-students');

    })

    container.append(btnAddStudent.wrap, filterForm.form);

    // таблица
    arrayStudentsFormat = arrayFormat(arrayStudentsInit);
    initNewTable(arrayStudentsFormat, 'student-control-panel', 'js-table-students');

  });

})();


