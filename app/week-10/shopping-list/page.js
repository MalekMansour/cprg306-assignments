import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import ItemList from './item-list';
import NewItem from './new-item'; 
import MealIdeas from './meal-ideas'; 
import { getItems, addItem } from '../_services/shopping-list-service';
import { useRouter } from 'next/router';

const Page = () => {
  const { user, firebaseSignOut } = useUserAuth();
  
  if (!user) {
    router.push('/');
    return null;
  }

  const [items, setItems] = useState([]); 
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems(user.uid); 
      setItems(fetchedItems); 
    };

    fetchItems();
  }, [user.uid]); 

  const handleAddItem = async (newItem) => {
    const itemId = await addItem(user.uid, newItem);

    setItems((prevItems) => [
      ...prevItems,
      { id: itemId, ...newItem } 
    ]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.split(',')[0].trim(); 
    setSelectedItemName(cleanedItemName); 
  };

  return (
    <main className="min-h-screen bg-black-20 p-3">
      <div className="max-w-xl mx-auto flex space-x-4"> 
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center text-white-700 mb-6">Shopping List</h1>
          <button onClick={firebaseSignOut} className="bg-red-500 text-white p-2 rounded mb-4">Logout</button>
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