/* eslint-disable no-undef */
import { Deck } from 'deck';
import { hit } from '../';

// errors
test('Nothing provided to hit, throws error', () => {
  function h() { hit(); }
  expect(h).toThrowError('hit requires a deck');
});

test('No deck provided to hit, throws error', () => {
  function h() { hit({ }); }
  expect(h).toThrowError('hit requires a deck');
});

test('No cards left in deck, throws error', () => {
  function h() { hit({ deck: [] }); }
  expect(h).toThrowError('there are not enough cards left');
});

// hit
test('Hit 1 card, returns back 1 card, and a deck of 51 cards', () => {
  const deck = Deck();
  const h = hit({ deck });
  expect(h.cards.length).toEqual(1);
  expect(h.cards[0]).toEqual({ card: 1, suit: 'spades' });
  expect(h.deck.length).toEqual(51);
  expect(h.deck[0]).toEqual({ card: 2, suit: 'spades' });
});

test('Hit 2 cards, returns back 2 cards, and a deck of 50 cards', () => {
  const deck = Deck();
  const h = hit({ deck, size: 2 });
  expect(h.cards.length).toEqual(2);
  expect(h.cards[0]).toEqual({ card: 1, suit: 'spades' });
  expect(h.cards[1]).toEqual({ card: 2, suit: 'spades' });
  expect(h.deck.length).toEqual(50);
  expect(h.deck[0]).toEqual({ card: 3, suit: 'spades' });
});

test('Hit 3 cards, returns back 3 cards, and a deck of 49 cards', () => {
  const deck = Deck();
  const h = hit({ deck, size: 3 });
  expect(h.cards.length).toEqual(3);
  expect(h.cards[0]).toEqual({ card: 1, suit: 'spades' });
  expect(h.cards[1]).toEqual({ card: 2, suit: 'spades' });
  expect(h.cards[2]).toEqual({ card: 3, suit: 'spades' });
  expect(h.deck.length).toEqual(49);
  expect(h.deck[0]).toEqual({ card: 4, suit: 'spades' });
});
