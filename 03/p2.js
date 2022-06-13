// Выходной или будний день

let day = 'вторник';

switch (day) {
    case 'понедельник':
    case 'вторник':
    case 'среда':
    case 'четверг':
    case 'пятница':
        console.log(day + ' - это будний день');
        break;
    case 'суббота':
    case 'воскресенье':
        console.log(day + ' - это выходной день');
        break;
    default:
        console.log(day + ' - это неизвестный день');
        }


// Четность числа

let num = 37;

if (num % 2 === 0) {
    console.log(`Число ${num} четное`);
} else {
    console.log(`Число ${num} нечетное`);
}

