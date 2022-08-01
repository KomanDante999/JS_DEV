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
    const btnCloseX = document.createElement('button');
    btnCloseX.classList.add("btn-close");
    btnCloseX.setAttribute('data-bs-dismiss', 'modal');
    btnCloseX.ariaLabel = "Close";
    const body = document.createElement('div');
    body.classList.add('modal-body');
    const footer = document.createElement('div');
    footer.classList.add('modal-footer');
    const btnClose = document.createElement('button');
    btnClose.classList.add('btn', 'btn-outline-primary');
    btnClose.setAttribute('data-bs-dismiss', 'modal');
    btnClose.textContent = 'Закрыть форму';

    header.append(title, btnCloseX);
    body.append(contentBody);
    footer.append(btnClose);
    content.append(header, body, footer);
    dialog.append(content);
    wrap.append(dialog);
    return {
      wrap,
      content,
      btnCloseX,
      btnClose,
    };
  }


