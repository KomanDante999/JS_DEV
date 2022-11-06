// searching existence of element


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
