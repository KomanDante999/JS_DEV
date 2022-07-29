export function createInputForm() {
  const wrap = document.createElement('form');
  wrap.classList.add('row', 'g-3');
  // ФИО
  const wrapGroupName = document.createElement('div');
  wrapGroupName.classList.add('col-12');
  const containerGroupName = document.createElement('div');
  containerGroupName.classList.add('input-group');
  const captionGroupName = document.createElement('span');
  captionGroupName.classList.add('input-group-text');
  captionGroupName.textContent = 'ФИО';
  // фамилия
  const lableSurname = document.createElement('label');
  lableSurname.classList.add('form-label');
  lableSurname.setAttribute('for', 'input-surname');
  const inputSurname = document.createElement('input');
  inputSurname.classList.add('form-control');
  inputSurname.id = 'input-surname';
  inputSurname.type = 'text';
  inputSurname.placeholder = 'Фамилия';
  inputSurname.ariaLabel = 'введите вашу фамилию';
  // имя
  const lableName = document.createElement('label');
  lableName.classList.add('form-label');
  lableName.setAttribute('for', 'input-name');
  const inputName = document.createElement('input');
  inputName.classList.add('form-control');
  inputName.id = 'input-name';
  inputName.type = 'text';
  inputName.placeholder = 'Имя';
  inputName.ariaLabel = 'введите ваше имя';
  // отчество
  const lableMiddleName = document.createElement('label');
  lableMiddleName.classList.add('form-label');
  lableMiddleName.setAttribute('for', 'input-middlename');
  const inputMiddleName = document.createElement('input');
  inputMiddleName.classList.add('form-control');
  inputMiddleName.id = 'input-middlename';
  inputMiddleName.type = 'text';
  inputMiddleName.placeholder = 'Отчество';
  inputMiddleName.ariaLabel = 'введите ваше отчество';
  containerGroupName.append(captionGroupName, lableSurname, inputSurname, lableName, inputName, lableMiddleName, inputMiddleName)
  wrapGroupName.append(containerGroupName)

  // дата рождения
  const wrapBirthDate = document.createElement('div');
  wrapBirthDate.classList.add('col-4');
  const containerBirthDate = document.createElement('div');
  containerBirthDate.classList.add('input-group');
  const captionBirthDate = document.createElement('span');
  captionBirthDate.classList.add('input-group-text');
  captionBirthDate.textContent = 'дата роджения';
  const inputBirthDate = document.createElement('input');
  inputBirthDate.classList.add('form-control');
  inputBirthDate.type = 'date';
  inputBirthDate.ariaLabel = 'введите вашу дату рождения';
  containerBirthDate.append(captionBirthDate, inputBirthDate)
  wrapBirthDate.append(containerBirthDate)


  wrap.append(wrapGroupName, wrapBirthDate, );
  return {wrap, inputSurname, inputName, inputMiddleName, inputBirthDate};
}


{/* <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form> */}
