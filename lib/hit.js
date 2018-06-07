export default function hit(props) {
  if (!props || !props.deck) {
    throw new Error('hit requires a deck');
  }

  let { deck, size } = props;

  size = size || 1;

  if (deck.length < size) {
    throw new Error('there are not enough cards left');
  }

  const cards = deck.slice(0, size);
  deck = deck.splice(size, deck.length);

  return {
    deck,
    cards,
  };
}