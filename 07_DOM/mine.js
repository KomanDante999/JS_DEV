document.addEventListener('DOMContentLoaded', function() {
  // button
  let countDisplay = document.querySelector('.count-display')
  let incrementBtn = document.querySelector('.increment-button')

  function incrementCount() {
    let currentCount = parseInt(countDisplay.textContent);
    countDisplay.textContent  = currentCount + 1;
  }

  incrementBtn.addEventListener('click', incrementCount)

  // input
  let colorInput  = document.querySelector('.color-input');
  console.log(colorInput);
  let colorBlock  = document.querySelector('.color-block');
  let clearButton  = document.querySelector('.clear-color-btn');

  function paintBlock() {
    colorBlock.style.backgroundColor = colorInput.value;
  }

  colorInput.addEventListener('input', paintBlock);

  paintBlock();

  clearButton.addEventListener('click', function() {
    colorBlock.style.removeProperty('background-color');
    colorInput = '';
  });


});




