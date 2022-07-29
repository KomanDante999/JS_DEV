import { arrayStudentDefault } from './modules/array-default.js'; // массив студентов по умолчанию
import { createModal } from './modules/modal-window_bootstrap.js';  // оболочка модального окна bootstrap
import { createFilterPanel } from './modules/create_filter-panel.js';  // панель фильтров
import { validInputForm } from './modules/valid_input-form.js';  // валидация формы ввода
import { createInputForm } from './modules/create_input-form.js';  // форма ввода в модальном окне

(() => {




  document.addEventListener('DOMContentLoaded', () => {
    // контейнер
    const container = document.getElementById('student-control-panel');
    container.classList.add('container');

    // форма ввода в модальном окне
    const modalInputForm = createInputForm();

    // модальное окно формы ввода
    const modalWrapForm = createModal('modal-input-form', modalInputForm.wrap);
    modalWrapForm.btnApply.disabled = true;
    modalWrapForm.btnCheck.addEventListener('click', () => {
      if (validInputForm()) {
        modalWrapForm.btnApply.disabled = false;
      }
    })
    modalWrapForm.btnApply.addEventListener('click', () => {
        modalWrapForm.btnApply.disabled = true;
    })
    container.append(modalWrapForm.wrap);

    // панель фильтров
    const filterPanel = createFilterPanel('modal-input-form');

    container.append(filterPanel.wrap);



  });
})();


