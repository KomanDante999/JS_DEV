// Задание 4
const date = []
for (let i = 1; i <= 31; ++i) {
  date[i - 1] = i
}
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
let day = 2 // переменная дня недели
for (const i of date) {
  if (day <= 7) {
    console.log(i, 'января', week[day - 1])
    ++day
    if (day > 7) {
      day -= 7
    }
  } else {
    console.log('Введен неверный номер дня недели!')
    break
  }
}
