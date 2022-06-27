document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
=======
  let intervID;
>>>>>>> var1
  let timerInput = document.querySelector('.timer__input');
  let timerOutput = document.querySelector('.timer__output');
  let timerStart = document.querySelector('.timer__start');

<<<<<<< HEAD
  let inputValue = Math.round(Math.abs(timerInput.value));

=======
  function inputVal() {
      return timerInput.value;
  };
>>>>>>> var1

  function timeOut(step) {
    let currentVal = parseInt(timerOutput.textContent);
    if (currentVal !== 0) {
      timerOutput.textContent = currentVal - step;
    }
<<<<<<< HEAD
    timerOutput.textContent = currentVal  +1;
=======
    else {
      clearInterval(intervID);
    };
>>>>>>> var1
  };

  timerInput.addEventListener('input', inputVal);

  timerStart.addEventListener('click', function() {
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
