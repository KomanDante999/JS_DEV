document.addEventListener('DOMContentLoaded', function() {
  // universal timer
  const value = [];

  function universalTimer(initialValue, finalValue, delay) {
    var intervID;
    value[0] = initialValue;

    function totalizer(value) {
      value.unshift(value[0] + 1)
      // console.log(value[0]);
      if (value[0] === finalValue) {
        clearInterval(intervID);
      }
    }

    intervID = setInterval(totalizer, delay, value);

  }

  // universalTimer(0, 5, 1000);
  console.log(universalTimer(0, 5, 1000));
















});
