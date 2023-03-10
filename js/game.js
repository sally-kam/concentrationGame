//----- constants -----//
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
//audio for the meow and the backgroundmusic
const audio = new Audio("audio/meow1.mp3");
const backgroundMusic = new Audio("audio/backgroundmusic.mp3");

/*----- state variables -----*/
let timer;
let secondsRemaining = 60; //assigns to 60 seconds for countdown
let cardsChosen = []; //empty array to keep track of the cards the player has chosen
let cardsChosenId = []; //empty rray to keep track of the cardsId that the player has chosen
let cardsWon = []; // empty array to keep track of the pairs that are matched.


/*----- cached elements  -----*/
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('.result');
const timerEl = document.querySelector(".timer");
const cards = document.querySelectorAll('.grid-item');
//grabbing the pop up modals for the start of the game, losing the game, and winning the game
const startModal = document.getElementById("startModal");
const timesModal = document.getElementById("timeModal");
const winModal = document.getElementById("winModal");
//grabbing the buttons for the start, play again, and new game
const startBtn = document.getElementById("startBtn");
const againBtn = document.getElementById("playAgainBtn");
const newGameBtn = document.getElementById("newGameBtn");



/*----- event listeners -----*/
// Loop through all the cards and add a click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    flipCard(card);
  });
});
// hides the start game modal and starts the game and timer
startBtn.addEventListener("click", () => {
  startModal.style.display = "none";
  startTimer();
});
// hide the times up modal when you lose the game and time runs out
againBtn.addEventListener('click', () => {
  timesModal.style.display = 'none';
  location.reload();
});
//hides the new game modal after you win the game
newGameBtn.addEventListener('click', () => {
  winModal.style.display = 'none';
  location.reload();
})


/*----- functions -----*/
function init() {
  startModal.style.display = "block";
  backgroundMusic.loop = true;
  backgroundMusic.play();
}

//add shuffle function to make cards shuffle
function shuffle() {
  cardsArray.sort(() => 0.5 - Math.random());
}

//function to create the game board by looping over the cardsArray to create a card for each element in the array. then append to the grid area in the html document.
function createBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    let card = document.createElement('img');
    card.src = 'imgs/pawprint1.png';
    card.dataset.id = i;
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}
//function to check if the 2 flipped cards the player clicked on are matched
function checkForMatch() {
  //cards variable selects the img elements  
  let cards = document.querySelectorAll('img');
  // selects the cards the player has chosen to compare them for a match
  const firstCard = cardsChosenId[0];
  const secondCard = cardsChosenId[1];
  // if the same card was clicked twice, it can flip back to the default card
  if (firstCard == secondCard) {
    setTimeout(() => {
      if (cards[firstCard] && cards[secondCard]) {
        cards[firstCard].src = 'imgs/pawprint1.png';
        cards[secondCard].src = 'imgs/pawprint1.png';
      }
    }, 100);
    // if the 2 cards chosen are matched, it removes the click event listener to lock them in the flipped image and keeps track of the matched card pairs by pushing.
  } else if (cardsChosen[0] === cardsChosen[1]) {
    setTimeout(() => {
      if (cards[firstCard] && cards[secondCard]) {
        cards[firstCard].removeEventListener('click', flipCard);
        cards[secondCard].removeEventListener('click', flipCard);
      }
    }, 100);
    cardsWon.push(cardsChosen);
    // if the 2 cards chosen are not matched, it flips both cards back.
  } else {
    setTimeout(() => {
      if (cards[firstCard] && cards[secondCard]) {
        cards[firstCard].src = 'imgs/pawprint1.png';
        cards[secondCard].src = 'imgs/pawprint1.png';
      }
    }, 100);
  }
  //reset the arrays so the player can click two new cards.
  cardsChosen = [];
  cardsChosenId = [];
  //updates the score results
  resultDisplay.innerText = `Score: ${cardsWon.length}/8`;
  //the card pairs is equal to half of cards in the cardsArray and displays the winning pop-up modal
  if (cardsWon.length === cardsArray.length / 2) {
    timerEl.innerText = 'STOP TIME';
    winModal.style.display = 'block';
  }
}

//function to flip the card when its clicked. 
function flipCard() {
  audio.play();
  let cardId = this.dataset.id; //gets the data of the clicked card
  cardsChosen.push(cardsArray[cardId].name); //// the name of the clicked card is added to the cardsChosen array
  cardsChosenId.push(cardId); //card ID is added to the cardsChosenId array
  this.src = cardsArray[cardId].img; //gets the img property from the cardsArray through the cardId index variable.
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  } //  //if 2 cards are chosen, it gives time for the checkformatch function to detect a match.
}
// function to start the coundown timer by 1 second.
function startTimer() {
  timer = setInterval(function () {
    secondsRemaining--;
    timerEl.innerText = 'Time: ' + secondsRemaining + ' seconds';
    // when timer is less than 0, the function stops and displays the losing pop-up modal
    if (secondsRemaining < 0) {
      timesModal.style.display = "block",
        clearInterval(timer),
        timerEl.textContent = `STOP TIME`
    }
  }, 1000);
}
// render function is responsible to call the other functions to initialize and start the game
function render() {
  checkForMatch();
  createBoard();
  shuffle();
}

render();
init();



