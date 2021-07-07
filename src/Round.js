class Round {
  constructor(deckOfCards) {
    this.deck = deckOfCards.deck;
    this.numberOfCards = deckOfCards.countCards();

  }

  // takeTurn() {
  //   //create an instance of turn using argument as a guess
  //   //update the turn counter
  //   //check the answers
  //   //if answer is incorrect, add id to incorrect array
  //   //update the currentCard to be the next card in deck
  //return whether the answer was correct or incorrect
  // }
}

module.exports = Round;
