# Dealer
A card dealer

## Dependencies
Dealer works off `Deck` - https://github.com/thomasparsons/deck

## Burn & Hit
Both `burn()` and `hit()` require a deck to be passed in, and both accept an optional `size` param (defaults to `1`)

## High Card Wins
High card wins, requires a minimum of two players.
To deal the cards for the game:

```
const deck = Deck({ shuffle: true });
const deal = HighCardWins.deal({ deck, players: 2 });
console.log(deal);
```

## Blackjack
Blackjack, requires a minimum of two players, the first player is the house/dealer.
To deal the cards for the game:

```
const deck = Deck({ shuffle: true });
const deal = Blackjack.deal({ deck, players: 3 });
console.log(deal);
```
this will return you, the hands for each player, as well as the rest of the deck for future drawers and hands.

You can then `hit` on the deal like so:

```
const deck = Deck({ shuffle: true });
const deal = Blackjack.deal({ deck, players: 3 });
console.log(Blackjack.hit({ deck: deal.availableDeck }));
```

