// вычисление количества полных лет по дате рождения
export function getAge(birthDate) {
  let currentDate = new Date();
  let age = Math.trunc((currentDate.getTime() - birthDate.getTime()) / 31600800000);
  if (currentDate.getTime() / 31600800000 <= birthDate.getTime() / 31600800000) {
    age = age + 1
  }
  return age
}

// представление числа в формате 00
export function formatNumber00(number) {
  let numberSign = '';
  if (Math.sign(number) === -1) numberSign = '-'
  if (Math.abs(Math.trunc(number)) < 10) {

    return numberSign + '0' + Math.abs(Math.trunc(number));
  }
  return numberSign + Math.abs(Math.trunc(number));
}

// формат лет/годов
export function formatAge(number) {
    if (number % 100 > 10 && number % 100 < 20) {
      return 'лет';
    }
    const lastNumber = number % 10;
    if (lastNumber == 1) {
      return 'год';
    }
    if (lastNumber > 1 && lastNumber < 5) {
      return 'года';
    }
    if ((lastNumber > 4 && lastNumber < 10) || lastNumber == 0) {
      return 'лет';
    }
  }

// года обучения
export function getYearsStudy(yearAdmission) {
  let currentDate = new Date();
  let course = currentDate.getFullYear() - yearAdmission;
  if (currentDate.getMonth() + 1 >= 9) {
    course++;
  }
  if (course > 5) {
    return 'закончил';
  }
  return course + ' курс';
}

// задержка выполнения функции
export function debounce(fn, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    fn.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}


// предотвращение срабатывания enter на кнопке
// window.addEventListener('keydown', function(e) {
//   if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
//       if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
//           e.preventDefault();
//           return false;
//       }
//   }
// }, true);
