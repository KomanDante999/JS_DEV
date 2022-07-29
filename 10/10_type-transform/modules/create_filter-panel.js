// панель с фильтрами и кнопкой "Добавить нового студента"
export function createFilterPanel(modalId) {
  const wrap = document.createElement('div');
  // кнопка вызова модального окна
  const btnRunModal = document.createElement('button');
  btnRunModal.classList.add('btn', 'btn-primary');
  btnRunModal.textContent = 'Добавить нового студента';
  btnRunModal.setAttribute('data-bs-toggle', 'modal');
  btnRunModal.setAttribute('data-bs-target', `#${modalId}`);

  wrap.append(btnRunModal, );
  return {wrap, btnRunModal};
}


// <div class="input-group flex-nowrap">
//   <span class="input-group-text" id="addon-wrapping">@</span>
//   <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
// </div>

// <div class="input-group">
//   <span class="input-group-text">First and last name</span>
//   <input type="text" aria-label="First name" class="form-control">
//   <input type="text" aria-label="Last name" class="form-control">
// </div>
