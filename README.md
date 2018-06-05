# Dealer
A card dealer

## Dependencies
Dealer works off `Deck` - https://github.com/thomasparsons/deck

## High Card Wins
High card wins, requires a minimum of two players.
To deal the cards for the game:

```
const deck = Deck({ shuffle: true });
const deal = HighCardWins({ deck, players: 2 });
console.log(deal);
```

## Blackjack
Blackjack, requires a minimum of two players, the first player is the house/dealer.
To deal the cards for the game:

```
const deck = Deck({ shuffle: true });
const deal = Blackjack({ deck, players: 3 });
console.log(deal);
```
this will return you, the hands for each player, as well as the rest of the deck for future drawers and hands.
