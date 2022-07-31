// имя фамилия
export function validName(str) {
  if (!str.trim()) {
    return {valid: false, feedback: 'поле должно быть заполнено'}
  }
  return {valid: true, feedback: ''}

}
// отчество
export function validMiddleName(str) {
  if (!str.trim()) {
    return {valid: false, feedback: 'поле должно быть заполнено'}
  }
  return {valid: true, feedback: ''}
}

// дата рождения
export function validBirthDate(str) {
  if (!str) {
    return {valid: false, feedback: 'поле должно быть заполнено'}
  }
  return {valid: true, feedback: ''}
}

// дата поступления
export function validYearAdmission(str) {
  if (!str) {
    return {valid: false, feedback: 'поле должно быть заполнено'}
  }
  return {valid: true, feedback: ''}
}

// факультет
export function validFaculty(str) {
  if (!str.trim()) {
    return {valid: false, feedback: 'поле должно быть заполнено'}
  }
  return {valid: true, feedback: ''}
}


