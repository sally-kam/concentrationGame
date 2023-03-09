//----- constants -----/
//-define the array of cards
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
  let secondsRemaining = 90;
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('.result');
  let cardsChosen = [];
  let cardsChosenId = [];
  const cardsWon = [];
  const timerEl = document.querySelector(".timer");
  const modal = document.querySelector(".modal");
  const message = document.querySelector(".modal-message");
  const startModal = document.getElementById("startModal");
  const close1 = startModal.getElementsByClassName('close')[0];
  const timesModal = document.getElementById("timeModal");
  const close2 = timeModal.getElementsByClassName('close')[0];
  const startBtn = document.getElementById("startBtn");
  const againBtn = document.getElementById("playAgainBtn");

  startBtn.addEventListener("click", function() {
    // hide the start game modal
    startModal.style.display = "none";
  
    // start the timer and game logic
    startTimer();
    startGame();
  });

  againBtn.addEventListener('click', function () {
    timesModal.style.display = 'none';
    location.reload();
  });

//   close2.onclick = function() {
//     timesModal.style.display = "none";
//   }
// When the user clicks the button, open the modal 
window.onload = function() {
    startModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  close1.onclick = function() {
    startModal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      startModal.style.display = "none";
    }
  }
  function init() {
    timer = null;
    shuffle();
  }
  function shuffle() {
    cardsArray.sort(() => 0.5 - Math.random()); 
  }

  function startGame() {
    startmodal.style.display = "none";
    startTimer();
        // Start the timer and the game logic here
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
      timerEl.textContent = `STOP TIME`
      stopTimer();
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
      timerEl.textContent = `Time: ${secondsRemaining} seconds`;
  
      if (secondsRemaining < 0) {
        timesModal.style.display= "block",
        clearInterval(timerId),
        timerEl.textContent = `STOP TIME`
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
  
  function stopTimer() {
    clearInterval(timer);
  }


  createBoard();
  init();
  render();



