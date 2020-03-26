import React, { Component } from "react";
import './App.css';
import MemoryCard from './components/MemoryCard';

const generateDeck = () => {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`];
  const deck = [];
    for (let i = 0; i < 16; i++) {
      deck.push({
        symbol: symbols[i % 8],
        isFlipped: false
      });
    shuffle(deck);
    return deck;
    }
}
function shuffle(array) {
  const newArray = array.concat();
  newArray.sort(() => 0.5 - Math.random());
  return newArray;
}

class App extends Component {
    state = { 
      deck: generateDeck(),
      pickedCards: [] 
    }
  render() {
   const cardsJSX = this.state.deck.map((card, index) => {
     return  <MemoryCard />;
    }
   );

  return (
    <div className="App">
      <header className="App-header">
      <h1>Memory Game</h1>
      <h3>Match cards to win</h3>
      </header>
      <div>
      {cardsJSX.slice(0,4)}
      </div>
      <div>
      {cardsJSX.slice(4,8)}
      </div>
      <div>
      {cardsJSX.slice(8,12)}
      </div>
      <div>
      {cardsJSX.slice(12,16)}
      </div>
    </div>
    );
  }
}

export default App;
