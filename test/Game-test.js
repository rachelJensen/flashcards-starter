const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const Game = require('../src/Game.js');
const prototypeQuestions = [{
    "id": 1,
    "question": 'Who is Rachel\'s favorite learning buddy?',
    "answers": ['Lady', 'Flooficorn', 'Dino Floof'],
    "correctAnswer": 'Lady'
  }, {
    "id": 2,
    "question": 'What is Rachel\'s favorite drink?',
    "answers": ['Topo', 'Coffee', 'Water'],
    "correctAnswer": 'Coffee'
  }, {
    "id": 3,
    "question": 'What is Rachel\'s favorite tarot card?',
    "answers": ['Death', 'Two of Pentacles', 'The Chariot'],
    "correctAnswer": 'The Chariot'
  }];

describe('The Game', function() {
  let game;

  beforeEach(function() {
    game = new Game;
    game.start();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instantiation of Game', function() {
    expect(game).to.be.an.instanceof(Game)
  });

  it('should be able to create Cards', function() {
    expect(game.cards[0]).to.be.an.instanceof(Card);
  });

  it('should be able to create a Deck with multiple Cards', function() {
    expect(game.deck).to.be.an.instanceof(Deck);
  });

  it('should be able to start a new Round', function() {
    expect(game.currentRound).be.an.instanceof(Round);
  });
});
