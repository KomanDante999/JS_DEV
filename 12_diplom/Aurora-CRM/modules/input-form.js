import { iconLoadSmall, iconAddContact, iconAddContactActive, iconBtnRemoveContact } from "./icons.js";
export function newDataInputForm() {

  let dataInputForm = [];
  dataInputForm = [
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
    btnAddContact.addEventListener('click', () => {
      newDataInputContact(dataForm);
      createInputContact(dataForm, containerSelect);
      if (!sectionContacts.classList.contains('is-contains')) {
        sectionContacts.classList.add('is-contains');
      }
    })
    // change select



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
      inputId: `input-contact-${index}`,
      inputName: 'tel',
      inputValue: '',
      inputValid: 0,
      inputType: 'tel',
      inputPlaceholder: 'Введите данные контакта',
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
  for (const objInput of dataForm) {
    if (objInput.inputType !== 'text') {
      // remove old inputGroup
      const inputGroupOld = document.getElementById(`js-contact-${objInput.inputIndex}`)
      if (inputGroupOld) {
        inputGroupOld.remove();
      }
      const inputGroup = document.createElement('div');
      inputGroup.classList.add('input-form__input-contact', 'input-contact');
      inputGroup.id = `js-contact-${objInput.inputIndex}`;
      // select
      const select = document.createElement('select');
      select.id = `js-choices-${objInput.inputIndex}`;
      select.classList.add(`js-select-${objInput.inputIndex}`, 'js-contact-select', 'input-contact__select');
      for (const objOption of objInput.select) {
        const option = document.createElement('option');
        option.value = objOption.optionValue;
        option.textContent = objOption.optionName;
        // option.classList.add('input-contact__option');
        if (objOption.optionSelected) {
          option.selected = 'selected'
        }
        select.append(option);
      }


      // input
      const input = document.createElement('input');
      input.classList.add('input-contact__input');
      input.type = `${objInput.inputType}`;
      input.value = `${objInput.inputValue}`;
      input.placeholder = `${objInput.inputPlaceholder}`;
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



export function createInputForm(dataForm, typeForm) {
  const form = document.createElement('form');
  form.id = 'modal-input-form';
  form.classList.add('input-form');

  const header = createHeaderForm(typeForm);
  const main = createMainForm(dataForm, typeForm);
  const footer = createFooterForm(typeForm);
  const btnSave = footer.btnSave;
  const btnRemoveClient = footer.btnRemoveClient

  form.append(header, main, footer.footer);
  return {form, btnSave, btnRemoveClient};
}




/*<select class="js-choices-gallery">
<option value="painting" selected="selected">Живопись</option>
<option value="drawing">Рисунок</option>
<option value="sculpture">Скульптура</option>
</select>*/

// update input form
export function updateInputForm(dataForm, typeForm, idForm, idContainer) {
  const oldForm = document.getElementById(`${idForm}`);
  console.log('oldForm', oldForm);
  oldForm.remove();
  const container = document.getElementById(`${idContainer}`);
  container.removeChild(oldForm)
  const newForm = createInputForm(dataForm, typeForm);
  container.append(newForm);

}


