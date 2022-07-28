// получить домены всех ссылок на странице

console.log(getPageLinkDomains());

function getPageLinkDomains() {
  return Array.from(document.getElementsByTagName('a')) // получаем массив из коллекции
  .map(link => link.href // выбираем только элементы с адресом
    .replace('http://', '') // убираем протокол из адреса
    .replace('https://', '') // убираем протокол из адреса
    .replace('www.', '') // убираем www из адреса
    .split('/') // разрезаем адрес по /
    .shift() // выбираем только первые элементы
    )
  .reduce((uniqDomains, domain) => { //отбрасываем повторы
    if (uniqDomains.includes(domain)) return uniqDomains;
    return [...uniqDomains, domain];
  }, [])  // стартовое значение для reduce - []
}
