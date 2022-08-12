import { UpLowByString } from './servise-function.js';

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
          objData.inputValue = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
        break;
        case 'faculty':
          objData.inputValue = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
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
  if (value === '') {
    valid = -1;
    feedback = 'заполните это поле';
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
  if (value === '') {
    valid = -1;
    feedback = 'заполните это поле';
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

// дата рождения--------------------------------------
function rulesByBirthDate(value, valid, feedback) {
  console.log('BirthDate',value);
  if (value === '') {
    valid = -1;
    feedback = 'заполните это поле';
    return {value, valid, feedback,}
  }


  // УСПЕШНАЯ ВАЛИДАЦИЯ
  valid = 1;
  feedback = '';
  return {value, valid, feedback,}
}


