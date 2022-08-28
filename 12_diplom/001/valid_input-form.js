import { getAge, formatAge } from './servise-function.js';

export function validInputForm(inputFormData) {
  for (const objData of inputFormData) {
      switch (objData.inputName) {
        case 'surname':
          objData.inputValue = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
          break;
        case 'name':
          objData.inputValue = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
        break;
        case 'middleName':
          objData.inputValue = rulesByMiddleName(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByMiddleName(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByMiddleName(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
        break;
        case 'birthDate':
          objData.inputValue = rulesByBirthDate(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByBirthDate(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByBirthDate(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
        break;
        case 'yearAdmission':
          let tempBirthDate = null;
          for (const obj of inputFormData) {
            if (obj.inputName === 'birthDate') {
              tempBirthDate = obj.inputValue
            }
          }
          objData.inputValue = rulesByYearAdmission(objData.inputValue, objData.inputValid, objData.feedbackText, tempBirthDate).value;
          objData.inputValid = rulesByYearAdmission(objData.inputValue, objData.inputValid, objData.feedbackText, tempBirthDate).valid;
          objData.feedbackText = rulesByYearAdmission(objData.inputValue, objData.inputValid, objData.feedbackText, tempBirthDate).feedback;
        break;
        case 'faculty':
          objData.inputValue = rulesByFaculty(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByFaculty(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByFaculty(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
        break;
      }
    }
  return inputFormData;
}

// правила обработки полей

// фамилия имя
function rulesByName(value, valid, feedback) {
  value = value.trim()
  // пустая строка
  if (!value) {
    valid = -1;
    feedback = 'Заполните это поле';
    return {value, valid, feedback,}
  }
  // только кириллица и " ", "-", "_"
  value = [...value]
  .filter(element => element.codePointAt(0) >= 1024 && element.codePointAt(0) <= 1105
  || element.codePointAt(0) === 32
  || element.codePointAt(0) === 45
  || element.codePointAt(0) === 95)
  .join('');
  // преобразование к правильному виду (одинарное имя)
  value = value.slice(0, 1).toLocaleUpperCase() + value.slice(1).toLocaleLowerCase()
  // преобразование к правильному двойному(тройному и т.д.) имени
  // символы "-", "_", " " интерпретируются как разделитель
  if (value.includes('-') || value.includes('_') || value.includes(' ')) {
    value = value
    .replace(/\-/g, ' ')
    .replace(/\_/g, ' ')
    .split(' ')
    .filter(str => str.trim().length > 0)
    .map(str => str.slice(0, 1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase())
    .join('-');
  }
  // пробелы между словами как ошибка
  // if (value.includes(' ')) {
  //   valid = -1;
  //   feedback = 'пробелы недопустимы';
  //   return {value, valid, feedback,}
  // }

  // УСПЕШНАЯ ВАЛИДАЦИЯ
  valid = 1;
  feedback = '';
  return {value, valid, feedback,}
}

// отчество--------------------------------------
function rulesByMiddleName(value, valid, feedback) {
  value = value.trim()
  // пустая строка
  if (!value) {
    valid = -1;
    feedback = 'Заполните это поле';
    return {value, valid, feedback,}
  }

  // только кириллица и " ", "-", "_"
  value = [...value]
  .filter(element => element.codePointAt(0) >= 1024 && element.codePointAt(0) <= 1105
  || element.codePointAt(0) === 32
  || element.codePointAt(0) === 45
  || element.codePointAt(0) === 95)
  .join('');

  // преобразование к правильному виду (одинарное отчество)
  value = value.slice(0, 1).toLocaleUpperCase() + value.slice(1).toLocaleLowerCase()

  // преобразование к правильному двойному(тройному и т.д.) отчеству
  // символы "-", "_", " " интерпретируются как разделитель
  if (value.includes('-') || value.includes('_') || value.includes(' ')) {
    value = value
    .replace(/\-/g, ' ')
    .replace(/\_/g, ' ')
    .split(' ')
    .filter(str => str.trim().length > 0)
    .map(str => str.slice(0, 1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase())
    .join(' ');
  }

  // УСПЕШНАЯ ВАЛИДАЦИЯ
  valid = 1;
  feedback = '';
  return {value, valid, feedback,}
}

// дата рождения (от 1900 до текеущего года - 14 лет)--------------------------------------
function rulesByBirthDate(value, valid, feedback) {
  if (!value) {
    valid = -1;
    feedback = 'Заполните это поле';
    return {value, valid, feedback,}
  }
  // endDate = endDate - 31600800000 * 14;
  // нижняя граница
  if (value < new Date('1900-1-1')) {
    valid = -1;
    feedback = `Студенту ${getAge(value)} ${formatAge(value)}!!! Cтолько не живут!`;
    return {value, valid, feedback,}
  }
  // верхняя граница
  if (value > new Date()) {
    valid = -1;
    feedback = `Студент ещё не родился!!!`;
    return {value, valid, feedback,}
  }
  if (getAge(value) < 14) {
    valid = -1;
    feedback = `Студенту ${getAge(value)} ${formatAge(value)}!!! Надо закончить школу!`;
    return {value, valid, feedback,}
  }
  // УСПЕШНАЯ ВАЛИДАЦИЯ
  valid = 1;
  feedback = '';
  return {value, valid, feedback,}
}

// год поступления--------------------------------------
function rulesByYearAdmission(value, valid, feedback, tempBirthDate) {
  if (!value) {
    valid = -1;
    feedback = 'Заполните это поле';
    return {value, valid, feedback,}
  }
  if (value < 2000) {
    valid = -1;
    feedback = 'Дата поступления не ранее 2000 г.';
    return {value, valid, feedback,}
  }
  if (value > new Date().getFullYear()) {
    valid = -1;
    feedback = 'Этот год еще не наступил';
    return {value, valid, feedback,}
  }
  if (tempBirthDate) {
    let ageAdmission = value - tempBirthDate.getFullYear()
    if (ageAdmission < 14) {
      valid = -1;
      feedback = `Студенту на момент поступления ${ageAdmission} ${formatAge(ageAdmission)}!!! Надо закончить школу!`;
      return {value, valid, feedback,}
    }

  }

  // УСПЕШНАЯ ВАЛИДАЦИЯ
  valid = 1;
  feedback = '';
  return {value, valid, feedback,}
}

// факультет
function rulesByFaculty(value, valid, feedback) {
  value = value.trim()
  // пустая строка
  if (!value) {
    valid = -1;
    feedback = 'Заполните это поле';
    return {value, valid, feedback,}
  }
  // в нижний регистр
  value = value.toLocaleLowerCase()
  // только кириллица и " ", "-", "_"
  value = [...value]
  .filter(element => element.codePointAt(0) >= 1024 && element.codePointAt(0) <= 1105
  || element.codePointAt(0) === 32
  || element.codePointAt(0) === 45
  || element.codePointAt(0) === 95)
  .join('');

  // преобразование к двойному(тройному и т.д.) названию
  // символы "-", "_", " " интерпретируются как разделитель
  if (value.includes('-') || value.includes('_') || value.includes(' ')) {
    value = value
    .replace(/\-/g, ' ')
    .replace(/\_/g, ' ')
    .split(' ')
    .filter(str => str.trim().length > 0)
    .join('-');
  }

  // УСПЕШНАЯ ВАЛИДАЦИЯ
  valid = 1;
  feedback = '';
  return {value, valid, feedback,}
}
