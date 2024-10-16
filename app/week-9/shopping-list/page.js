"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserAuth } from '../_utils/auth-context'; 
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const { user } = useUserAuth();  
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');


  useEffect(() => {
    if (!user) {
      router.push('/new-item');  // landing page path
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name
      .split(',')[0]
      .trim();

    setSelectedItemName(cleanedItemName);
  };

  if (!user) {
    return <p>Redirecting...</p>;
  }

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
