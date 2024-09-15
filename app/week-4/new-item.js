'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="bg-[#1E201E] text-white p-5 rounded-md flex items-center justify-between">
      <button
        onClick={decrement}
        className={`border-2 border-blue-800 px-3 py-1 rounded-md ${
          quantity === 1 ? 'bg-[#B4B4B8] text-white cursor-not-allowed' : 'bg-white text-blue-800'
        }`}
        disabled={quantity === 1}
      >
        -
      </button>

      <span className="text-lg mx-4">{quantity}</span>

      <button
        onClick={increment}
        className={`border-2 border-blue-900 px-3 py-1 rounded-md ${
          quantity === 20 ? 'bg-[#B4B4B8] text-white cursor-not-allowed' : 'bg-blue-500 text-white'
        }`}
        disabled={quantity === 20}
      >
        +
      </button>
    </div>
  );
}
