export function createInputForm() {
  const form = document.createElement('form');
  form.id = 'modal-input-form';
  form.name = 'modal-input-form';
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
  const inputSurnameFiidback = document.createElement('div');
  inputSurnameFiidback.classList.add('js-feedback');
  inputSurnameFiidback.id = 'input-surname-feedback';
  inputSurnameGroup.append(
    inputSurnameCaption,
    inputSurname,
    inputSurnameFiidback,
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
    const inputNameFiidback = document.createElement('div');
    inputNameFiidback.classList.add('js-feedback');
    inputNameFiidback.id = 'input-name-feedback';
    inputNameGroup.append(
      inputNameCaption,
      inputName,
      inputNameFiidback,
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
      const inputMiddleNameFiidback = document.createElement('div');
      inputMiddleNameFiidback.classList.add('js-feedback');
      inputMiddleNameFiidback.id = 'input-middlename-feedback';
      inputMiddleNameGroup.append(
        inputMiddleNameCaption,
        inputMiddleName,
        inputMiddleNameFiidback,
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
  const inputBirthDateFiidback = document.createElement('div');
  inputBirthDateFiidback.classList.add('js-feedback');
  inputBirthDateFiidback.id = 'input-birthdate-feedback';
  containerBirthDate.append(
    captionBirthDate,
    inputBirthDate,
    inputBirthDateFiidback,
    );
  wrapBirthDate.append(containerBirthDate)

  // дата поступления
  const wrapYearAdmission = document.createElement('div');
  wrapYearAdmission.classList.add('col-5');
  const containerYearAdmission = document.createElement('div');
  containerYearAdmission.classList.add('input-group');
  const captionYearAdmission = document.createElement('span');
  captionYearAdmission.classList.add('input-group-text');
  captionYearAdmission.textContent = 'дата поступления';
  const inputYearAdmission = document.createElement('input');
  inputYearAdmission.classList.add('form-control', 'js-input');
  inputYearAdmission.id = 'input-admission';
  inputYearAdmission.type = 'date';
  inputYearAdmission.ariaLabel = 'введите дату поступления';
  const inputYearAdmissionFiidback = document.createElement('div');
  inputYearAdmissionFiidback.classList.add('js-feedback');
  inputYearAdmissionFiidback.id = 'input-admission-feedback';
  containerYearAdmission.append(
    captionYearAdmission,
    inputYearAdmission,
    inputYearAdmissionFiidback,
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
  const inputFacultyFiidback = document.createElement('div');
  inputFacultyFiidback.classList.add('js-feedback');
  inputFacultyFiidback.id = 'input-Faculty-feedback';
  containerFaculty.append(
    captionFaculty,
    inputFaculty,
    inputFacultyFiidback,
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
    inputSurnameFiidback,
    inputName,
    inputNameFiidback,
    inputMiddleName,
    inputMiddleNameFiidback,
    inputBirthDate,
    inputBirthDateFiidback,
    inputYearAdmission,
    inputYearAdmissionFiidback,
    inputFaculty,
    inputFacultyFiidback,
    btnSubmit,
  };
}

// export function invalidInputTheme(idInput, feedbackText) {
//   const input = document.getElementById(idInput);
//   input.classList.add('is-invalid');

//   inputSurnameFiidback.classList.add('invalid-feedback');
//   inputSurnameFiidback.textContent = validName(modalInputForm.inputSurname.value).feedback;


// }

