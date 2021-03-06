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
export function filterArray(arrayTarget, arrayFilter) {
  for (const objFilter of arrayFilter) {
    // ФИО
    if (objFilter.fieldName === 'fullName') {
      if (objFilter.fieldValue) {
        for (const objStident of arrayTarget) {

        }

      }
    }

  }


}


