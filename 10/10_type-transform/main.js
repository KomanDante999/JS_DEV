import { arrayStudentDefault } from './modules/array-default.js'; // массив студентов по умолчанию
import { createModal } from './modules/modal-window_bootstrap.js';  // оболочка модального окна bootstrap
import { createFilterPanel } from './modules/create_filter-panel.js';  // панель фильтров
import { validName, validMiddleName, validBirthDate, validYearAdmission, validFaculty } from './modules/valid_input-form.js';  // валидация формы ввода
import { createInputForm } from './modules/create_input-form.js';  // форма ввода в модальном окне

(() => {




  document.addEventListener('DOMContentLoaded', () => {
    // контейнер
    const container = document.getElementById('student-control-panel');
    container.classList.add('container');

    // форма ввода в модальном окне
    const modalInputForm = createInputForm();
    modalInputForm.form.addEventListener('submit', (e) => {
      e.preventDefault();
      // counter
      let count = 0;
      // Surname
      if (validName(modalInputForm.inputSurname.value).valid === false) {
        modalInputForm.inputSurname.classList.add('is-invalid');
        modalInputForm.inputSurnameFiidback.classList.add('invalid-feedback');
        modalInputForm.inputSurnameFiidback.textContent = validName(modalInputForm.inputSurname.value).feedback;
      }
      else {
        modalInputForm.inputSurname.classList.add('is-valid');
        count++;
      }
      // name
      if (validName(modalInputForm.inputName.value).valid === false) {
        modalInputForm.inputName.classList.add('is-invalid');
        modalInputForm.inputNameFiidback.classList.add('invalid-feedback');
        modalInputForm.inputNameFiidback.textContent = validName(modalInputForm.inputName.value).feedback;
      }
      else {
        modalInputForm.inputName.classList.add('is-valid');
        count++;
      }
      // MiddleName
      if (validMiddleName(modalInputForm.inputMiddleName.value).valid === false) {
        modalInputForm.inputMiddleName.classList.add('is-invalid');
        modalInputForm.inputMiddleNameFiidback.classList.add('invalid-feedback');
        modalInputForm.inputMiddleNameFiidback.textContent = validName(modalInputForm.inputMiddleName.value).feedback;
      }
      else {
        modalInputForm.inputMiddleName.classList.add('is-valid');
        count++;
      }
      // BirthDate
      if (validBirthDate(modalInputForm.inputBirthDate.value).valid === false) {
        modalInputForm.inputBirthDate.classList.add('is-invalid');
        modalInputForm.inputBirthDateFiidback.classList.add('invalid-feedback');
        modalInputForm.inputBirthDateFiidback.textContent = validName(modalInputForm.inputBirthDate.value).feedback;
      }
      else {
        modalInputForm.inputBirthDate.classList.add('is-valid');
        count++;
      }
      // YearAdmission
      if (validYearAdmission(modalInputForm.inputYearAdmission.value).valid === false) {
        modalInputForm.inputYearAdmission.classList.add('is-invalid');
        modalInputForm.inputYearAdmissionFiidback.classList.add('invalid-feedback');
        modalInputForm.inputYearAdmissionFiidback.textContent = validName(modalInputForm.inputYearAdmission.value).feedback;
      }
      else {
        modalInputForm.inputYearAdmission.classList.add('is-valid');
        count++;
      }
      // Faculty
      if (validFaculty(modalInputForm.inputFaculty.value).valid === false) {
        modalInputForm.inputFaculty.classList.add('is-invalid');
        modalInputForm.inputFacultyFiidback.classList.add('invalid-feedback');
        modalInputForm.inputFacultyFiidback.textContent = validName(modalInputForm.inputFaculty.value).feedback;
      }
      else {
        modalInputForm.inputFaculty.classList.add('is-valid');
        count++;
      }

      // if valid form
      if (count === 6) {
        const currentStudent = {
          surname: modalInputForm.inputName.value,
          name: modalInputForm.inputSurname.value,
          middleName: modalInputForm.inputMiddleName.value,
          birthDate: modalInputForm.inputBirthDate.value,
          yearAdmission: modalInputForm.inputYearAdmission.value,
          faculty: modalInputForm.inputFaculty.value,
        }
        console.log(currentStudent);
        // clean form
        document.querySelectorAll('.js-input').forEach(element => {
          element.classList.remove('is-valid', 'is-invalid');
          element.value = '';
        });
        document.querySelectorAll('.js-feedback').forEach(element => {
          element.classList.remove('invalid-feedback');
          element.textContent = '';
        });
      }


    });

    // модальное окно формы ввода
    const modalWrapForm = createModal('modal-input-form', modalInputForm.form);
    container.append(modalWrapForm.wrap);

    // заголовок
    const title = document.createElement('h1');
    title.textContent = 'Список студентов университета';
    title.classList.add('h1', 'mb-4');
    container.append(title);

    // панель фильтров
    const filterPanel = createFilterPanel('modal-input-form');

    container.append(filterPanel.wrap);



  });
})();


