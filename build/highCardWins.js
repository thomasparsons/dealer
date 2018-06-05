'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = highCardWins;
function highCardWins(props) {
  if (!props || !props.deck) {
    throw new Error('high card wins requires a deck');
  }

  var deck = props.deck,
      players = props.players;


  if (!players || isNaN(players) || players < 2) {
    throw new Error('high card wins requires at least two players');
  }

  return deck.slice(0, players);
}