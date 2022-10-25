import Card from "./Card";

class CardDeck {
  private arrayCards: Card[] = [];

  constructor(
    public suit: string[] = ['♠', '♣', '♥', '♦'],
    public rank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  ) {

    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.arrayCards.push(new Card(suit[i], rank[j]));
      }
    }
  }

  getCard(): Card {
    const rand = Math.floor(Math.random() * this.arrayCards.length);
    const card: Card = this.arrayCards[rand];
    this.arrayCards.splice(rand, 1);
    return card;


  }


  getCards(howMany: number): Card[] {
    const arrCards = [];
    for (let i = 0; i < howMany; i++) {
      arrCards.push(this.getCard());
    }
    return arrCards;
  }


}

export default CardDeck;