document.addEventListener('DOMContentLoaded', function() {
  let duration = 0;
  let intervID;
  let timerInput = document.querySelector('.timer__input');
  let timerOutput = document.querySelector('.timer__output');
  let timerStart = document.querySelector('.timer__start');

  function inputVal() {
    let inputValue = Math.round(Math.abs(timerInput.value));
    if (inputValue > 0) {
      return inputValue - 1;
    } else {
      return inputValue;
    }
  };


  function timeOut() {
    let currentVal = parseInt(timerOutput.textContent);
    if (currentVal === duration) {
      clearInterval(intervID);
    }
    timerOutput.textContent =currentVal  +1;
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
