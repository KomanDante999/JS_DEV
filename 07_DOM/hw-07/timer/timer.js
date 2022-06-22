document.addEventListener('DOMContentLoaded', function() {

  let timerInput = document.querySelector('.timer__input');
  let timerOutput = document.querySelector('.timer__output');
  let timerStart = document.querySelector('.timer__start');

  function timeVal() {
    time = Math.abs(Math.round(timerInput.value));
    console.log(time);
  }

  function timeOut(n) {
    timerOutput.textContent = n;
  }

  timerInput.addEventListener('input', timeVal )
  timeVal();

  var intervId;

  timerStart.addEventListener('click', function() {

    intervId = setInterval(timeOut(i), 1000);
    for (let i = 0; i < time; i++) {
      timeOut(i);
    }
  })


});
