console.log(parseEmployeesData(`
  Халевин Сергей  Владимирович ,  frontend-developer
  Анпилова  Ольга Владимировна,   системый администратор
  Вебер  Виктория   , бухгалтер
  Самойленко Ольга  Логиновна, главный   бухгалтер
  Гологузо Алексей Николаевич,
`));
function parseEmployeesData(dataString) {
  return dataString.split('\n') // разбиваем на строки
  .filter(line => line.trim().length > 0) // убираем концевые пробелы и пустые строки
  .map(line => {
    const [fullName, occupation] = line.split(',') // разбиваем по ","
    .map(str => str.trim()) // убираем концевые пробелы
    .filter(text => text.length > 0) // убираем возможные пустые строки

    const [surname, name, middleName] = fullName.split(' ') // разрезаем по пробелам
    .filter(text => text.length > 0) // убираем пустые значения

    return {surname, name, middleName, fullName, occupation}
    }
  )
}
