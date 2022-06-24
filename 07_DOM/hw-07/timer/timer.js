document.addEventListener('DOMContentLoaded', function() {
  let intervID;
  let timerInput = document.querySelector('.timer__input');
  let timerOutput = document.querySelector('.timer__output');
  let timerStart = document.querySelector('.timer__start');

  function inputVal() {
      return timerInput.value;
  };

  function timeOut(step) {
    let currentVal = parseInt(timerOutput.textContent);
    console.log('currentVal', currentVal);
    if (currentVal !== 0) {
      timerOutput.textContent = currentVal - step;
    }
    else {
      clearInterval(intervID);
    };
  };

  timerInput.addEventListener('input', inputVal);

  timerStart.addEventListener('click', function() {
    console.log(inputVal());
    clearInterval(intervID);
    timerOutput.textContent = inputVal();
    delay = 1000;
    if (inputVal() > 0) {
      step = 1;
      intervID = setInterval(timeOut, delay, step);
    }
    if (inputVal() < 0) {
      step = -1;
      intervID = setInterval(timeOut, delay, step);
    }
  });


});
