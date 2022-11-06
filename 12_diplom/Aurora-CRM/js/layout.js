import { logoSvg, iconAddClient } from "./icons.js";
import { createModalWindow } from "./modal-window.js";

export let header =
  {
    tag: 'div',
    params: {
      classList: 'header',
    },
  }
export let headerContainer =
  {
    tag: 'div',
    params: {
      classList: ['header__container', 'container'],
    },
    childs: [
      {
        tag: 'div',
        params: {
          classList: 'header__logo',
          innerHTML: logoSvg,
        },
      },
      {
        tag: 'div',
        params: {
          classList: 'header__search',
          id: 'search-container'
        },
      },
    ]
  }

export let main =
  {
    tag: 'div',
    params: {
      classList: 'main',
    },
  }
export let mainContainer =
  {
    tag: 'div',
    params: {
      classList: ['main__container', 'container'],
    },
    childs: [
      {
        tag: 'h1',
        params: {
          classList: ['main__title', 'visually-hidden'],
          textContent: 'Аврора CRM- автоматизированная система управление взаимоотношениями с клиентами'
        },
      },
      {
        tag: 'h2',
        params: {
          classList: 'main__subtitle',
          textContent: 'Клиенты',
        },
      },
      {
        tag: 'div',
        params: {
          classList: 'main__table',
          id: 'table-container',
        },
      },
    ]
  }

export let footer =
{
  tag: 'div',
  params: {
    classList: 'footer',
  },
}
export let footerContainer =
  {
    tag: 'div',
    params: {
      classList: ['footer__container', 'container'],
    },
  }
export let btnAddClient =
  {
    tag: 'button',
    params: {
      classList: ['footer__btn', 'btn-addclient', 'btn', 'btn-secondary'],
    },
    childs: [
      {
        tag: 'span',
        params: {
          classList: 'btn-addclient__icon',
          innerHTML: iconAddClient,
        },
      },
      {
        tag: 'span',
        params: {
          classList: 'btn-addclient__caption',
          textContent: 'Добавить клиента'
        },
      },
    ]
  }


