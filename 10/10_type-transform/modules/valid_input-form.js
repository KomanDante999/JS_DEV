
export let inputFormData = [
  {
    fieldName: 'surname',
    fieldValue: '',
    fieldValid: false,
    feedbackText: '',
    inputNode: '',
    feedbackNode: '',
  },
  {
    fieldName: 'name',
    fieldValue: '',
    fieldValid: false,
    feedbackText: '',
    inputNode: '',
    feedbackNode: '',
  },
  {
    fieldName: 'middleName',
    fieldValue: '',
    fieldValid: false,
    feedbackText: '',
    inputNode: '',
    feedbackNode: '',
  },
  {
    fieldName: 'birthDate',
    fieldValue: '',
    fieldValid: false,
    feedbackText: '',
    inputNode: '',
    feedbackNode: '',
  },
  {
    fieldName: 'yearAdmission',
    fieldValue: '',
    fieldValid: false,
    feedbackText: '',
    inputNode: '',
    feedbackNode: '',
  },
  {
    fieldName: 'faculty',
    fieldValue: '',
    fieldValid: false,
    feedbackText: '',
    inputNode: '',
    feedbackNode: '',
  },
]




export function validInputForm() {
  for (const objData of inputFormData) {
    // проверка на пустоту
    if (objData.fieldValue === '' || objData.fieldValue === NaN || objData.fieldValue === null) {
      objData.fieldValid = false;
      objData.feedbackText = 'заполните поле';
    }
    else {
      switch (objData.fieldName) {
        case 'surname':
          objData.fieldValue = rulesByName(objData.fieldValue, objData.fieldValid, objData.feedbackText).value;
          objData.fieldValid = rulesByName(objData.fieldValue, objData.fieldValid, objData.feedbackText).valid;
          objData.feedbackText = rulesByName(objData.fieldValue, objData.fieldValid, objData.feedbackText).feedback;
          break;

          case 'name':
            objData.fieldValue = rulesByName(objData.fieldValue, objData.fieldValid, objData.feedbackText).value;
            objData.fieldValid = rulesByName(objData.fieldValue, objData.fieldValid, objData.feedbackText).valid;
            objData.feedbackText = rulesByName(objData.fieldValue, objData.fieldValid, objData.feedbackText).feedback;
          break;


        default:
          objData.fieldValid = true;
          objData.feedbackText = '';

          break;
      }


    }
  }
  // console.log(inputFormData);
}

// правила обработки полей
// surname & name
function rulesByName(value, valid, feedback) {
  // убираем концевые пробелы
  value = value.trim()
  // пробелы
  if (value.includes(' ')) {
    valid = false;
    feedback = 'пробелы недопустимы';
    return {
      value,
      valid,
      feedback,
    }
  }
  else {
    valid = true;
    feedback = '';
    return {
      value,
      valid,
      feedback,
    }
  }

}


