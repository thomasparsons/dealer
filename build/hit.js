'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hit;
function hit(props) {
  if (!props || !props.deck) {
    throw new Error('hit requires a deck');
  }

  var deck = props.deck,
      size = props.size;


  size = size || 1;

  if (isNaN(size)) {
    // eslint-disable-line
    throw new Error('size must be an integer');
  }

  if (deck.length < size) {
    throw new Error('there are not enough cards left');
  }

  var cards = deck.slice(0, size);
  deck = deck.splice(size, deck.length);

  return {
    deck: deck,
    cards: cards
  };
}