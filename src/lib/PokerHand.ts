import Card from "./Card";

class PokerHand {
  constructor(public cards: Card[]) {
  }

  getOutcome() {
    let arrRank = [];
    let arrSuit = [];


    for (let i = 0; i < this.cards.length; i++) {
      for (let j = 0; j < this.cards.length; j++) {
        if (this.cards[i].rank === this.cards[j].rank && this.cards[i].suit !== this.cards[j].suit) {
          arrRank.push(this.cards[j])
        } else if (this.cards[i].suit === this.cards[j].suit) {
          arrSuit.push(this.cards[j])
        }
      }
    }
    if (arrRank.length === 2) {
      return 'Одна пара!';
    } else if (arrRank.length === 4) {
      return 'Две пары!';
    } else if (arrRank.length === 6) {
      return 'Тройка!';
    } else if (arrRank.length === 17) {
      return 'Четверка!';
    } else if (arrSuit.length === 25) {
      return 'Флеш!';
    }
    return  '';
  }
}

export default PokerHand;