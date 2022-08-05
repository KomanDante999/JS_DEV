import { getAge, formatNumber00, formatAge, getYearsStudy } from './servise-function.js'; // вспомогательные функции

// форматирование масива для таблицы
export function arrayFormat(arrayInit) {
  let arrayFormat = arrayInit;

  for (const objStudent of arrayFormat) {
    objStudent.fullName = `${objStudent.surname} ${objStudent.name} ${objStudent.middleName}`;
    objStudent.birthDateAge = `${formatNumber00(objStudent.birthDate.getDate())}.${formatNumber00(objStudent.birthDate.getMonth() + 1)}.${objStudent.birthDate.getFullYear()} (${getAge(objStudent.birthDate)} ${formatAge(getAge(objStudent.birthDate))})`;
    objStudent.yearsStudy = `${objStudent.yearAdmission} - ${objStudent.yearAdmission + 4} (${getYearsStudy(objStudent.yearAdmission)})`;
  }
  return arrayFormat;
}

// фильтр
export function filterArray(arrayTarget, filterData) {
  let newArrayFilter = arrayTarget;
  for (const objFilter of filterData) {
    // ФИО
    if (objFilter.fieldName === 'fullName') {
      newArrayFilter = newArrayFilter.filter(item => item.fullName.toLowerCase().includes(objFilter.fieldValue.toLowerCase()))
    }
    // факультет
    if (objFilter.fieldName === 'faculty') {
      newArrayFilter = newArrayFilter.filter(item => item.faculty.toLowerCase().includes(objFilter.fieldValue.toLowerCase()))
    }
    // год рождения
    if (objFilter.fieldName === 'birthYear') {
        newArrayFilter = newArrayFilter.filter(item => item.birthDateAge
          .split('.')
          .filter(text => text.length > 4)
          .toString()
          .split(' (')
          .filter(text => text.length === 4)
          .toString()
          .includes(objFilter.fieldValue)
          );
        }
    // год поступления
    if (objFilter.fieldName === 'yearAdmission') {
      newArrayFilter = newArrayFilter.filter(item => item.yearsStudy
        .split(' ')
        .shift()
        .includes(objFilter.fieldValue)
        );
      }
      // год окончания
      if (objFilter.fieldName === 'yearEnding') {
        newArrayFilter = newArrayFilter.filter(item => item.yearsStudy
          .split(' - ')
          .filter(text => text.length > 5)
          .toString()
          .split(' (')
          .shift()
          .includes(objFilter.fieldValue)
        );
    }
  }
  return newArrayFilter
}

// получение данных формы
export function getDataFofm(classInput) {
  let arrayInputs = Array.from(document.querySelectorAll(`.${classInput}`));
  let arrayDataForm = [];
  arrayDataForm.length = arrayInputs.length;
  for (let i = 0; i < arrayDataForm.length; i++) {
    arrayDataForm[i] = {
      fieldName: arrayInputs[i].name,
      fieldValue: arrayInputs[i].value,
    }
  }
  return arrayDataForm;
}

// данные сортировки
export let sortedFormData = [
  {
    cellName: 'index',
    cellCaption: '№',
    sortedDirection: 0,
  },
  {
    cellName: 'fullName',
    cellCaption: 'ФИО студента',
    sortedDirection: 0,
  },
  {
    cellName: 'faculty',
    cellCaption: 'Факультет',
    sortedDirection: 0,
  },
  {
    cellName: 'birthDateAge',
    cellCaption: 'Дата рождения (возраст)',
    sortedDirection: 0,
  },
  {
    cellName: 'yearsStudy',
    cellCaption: 'Годы обучения (номер курса)',
    sortedDirection: 0,
  },

]



