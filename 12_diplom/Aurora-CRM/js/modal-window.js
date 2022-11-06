import { iconBtnClose } from "./icons.js";

export class ModalWindow{
  constructor(btnDown){
    this.body = document.querySelector('body');
    this.modal = document.createElement('div')
    this.container = document.createElement('div')
    this.contant = document.createElement('div')
    this.btnCloseTop = document.createElement('button')
    this.btnCloseBottom = document.createElement('button')
    if (!btnDown) {
      this.btnCloseBottom.style.display = 'none'
    }

    this.body.classList.add('over-hidden')
    this.modal.classList.add('kd-modal', 'is-open')
    this.container.classList.add('kd-modal__container', 'is-open')
    this.contant.classList.add('kd-modal__contant')
    this.btnCloseTop.classList.add('kd-modal__btn-close_top')
    this.btnCloseBottom.classList.add('kd-modal__btn-close_bottom')

    this.btnCloseTop.innerHTML = iconBtnClose
    this.btnCloseBottom.textContent = 'Отмена'

    this.btnCloseTop.addEventListener('click', () => {
      this.modal.classList.remove('is-open')
      this.modal.classList.add('is-close')
      this.container.classList.remove('is-open')
      this.container.classList.add('is-close')
      this.modal.addEventListener('animationend', () => {
        this.modal.remove()
        this.body.classList.remove('over-hidden')
      })
    })
    this.btnCloseBottom.addEventListener('click', () => {
      this.modal.classList.remove('is-open')
      this.modal.classList.add('is-close')
      this.container.classList.remove('is-open')
      this.container.classList.add('is-close')
      this.modal.addEventListener('animationend', () => {
        this.modal.remove()
        this.body.classList.remove('over-hidden')
      })
    })
    this.container.addEventListener('click', event => {
      event._clickOnModal = true
      console.log('event._clickOnModal :>> ', event._clickOnModal);
    })
    this.modal.addEventListener('click', event => {
      if (!event._clickOnModal) {
        console.log('overlay');
          this.modal.classList.remove('is-open')
          this.modal.classList.add('is-close')
          this.container.classList.remove('is-open')
          this.container.classList.add('is-close')
          this.modal.addEventListener('animationend', () => {
            this.modal.remove()
            this.body.classList.remove('over-hidden')
          })
      }
    })


    this.container.append(this.btnCloseTop, this.contant, this.btnCloseBottom)
    this.modal.append(this.container)
    this.body.append(this.modal)
  }

  contant() {
    return this.contant
  }
}

export function createModalWindow(contant) {
  const body = document.querySelector('body');
  body.classList.add('over-hidden');
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

  if (container) {
    container.append(btnClose, contant);
  }
  overlay.append(container);
  body.append(overlay);
}

export function removeModalWindow(modalId, containerId) {
  const body = document.querySelector('body');
  const modalWindow = document.getElementById(`${modalId}`);
  const container = document.getElementById(`${containerId}`);

  if (modalWindow) {
  modalWindow.classList.remove('modal-window_opening');
  modalWindow.classList.add('modal-window_closing');
  container.classList.remove('modal-window__container_opening');
  container.classList.add('modal-window__container_closing');

  modalWindow.addEventListener('animationend', () => {
      body.classList.remove('over-hidden');
      modalWindow.remove();
    })
  }
}
