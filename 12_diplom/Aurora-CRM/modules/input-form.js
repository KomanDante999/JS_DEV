

export let dataInputForm = [
  {
    inputName: 'surname',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Фамилия',
    feedbackText: '',
  },
  {
    inputName: 'name',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Имя',
    feedbackText: '',
  },
  {
    inputName: 'middleName',
    inputValue: '',
    inputValid: 0,
    inputType: 'text',
    inputPlaceholder: 'Отчество',
    feedbackText: '',
  },
]

export function createInputForm(dataForm) {
  const form = document.createElement('form');
  form.id = 'input-form';
  form.classList.add('input-form');
  const title = document.createElement('h3');
  title.classList.add('input-form__title')
}
