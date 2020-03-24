import React, { Component } from "react";
import './MemoryCard.css';
import image from './digitalcrafts-logo-white-y.png';

class MemoryCard extends Component {
  render() {
    return (
        <div className="MemoryCard">
            <img src= { image } alt="Digital Crafts logo" />
        </div>
    );
  }
}

export default MemoryCard;
