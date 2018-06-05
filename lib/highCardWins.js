export default function highCardWins(props) {
  if (!props || !props.deck) {
    throw new Error('high card wins requires a deck');
  }

  const { deck, players } = props;

  if (!players || isNaN(players) || players < 2) {
    throw new Error('high card wins requires at least two players');
  }

  return deck.slice(0, players);
}
