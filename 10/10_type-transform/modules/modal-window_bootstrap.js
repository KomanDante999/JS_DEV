  // шаблон модального окна (оболочка) bootstrap
  export function createModal(modalID, contentBody) {
    const wrap = document.createElement('div');
    wrap.classList.add('modal', 'fade');
    wrap.id = `${modalID}`;
    wrap.tabIndex = -1;
    wrap.setAttribute('data-bs-backdrop', 'static');
    wrap.setAttribute('data-bs-keyboard', 'false');
    wrap.setAttribute('aria-labelledby', 'staticBackdropLabel');
    wrap.setAttribute('aria-hidden', 'true');

    const dialog = document.createElement('div');
    dialog.classList.add('modal-dialog', 'modal-xl', 'modal-dialog-centered');
    const content = document.createElement('div');
    content.classList.add('modal-content');
    const header = document.createElement('div');
    header.classList.add('modal-header');
    const title = document.createElement('h2');
    title.classList.add('modal-title');
    title.textContent = 'Внесите данные нового студента';
    const btnClose = document.createElement('button');
    btnClose.classList.add("btn-close");
    btnClose.setAttribute('data-bs-dismiss', 'modal');
    btnClose.ariaLabel = "Close";
    const body = document.createElement('div');
    body.classList.add('modal-body');
    const footer = document.createElement('div');
    footer.classList.add('modal-footer');
    const btnCheck = document.createElement('button');
    btnCheck.classList.add('btn', 'btn-primary');
    btnCheck.textContent = 'Проверить данные';
    const btnApply = document.createElement('button');
    btnApply.classList.add('btn', 'btn-success');
    btnApply.setAttribute('data-bs-dismiss', 'modal');
    btnApply.textContent = 'Добавить студента';

    header.append(title, btnClose);
    body.append(contentBody);
    footer.append( btnCheck,btnApply);
    content.append(header, body, footer);
    dialog.append(content);
    wrap.append(dialog);
    return {wrap, content, title, btnApply, btnCheck};
  }
