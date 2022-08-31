import { iconBtnClose } from "./icons.js";

export function createModalWindow(contant) {
  const body = document.querySelector('body');
  body.classList.add('over-hidden');
  const overlay = document.createElement('div');
  overlay.classList.add('modal-window', 'modal-window_opening');
  overlay.id = 'modal-window';
  overlay.tabIndex = '-1';
  const container = document.createElement('div');
  container.id = 'modal-window-container'
  container.classList.add('modal-window__container', 'modal-window__container_opening');
  const btnClose = document.createElement('button');
  btnClose.classList.add('modal-window__btn-close');
  btnClose.innerHTML = iconBtnClose;

  btnClose.addEventListener('click', () => {
    removeModalWindow('modal-window', 'modal-window-container')
  })

  overlay.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-window__container')) {
      removeModalWindow('modal-window', 'modal-window-container');
    }
  })

  container.append(btnClose, contant);
  overlay.append(container);
  body.append(overlay);
}

export function removeModalWindow(modalId, containerId) {
  const body = document.querySelector('body');
  const overlay = document.getElementById(`${modalId}`);
  const container = document.getElementById(`${containerId}`);

  overlay.classList.remove('modal-window_opening');
  overlay.classList.add('modal-window_closing');
  container.classList.remove('modal-window__container_opening');
  container.classList.add('modal-window__container_closing');

  overlay.addEventListener('animationend', () => {
    if (overlay) {
      body.removeChild(overlay);
    }

    body.classList.remove('over-hidden');
  })
}
