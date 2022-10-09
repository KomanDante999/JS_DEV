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

// представление DATE в 'yyyy-mm-dd'
export function formatDateYYYYMMDD(dateValue, order = 'ymd', separator = '-') {
  if (!dateValue) {
    return ''
  }
  if (order === 'ymd') {
    return [dateValue.getFullYear().toString(), (dateValue.getMonth() + 1).toString(), dateValue.getDate().toString()]
    .map(elem => {if (elem.length < 2) {elem = '0' + elem} return elem})
    .join(`${separator}`)
  }
  if (order === 'dmy') {
    return [dateValue.getDate().toString(), (dateValue.getMonth() + 1).toString(), dateValue.getFullYear().toString()]
    .map(elem => {if (elem.length < 2) {elem = '0' + elem} return elem})
    .join(`${separator}`)
  }

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

// приведение имени к стандартному виду Имя
export function UpLowByString(str) {
  str = str.toString().trim()
  return str.slice(0, 1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
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



// получение уникального id
function getUniqId(array, lowLimit) {
  let maxId = lowLimit;
  for (const item of array) {
    if (item.id > maxId) {
      maxId = item.id;
    }
  }
  return maxId + 1;
}


// сохранение данных в storage
export function saveStorage(array, keyName) {
  localStorage.setItem(keyName, JSON.stringify(array))
}

// восстановление данных из storage
export function restoredStorage(keyName) {
  let localData = localStorage.getItem(keyName);
  if (localData !== null && localData !== '') {
    return JSON.parse(localData);
  }
}
