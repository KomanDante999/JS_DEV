import { inputFormData } from '../main.js';  // данные формы ввода

export function validInputForm() {

  for (const objData of inputFormData) {
    if (objData.fieldValue === '' || objData.fieldValue === NaN || objData.fieldValue === null) {
      objData.fieldValid = false;
      objData.feedbackText = 'заполните поле';
    }
    else {
      objData.fieldValid = true;
      objData.feedbackText = '';
    }
    console.log(objData);
  }
}




