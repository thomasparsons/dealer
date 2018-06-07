/* eslint-disable no-undef */
import { Deck } from 'deck';
import { burn } from '../';

// errors
test('Nothing provided to burn, throws error', () => {
  function b() { burn(); }
  expect(b).toThrowError('burn requires a deck');
});

test('No deck provided to burn, throws error', () => {
  function b() { burn({ }); }
  expect(b).toThrowError('burn requires a deck');
});

test('No cards left in deck, throws error (no size)', () => {
  function b() { burn({ deck: [] }); }
  expect(b).toThrowError('there are not enough cards left');
});

// Burn
test('Burn 1 card, returns back a deck of 51 cards', () => {
  const deck = Deck();
  const b = burn({ deck });
  expect(b.deck.length).toEqual(51);
  expect(b.deck[0]).toEqual({ card: 2, suit: 'spades' });
});

test('Burn 2 cards, returns back a deck of 50 cards', () => {
  const deck = Deck();
  const b = burn({ deck, size: 2 });
  expect(b.deck.length).toEqual(50);
  expect(b.deck[0]).toEqual({ card: 3, suit: 'spades' });
});

test('Burn 3 cards, returns back a deck of 49 cards', () => {
  const deck = Deck();
  const b = burn({ deck, size: 3 });
  expect(b.deck.length).toEqual(49);
  expect(b.deck[0]).toEqual({ card: 4, suit: 'spades' });
});
