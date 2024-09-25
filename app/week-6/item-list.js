import React, { useState, useEffect } from 'react';
import Item from './item';
import itemsData from './item.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name'); 
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData); 
  }, []);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortBy === 'groupByCategory' ? items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {}) : null;

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('groupByCategory')}
          className={`px-4 py-2 ${sortBy === 'groupByCategory' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Group by Category
        </button>
      </div>

      {sortBy === 'groupByCategory' && groupedItems && (
        <div>
          {Object.keys(groupedItems).sort().map((category) => (
            <div key={category}>
              <h2 className="text-xl capitalize">{category}</h2>
              <ul className="space-y-2">
                {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {sortBy !== 'groupByCategory' && (
        <ul className="space-y-4">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
