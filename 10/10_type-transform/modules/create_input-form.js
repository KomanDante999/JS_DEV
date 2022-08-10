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

export function cleaninputFormData(inputFormData) {
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

function validTheme(validityData) {
  switch (validityData) {
    case -1:
      inputField.input.classList.remove('is-valid');
      inputField.input.classList.add('is-invalid');
      inputField.feedback.remove('valid-feedback');
      inputField.feedback.add('invalid-feedback');
      inputField.feedback = validityData.feedbackText;
      break;
    case 1:
      inputField.input.classList.remove('is-invalid');
      inputField.input.classList.add('is-valid');
      inputField.feedback.remove('invalid-feedback');
      inputField.feedback.add('valid-feedback');
      inputField.feedback = validityData.feedbackText;
      break;
    case 0:
      inputField.input.remove('is-invalid', 'is-valid')
      inputField.feedback.remove('valid-feedback', 'invalid-feedback')
      inputField.feedback = validityData.feedbackText;
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
    inputField.input.name = `${objInput.inputName}`;
    inputField.input.value = `${objInput.inputValue}`;
    inputField.input.type = `${objInput.inputType}`;
    inputField.input.placeholder = `${objInput.inputPlaceholder}`;
    inputField.input.ariaLabel = `${objInput.inputPlaceholder}`;
    validTheme(objInput);
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
    inputFormData[i].inputValue = input.value;
  }
  return inputFormData;
}

// замена формы ввода
export function initNewInputForm(inputFormData, idContainer, idForm) {
  const formOld = document.getElementById(idForm);
  const formNew = createInputForm(inputFormData);
  const container = document.getElementById(idContainer);
  if (formOld) {
    container.removeChild(formOld);
  }
  container.append(formNew.form);
}




