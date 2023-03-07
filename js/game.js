// /----- constants -----/
// -define the array of cards
var allFrontCards = [
    { img: 'imgs/birman-cat.png'},
    { img: 'imgs/bombay-cat.png'},
    { img: 'imgs/British-Shorthair-Cat-PNG-File.png'},
    { img: 'imgs/Golden-Abyssinian-Cat-PNG-File.png'},
    { img: 'imgs/Maine-Coon-Cat-PNG-Free-Download.png'},
    { img: 'imgs/Persian-Cat-Transparent.png'},
    { img: 'imgs/snowshoe-cat.png'},
    { img: 'imgs/Sphynx-Cat-PNG-Image.png'},
  ];
const backCard = 'imgs/pawprint.png';

// /----- state variables -----/
// -define the matched pair of cards
// -define the flipped pair of cards
let cards;

// /----- cached elements -----/
// -define results variable
// -define the init function
// -define the start function
// -define the timer function
const timerEl = document.getElementById('timer');

// /----- event listeners -----/
// -add variable when cards are flipped
// -add variable when start buttion is clicked
// -add variable when restart button is clicked
// -add variable when cards are unmatched


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
    cards = getShuffledCards();
    render();
  }

  function render() {

  }

  function getShuffledCards() {

  }