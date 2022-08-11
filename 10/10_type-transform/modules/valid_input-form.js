

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
          objData.inputValue = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
        break;
        case 'birthDate':
          objData.inputValue = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).value;
          objData.inputValid = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByName(objData.inputValue, objData.inputValid, objData.feedbackText).feedback;
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
// surname & name
function rulesByName(value, valid, feedback) {
  // убираем концевые пробелы
  value = value.trim()
  let tempStr = value;
  // пустая строка
  if (value === '') {
    valid = -1;
    feedback = 'заполните это поле';
    return {value, valid, feedback,}
  }
  // заглавные и строчные буквы
  tempStr = value + value[0];
  value = tempStr

  // пробелы между словами
  if (value.includes(' ')) {
    valid = -1;
    feedback = 'пробелы недопустимы';
    return {value, valid, feedback,}
  }

  // УСПЕШНАЯ ВАЛИДАЦИЯ
  valid = 1;
  feedback = '';
  return {value, valid, feedback,}
}


