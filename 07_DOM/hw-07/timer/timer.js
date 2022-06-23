document.addEventListener('DOMContentLoaded', function() {
  let timerInput = document.querySelector('.timer__input');
  let timerOutput = document.querySelector('.timer__output');
  let timerStart = document.querySelector('.timer__start');

  let inputValue = Math.round(Math.abs(timerInput.value));



  function timeOut() {
    let currentVal = parseInt(timerOutput.textContent);
    if (currentVal === duration) {
      clearInterval(intervID);
    }
    timerOutput.textContent = currentVal  +1;
  };

  timerInput.addEventListener('input', inputVal);

  timerStart.addEventListener('click', function() {
    duration = inputVal();
    console.log(duration);
    clearInterval(intervID);
    timerOutput.textContent = 0;
    intervID = setInterval(timeOut, 1000);
  });


});
