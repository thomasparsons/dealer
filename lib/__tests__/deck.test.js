import { Deck } from 'deck';

test('Create deck from deck package', () => {
  const deck = Deck();
  expect(deck.length).toBe(52);
});
