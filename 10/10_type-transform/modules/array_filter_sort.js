export function arrayFormat(arrayInit) {
  let arrayFormat = arrayInit;

  // fullName: '',
  // faculty: '',
  // birthDateAge: '',
  // yearsStudy: '',

  let currentDate = new Date();
  for (const objStudent of arrayFormat) {
    objStudent.fullName = `${objStudent.surname} ${objStudent.name} ${objStudent.middleName}`;
    delete objStudent.surname;
    delete objStudent.name;
    delete objStudent.middleName;
    objStudent.birthDateAge = objStudent;
  }
  return arrayFormat;
}
