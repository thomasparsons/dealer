import { Deck } from 'deck';
import { Blackjack } from '../';

test('Create deck, returns back 52 cards', () => {
  const deck = Deck();
  expect(deck.length).toBe(52);
});

// errors

test('Nothing provided to blackjack, throws error', () => {
  function blackjack() {
    Blackjack();
  }
  expect(blackjack).toThrowError('blackjack requires a deck');
});

test('No deck provided to blackjack, throws error', () => {
  function blackjack() {
    Blackjack({ });
  }
  expect(blackjack).toThrowError('blackjack requires a deck');
});

test('No players to blackjack, throws error', () => {
  const deck = Deck();
  function blackjack() {
    Blackjack({ deck });
  }
  expect(blackjack).toThrowError('blackjack requires at least two players, including the dealer');
});

test('0 players provided, throws error', () => {
  const deck = Deck();
  function blackjack() {
    Blackjack({ deck, players: 0 });
  }
  expect(blackjack).toThrowError('blackjack requires at least two players, including the dealer');
});

test('1 player provided, throws error', () => {
  const deck = Deck();
  function blackjack() {
    Blackjack({ deck, players: 1 });
  }
  expect(blackjack).toThrowError('blackjack requires at least two players, including the dealer');
});

test('number string player provided, throws error', () => {
  const deck = Deck();
  function blackjack() {
    Blackjack({ deck, players: '1' });
  }
  expect(blackjack).toThrowError('blackjack requires at least two players, including the dealer');
});

// deal
