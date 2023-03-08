//----- constants -----/
//-define the array of cards
var allFrontCards = [
    { name: 'birman', img: 'imgs/birman-cat.png'},
    { name: 'birman', img: 'imgs/birman-cat.png'},
    { name: 'bombay', img: 'imgs/bombay-cat.png'},
    { name: 'bombay', img: 'imgs/bombay-cat.png'},
    { name: 'british', img: 'imgs/British-Shorthair-Cat-PNG-File.png'},
    { name: 'british', img: 'imgs/British-Shorthair-Cat-PNG-File.png'},
    { name: 'golden', img: 'imgs/Golden-Abyssinian-Cat-PNG-File.png'},
    { name: 'golden', img: 'imgs/Golden-Abyssinian-Cat-PNG-File.png'},
    { name: 'maine', img: 'imgs/Maine-Coon-Cat-PNG-Free-Download.png'},
    { name: 'maine', img: 'imgs/Maine-Coon-Cat-PNG-Free-Download.png'},
    { name: 'persian', img: 'imgs/Persian-Cat-Transparent.png'},
    { name: 'persian', img: 'imgs/Persian-Cat-Transparent.png'},
    { name: 'snowshoe', img: 'imgs/snowshoe-cat.png'},
    { name: 'snowshoe', img: 'imgs/snowshoe-cat.png'},
    { name: 'sphynx', img: 'imgs/Sphynx-Cat-PNG-Image.png'},
    { name: 'sphynx', img: 'imgs/Sphynx-Cat-PNG-Image.png'},
  ];
allFrontCards.sort(() => 0.5 - Math.random());

  const backCard = {img: 'imgs/pawprint.png'};
  const c
// /----- state variables -----/
// -define the matched pair of cards
// -define the flipped pair of cards
let flippedCard = false;
let cardOne, cardTwo;



// /----- cached elements -----/
// -define results variable
// -define the init function
// -define the start function
// -define the timer function
const timerEl = document.getElementById('timer');
const cards = document.querySelectorAll('.memory-card')
// /----- event listeners -----/
// -add variable when cards are flipped
// -add variable when start buttion is clicked
// -add variable when restart button is clicked
// -add variable when cards are unmatched
cards.forEach(card => card.addEventListener('click', flipCard));

// /----- functions -----/
init();
//initialize all state, then call render()
// -add init function
// -add render function
// -add timer function
// -add results function
// -add flipping card function
// -add click function
// -add shuffle function

function init() {
    remainingCards = getShuffledCards;
    renderCards();
  }

function renderCards() {
    // render the cards on the screen
    }
    
function getShuffledCards() {
    // shuffle the allFrontCards array and return it
    }
    
function startTimer() {
    // start the timer
    }
    
function stopTimer() {
    // stop the timer
    }
    
function displayResults() {
    // display the results
    }
    
function flipCard() {
    // flip the card over
    this.classList.add('flip');

    if (flippedCard) {
        //it has already flipped
    } else {
        flippedCard = true;
        cardOne = this;
        return;
    }
    cardTwo = this;
    flippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if (cardOne.dataset.data-pair === cardTwo.dataset.data-pair) {
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard)
}

function unflipCards() {
    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
    }, 1500);
}

function handleClick(event) {
    // handle a click on a card
    }
    
function shuffle(array) {
    // shuffle the array and return it
    }


