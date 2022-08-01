import { inputFormData } from '../main.js';  // данные формы ввода

export function validInputForm() {

  for (const objData of inputFormData) {
    if (objData.fieldValue.trim() === '') {
      objData.fieldValid = false;
      objData.feedbackText = 'поле должно быть заполнено';
    }
    else {
      objData.fieldValid = true;
      objData.feedbackText = '';
    }

  }
}




