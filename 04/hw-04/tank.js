// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции,
// как в примере кода под ней

function moveTank(roadMines) {
  let position = 1;
  let damage = 0;
  for (const mine of roadMines) {
    console.log(`танк переместился на ${position}`);
    position += 1;

    if (mine === true && damage === 0) {
      damage += 1;
      console.log('танк повреждён');
    } else if (mine === true && damage === 1) {
      console.log('танк уничтожен');
      break;
    }
  }
}

// вызов функции
moveTank([true, true, true, true, true, true, true, true, true, true]);
moveTank([true, false, false, false, false, false, false, false, false, true]);
moveTank([false, false, false, true, false, false, false, false, false, false]);
moveTank([false, false, false, false, false, false, false, false, false, false]);
// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
// export default moveTank;
