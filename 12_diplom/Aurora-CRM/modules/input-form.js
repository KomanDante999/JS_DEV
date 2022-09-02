import { iconLoadSmall, iconAddContact, iconAddContactActive } from "./icons.js";

export let dataInputForm = [
  {
    inputName: 'surname',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Фамилия',
    feedbackText: '',
  },
  {
    inputName: 'name',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Имя',
    feedbackText: '',
  },
  {
    inputName: 'middleName',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Отчество',
    feedbackText: '',
  },
]

export function createInputForm(dataForm, typeForm) {
  const form = document.createElement('form');
  form.id = 'input-form';
  form.classList.add('input-form');

  // header
  const header = document.createElement('div');
  header.classList.add('input-form__header', 'input-form__container');
  const title = document.createElement('h3');
  title.classList.add('input-form__title');

  switch (typeForm) {
    case 'add':
      title.textContent = 'Новый клиент';
      break;
    case 'change':
      title.textContent = 'Изменить данные';
      const idClient = document.createElement('span');
      idClient.classList.add('input-form__id-client');
      idClient.textContent = `ID: `;
      header.classList.add('input-form__header_add')
      header.append(idClient);
      break;
      case 'remove':
        title.textContent = 'Удалить клиента';
        // header.classList.add('input-form__header_remove')
      break;
  }
  header.prepend(title);

  // main
  const main = document.createElement('div');
  main.classList.add('input-form__main')

  if (typeForm !== 'remove') {
    const sectionFullName = document.createElement('div');
    sectionFullName.classList.add('input-form__section', 'input-form__section_full-name' , 'input-form__container')
    for (const objInput of dataForm) {
      if (objInput.inputType === 'text') {
        const input = document.createElement('input');
        input.name = `${objInput.inputName}`;
        input.value = objInput.inputValue;
        input.placeholder = `${objInput.inputPlaceholder}`;
        input.classList.add('input-form__input', 'input-form__input_text');

        sectionFullName.append(input);
      }
    }
    const sectionContacts = document.createElement('div');
    sectionContacts.classList.add('input-form__section', 'input-form__section_contacts')
    // button add contact
    const btnAddContact = document.createElement('button');
    const iconBtnAdd = document.createElement('span');
    const iconActiveBtnAdd = document.createElement('span');
    const captionBtnAdd = document.createElement('span');
    btnAddContact.type = 'button';
    btnAddContact.classList.add('input-form__btn-addcontact', 'btn-addcontact');
    iconBtnAdd.classList.add('btn-addcontact__icon');
    iconBtnAdd.innerHTML = iconAddContact;
    iconActiveBtnAdd.classList.add('btn-addcontact__icon_active');
    iconActiveBtnAdd.innerHTML = iconAddContactActive;
    captionBtnAdd.textContent = 'Добавить контакт';
    captionBtnAdd.classList.add('btn-addcontact__caption');

    iconBtnAdd.append(iconActiveBtnAdd);
    btnAddContact.append(iconBtnAdd, captionBtnAdd);

    sectionContacts.append(btnAddContact);

    if (typeForm === 'change') {
      createInputContact(dataForm, sectionContacts)
    }

    main.append(sectionFullName, sectionContacts)
  }

if (typeForm === 'remove') {
  const messange = document.createElement('span');
  messange.classList.add('input-form__messange');
  messange.textContent = 'Вы действительно хотите удалить данного клиента?';
  main.append(messange);
}

  // footer
  const footer = document.createElement('div');
  footer.classList.add('input-form__footer', 'input-form__container', 'input-form__section');
  const btnSave = document.createElement('button');
  const iconBtnSave = document.createElement('span');
  const captionBtnSave = document.createElement('span');
  btnSave.type = 'submit';
  btnSave.classList.add('input-form__btn-save', 'btn', 'btn-primary', 'btn-save')
  iconBtnSave.innerHTML = iconLoadSmall;
  iconBtnSave.classList.add('btn-save__icon')
  captionBtnSave.textContent = 'Сохранить';

  btnSave.append(iconBtnSave, captionBtnSave);
  const btnRemoveClient = document.createElement('button');

  btnRemoveClient.classList.add('input-form__btn-remove');
  btnRemoveClient.type = 'button'
  if (typeForm === 'add' || typeForm === 'remove') {
    btnRemoveClient.textContent = 'Отмена'
  }
  if (typeForm === 'change') {
    btnRemoveClient.textContent = 'Удалить клиента'
  }
  footer.append(btnSave, btnRemoveClient)

  form.append(header, main, footer);
  return {form, btnSave, btnRemoveClient};
}

function createInputContact(dataForm, containerNode) {
  for (const objInput of dataForm) {
    if (objInput.inputType !== 'text') {
      const input = document.createElement('input');
      input.name = `${objInput.inputName}`;
      input.value = objInput.inputValue;
      input.placeholder = `${objInput.inputPlaceholder}`;
      input.classList.add('input-form__input');


      containerNode.prepend(input);
    }
  }

}
