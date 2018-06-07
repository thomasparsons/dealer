export default function burn(props) {
  if (!props || !props.deck) {
    throw new Error('burn requires a deck');
  }
  const { deck } = props;
  let { size } = props;

  size = size || 1;

  if (deck.length < size) {
    throw new Error('there are not enough cards left');
  }

  return {
    deck: deck.splice(size, deck.length),
  };
}