import { iconLoadSmall, iconAddContact, iconAddContactActive, iconBtnRemoveContact } from "./icons.js";
import { validInputForm } from "./valid_input-form.js";

export function newDataInputForm() {

  let dataInputForm = [];
  dataInputForm = [
    {
      inputIndex: 0,
      inputGroup: 'mine',
      inputName: 'surname',
      inputId: 'input-contact-0',
      inputValue: '',
      inputValid: 0,
      inputType: 'text',
      inputPlaceholder: 'Фамилия',
      feedbackName: 'Фамилия',
      feedbackText: '',
    },
    {
      inputIndex: 1,
      inputGroup: 'mine',
      inputName: 'name',
      inputId: 'input-contact-1',
      inputValue: '',
      inputValid: 0,
      inputType: 'text',
      inputPlaceholder: 'Имя',
      feedbackName: 'Имя',
      feedbackText: '',
    },
    {
      inputIndex: 2,
      inputGroup: 'mine',
      inputName: 'middleName',
      inputId: 'input-contact-2',
      inputValue: '',
      inputValid: 0,
      inputType: 'text',
      inputPlaceholder: 'Отчество',
      feedbackName: 'Отчество',
      feedbackText: '',
    },
  ]

  return dataInputForm;
}

// header
function createHeaderForm(typeForm, idClientChanger) {
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
      idClient.textContent = `ID: ${idClientChanger}`;
      header.classList.add('input-form__header_add')
      header.append(idClient);
      break;
      case 'remove':
        title.textContent = 'Удалить клиента';
        // header.classList.add('input-form__header_remove')
      break;
  }
  header.prepend(title);

  return header;
}
 // main
function createMainForm(dataForm, typeForm) {
  const main = document.createElement('div');
  main.classList.add('input-form__main')

  if (typeForm !== 'remove') {
    const sectionFullName = document.createElement('div');
    sectionFullName.classList.add('input-form__section', 'input-form__section_full-name' , 'input-form__container')
    for (const objInput of dataForm) {
      // input
      if (objInput.inputGroup === 'mine') {
        const input = document.createElement('input');
        input.id = objInput.inputId;
        input.name = `${objInput.inputName}`;
        input.value = objInput.inputValue;
        input.placeholder = `${objInput.inputPlaceholder}`;
        // input.formNoValidate = 'true';
        input.classList.add('input-form__input', 'js-modal-input', 'input-form__input_text');
        // validation class
        toggleValidClass(objInput.inputValid, input, input);


        sectionFullName.append(input);
      }
    }
    const sectionContacts = document.createElement('div');
    sectionContacts.classList.add('input-form__section', 'input-form__section_contacts');
    const containerSelect = document.createElement('div');
    containerSelect.classList.add('input-form__container-select');
    containerSelect.id = 'form-container-select'
    // button add contact
    const btnAddContact = document.createElement('button');
    const iconBtnAdd = document.createElement('span');
    const iconActiveBtnAdd = document.createElement('span');
    const captionBtnAdd = document.createElement('span');
    btnAddContact.type = 'button';
    btnAddContact.id = 'btn-add-contact'
    btnAddContact.classList.add('input-form__btn-addcontact', 'btn-addcontact');
    iconBtnAdd.classList.add('btn-addcontact__icon');
    iconBtnAdd.innerHTML = iconAddContact;
    iconActiveBtnAdd.classList.add('btn-addcontact__icon_active');
    iconActiveBtnAdd.innerHTML = iconAddContactActive;
    captionBtnAdd.textContent = 'Добавить контакт';
    captionBtnAdd.classList.add('btn-addcontact__caption');

    // add select
    createInputContact(dataForm, containerSelect);
    if (containerSelect.childNodes.length > 0) {
      sectionContacts.classList.add('is-contains');
    }
    else {
      sectionContacts.classList.remove('is-contains');
    }


    // button add contact event
    btnAddContact.addEventListener('click', () => {
      newDataInputContact(dataForm);
      createInputContact(dataForm, containerSelect);
      if (containerSelect.childNodes.length > 0) {
        sectionContacts.classList.add('is-contains');
      }
      else {
        sectionContacts.classList.remove('is-contains');
      }

    })


    iconBtnAdd.append(iconActiveBtnAdd);
    btnAddContact.append(iconBtnAdd, captionBtnAdd);
    sectionContacts.append(containerSelect, btnAddContact);


    main.append(sectionFullName, sectionContacts);
  }

  if (typeForm === 'remove') {
  const messange = document.createElement('span');
  messange.classList.add('input-form__messange');
  messange.textContent = 'Вы действительно хотите удалить данного клиента?';
  main.append(messange);
  }

  return main;
}

