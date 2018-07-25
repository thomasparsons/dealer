function deal(props = {}) {
  const { deck, players } = props;
  if (!deck) {
    throw new Error('high card wins requires a deck');
  }

  if (
    !players
    || isNaN(players) // eslint-disable-line
    || players < 2
  ) {
    throw new Error('high card wins requires at least two players');
  }

  return deck.slice(0, players);
}

export default {
  deal,
};
