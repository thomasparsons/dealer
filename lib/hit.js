export default function hit(props = {}) {
  let { deck, size } = props;
  if (!deck) {
    throw new Error('hit requires a deck');
  }

  size = size || 1;

  if (isNaN(size)) { // eslint-disable-line
    throw new Error('size must be an integer');
  }

  if (deck.length < size) {
    throw new Error('there are not enough cards left');
  }

  const cards = deck.slice(0, size);
  deck = deck.splice(size, deck.length);

  return {
    cards,
    deck,
  };
}
