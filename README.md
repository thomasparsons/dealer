# Dealer
A card dealer

## Dependencies
Dealer works off `Deck` - https://github.com/thomasparsons/deck

## High Card Wins
High card wins, requires a minimum of two players.
To deal the cards for the game:

```const deck = Deck({ shuffle: true });
const deal = HighCardWins({ deck, players: 2 });
console.log(deal);
```
