import { iconAddContact, iconLoadSmall } from "./icons.js";

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
  header.classList.add('input-form__header');
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
        const messange = document.createElement('span');
        messange.classList.add('input-form__messange');
        messange.textContent = 'Вы действительно хотите удалить данного клиента?';
        header.classList.add('input-form__header_remove')
        header.append(messange);
      break;
  }
  header.prepend(title);

  // main
  if (typeForm !== 'remove') {
    const main = document.createElement('div');
    main.classList.add('input-form__main')

    const sectionFullName = document.createElement('div');
    sectionFullName.classList.add('input-form__section', 'input-form__section_full-name')
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
    const captionBtnAdd = document.createElement('span');
    iconBtnAdd.innerHTML = iconAddContact;
    captionBtnAdd.textContent = 'Добавить контакт';
    btnAddContact.classList.add('input-form__btn-addcontact');
    btnAddContact.append(iconBtnAdd, captionBtnAdd);
    sectionContacts.append(btnAddContact);

    for (const objInput of dataForm) {
      if (objInput.inputType !== 'text') {
        const input = document.createElement('input');
        input.name = `${objInput.inputName}`;
        input.value = objInput.inputValue;
        input.placeholder = `${objInput.inputPlaceholder}`;
        input.classList.add('input-form__input');


        sectionContacts.prepend(input);
      }
    }
    main.append(sectionFullName, sectionContacts)
    form.append(main)
  }

  // footer
  const footer = document.createElement('div');
  footer.classList.add('input-form__footer');
  const btnSave = document.createElement('button');
  const iconBtnSave = document.createComment('span');
  const captionBtnSave = document.createElement('span');
  btnSave.type = 'submit';
  iconBtnSave.innerHTML = iconLoadSmall;
  captionBtnSave.textContent = 'Сохранить'

  btnSave.append(iconBtnSave, captionBtnSave)
  footer.append(btnSave, )

  form.append(header, inputCroupFullName, inputCroupContacts);
  return form;
}
