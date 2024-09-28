"use client"; 

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item'; 
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-black-20 p-3">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white-700 mb-6">Shopping List</h1>

        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;
