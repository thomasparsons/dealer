'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('./');

var INITIAL_HAND_SIZE = 2;

function deal(props) {
  if (!props || !props.deck) {
    throw new Error('blackjack requires a deck');
  }

  var deck = props.deck,
      players = props.players;


  if (!players || isNaN(players) || // eslint-disable-line
  players < 2) {
    throw new Error('blackjack requires at least two players, including the dealer');
  }

  var hands = [];

  for (var i = 0; i < players; i += 1) {
    hands.push(deck.slice(0, INITIAL_HAND_SIZE));
    deck.splice(0, INITIAL_HAND_SIZE);
  }

  return {
    availableDeck: deck,
    hands: hands
  };
}

exports.default = {
  deal: deal,
  hit: function hit(p) {
    return (0, _.hit)(p);
  }
};