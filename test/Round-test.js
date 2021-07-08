const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');


describe('Round', function() {
  let card1, card2, card3;
  let deck;
  let round;

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

  it('should be able to draw a card', function() {
    round.returnCurrentCard();

    expect(round.currentCard).to.equal(card1)
  });

  it('should count the number of turns', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn('Dino Floof');

    expect(round.turns).to.equal(1);
  });

  it('should count the number of turns regardless of correct answer', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn('Lady');

    expect(round.turns).to.equal(1);
  });

  it('should evalute if guess is incorrect', function() {
    let answer = round.takeTurn('Flooficorn');

    expect(answer).to.equal('incorrect!');
  });

  it('should evalute if guess is correct', function() {
    let answer = round.takeTurn('Lady');

    expect(answer).to.equal('correct!');
  });

  it('should store incorrect guesses', function() {
    round.takeTurn('Dino Floof');

    expect(round.incorrectAnswers).to.be.a('array');
    expect(round.incorrectAnswers[0]).to.equal(0);
  });

  it('should update the currentCard to the next card in deck', function() {
    round.takeTurn('Lady');

    expect(round.currentCard).to.equal(card2)
  });

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('Lady'); //should be correct
    round.takeTurn('Topo'); //should be incorrect

    let percentRight = round.calculatePercentageCorrect();

    expect(percentRight).to.equal(50);
  });

  it('should end the round when all the cards have been played', function() {
    round.takeTurn('Lady');
    round.takeTurn('Topo');
    round.takeTurn('The Chariot');

    let message = round.endRound();

    expect(message).to.equal('**Round over!** You answered 67% of the questions correctly!')
  });
});
