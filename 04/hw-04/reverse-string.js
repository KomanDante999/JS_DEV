// это функция, внутри которой нужно написать ваш код
// str (входная строка) будет задаваться в момент вызова функции, как в примере кода под ней

function reverseString(str) {

  let srtRevers = '';

  for (let i = str.length - 1 ; i > -1; i--) {
    srtRevers += str[i];
  }

  return srtRevers
}

// // вызов функции
reverseString('abc'); // cba
reverseString('12345'); // 54321
// // можете вызывать функцию сколько угодно раз подряд с различными параметрами
console.log(reverseString('abcdefg'));
console.log(reverseString('12345'));
console.log(reverseString('1'));
console.log(reverseString(''));
console.log(reverseString('Твори добро!'));

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
// export default reverseString;
