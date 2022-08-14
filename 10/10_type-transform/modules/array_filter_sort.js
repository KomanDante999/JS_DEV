import { getAge, formatAge, getYearsStudy, formatDateYYYYMMDD } from './servise-function.js'; // вспомогательные функции

// форматирование масива для таблицы
export function arrayFormat(arrayInit) {
  let arrayFormat = arrayInit;

  for (const objStudent of arrayFormat) {
    objStudent.fullName = `${objStudent.surname} ${objStudent.name} ${objStudent.middleName}`;
    objStudent.birthDateAge = `${formatDateYYYYMMDD(objStudent.birthDate, 'dmy', '.')} (${getAge(objStudent.birthDate)} ${formatAge(getAge(objStudent.birthDate))})`;
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
    sortedDirection: NaN,
    cellType: '',
    indexSort: 0,
  },
  {
    cellName: 'fullName',
    cellCaption: 'ФИО студента',
    sortedDirection: 0,
    cellType: 'str',
    indexSort: 0,
  },
  {
    cellName: 'faculty',
    cellCaption: 'Факультет',
    sortedDirection: 0,
    cellType: 'str',
    indexSort: 0,
  },
  {
    cellName: 'birthDate',
    cellCaption: 'Дата рождения (возраст)',
    sortedDirection: 0,
    cellType: 'num',
    indexSort: 0,
  },
  {
    cellName: 'yearsStudy',
    cellCaption: 'Годы обучения (номер курса)',
    sortedDirection: 0,
    cellType: 'num',
    indexSort: 0,
  },
]

// данные сортировки
export let sortedFormData = [
  {
    cellName: 'fullName',
    sortedDirection: 0,
    cellType: 'str',
    order: 0,
  },
  {
    cellName: 'faculty',
    sortedDirection: 0,
    cellType: 'str',
    order: 0,
  },
  {
    cellName: 'birthDate',
    sortedDirection: 0,
    cellType: 'num',
    order: 0,
  },
  {
    cellName: 'yearsStudy',
    sortedDirection: 0,
    cellType: 'num',
    order: 0,
  },
]
// синхронизация иконок направления и порядка сортировки
export function syncHeaderDataTable(headerData, sortedData) {
  for (const objHeader of headerData) {
    for (const objSort of sortedData) {
      if (objHeader.cellName === objSort.cellName) {
        objHeader.sortedDirection = objSort.sortedDirection;
      }
    }
  }
  // индекс порядка сортировки
  let tempArray = sortedData;
  tempArray.reverse();
  for (let i = 0; i < tempArray.length; i++) {
    let objHeader = headerData.find(headerData => headerData.cellName === tempArray[i].cellName);
    if (tempArray[i].sortedDirection !== 0) {
      objHeader.indexSort = i + 1;
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
      return arrayTarget.sort((a,b) => a.order > b.order ? 1 : -1);
    }
  }
}
const collatore = new Intl.Collator('ru-RU')

// правила сортировки
function sortedByField(nameField, sortedDirection, cellType) {
  if (cellType === 'str') {
    if (sortedDirection > 0) return (a,b) => collatore.compare(a[nameField], b[nameField]);
    if (sortedDirection < 0) return (a,b) => collatore.compare(b[nameField], a[nameField]);
  }
  if (cellType === 'num') {
    if (sortedDirection > 0) return (a,b) => a[nameField] > b[nameField] ? 1 : -1;
    if (sortedDirection < 0) return (a,b) => a[nameField] < b[nameField] ? 1 : -1;
  }
}

// сортировка таблицы
export function sortedArrayStudent(arrayTarget, sortedData) {
  let newArrayTarget = arrayTarget;

  for (let i = 0; i < sortedData.length; i++) {
      if (sortedData[i].sortedDirection !== 0) {
        newArrayTarget.sort(sortedByField(sortedData[i].cellName, sortedData[i].sortedDirection, sortedData[i].cellType));
        if (i < sortedData.length - 1) {
          newArrayTarget.reverse()
        }
      }
    }
    return newArrayTarget;
  }

// восстановление из Storage (восстановление type Date)
export function rectoreStorage(keyStorage) {
  let localData = localStorage.getItem(keyStorage);
  let temp = [];
  if (localData !== null && localData !== '') {
    temp = JSON.parse(localData);
  }
  if (temp) {
    temp.map(objData => {objData.birthDate = new Date(objData.birthDate)});
    console.log('temp', temp);
  }
  return temp
}