// contact
function newDataInputContact(dataForm) {
  let index = 0;
  for (const objinput of dataForm) {
    if (objinput.inputIndex >= index) {
      index = objinput.inputIndex + 1;
    }
  }
  dataForm.push(
    {
      inputIndex: index,
      inputGroup: 'addition',
      inputId: `input-contact-${index}`,
      inputName: 'tel',
      inputValue: '',
      inputValid: 0,
      inputType: 'tel',
      inputPlaceholder: 'Введите данные контакта',
      feedbackName: 'Телефон',
      feedbackText: '',
      select: [
        {
          optionName: 'Телефон',
          optionValue: 'tel',
          optionSelected: true,
          type: 'tel',
        },
        {
          optionName: 'Доп. телефон',
          optionValue: 'telExtens',
          optionSelected: false,
          type: 'tel',
        },
        {
          optionName: 'Email',
          optionValue: 'email',
          optionSelected: false,
          type: 'email',
        },
        {
          optionName: 'Vk',
          optionValue: 'vk',
          optionSelected: false,
          type: 'url',
        },
        {
          optionName: 'Facebook',
          optionValue: 'facebook',
          optionSelected: false,
          type: 'url',
        },
      ],
    }
  )
  return dataForm;
}

function createInputContact(dataForm, targetNode) {
  // remove old input group
  const inputGroupOld = document.querySelectorAll('.js-input-group-addition');
  if (inputGroupOld.length > 0) {
    for (const group of inputGroupOld) {
      group.remove()
    }
  }
  // create input group
  for (const objInput of dataForm) {
    if (objInput.inputGroup === 'addition') {
      const inputGroup = document.createElement('div');
      inputGroup.classList.add('input-form__input-contact', 'input-contact', 'js-input-group-addition');
      // select
      const select = document.createElement('select');
      select.id = `js-choices-${objInput.inputIndex}`;
      select.classList.add(`js-select-${objInput.inputIndex}`, 'js-contact-select', 'input-contact__select');
      for (const objOption of objInput.select) {
        const option = document.createElement('option');
        option.value = objOption.optionValue;
        option.textContent = objOption.optionName;
        if (objOption.optionSelected) {
          option.selected = 'selected'
        }
        select.append(option);
      }
      // input
      const input = document.createElement('input');
      input.classList.add('input-contact__input', 'js-modal-input');
      input.id = objInput.inputId;
      input.name = objInput.inputName;
      input.type = `${objInput.inputType}`;
      input.value = `${objInput.inputValue}`;
      input.placeholder = `${objInput.inputPlaceholder}`;
      // input.formNoValidate = 'true';

      // validation class
      toggleValidClass(objInput.inputValid, inputGroup, input);

      // button remove
      const btnRemove = document.createElement('button');
      btnRemove.classList.add('input-contact__btn-remove');
      const iconRemove = document.createElement('span');
      iconRemove.innerHTML = iconBtnRemoveContact;

      // event select
      select.addEventListener('change', () => {
        for (const objOption of objInput.select) {
          objOption.optionSelected = false;
          if (objOption.optionValue === select.value) {
            objOption.optionValue = select.value;
            objOption.optionSelected = true;
            objInput.inputType = objOption.type;
            objInput.inputName = objOption.optionName;
            objInput.feedbackName = objOption.optionName;
            objInput.inputValue = '';
          }
        }
        const containerSelect = document.getElementById('form-container-select');
        createInputContact(dataForm, containerSelect)
      })


      btnRemove.append(iconRemove);
      inputGroup.append(select, input, btnRemove);
      targetNode.append(inputGroup);

      new Choices(select, {
        shouldSort: false,
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        allowHTML: true,
        classNames: {
          containerOuter: 'choices-select',
          containerInner: 'choices-select__inner',
          input: 'choices-select__input',
          inputCloned: 'choices-select__input--cloned',
          list: 'choices-select__list',
          listItems: 'choices-select__list--multiple',
          listSingle: 'choices-select__list--single',
          listDropdown: 'choices-select__list--dropdown',
          item: 'choices-select__item',
          itemSelectable: 'choices-select__item--selectable',
          itemDisabled: 'choices-select__item--disabled',
          itemChoice: 'choices-select__item--choice',
          placeholder: 'choices-select__placeholder',
          group: 'choices-select__group',
          groupHeading: 'choices-select__heading',
          button: 'choices-select__button',
          activeState: 'is-active',
          focusState: 'is-focused',
          openState: 'is-open',
          disabledState: 'is-disabled',
          highlightedState: 'is-highlighted',
          selectedState: 'is-selected',
          flippedState: 'is-flipped',
          loadingState: 'is-loading',
          noResults: 'has-no-results',
          noChoices: 'has-no-choices'
        },
      });
    }
  }
}

