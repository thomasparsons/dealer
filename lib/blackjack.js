import { hit } from './';

const INITIAL_HAND_SIZE = 2;

function deal(props) {
  if (!props || !props.deck) {
    throw new Error('blackjack requires a deck');
  }

  const { deck, players } = props;

  if (
    !players ||
    isNaN(players) || // eslint-disable-line
    players < 2
  ) {
    throw new Error('blackjack requires at least two players, including the dealer');
  }

  const hands = [];

  for (let i = 0; i < players; i += 1) {
    hands.push(deck.slice(0, INITIAL_HAND_SIZE));
    deck.splice(0, INITIAL_HAND_SIZE);
  }

  return {
    availableDeck: deck,
    hands,
  };
}

export default {
  deal,
  hit: p => hit(p),
};
