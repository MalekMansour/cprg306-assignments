"use client"; 

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item'; 
import MealIdeas from './meal-ideas'; 
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name
      .split(',')[0] 
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '') // Remove emojis
      .trim(); 

    setSelectedItemName(cleanedItemName); 
  };

  return (
    <main className="min-h-screen bg-black-20 p-3">
      <div className="max-w-xl mx-auto flex space-x-4"> 
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center text-white-700 mb-6">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} /> 
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} /> 
        </div>
      </div>
    </main>
  );
};

export default Page;
