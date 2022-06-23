document.addEventListener('DOMContentLoaded', function() {
  let intervID;
  let timerInput = document.querySelector('.timer__input');
  let timerOutput = document.querySelector('.timer__output');
  let timerStart = document.querySelector('.timer__start');

  function inputVal() {
      return timerInput.value;
  };

  function timeOut(finalVal, step) {
    let currentVal = parseInt(timerOutput.textContent);
    console.log('currentVal', currentVal);
    if (currentVal >= finalVal) {
      clearInterval(intervID);
    }
    timerOutput.textContent = currentVal + step;
  };

  timerInput.addEventListener('input', inputVal);

  timerStart.addEventListener('click', function() {
    console.log(inputVal());
    clearInterval(intervID);
    step = 1;
    delay = 1000;
    if (inputVal() > 0) {
      timerOutput.textContent = 0;
      intervID = setInterval(timeOut, delay, inputVal() - 1, step);
    };
    if (inputVal() < 0) {
      timerOutput.textContent = inputVal();
      intervID = setInterval(timeOut, delay, -1, step);
    };
    if (inputVal() === 0) {
      timerOutput.textContent = 0;
    };
  });


});
