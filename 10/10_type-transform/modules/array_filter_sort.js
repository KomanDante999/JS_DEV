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

// данные для head table
export let headerDataTable = [
  {
    cellName: 'index',
    cellCaption: '№',
    sortedDirection: 0,
    iconType: 'num',
  },
  {
    cellName: 'fullName',
    cellCaption: 'ФИО студента',
    sortedDirection: 0,
    iconType: 'str',
  },
  {
    cellName: 'faculty',
    cellCaption: 'Факультет',
    sortedDirection: 0,
    iconType: 'str',
  },
  {
    cellName: 'birthDate',
    cellCaption: 'Дата рождения (возраст)',
    sortedDirection: 0,
    iconType: 'num',
  },
  {
    cellName: 'yearsStudy',
    cellCaption: 'Годы обучения (номер курса)',
    sortedDirection: 0,
    iconType: 'num',
  },
]

// данные сортировки
export let sortedFormData = [
  {
    cellName: 'fullName',
    sortedDirection: 0,
    order: 0,
  },
  {
    cellName: 'faculty',
    sortedDirection: 0,
    order: 0,
  },
  {
    cellName: 'birthDate',
    sortedDirection: 0,
    order: 0,
  },
  {
    cellName: 'yearsStudy',
    sortedDirection: 0,
    order: 0,
  },
]
// синхронизация иконок направления сортировки
export function syncHeaderDataTable(headerData, sortedData) {
  for (const objHeader of headerData) {
    for (const objSort of sortedData) {
      if (objHeader.cellName === objSort.cellName) {
        objHeader.sortedDirection = objSort.sortedDirection;
      }
    }
  }
  return headerData;
}
// направление и последовательность сортировки
export function updateSortedData(arrayTarget, cellName) {
  let max = 0;
  arrayTarget.forEach(objSort => {
    if (objSort.order > max) max = objSort.order
  });
  for (const objSort of arrayTarget) {
    if (objSort.cellName === cellName) {
      objSort.order = max + 1;
      if (objSort.sortedDirection <=0) objSort.sortedDirection = 1;
      else objSort.sortedDirection = -1;
      return arrayTarget.sort((a,b) => a.order < b.order ? 1 : -1);
    }
  }
}


// правила сортировки
function sortedByField(nameField, sortedDirection) {
  if (sortedDirection > 0) return (a,b) => a[nameField] > b[nameField] ? 1 : -1;
  if (sortedDirection < 0) return (a,b) => a[nameField] < b[nameField] ? 1 : -1;
}
// сортировка таблицы
export function sortedArrayStudent(arrayTarget, sortedData) {
  let newArrayTarget = arrayTarget;
  // сортировка по первову полю
  newArrayTarget.sort(sortedByField(sortedData[0].cellName, sortedData[0].sortedDirection));

  // сортировка по следующим полям

  return newArrayTarget;
}




