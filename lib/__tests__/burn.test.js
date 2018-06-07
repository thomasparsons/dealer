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

// burn

// test('', () => {
//   const deck = Deck();
//   const b = burn({ deck });
//   console.log(b);
// });
