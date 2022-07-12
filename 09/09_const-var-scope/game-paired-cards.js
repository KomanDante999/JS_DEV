(() => {
  // размер поля игры
  let withField = 4;
  let heightField = 4;


  // перемешивание массива
  function shuffle(arrOrig) {
    for (let i = arrOrig.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrOrig[i], arrOrig[j]] = [arrOrig[j], arrOrig[i]];
    }
  }

  // массив карточек


  // создание карточки
  function greateCard() {

  }

  // создание строки






  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('game-paired-cards')
    container.ad
  })


})();
