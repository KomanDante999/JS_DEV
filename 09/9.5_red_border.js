(() => {

  const divElements = document.querySelectorAll('div');
  console.log(document.querySelectorAll('div'));
  console.log(divElements);
  for (const el of divElements) {
    el.style.border = '1px solid red'
  }

})();