// footer
function createFooterForm(typeForm) {
  const footer = document.createElement('div');
  footer.classList.add('input-form__footer', 'input-form__container', 'input-form__section');
  const btnSave = document.createElement('button');
  const iconBtnSave = document.createElement('span');
  const captionBtnSave = document.createElement('span');
  btnSave.type = 'submit';
  btnSave.classList.add('input-form__btn-save', 'btn', 'btn-primary', 'btn-save')
  iconBtnSave.innerHTML = iconLoadSmall;
  iconBtnSave.classList.add('btn-save__icon', 'visually-hidden')
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

  return {footer, btnSave, btnRemoveClient};
}


// form
export function createInputForm(dataForm, typeForm) {
  const form = document.createElement('form');
  form.id = `modal-input-form-${typeForm}`;
  form.classList.add('input-form');
  form.noValidate = 'true'

  const header = createHeaderForm(typeForm);
  const main = createMainForm(dataForm, typeForm);
  const footer = createFooterForm(typeForm);
  const btnSave = footer.btnSave;
  const btnRemoveClient = footer.btnRemoveClient //change in relation to type form ("remove clitnt"/"cancellation")

  // event form
  // submit input form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateDataInputForm(dataForm);
    validInputForm(dataForm);

    // validation successfully
    if (dataForm.every(objData => objData.inputValid === 1)) {
      // добавление новой записи в таблицу
      // очиска данных формы ввода
      // отрисовка таблицы
    }

    // validation unsuccessful
    else {
      console.log('проверочка', dataForm);
      updateInputForm(dataForm, 'add', 'modal-input-form-add', 'modal-window-container')
    }
  })


  form.append(header, main, footer.footer);
  return {form, btnSave, btnRemoveClient};
}

export function updateDataInputForm(dataForm) {
  const inputs = document.querySelectorAll('.js-modal-input');
  for (const input of inputs) {
    for (const objInput of dataForm) {
      if (input.id === objInput.inputId) {
        objInput.inputValue = input.value;
        objInput.inputType = input.type;
        objInput.inputName = input.name;
      }
    }
  }
  console.log('dataForm', dataForm);
  return dataForm;
}

// update input form
export function updateInputForm(dataForm, typeForm, idForm, idContainer) {
  const oldForm = document.getElementById(`${idForm}`);
  oldForm.remove();
  const container = document.getElementById(`${idContainer}`);
  const newForm = createInputForm(dataForm, typeForm);
  container.append(newForm.form);
}


//service function =========================

// validation class
function toggleValidClass(paramValid, targetNode, input) {
  switch (paramValid) {
    case -1:
      if (!targetNode.classList.contains('invalid')) {
        targetNode.classList.add('invalid');
      }
    break;
    case 1:
      if (targetNode.classList.contains('invalid')) {
        targetNode.classList.remove('invalid');
      }
    break;

    default:
      if (targetNode.classList.contains('invalid')) {
        targetNode.classList.remove('invalid');
      }
    break;
  }
  // remove imvalid class when entering
  input.addEventListener('input', () => {
    if (targetNode.classList.contains('invalid')) {
      targetNode.classList.remove('invalid');
    }
  })

}

