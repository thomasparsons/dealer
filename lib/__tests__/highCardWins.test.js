import { Deck } from 'deck';
import { HighCardWins } from '../';

test('Create deck, returns back 52 cards', () => {
  const deck = Deck();
  expect(deck.length).toBe(52);
});

// errors

test('Nothing provided to high card wins, throws error', () => {
  function highCardWins() {
    HighCardWins();
  }
  expect(highCardWins).toThrowError('high card wins requires a deck');
});

test('No deck provided to high card wins, throws error', () => {
  function highCardWins() {
    HighCardWins({ });
  }
  expect(highCardWins).toThrowError('high card wins requires a deck');
});

test('No players to high card wins, throws error', () => {
  const deck = Deck();
  function highCardWins() {
    HighCardWins({ deck });
  }
  expect(highCardWins).toThrowError('high card wins requires at least two players');
});

test('0 players provided, throws error', () => {
  const deck = Deck();
  function highCardWins() {
    HighCardWins({ deck, players: 0 });
  }
  expect(highCardWins).toThrowError('high card wins requires at least two players');
});

test('1 player provided, throws error', () => {
  const deck = Deck();
  function highCardWins() {
    HighCardWins({ deck, players: 1 });
  }
  expect(highCardWins).toThrowError('high card wins requires at least two players');
});

test('number string player provided, throws error', () => {
  const deck = Deck();
  function highCardWins() {
    HighCardWins({ deck, players: '1' });
  }
  expect(highCardWins).toThrowError('high card wins requires at least two players');
});

// deal

test('2 players returns 2 cards, unshuffled deck, returns ace and 2 of spades', () => {
  const deck = Deck();
  const deal = HighCardWins({ deck, players: 2 });

  expect(deal.length).toEqual(2);
  expect(deal[0]).toEqual({ card: 1, suit: 'spades' });
  expect(deal[1]).toEqual({ card: 2, suit: 'spades' });
});

test('6 players returns 6 cards, unshuffled deck, returns ace through 6 of spades', () => {
  const deck = Deck();
  const deal = HighCardWins({ deck, players: 6 });

  expect(deal.length).toEqual(6);
  expect(deal[0]).toEqual({ card: 1, suit: 'spades' });
  expect(deal[1]).toEqual({ card: 2, suit: 'spades' });
  expect(deal[2]).toEqual({ card: 3, suit: 'spades' });
  expect(deal[3]).toEqual({ card: 4, suit: 'spades' });
  expect(deal[4]).toEqual({ card: 5, suit: 'spades' });
  expect(deal[5]).toEqual({ card: 6, suit: 'spades' });
});

test('shuffled, 2 players returns 2 cards, returns 2 random cards', () => {
  const deck = Deck({ shuffle: true });
  const deal = HighCardWins({ deck, players: 2 });
  expect(deal.length).toEqual(2);
});
