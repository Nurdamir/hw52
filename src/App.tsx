import React, {useState} from 'react';
import './App.css';
import CardView from "./components/CardView/CardView"
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";





function App() {
  const [cards, setCards] = useState<Card[]>([]);


  const button = <button onClick={() => setCards([new Card('diams', '2')])}>Cards</button>

  let cardDeck = new CardDeck();

  console.log(cardDeck.getCards(5));

  if (cards.length === 0) {
    return (
      <div>
        Array is empty!
        {button}
      </div>
    )
  }

  return (
    <div className="App">
      {button}
      <CardView rank={'A'} suit={'♠'}/>
    </div>
  );
}

export default App;
