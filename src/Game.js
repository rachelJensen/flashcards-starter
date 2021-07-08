const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

class Game {
  constructor() {
    this.data = prototypeQuestions;
    this.cards = [];
    this.deck = {};
    this.currentRound = {};
  }

  start() {
    this.cards = this.data.map(cardInfo => {
      return new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)
    });

    this.deck = new Deck(this.cards);

    this.currentRound = new Round(this.deck)

    this.printMessage(this.deck, this.currentRound);

    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${this.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
