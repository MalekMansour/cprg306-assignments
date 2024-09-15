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
    <div>
      <h1>Quantity: {quantity}</h1>
      <button onClick={decrement} disabled={quantity === 1}>
        Decrement
      </button>
      <button onClick={increment} disabled={quantity === 20}>
        Increment
      </button>
    </div>
  );
};

export default QuantityComponent;