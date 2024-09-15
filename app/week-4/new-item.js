'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="bg-black text-white p-5 rounded-md flex items-center justify-between">
      <button
        onClick={decrement}
        className={`text-blue-500 px-3 py-1 rounded-md ${
          quantity === 1 ? 'text-gray-500 cursor-not-allowed' : ''
        }`}
        disabled={quantity === 1}
      >
        -
      </button>

      <span className="text-lg mx-4">{quantity}</span>

      <button
        onClick={increment}
        className={`text-blue-500 px-3 py-1 rounded-md ${
          quantity === 20 ? 'text-gray-500 cursor-not-allowed' : ''
        }`}
        disabled={quantity === 20}
      >
        +
      </button>
    </div>
  );
}
