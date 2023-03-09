//----- constants -----/
//-define the array of cards
const cardsArray = [
  { name: 'cat1', img: 'imgs/cat1.png' },
  { name: 'cat1', img: 'imgs/cat1.png' },
  { name: 'cat2', img: 'imgs/cat2.png' },
  { name: 'cat2', img: 'imgs/cat2.png' },
  { name: 'cat3', img: 'imgs/cat3.png' },
  { name: 'cat3', img: 'imgs/cat3.png' },
  { name: 'cat4', img: 'imgs/cat4.png' },
  { name: 'cat4', img: 'imgs/cat4.png' },
  { name: 'cat5', img: 'imgs/cat5.png' },
  { name: 'cat5', img: 'imgs/cat5.png' },
  { name: 'cat6', img: 'imgs/cat6.png' },
  { name: 'cat6', img: 'imgs/cat6.png' },
  { name: 'cat7', img: 'imgs/cat7.png' },
  { name: 'cat7', img: 'imgs/cat7.png' },
  { name: 'cat8', img: 'imgs/cat8.png' },
  { name: 'cat8', img: 'imgs/cat8.png' },
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
const startBtn = document.getElementById("startBtn");
const againBtn = document.getElementById("playAgainBtn");
const winModal = document.getElementById("winModal");
const newGameBtn = document.getElementById("newGameBtn");
const audio = new Audio("audio/meow1.mp3");
const backgroundMusic = new Audio("audio/backgroundmusic.mp3");

//   card.addEventListener('click', function() {
//     card.classList.toggle('flipped');
//   });

// Select all the cards
const cards = document.querySelectorAll('.grid-item');

// Loop through all the cards and add a click event listener to each
cards.forEach(card => {
  card.addEventListener('click', () => {
    flipCard(card);
  });
});



startBtn.addEventListener("click", function () {
  // hide the start game modal
  startModal.style.display = "none";
});

againBtn.addEventListener('click', function () {
  timesModal.style.display = 'none';
  location.reload();
});

newGameBtn.addEventListener('click', function () {
  winModal.style.display = 'none';
  location.reload();
})


// When the user clicks the button, open the modal 
window.onload = function () {
  startModal.style.display = "block";
  backgroundMusic.loop = true;
  backgroundMusic.play();
}

// When the user clicks on <span> (x), close the modal
close1.onclick = function () {
  startModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    startModal.style.display = "none";
  }
}

//add shuffle funciton to make cards shuffle
function shuffle() {
  cardsArray.sort(() => 0.5 - Math.random());
}
// function when you click the start game function
function startGame() {
  startModal.style.display = "none";
  startTimer();
}
function createBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', 'imgs/pawprint1.png');
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
    cards[firstCard].setAttribute('src', 'imgs/pawprint1.png');
    cards[secondCard].setAttribute('src', 'imgs/pawprint1.png');
    setTimeout(100);
  } else if (cardsChosen[0] === cardsChosen[1]) {
    setTimeout(100);
    cards[firstCard].removeEventListener('click', flipCard);
    cards[secondCard].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[firstCard].setAttribute('src', 'imgs/pawprint1.png');
    cards[secondCard].setAttribute('src', 'imgs/pawprint1.png');
    setTimeout(100);
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = 'Score: ' + cardsWon.length + '/8';

  if (cardsWon.length === cardsArray.length / 2) {
    winModal.style.display = 'block';
    timerEl.textContent = `STOP TIME`
  }
}

function flipCard(card) {
  audio.play();
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardsArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardsArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function startTimer() {
  timer = setInterval(function () {
    secondsRemaining--;
    timerEl.textContent = `Time: ${secondsRemaining} seconds`;

    if (secondsRemaining < 0) {
      timesModal.style.display = "block",
        clearInterval(timer),
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
shuffle();
render();



