(() => {
  alert('привет!')
  const WAIT_TIME_MS = 1000;

  const textInput = document.createElement('input');
  const display = document.createElement('div');
  let timeout;

  console.log(textInput);
  console.log(display);

  textInput.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout= setTimeout(() => {
      display.textContent = textInput.value;
    }, WAIT_TIME_MS);
  })

  document.addEventListener('DOMContentLoaded', () => {

    document.body.append(textInput);
    document.body.append(display);

  });
})();



