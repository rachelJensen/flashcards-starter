const Turn = require('../src/Turn.js');

class Round {
  constructor(deckOfCards) {
    this.deck = deckOfCards.deck;
    this.numberOfCards = deckOfCards.countCards();
    this.turns = 0;
    this.currentCard = this.deck[0];
    this.incorrectAnswers = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let play = new Turn(guess, this.currentCard);
    let isCorrect = play.giveFeedback();

    if (isCorrect === 'incorrect!') {
      this.incorrectAnswers.push(this.turns);
    }

    this.turns += 1;
    this.currentCard = this.deck[this.turns];
    return isCorrect;
  }

  calculatePercentageCorrect() {
    let percentRight = (this.turns - this.incorrectAnswers.length) / this.turns;
    return percentRight * 100;
  }

  endRound() {
    let percent = this.calculatePercentageCorrect().toFixed(0);
    console.log(`**Round over!** You answered ${percent}% of the questions correctly!`);
  }
}

module.exports = Round;
