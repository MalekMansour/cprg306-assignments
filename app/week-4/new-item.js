"use client";

import React, { useState } from 'react';

const QuantityComponent = () => {
  const [quantity, setQuantity] = useState(1); 

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1); 
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); 
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Quantity: {quantity}</h1>
      <button 
        onClick={decrement} 
        disabled={quantity === 1}
        aria-label="Decrease quantity"
        style={{ fontSize: '20px', margin: '5px' }}
      >
        -
      </button>
      <button 
        onClick={increment} 
        disabled={quantity === 20}
        aria-label="Increase quantity"
        style={{ fontSize: '20px', margin: '5px' }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityComponent;
