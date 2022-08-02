import { getAge, formatNumber00, formatAge } from './servise-function.js';

export function arrayFormat(arrayInit) {
  let arrayFormat = arrayInit;

  // fullName: '',
  // faculty: '',
  // birthDateAge: '',
  // yearsStudy: '',

  for (const objStudent of arrayFormat) {
    objStudent.fullName = `${objStudent.surname} ${objStudent.name} ${objStudent.middleName}`;
    delete objStudent.surname;
    delete objStudent.name;
    delete objStudent.middleName;
    objStudent.birthDateAge = `${formatNumber00(objStudent.birthDate.getDate())}.${formatNumber00(objStudent.birthDate.getMonth() + 1)}.${objStudent.birthDate.getFullYear()} (${getAge(objStudent.birthDate)} ${formatAge(getAge(objStudent.birthDate))})`;
  }
  return arrayFormat;
}
