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

// input for filter form
function createInputFilter() {
  const wrap = document.createElement('div');
  const group = document.createElement('div');
  group.classList.add('input-group');
  const caption = document.createElement('span');
  caption.classList.add('input-group-text');
  const input = document.createElement('input');
  input.classList.add('form-control', 'js-filter-input');
  input.addEventListener('input', () => {
    clean.classList.remove('visually-hidden');
    if (input.value === '') {
      clean.classList.add('visually-hidden');
    }
  });
  const clean = document.createElement('button');
  clean.classList.add('input-group-text', 'visually-hidden', 'js-filter-clean');
  clean.textContent = 'x';
  clean.type = 'button';
  group.append(
    caption,
    input,
    clean,
    );
    wrap.append(group);
    return {
      caption,
      input,
      clean,
      wrap,
    }
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
  const fullName = createInputFilter();
  fullName.wrap.classList.add('col-7');
  fullName.caption.textContent = 'ФИО';
  fullName.input.id = 'fullName-filter-input';
  fullName.input.name = 'fullName';
  fullName.input.type = 'text';
  fullName.input.placeholder = 'поиск по фамилии, имени или отчеству студента';
  fullName.input.ariaLabel = 'поиск по фамилии, имени или отчеству студента';
  fullName.clean.id = 'fullName-filter-clean';
  // submit
  const wrapBtnSubmit = document.createElement('div');
  wrapBtnSubmit.classList.add('col-2');
  const btnSubmit = document.createElement('button');
  btnSubmit.classList.add('btn', 'btn-success', 'w-100');
  btnSubmit.textContent = 'Найти';
  btnSubmit.type = 'submit';
  wrapBtnSubmit.append(btnSubmit);
  // clean filter
  const wrapBtnCleanAll = document.createElement('div');
  wrapBtnCleanAll.classList.add('col-3');
  const btnCleanAll = document.createElement('button');
  btnCleanAll.classList.add('btn', 'btn-outline-success', 'w-100');
  btnCleanAll.textContent = 'Очистить фильтр';
  btnCleanAll.type = 'button';
  wrapBtnCleanAll.append(btnCleanAll);
  // факультет
  const faculty = createInputFilter();
  faculty.wrap.classList.add('col-5');
  faculty.caption.textContent = 'факультет';
  faculty.input.name = 'faculty';
  faculty.input.id = 'faculty-filter-input';
  faculty.input.type = 'text';
  faculty.input.placeholder = 'поиск по факульту';
  faculty.input.ariaLabel = 'поиск по факульту';
  faculty.clean.id = 'faculty-filter-clean';
  // год рождения
  const birthYear = createInputFilter();
  birthYear.wrap.classList.add('col-5');
  birthYear.caption.textContent = 'год роджения';
  birthYear.input.name = 'birthYear';
  birthYear.input.id = 'birthYear-filter-input';
  birthYear.input.type = 'number';
  birthYear.input.placeholder = 'поиск по году рождения';
  birthYear.input.ariaLabel = 'поиск по году рождения';
  birthYear.clean.id = 'birthYear-filter-clean';
  // год поступления
  const yearAdmission = createInputFilter();
  yearAdmission.wrap.classList.add('col-5');
  yearAdmission.caption.textContent = 'год поступления';
  yearAdmission.input.name = 'yearAdmission';
  yearAdmission.input.id = 'yearAdmission-filter-input';
  yearAdmission.input.type = 'number';
  yearAdmission.input.placeholder = 'поиск по году поступления';
  yearAdmission.input.ariaLabel = 'поиск по году поступления';
  yearAdmission.clean.id = 'yearAdmission-filter-clean';
  // год окончания
  const yearEnding = createInputFilter();
  yearEnding.wrap.classList.add('col-5');
  yearEnding.caption.textContent = 'год окончания';
  yearEnding.input.name = 'yearEnding';
  yearEnding.input.id = 'yearEnding-filter-input';
  yearEnding.input.type = 'number';
  yearEnding.input.placeholder = 'поиск по году окончания';
  yearEnding.input.ariaLabel = 'поиск по году окончания';
  yearEnding.clean.id = 'yearEnding-filter-clean';

  row.append(
    title,
    fullName.wrap,
    wrapBtnSubmit,
    wrapBtnCleanAll,
    faculty.wrap,
    birthYear.wrap,
    yearAdmission.wrap,
    yearEnding.wrap,
    )
  form.append(row);
  return {
    form,
    fullName,
    btnSubmit,
    btnCleanAll,
    faculty,
    birthYear,
    yearAdmission,
    yearEnding,
  };
}
// очистка поля фильтра
export function cleanFilterField(nameField) {
  document.getElementById(`${nameField}-filter-input`).value = '';
  document.getElementById(`${nameField}-filter-clean`).classList.add('visually-hidden');
}

// очистка всех полей фильтра
export function cleanFilterFieldAll() {
  for (const item of document.querySelectorAll(`.js-filter-input`)) item.value = '';
  for (const item of document.querySelectorAll(`.js-filter-clean`)) item.classList.add('visually-hidden');
}
