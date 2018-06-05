export default function blackjack(props) {
  if (!props || !props.deck) {
    throw new Error('blackjack requires a deck');
  }

  const { deck, players } = props;

  if (!players || isNaN(players) || players < 2) {
    throw new Error('blackjack requires at least two players, including the dealer');
  }

}
