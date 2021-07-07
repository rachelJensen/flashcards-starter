const expect = require('chai').expect;
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Deck', function() {
  let deck;
  let card = new Card(1, 'Who is Rachel\'s favorite learning buddy?', ['Lady', 'Flooficorn', 'Dino Floof'], 'Lady')

  beforeEach(function() {
    deck = new Deck([card, card, card]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be an array of Cards', function() {
    expect(deck.deck).to.be.a('array');
    expect(deck.deck[0]).to.be.an.instanceof(Card);
});

  it('should be able to count how many cards in the deck', function() {
    let deckSize = deck.countCards();

    expect(deckSize).to.equal(3);
  });
});
