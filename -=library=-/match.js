// случайное число в диапазоне
function rundomNumber(n, m) {
  return Math.round(Math.random() * (Math.max(n, m) - Math.min(n, m))) + Math.min(n, m)
}

console.log(rundomNumber(0, 10))
