import { processingSubmitByFormInput } from '../main.js';
import { formatDateYYYYMMDD } from './servise-function.js';

export let inputFormData = [
  {
    wrapClass: 'col-10',
    inputName: 'surname',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Фамилия',
    captionText: 'Фамилия',
    feedbackText: '',

  },
  {
    wrapClass: 'col-10',
    inputName: 'name',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Имя',
    captionText: 'Имя',
    feedbackText: '',

  },
  {
    wrapClass: 'col-10',
    inputName: 'middleName',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Отчество',
    captionText: 'Отчество',
    feedbackText: '',

  },
  {
    wrapClass: 'col-5',
    inputName: 'birthDate',
    inputValue: '',
    inputValid: 0,
    inputType: 'date',
    inputPlaceholder: 'дата роджения',
    captionText: 'дата роджения',
    feedbackText: '',

  },
  {
    wrapClass: 'col-5',
    inputName: 'yearAdmission',
    inputValue: '',
    inputValid: 0,
    inputType: 'number',
    inputPlaceholder: 'год поступления',
    captionText: 'год поступления',
    feedbackText: '',

  },
  {
    wrapClass: 'col-7',
    inputName: 'faculty',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'факультет',
    captionText: 'факультет',
    feedbackText: '',

  },
]

export function cleanInputFormData(inputFormData) {
  inputFormData.forEach(objData => {
    objData.inputValue = '';
    objData.inputValid = 0;
    objData.feedbackText = '';
  });
  return inputFormData;
}

// input field
function createInputField() {
  const wrap = document.createElement('div');
  const group = document.createElement('div');
  group.classList.add('input-group', 'has-validation');
  const caption = document.createElement('span');
  caption.classList.add('input-group-text');
  const input = document.createElement('input');
  input.classList.add('form-control', 'js-input');
  const feedback = document.createElement('div');
  feedback.classList.add('js-feedback');
  group.append(
    caption,
    input,
    feedback,
    );
    wrap.append(group);
    return {
      caption,
      input,
      feedback,
      wrap,
    }
}

function validTheme(validityData, input, feedback) {
  switch (validityData.inputValid) {
    case -1:
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      feedback.classList.remove('valid-feedback');
      feedback.classList.add('invalid-feedback');
      feedback.textContent = validityData.feedbackText;
      break;
    case 1:
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      feedback.classList.remove('invalid-feedback');
      feedback.classList.add('valid-feedback');
      feedback.textContent = validityData.feedbackText;
      break;
    case 0:
      input.classList.remove('is-invalid', 'is-valid')
      feedback.classList.remove('valid-feedback', 'invalid-feedback')
      feedback.textContent = validityData.feedbackText;
    break;
  }
}

// форма ввола данных студентов
export function createInputForm(inputFormData) {
  const form = document.createElement('form');
  form.id = 'modal-input-form';
  form.name = 'modal-input-form';
  form.noValidate = true;
  // row
  const row = document.createElement('div');
  row.classList.add('row', 'g-3', 'mb-3')
  // поля
  for (const objInput of inputFormData) {
    const inputField = createInputField();
    inputField.wrap.classList.add(`${objInput.wrapClass}`);
    inputField.caption.textContent = `${objInput.captionText}`;
    inputField.input.type = `${objInput.inputType}`;
    inputField.input.name = `${objInput.inputName}`;
    switch (objInput.inputName) {
      case 'birthDate':
        inputField.input.value = formatDateYYYYMMDD(objInput.inputValue);
        break;

      default:
        inputField.input.value = objInput.inputValue;
        break;
    }
    inputField.input.placeholder = `${objInput.inputPlaceholder}`;
    inputField.input.ariaLabel = `${objInput.inputPlaceholder}`;
    validTheme(objInput, inputField.input, inputField.feedback);
    row.append(inputField.wrap);
  }

  // submit
  const wrapBtnSubmit = document.createElement('div');
  wrapBtnSubmit.classList.add('d-flex', 'justify-content-end');
  const btnSubmit = document.createElement('button');
  btnSubmit.classList.add('btn', 'btn-success');
  btnSubmit.textContent = 'Добавить студента';
  btnSubmit.type = 'submit';
  wrapBtnSubmit.append(btnSubmit);

  form.append(row, wrapBtnSubmit);
  return {
    form,
    btnSubmit,
  };
}

// опрос формы ввода
export function updateInputFormData(inputFormData) {
  const inputs = document.querySelectorAll('.js-input');
  for (const input of inputs) {
    let i = inputFormData.findIndex(data => data.inputName === input.name);
    switch (input.type) {
      case 'date':
        inputFormData[i].inputValue = input.valueAsDate;
        break;
      case 'number':
        inputFormData[i].inputValue = input.valueAsNumber;
        break;
      case 'text':
        inputFormData[i].inputValue = input.value;
        break;

        default:
        inputFormData[i].inputValue = input.value;
        break;
    }
  }
  return inputFormData;
}

// отрисовка формы ввода
export function renderingInputForm(inputFormData, idInputForm, idContainer) {
  // удаление старой формы ввода
  const oldInputForm = document.getElementById(idInputForm);
  const container = document.getElementById(idContainer);
  if (oldInputForm) {
    container.removeChild(oldInputForm);
  }
  // создание формы ввода
  const modalInputForm = createInputForm(inputFormData);
  modalInputForm.form.addEventListener('submit', (e) => {
    e.preventDefault();
    processingSubmitByFormInput();
  })
  container.append(modalInputForm.form);
}

// добавление новой записи из формы ввода в таблицу
export function addNewEntry(inputFormData, arrayStudentsInit) {
  const newEntry = {};
  for (const objData of inputFormData) {
    newEntry[objData.inputName] = objData.inputValue
  }
  arrayStudentsInit.push(newEntry);
  return arrayStudentsInit;
}


