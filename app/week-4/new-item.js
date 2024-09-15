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
    <div className="bg-[#181C14] text-white p-5 rounded-md flex items-center justify-between">
      <button
        onClick={decrement}
        className={`border-2 border-blue-500 px-3 py-1 rounded-md ${
          quantity === 1 ? 'bg-[#161D6F] text-white cursor-not-allowed' : 'bg-white text-blue-500'
        }`}
        disabled={quantity === 1}
      >
        -
      </button>

      <span className="text-lg mx-4">{quantity}</span>

      <button
        onClick={increment}
        className={`border-2 border-blue-500 px-3 py-1 rounded-md ${
          quantity === 20 ? 'bg-[#D2E0FB] text-white cursor-not-allowed' : 'bg-white text-blue-500'
        }`}
        disabled={quantity === 20}
      >
        +
      </button>
    </div>
  );
}
