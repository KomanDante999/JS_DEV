document.addEventListener('DOMContentLoaded', function () {
  let timeoutID;
  let inputText = document.createElement('input');
  let outputText = document.createElement('h2');
  document.body.prepend(inputText);
  inputText.after(outputText);
  inputText.style.width = '400px';
  outputText.style.color = 'rgb(12, 105, 241)';

  function outLiteral() {
    outputText.textContent = inputText.value;
  }

  inputText.addEventListener('input', function() {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(outLiteral, 300)
  });

});
