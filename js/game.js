//----- constants -----/
//-define the array of cards
document.addEventListener('DOMContentLoaded', () => {
const cardsArray = [
    { name: 'birman', img: 'imgs/birman.png'},
    { name: 'birman', img: 'imgs/birman.png'},
    { name: 'bombay', img: 'imgs/bombay.png'},
    { name: 'bombay', img: 'imgs/bombay.png'},
    { name: 'british', img: 'imgs/British.png'},
    { name: 'british', img: 'imgs/British.png'},
    { name: 'golden', img: 'imgs/Golden.png'},
    { name: 'golden', img: 'imgs/Golden.png'},
    { name: 'maine', img: 'imgs/mainecoon.png'},
    { name: 'maine', img: 'imgs/mainecoon.png'},
    { name: 'persian', img: 'imgs/persian.png'},
    { name: 'persian', img: 'imgs/persian.png'},
    { name: 'snowshoe', img: 'imgs/snowshoe.png'},
    { name: 'snowshoe', img: 'imgs/snowshoe.png'},
    { name: 'sphynx', img: 'imgs/sphynx.png'},
    { name: 'sphynx', img: 'imgs/sphynx.png'},
  ];

  let timer;
  let timerId;
  let secondsRemaining = 10;
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('.result');
  let cardsChosen = [];
  let cardsChosenId = [];
  const cardsWon = [];
  const timerEl = document.querySelector(".timer");
  const modal = document.querySelector(".modal");
  const message = document.querySelector(".modal-message");



  function init() {
    timer = null;
    shuffle();
  }
  function shuffle() {
    cardsArray.sort(() => 0.5 - Math.random()); 
  }

  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'imgs/pawprint.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }
function render() {
 stopTimer();
}
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const firstCard = cardsChosenId[0];
    const secondCard = cardsChosenId[1];

    if (firstCard == secondCard) {
      cards[firstCard].setAttribute('src', 'imgs/pawprint.png');
      cards[secondCard].setAttribute('src', 'imgs/pawprint.png');
      setTimeout(100);
    } else if (cardsChosen[0] === cardsChosen[1]) {
      setTimeout(100);
      cards[firstCard].removeEventListener('click', flipCard);
      cards[secondCard].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[firstCard].setAttribute('src', 'imgs/pawprint.png');
      cards[secondCard].setAttribute('src', 'imgs/pawprint.png');
      setTimeout(100);
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = 'Score: ' + cardsWon.length + '/8';

    if (cardsWon.length === cardsArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function startTimer() {
    timer = setInterval(() => {
      secondsRemaining--;
      timerEl.textContent = `Time: ${secondsRemaining}s`;
  
      if (secondsRemaining < 0) {
        clearInterval(timerId);
        showMessage("Time's up!");
        timerEl.textContent = `STOP TIME`;
      }
    }, 1000);
  }

  function showMessage(msg) {
    message.textContent = msg;
    modal.style.display = "block";
  }
  
  function hideMessage() {
    modal.style.display = "none";
  }
  
  // Add event listener to close button in modal
  document.querySelector(".modal-close").addEventListener("click", hideMessage);
  
  startTimer();


  createBoard();
  init();
  render();
});


