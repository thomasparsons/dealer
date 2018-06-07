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
// test('', () => {
//   const deck = Deck();
//   const h = hit({ deck });
//   console.log(h);
// });
