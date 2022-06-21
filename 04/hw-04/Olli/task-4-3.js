// Задание 3
// let roalMines = [true, true, true, true, true, true, true, true, true, true];
// let roalMines = [false, false, false, false, false, false, false, false, false, false];
// let roalMines = [false, false, false, true, false, false, false, false, false, false];
const roalMines = [false, false, false, true, false, false, false, true, false, false]
let i = 0
for (const position in roalMines) {
  console.log('Танк переместился на ', parseInt(position) + 1)
  if (roalMines[parseInt(position)] === true) {
    ++i
    if (i === 1) {
      console.log('Танк поврежден')
    }
    if (i === 2) {
      console.log('Танк уничтожен')
      break
    }
  }
}
