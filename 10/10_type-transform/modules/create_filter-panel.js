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


