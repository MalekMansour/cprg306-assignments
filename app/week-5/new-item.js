'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState(""); 
  const [category, setCategory] = useState("produce");
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

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
    <form onSubmit={handleSubmit} className="bg-[#1E201E] text-white p-5 rounded-md flex flex-col items-center justify-between">
      {/* Name Input Field */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        className="mb-4 p-2 text-black rounded-md"
        required 
      />

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 p-2 text-black rounded-md"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen">Frozen Foods</option>
        <option value="canned">Canned Goods</option>
        <option value="dry">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between w-full mb-4">
        <button
          type="button"
          onClick={decrement}
          className={`border-2 border-blue-900 px-3 py-1 rounded-md ${
            quantity === 1 ? 'bg-[#B4B4B8] text-white cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
          disabled={quantity === 1}
        >
          -
        </button>

        <span className="text-lg mx-4">{quantity}</span>

        <button
          type="button"
          onClick={increment}
          className={`border-2 border-blue-900 px-3 py-1 rounded-md ${
            quantity === 20 ? 'bg-[#B4B4B8] text-white cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
