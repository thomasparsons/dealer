'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = burn;
function burn(props) {
  if (!props || !props.deck) {
    throw new Error('burn requires a deck');
  }
  var deck = props.deck;
  var size = deck.size;


  size = size || 1;

  if (deck.length < size) {
    throw new Error('there are not enough cards left');
  }

  return {
    deck: deck.splice(0, size)
  };
}