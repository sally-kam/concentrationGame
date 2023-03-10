<main align="center" style="font-family: 'cursive'";>

# <strong><em> Cat Concentration </em></strong>

![Markdown-mark](imgs/gamescreenshot.png)

### [Live Demo](https://sally-kam.github.io/concentrationGame/) 

</main>

---

## Description: 
This browser-based game is a cat-themed matching card game where all the cards are laid out face down in a 4x4 grid on the screen and the player chooses two cards to flip face up for each turn. The goal is to match the pairs of these cute cats within the time limit!

---

## Technologies used:
![Markdown-mark](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Markdown-mark](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![Markdown-mark](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Markdown-mark](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Markdown-mark](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)

---

## Getting Started: 
1. Press the <kbd>Start Game</kbd> button to start the game
![Markdown-mark](imgs/startscreenshot.png)
2. Match the pairs in 60 seconds
3. If you match the pairs before the timer runs out, you win the game!
4. Press <kbd>New Game</kbd> button to start a new game.
![Markdown-mark](imgs/newgamescreenshot.png)
5. If you didn't match the pairs before the timer runs out, you lose the game!
6. Press <kbd>Play Again</kbd> button to play again.
![Markdown-mark](imgs/playagainscreenshot.png)

---

## Next Steps:

* adjust CSS to make the game mobile 
* add easy, medium, and hard levels to the game
* add a flip card animation
* add a reset button during the game if the player wants to start over in the middle of the game
* add audio for winning and losing the game.


---

## Interesting Code

The checkForMatch function determines if the player chose 2 cards that are matched. With this function, it had the following actions:
* flips the card back if the same card is clicked twice
* if the 2 cards are matched, it stays in the flipped card image by removing the click event listener and pushes the card pairs to the cardsWon array.
* it updates the score results on the display
* it displays the winning pop-up modal if all the cards are matched
* uses setTimeout to flip the cards back or remove the click event listener in order for the player to see the flipped cards for 100ms.

```js
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
    // if 2 cards chosen are matched, it removes the click event listener to lock them in the flipped image and keeps track of the matched card pairs by pushing.
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
```

The flipCard function is called when the player clicks on the card so the card can flip. With this function it has the following actions:
* plays a meow sound when a card is clicked
* calls the checkForMatch function to determine if the 2 cards flipped are a match for 100ms using setTimeout.

```js
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
```

---

## Sharing My Experience

My biggest challenge was the functionality of checking for a match and flipping the card. I had to implement a lot of setTimeout function to make sure the card flips back and remove some event listener methods or if statements for some functions.

My key learning/takeaways from building this browser game is to always check if your function is working with console log at every step so you won't get lost in your code and you would be able to detect the error instead of going back. 










