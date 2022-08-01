import { arrayStudentDefault } from './modules/array-default.js'; // массив студентов по умолчанию
import { createModal } from './modules/modal-window_bootstrap.js';  // оболочка модального окна bootstrap
import { createFilterPanel } from './modules/create_filter-panel.js';  // панель фильтров
import { validInputForm } from './modules/valid_input-form.js';  // валидация формы ввода
import { createInputForm, invalidInputTheme, validInputTheme, cleanInputForm } from './modules/create_input-form.js';  // форма ввода в модальном окне
import { creatTable } from './modules/create_table.js';  // таблица

export let inputFormData = [];

(() => {

  let arrayStudents = [];
  arrayStudents = arrayStudentDefault;

  document.addEventListener('DOMContentLoaded', () => {
    console.log(arrayStudents);
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
          fieldValue: modalInputForm.inputBirthDate.value,
          fieldValid: false,
          feedbackText: '',
          inputNode: modalInputForm.inputBirthDate,
          feedbackNode: modalInputForm.inputBirthDateFeedback,
        },
        {
          fieldName: 'yearAdmission',
          fieldValue: modalInputForm.inputYearAdmission.value,
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
        const newStudent = {
          surname: modalInputForm.inputName.value,
          name: modalInputForm.inputSurname.value,
          middleName: modalInputForm.inputMiddleName.value,
          birthDate: modalInputForm.inputBirthDate.value,
          yearAdmission: modalInputForm.inputYearAdmission.value,
          faculty: modalInputForm.inputFaculty.value,
        }
        arrayStudents.push(newStudent);
        cleanInputForm();
        const tableNew = creatTable(arrayStudents);
        const container = document.getElementById('student-control-panel');
        const tableOld = document.getElementById('js-table-students');
        if (tableOld) {
          container.removeChild(tableOld);
        }
        container.append(tableNew.table);
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
    title.classList.add('h1', 'mb-4');
    container.append(title);

    // панель фильтров
    const filterPanel = createFilterPanel('modal-input-form');

    container.append(filterPanel.wrap);

    // таблица
    const table = creatTable(arrayStudents);


    container.append(table.table);

  });

})();


