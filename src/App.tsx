import React, {useState} from 'react';
import './App.css';
import CardView from "./components/CardView/CardView"
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";


let text: string = '';

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  let cardDeck = new CardDeck();

  const CardsState = function () {
    const cardsArray = cardDeck.getCards(5);
    setCards(cardsArray);
    const pokerHand = new PokerHand(cardsArray);

    text = pokerHand.getOutcome();
  }

  const button = <button onClick={CardsState}>Раздать карты</button>

  if (cards.length === 0) {
    return (
      <div>
        {button}
      </div>
    )
  }

  return (
    <div className="App">
      {button}
      <CardView rank={cards[0].rank} suit={cards[0].suit}/>
      <CardView rank={cards[1].rank} suit={cards[1].suit}/>
      <CardView rank={cards[2].rank} suit={cards[2].suit}/>
      <CardView rank={cards[3].rank} suit={cards[3].suit}/>
      <CardView rank={cards[4].rank} suit={cards[4].suit}/>
      <div>{text}</div>
    </div>
  );
}

export default App;
