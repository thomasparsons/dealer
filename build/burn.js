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
  var size = props.size;


  size = size || 1;
  if (isNaN(size)) {
    // eslint-disable-line
    throw new Error('size must be an integer');
  }

  if (deck.length < size) {
    throw new Error('there are not enough cards left');
  }

  return {
    deck: deck.splice(size, deck.length)
  };
}