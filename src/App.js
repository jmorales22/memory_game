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
    }
    shuffle(deck);
    return deck;
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
    };

    pickCard = cardIndex => {
      if (this.state.deck[cardIndex].isFlipped === true) {
        return;
      }
      const cardToFlip = { ...this.state.deck[cardIndex] };
      cardToFlip.isFlipped = true;

      let newDeck = this.state.deck.map((card, index) => {
        if(cardIndex === index) {
        return cardToFlip;
        }
        return card;
      })
      
      let newPickedCards = this.state.pickedCards.concat(cardIndex);
      if(newPickedCards.length === 2){
        const card1Index = newPickedCards[0];
        const card2Index = newPickedCards[1];
        const firstCard = newDeck[card1Index];
        const secondCard = newDeck[card2Index];

        if(firstCard.symbol !== secondCard.symbol){
          setTimeout(() => {
            this.unflipCards(card1Index, card2Index);
            }, 1000);
          }
          newPickedCards = [];
        } 
      
      this.setState({
        deck: newDeck, 
        pickedCards: newPickedCards
      });
    };

    unflipCards = (card1Index, card2Index) => {
      const newDeck = this.state.deck.map(card => {
        return { ...card };
      });

      newDeck[card1Index].isFlipped = false;
      newDeck[card2Index].isFlipped = false;

      this.setState({
        deck: newDeck
      });

    };
    
  render() {
   const cardsJSX = this.state.deck.map((card, index) => {
     return  <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)}/>;
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
