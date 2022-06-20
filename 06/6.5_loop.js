let computer = {
  usb: 8,
  chip: 'AMD X570',
  socket: 'AM3/AM4',
  core: 8,
  manufacture: 'AMD',
  ramType: 'DDR4',
  ramVol: 8192,
  ranFreq: 3200,
  prise: 100000,

}

let values = Object.keys(computer);
let keys = Object.values(computer);
let entries = Object.entries(computer);

for (let value of values) {
  console.log(value);
}

for (let key of keys) {
  console.log(key);
}

for (let entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}
// то же самое
for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// устаревший способ
console.log('\n\nfor in\n');

for (let key in computer) {
  if (computer.hasOwnProperty.call(key)) {
    continue;
  }
  console.log(computer[key]);
}
