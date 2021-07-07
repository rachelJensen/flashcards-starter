/*the Round class will take responses and records these guesses as well as if they are correct or incorrect. The currentCard should be be the first Card in the Deck at the start of the Round*/
const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');


describe('Round', function() {
  let card1, card2, card3;
  let deck;
  let round;
  //
  beforeEach(function() {
    card1 = new Card(1, 'Who is Rachel\'s favorite learning buddy?', ['Lady', 'Flooficorn', 'Dino Floof'], 'Lady');
    card2 = new Card(2, 'What is Rachel\'s favorite drink?', ['Topo', 'Coffee', 'Water'], 'Coffee');
    card3 = new Card(3, 'What is Rachel\'s favorite tarot card?', ['Death', 'Two of Pentacles', 'The Chariot'], 'The Chariot');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck of cards to play with', function() {
    expect(round.deck).to.be.a('array');
    expect(round.deck[0]).to.be.an.instanceof(Card);
    expect(round.numberOfCards).to.equal(3);
  });

  it.skip('should be able to draw a card', function() {
    //returnCurrentCard is a method that returns the card being played
    round.returnCurrentCard();

    expect(round.currentCard).to.equal(card1)
  });

  it.skip('should update count the number of turns', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn('Dino Floof');

    expect(round.turns).to.equal(1);

  });

  it.skip('should evalute if guess is incorrect', function() {
    let answer = round.takeTurn('Flooficorn');

    expect(answer).to.equal('incorrect!');
  });

  it.skip('should evalute if guess is correct', function() {
    let answer = round.takeTurn('Lady');

    expect(answer).to.equal('correct!');
  });

  it.skip('should store incorrect guesses', function() {
    //takeTurn()
    round.takeTurn('Dino Floof');
    //incorrectGuesses array
    expect(round.incorrectAnswers).to.be.a('array');
    //collect the ids of incorrectly guessed cards
    expect(round.incorrectAnswers[0]).to.equal(0);
  });

  it.skip('should update the currentCard to the next card in deck', function() {
    //takeTurn();
    round.takeTurn('Lady');

    expect(round.currentCard).to.equal(card2)
  });

  it.skip('should calculate the percentage of correct guesses', function() {

    round.takeTurn('Lady'); //should be correct
    round.takeTurn('Topo'); //should be incorrect
    //calculatePercentageCorrect()
    let percentRight = round.calculatePercentageCorrect();

    expect(percentRight).to.equal(50);
  });

  it.skip('should end the round when all the cards have been played', function() {
    round.takeTurn('Lady');
    round.takeTurn('Topo');
    round.takeTurn('The Chariot');
    //endRound();
    let message = round.endRound();
    //message "**Round over!** You answered x% of the questions correctly!"
    expect(message).to.equal('**Round over!** You answered 67% of the questions correctly!')
  });
});
