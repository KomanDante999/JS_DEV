let fruits = ['яблоко', 'груша', 'банан', 'апельсин', 'ананас']

console.log('Сегодня я съел:');

for (let item of fruits) {
  console.log(item);
}


let rating = ['Катя', 'Маша', 'Оля', 'Валя', 'Даша'];
console.log('Рейтинг студентов:');

for (let i in rating) {
  console.log(`${parseInt(i) + 1} место: ${rating[i]}`);
}





