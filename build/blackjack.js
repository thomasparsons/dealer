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


  if (!players || Number.isNaN(players) || players < 2) {
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
  hit: _.hit
};