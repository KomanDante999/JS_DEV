import { arrayStudentDefault } from './modules/array-default.js'; // массив студентов по умолчанию
import { createModal } from './modules/modal-window_bootstrap.js';  // оболочка модального окна bootstrap

(() => {




  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('student-control-panel');
    container.classList.add('container');

    const modalWrap = createModal();
    container.append(modalWrap.wrap);


  });
})();


