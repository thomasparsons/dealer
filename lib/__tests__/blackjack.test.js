/* eslint-disable no-undef */
import { Deck } from 'deck';
import { Blackjack } from '../';

test('Create deck, returns back 52 cards', () => {
  const deck = Deck();
  expect(deck.length).toBe(52);
});

// errors

test('Nothing provided to blackjack, throws error', () => {
  function blackjack() {
    Blackjack.deal();
  }
  expect(blackjack).toThrowError('blackjack requires a deck');
});

test('No deck provided to blackjack, throws error', () => {
  function blackjack() {
    Blackjack.deal({ });
  }
  expect(blackjack).toThrowError('blackjack requires a deck');
});

test('No players to blackjack, throws error', () => {
  const deck = Deck();
  function blackjack() {
    Blackjack.deal({ deck });
  }
  expect(blackjack).toThrowError('blackjack requires at least two players, including the dealer');
});

test('0 players provided, throws error', () => {
  const deck = Deck();
  function blackjack() {
    Blackjack.deal({ deck, players: 0 });
  }
  expect(blackjack).toThrowError('blackjack requires at least two players, including the dealer');
});

test('1 player provided, throws error', () => {
  const deck = Deck();
  function blackjack() {
    Blackjack.deal({ deck, players: 1 });
  }
  expect(blackjack).toThrowError('blackjack requires at least two players, including the dealer');
});

test('number string player provided, throws error', () => {
  const deck = Deck();
  function blackjack() {
    Blackjack.deal({ deck, players: 'one' });
  }
  expect(blackjack).toThrowError('blackjack requires at least two players, including the dealer');
});

// deal

test('2 players returns 2 hands, both with two cards, unshuffled deck, returns ace and 2 of spades, 3 and 4 of spades', () => {
  const deck = Deck();
  const deal = Blackjack.deal({ deck, players: 2 });

  expect(deal.availableDeck.length).toEqual(48);
  expect(deal.hands.length).toEqual(2);
  expect(deal.hands[0][0]).toEqual({ card: 1, suit: 'spades' });
  expect(deal.hands[0][1]).toEqual({ card: 2, suit: 'spades' });
  expect(deal.hands[1][0]).toEqual({ card: 3, suit: 'spades' });
  expect(deal.hands[1][1]).toEqual({ card: 4, suit: 'spades' });
});

// hit

test('hit after deal', () => {
  const deck = Deck({ });
  const deal = Blackjack.deal({ deck, players: 2 });
  const h = Blackjack.hit({ deck: deal.availableDeck });
  expect(h.deck.length).toEqual(47);
  expect(h.cards[0]).toEqual({ card: 5, suit: 'spades' });
});

