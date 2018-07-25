export default function burn(props = {}) {
  const { deck } = props;
  if (!deck) {
    throw new Error('burn requires a deck');
  }

  let { size } = props;

  size = size || 1;
  if (isNaN(size)) { // eslint-disable-line
    throw new Error('size must be an integer');
  }

  if (deck.length < size) {
    throw new Error('there are not enough cards left');
  }

  return {
    deck: deck.splice(size, deck.length),
  };
}
