import { iconBtnClose } from "./icons.js";

export function createModalWindow() {
  const body = document.querySelector('body');
  body.classList.add('over-hidden');
  const overlay = document.createElement('div');
  overlay.classList.add('modal-window');
  overlay.id = 'modal-window';
  overlay.addEventListener('click', () => {
    removeModalWindow('modal-window');

  })
  const container = document.createElement('div');
  container.classList.add('modal-window__container');
  const btnClose = document.createElement('button');
  btnClose.classList.add('modal-window__btn-close');
  btnClose.innerHTML = iconBtnClose;
  btnClose.addEventListener('click', () => {
    removeModalWindow('modal-window');
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
