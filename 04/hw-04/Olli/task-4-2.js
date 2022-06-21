// Задание 2
const str1 = 'Привет мир!'
let str2 = ''
console.log('Исходная строка:', str1)
for (i = str1.length; i > 0; --i) {
  str2 += str1[i - 1]
}
console.log('Обратная строка:', str2)
