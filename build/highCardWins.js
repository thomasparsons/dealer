'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function deal(props) {
  if (!props || !props.deck) {
    throw new Error('high card wins requires a deck');
  }

  var deck = props.deck,
      players = props.players;


  if (!players || Number.isNaN(players) || players < 2) {
    throw new Error('high card wins requires at least two players');
  }

  return deck.slice(0, players);
}

exports.default = {
  deal: deal
};