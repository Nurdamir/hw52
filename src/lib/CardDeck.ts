import Card from "./Card";

class CardDeck {
  private arrayCards: Card[] = [];

  constructor(
    public suit: string[] = ['♠', '♣', '♥', '♦'],
    public rank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  ) {

    for (let i = 0; i < rank.length; i++) {
      for (let j = 0; j < suit.length; j++) {
        this.arrayCards.push(new Card(rank[i], suit[j]));
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