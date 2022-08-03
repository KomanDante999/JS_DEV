// кнопка вызова модального окна
export function createBtnAddStudent(modalId) {
  const wrap = document.createElement('div');
  // wrap.classList.add('mb-2')
  const btnRunModal = document.createElement('button');
  btnRunModal.classList.add('btn', 'btn-primary');
  btnRunModal.textContent = 'Добавить нового студента';
  btnRunModal.setAttribute('data-bs-toggle', 'modal');
  btnRunModal.setAttribute('data-bs-target', `#${modalId}`);

  wrap.append(btnRunModal);
  return {wrap, btnRunModal};
}

// панель с фильтрами
export function createFilterForm() {
  const form = document.createElement('form');
  form.id = 'filter-form';
  form.name = 'filter-form';
  form.noValidate = true;
  // row
  const row = document.createElement('div');
  row.classList.add('row', 'g-3', 'mb-3');
  // title
  const title = document.createElement('h2');
  title.classList.add('h2', 'col-10', 'text-center');
  title.textContent = 'Поиск в таблице';
  // ФИО
  const inputFullNameWrap = document.createElement('div');
  inputFullNameWrap.classList.add('col-8');
  const inputFullNameGroup = document.createElement('div');
  inputFullNameGroup.classList.add('input-group', 'has-validation');
  const inputFullNameCaption = document.createElement('span');
  inputFullNameCaption.classList.add('input-group-text');
  inputFullNameCaption.textContent = 'ФИО';
  const inputFullName = document.createElement('input');
  inputFullName.classList.add('form-control', 'js-input');
  inputFullName.id = 'input-fullName';
  inputFullName.type = 'text';
  inputFullName.placeholder = 'поиск по фамилии, имени или отчеству студента';
  inputFullName.ariaLabel = 'поиск по фамилии, имени или отчеству студента';
  const inputFullNameFeedback = document.createElement('div');
  inputFullNameFeedback.classList.add('js-feedback');
  inputFullNameFeedback.id = 'input-fullName-feedback';
  inputFullNameGroup.append(
    inputFullNameCaption,
    inputFullName,
    inputFullNameFeedback,
    );
    inputFullNameWrap.append(inputFullNameGroup);
  // submit
  const wrapBtnSubmit = document.createElement('div');
  wrapBtnSubmit.classList.add('col-2');
  const btnSubmit = document.createElement('button');
  btnSubmit.classList.add('btn', 'btn-success', 'w-100');
  btnSubmit.textContent = 'Найти';
  btnSubmit.type = 'submit';
  wrapBtnSubmit.append(btnSubmit);
  // факультет
  const wrapFaculty = document.createElement('div');
  wrapFaculty.classList.add('col-5');
  const containerFaculty = document.createElement('div');
  containerFaculty.classList.add('input-group');
  const captionFaculty = document.createElement('span');
  captionFaculty.classList.add('input-group-text');
  captionFaculty.textContent = 'факультет';
  const inputFaculty = document.createElement('input');
  inputFaculty.classList.add('form-control', 'js-input');
  inputFaculty.id = 'filter-faculty';
  inputFaculty.type = 'text';
  inputFaculty.placeholder = 'поиск по факульту';
  inputFaculty.ariaLabel = 'поиск по факульту';
  const inputFacultyFeedback = document.createElement('div');
  inputFacultyFeedback.classList.add('js-feedback');
  inputFacultyFeedback.id = 'filter-faculty-feedback';
  containerFaculty.append(
    captionFaculty,
    inputFaculty,
    inputFacultyFeedback,
    );
  wrapFaculty.append(containerFaculty);
  // год рождения
  const wrapBirthYear = document.createElement('div');
  wrapBirthYear.classList.add('col-5');
  const containerBirthYear = document.createElement('div');
  containerBirthYear.classList.add('input-group');
  const captionBirthYear = document.createElement('span');
  captionBirthYear.classList.add('input-group-text');
  captionBirthYear.textContent = 'год роджения';
  const inputBirthYear = document.createElement('input');
  inputBirthYear.classList.add('form-control', 'js-input');
  inputBirthYear.id = 'filter-birthYear';
  inputBirthYear.type = 'number';
  inputBirthYear.placeholder = 'поиск по году рождения';
  inputBirthYear.ariaLabel = 'поиск по году рождения';
  const inputBirthYearFeedback = document.createElement('div');
  inputBirthYearFeedback.classList.add('js-feedback');
  inputBirthYearFeedback.id = 'input-birthYear-feedback';
  containerBirthYear.append(
    captionBirthYear,
    inputBirthYear,
    inputBirthYearFeedback,
    );
  wrapBirthYear.append(containerBirthYear)
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
  inputYearAdmission.id = 'filter-admission';
  inputYearAdmission.type = 'number';
  inputYearAdmission.placeholder = 'поиск по году поступления';
  inputYearAdmission.ariaLabel = 'поиск по году поступления';
  const inputYearAdmissionFeedback = document.createElement('div');
  inputYearAdmissionFeedback.classList.add('js-feedback');
  inputYearAdmissionFeedback.id = 'filter-admission-feedback';
  containerYearAdmission.append(
    captionYearAdmission,
    inputYearAdmission,
    inputYearAdmissionFeedback,
    )
  wrapYearAdmission.append(containerYearAdmission)
  // год окончания
  const wrapYearEnding = document.createElement('div');
  wrapYearEnding.classList.add('col-5');
  const containerYearEnding = document.createElement('div');
  containerYearEnding.classList.add('input-group');
  const captionYearEnding = document.createElement('span');
  captionYearEnding.classList.add('input-group-text');
  captionYearEnding.textContent = 'год окончания';
  const inputYearEnding = document.createElement('input');
  inputYearEnding.classList.add('form-control', 'js-input');
  inputYearEnding.id = 'filter-ending';
  inputYearEnding.type = 'number';
  inputYearEnding.placeholder = 'поиск по году окончания';
  inputYearEnding.ariaLabel = 'поиск по году окончания';
  const inputYearEndingFeedback = document.createElement('div');
  inputYearEndingFeedback.classList.add('js-feedback');
  inputYearEndingFeedback.id = 'filter-ending-feedback';
  containerYearEnding.append(
    captionYearEnding,
    inputYearEnding,
    inputYearEndingFeedback,
    )
  wrapYearEnding.append(containerYearEnding)


  row.append(
    title,
    inputFullNameWrap,
    wrapBtnSubmit,
    wrapFaculty,
    wrapBirthYear,
    wrapYearAdmission,
    wrapYearEnding,
    )
  form.append(row);
  return {
    form,
    inputFullName,
    inputFullNameFeedback,
    inputBirthYear,
    inputBirthYearFeedback,
    inputYearAdmission,
    inputYearAdmissionFeedback,
    inputYearEnding,
    inputYearEndingFeedback,
    inputFaculty,
    inputFacultyFeedback,
    btnSubmit,
  };
}

