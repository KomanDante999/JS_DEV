import { inputFormData } from '../main.js';  // данные формы ввода


export function createInputForm() {
  const form = document.createElement('form');
  form.id = 'modal-input-form';
  form.name = 'modal-input-form';
  form.noValidate = true;
  // row
  const row = document.createElement('div');
  row.classList.add('row', 'g-3', 'mb-3')
  // фамилия
  const inputSurnameWrap = document.createElement('div');
  inputSurnameWrap.classList.add('col-10');
  const inputSurnameGroup = document.createElement('div');
  inputSurnameGroup.classList.add('input-group', 'has-validation');
  const inputSurnameCaption = document.createElement('span');
  inputSurnameCaption.classList.add('input-group-text');
  inputSurnameCaption.textContent = 'Фамилия';
  const inputSurname = document.createElement('input');
  inputSurname.classList.add('form-control', 'js-input');
  inputSurname.id = 'input-surname';
  inputSurname.type = 'text';
  inputSurname.placeholder = 'Фамилия';
  inputSurname.ariaLabel = 'введите вашу фамилию';
  const inputSurnameFeedback = document.createElement('div');
  inputSurnameFeedback.classList.add('js-feedback');
  inputSurnameFeedback.id = 'input-surname-feedback';
  inputSurnameGroup.append(
    inputSurnameCaption,
    inputSurname,
    inputSurnameFeedback,
    );
    inputSurnameWrap.append(inputSurnameGroup);
    // имя
    const inputNameWrap = document.createElement('div');
    inputNameWrap.classList.add('col-10');
    const inputNameGroup = document.createElement('div');
    inputNameGroup.classList.add('input-group', 'has-validation');
    const inputNameCaption = document.createElement('span');
    inputNameCaption.classList.add('input-group-text');
    inputNameCaption.textContent = 'Имя';
    const inputName = document.createElement('input');
    inputName.classList.add('form-control', 'js-input');
    inputName.id = 'input-name';
    inputName.type = 'text';
    inputName.placeholder = 'Имя';
    inputName.ariaLabel = 'введите ваше имя';
    const inputNameFeedback = document.createElement('div');
    inputNameFeedback.classList.add('js-feedback');
    inputNameFeedback.id = 'input-name-feedback';
    inputNameGroup.append(
      inputNameCaption,
      inputName,
      inputNameFeedback,
      );
      inputNameWrap.append(inputNameGroup);
      // отчество
      const inputMiddleNameWrap = document.createElement('div');
      inputMiddleNameWrap.classList.add('col-10');
      const inputMiddleNameGroup = document.createElement('div');
      inputMiddleNameGroup.classList.add('input-group', 'has-validation');
      const inputMiddleNameCaption = document.createElement('span');
      inputMiddleNameCaption.classList.add('input-group-text');
      inputMiddleNameCaption.textContent = 'Отчество';
      const inputMiddleName = document.createElement('input');
      inputMiddleName.classList.add('form-control', 'js-input');
      inputMiddleName.id = 'input-middlename';
      inputMiddleName.type = 'text';
      inputMiddleName.placeholder = 'Отчество';
      inputMiddleName.ariaLabel = 'введите ваше отчество';
      const inputMiddleNameFeedback = document.createElement('div');
      inputMiddleNameFeedback.classList.add('js-feedback');
      inputMiddleNameFeedback.id = 'input-middlename-feedback';
      inputMiddleNameGroup.append(
        inputMiddleNameCaption,
        inputMiddleName,
        inputMiddleNameFeedback,
        );
        inputMiddleNameWrap.append(inputMiddleNameGroup);

  // дата рождения
  const wrapBirthDate = document.createElement('div');
  wrapBirthDate.classList.add('col-5');
  const containerBirthDate = document.createElement('div');
  containerBirthDate.classList.add('input-group');
  const captionBirthDate = document.createElement('span');
  captionBirthDate.classList.add('input-group-text');
  captionBirthDate.textContent = 'дата роджения';
  const inputBirthDate = document.createElement('input');
  inputBirthDate.classList.add('form-control', 'js-input');
  inputBirthDate.id = 'input-birthdate';
  inputBirthDate.type = 'date';
  inputBirthDate.ariaLabel = 'введите вашу дату рождения';
  const inputBirthDateFeedback = document.createElement('div');
  inputBirthDateFeedback.classList.add('js-feedback');
  inputBirthDateFeedback.id = 'input-birthdate-feedback';
  containerBirthDate.append(
    captionBirthDate,
    inputBirthDate,
    inputBirthDateFeedback,
    );
  wrapBirthDate.append(containerBirthDate)

  // год поступления
  const wrapYearAdmission = document.createElement('div');
  wrapYearAdmission.classList.add('col-5');
  const containerYearAdmission = document.createElement('div');
  containerYearAdmission.classList.add('input-group');
  const captionYearAdmission = document.createElement('span');
  captionYearAdmission.classList.add('input-group-text');
  captionYearAdmission.textContent = 'год поступления';
  const inputYearAdmission = document.createElement('input');
  inputYearAdmission.classList.add('form-control', 'js-input');
  inputYearAdmission.id = 'input-admission';
  inputYearAdmission.type = 'number';
  inputYearAdmission.ariaLabel = 'введите год поступления';
  const inputYearAdmissionFeedback = document.createElement('div');
  inputYearAdmissionFeedback.classList.add('js-feedback');
  inputYearAdmissionFeedback.id = 'input-admission-feedback';
  containerYearAdmission.append(
    captionYearAdmission,
    inputYearAdmission,
    inputYearAdmissionFeedback,
    )
  wrapYearAdmission.append(containerYearAdmission)

  // факультет
  const wrapFaculty = document.createElement('div');
  wrapFaculty.classList.add('col-7');
  const containerFaculty = document.createElement('div');
  containerFaculty.classList.add('input-group');
  const captionFaculty = document.createElement('span');
  captionFaculty.classList.add('input-group-text');
  captionFaculty.textContent = 'факультет';
  const inputFaculty = document.createElement('input');
  inputFaculty.classList.add('form-control', 'js-input');
  inputFaculty.id = 'input-Faculty';
  inputFaculty.type = 'text';
  inputFaculty.placeholder = 'факультет';
  const inputFacultyFeedback = document.createElement('div');
  inputFacultyFeedback.classList.add('js-feedback');
  inputFacultyFeedback.id = 'input-Faculty-feedback';
  containerFaculty.append(
    captionFaculty,
    inputFaculty,
    inputFacultyFeedback,
    );
  wrapFaculty.append(containerFaculty);
  // submit
  const wrapBtnSubmit = document.createElement('div');
  wrapBtnSubmit.classList.add('d-flex', 'justify-content-end');
  const btnSubmit = document.createElement('button');
  btnSubmit.classList.add('btn', 'btn-success');
  btnSubmit.textContent = 'Добавить студента';
  btnSubmit.type = 'submit';
  wrapBtnSubmit.append(btnSubmit);

  row.append(
    inputSurnameWrap,
    inputNameWrap,
    inputMiddleNameWrap,
    wrapBirthDate,
    wrapYearAdmission,
    wrapFaculty)
  form.append(row, wrapBtnSubmit);
  return {
    form,
    inputSurname,
    inputSurnameFeedback,
    inputName,
    inputNameFeedback,
    inputMiddleName,
    inputMiddleNameFeedback,
    inputBirthDate,
    inputBirthDateFeedback,
    inputYearAdmission,
    inputYearAdmissionFeedback,
    inputFaculty,
    inputFacultyFeedback,
    btnSubmit,
  };
}

export function invalidInputTheme(inputNode, feedbackNode, feedbackText) {
  inputNode.classList.remove('is-valid');
  inputNode.classList.add('is-invalid');
  feedbackNode.classList.remove('valid-feedback');
  feedbackNode.classList.add('invalid-feedback');
  feedbackNode.textContent = feedbackText;
  }
export function validInputTheme(inputNode, feedbackNode, feedbackText) {
  inputNode.classList.remove('is-invalid');
  inputNode.classList.add('is-valid');
  feedbackNode.classList.remove('invalid-feedback');
  feedbackNode.classList.add('valid-feedback');
  feedbackNode.textContent = feedbackText;
  }
export function cleanInputForm() {
  document.querySelectorAll('.js-input').forEach(element => {
    element.classList.remove('is-invalid', 'is-valid')
    element.value = '';
  });
  document.querySelectorAll('.js-feedback').forEach(element => {
    element.classList.remove('valid-feedback', 'invalid-feedback')
    element.textContent = '';
  });
  }




