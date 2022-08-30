import { iconBtnClose } from "./icons.js";

export function createModalWindow() {
  const body = document.querySelector('body');
  body.classList.add('over-hidden');
  const overlay = document.createElement('div');
  overlay.classList.add('modal-window', 'modal-window_opening');
  overlay.id = 'modal-window';
  overlay.tabIndex = '-1';
  const container = document.createElement('div');
  container.classList.add('modal-window__container', 'modal-window__container_opening');
  const btnClose = document.createElement('button');
  btnClose.classList.add('modal-window__btn-close');
  btnClose.innerHTML = iconBtnClose;

  btnClose.addEventListener('click', () => {
    overlay.classList.remove('modal-window_opening');
    overlay.classList.add('modal-window_closing');
    container.classList.remove('modal-window__container_opening');
    container.classList.add('modal-window__container_closing');

    overlay.addEventListener('animationend', () => {
      console.log('animationend');
      removeModalWindow('modal-window');
      body.classList.remove('over-hidden');
    })
  })

  overlay.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-window__container')) {
      overlay.classList.remove('modal-window_opening');
      overlay.classList.add('modal-window_closing');
      container.classList.remove('modal-window__container_opening');
      container.classList.add('modal-window__container_closing');

      overlay.addEventListener('animationend', () => {
        console.log('animationend');
        removeModalWindow('modal-window');
        body.classList.remove('over-hidden');
      })
    }
  })

  container.append(btnClose);
  overlay.append(container);
  body.append(overlay);

  return {overlay, container}
}

function removeModalWindow(modalId) {
  const body = document.querySelector('body');
  body.classList.remove('over-hidden');
  const modalWindow = document.getElementById(`${modalId}`);
  if (modalWindow) {
    body.removeChild(modalWindow);
  }
}
