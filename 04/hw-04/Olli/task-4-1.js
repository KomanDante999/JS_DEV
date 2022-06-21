// Задание 1
const mas = []
const n = -3
const m = -10
const count = 42
const min = Math.min(n, m)
for (let i = 1; i <= count; ++i) {
  mas.push(Math.round(Math.random() * Math.abs(n - m)) + min)
}
console.log(mas)
