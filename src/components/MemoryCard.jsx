import React, { Component } from "react";
import './MemoryCard.css';
import image from './digitalcrafts-logo-white-y.png';

class MemoryCard extends Component {
    state = { isFlipped: false }

    clickHandler = () => {
        this.setState( { isFlipped: !this.state.isFlipped });
    }
  render() {
      const { isFlipped } = this.state;

      const memoryCardInnerClass = 
      "MemoryCardInner" + (isFlipped === true ? " flipped" : "")

    return ( 

        <div className="MemoryCard" onClick= { this.clickHandler.bind(this) }>
            <div className= { memoryCardInnerClass }>
                <div className="MemoryCardBack">
                    <img src= { image } alt="Digital Crafts logo" />
                </div>
                <div className="MemoryCardFront">
                    ∆
                </div>
            </div>
        </div>
        );
    }
}


export default MemoryCard;
