import { logoSvg, iconAddClient } from "./icons.js";

export function createHeader() {
  const wrap = document.createElement('div');
  wrap.classList.add('header');
  const container = document.createElement('div');
  container.classList.add('header__container', 'container');

  const logo = document.createElement('div');
  logo.classList.add('header__logo');
  logo.innerHTML = logoSvg;
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('header__search');

  container.append(logo, searchContainer);
  wrap.append(container)
  return {wrap, searchContainer}
}

export function createMain() {
  const wrap = document.createElement('div');
  wrap.classList.add('main');
  const container = document.createElement('div');
  container.classList.add('main__container', 'container');
  const title = document.createElement('h1');
  title.textContent = 'Аврора CRM- автоматизированная система управление взаимоотношениями с клиентами';
  title.classList.add('main__title', 'visually-hidden');
  const subTitle = document.createElement('h2');
  subTitle.textContent = 'Клиенты';
  subTitle.classList.add('main__subtitle');
  const tableContainer = document.createElement('div');
  tableContainer.classList.add('main__table');

  container.append(title, subTitle, tableContainer);
  wrap.append(container);

  return {wrap, tableContainer}
}

export function createFooter() {
  const wrap = document.createElement('div');
  wrap.classList.add('footer');
  const container = document.createElement('div');
  container.classList.add('footer__container', 'container');
  const btn = document.createElement('button');
  btn.classList.add('footer__btn', 'btn-addclient', 'btn-secondary');
  const btnContent = document.createElement('span');
  btnContent.classList.add('btn-addclient__content');
  const btnIcon = document.createElement('span');
  btnIcon.innerHTML = iconAddClient;
  btnIcon.classList.add('btn-addclient__icon');
  const btnCaption = document.createElement('span');
  btnCaption.textContent = 'Добавить клиента';
  btnCaption.classList.add('btn-addclient__caption');

  btnContent.append(btnIcon, btnCaption);
  btn.append(btnContent);
  container.append(btn);
  wrap.append(container);

  return {wrap, btn}
}
