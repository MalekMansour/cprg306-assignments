"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect, onDeleteItem }) => {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
      }, {})
    : null;

  return (
    <div>
      <div className="flex space-x-10 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-6 py-1 rounded-lg ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-blue-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-blue-300"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupByCategory((prev) => !prev)}
          className={`px-4 py-2 rounded-lg ${
            groupByCategory ? "bg-green-500 text-white" : "bg-red-500"
          }`}
        >
          Group by Category
        </button>
      </div>

      <ul className="space-y-4">
        {groupByCategory
          ? Object.keys(groupedItems).map((category) => (
              <div key={category}>
                <h3 className="capitalize text-xl font-bold">{category}</h3>
                <ul>
                  {groupedItems[category].map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-start items-center space-x-0" 
                    >
                      <button
                        onClick={() => onDeleteItem(item.id)}
                        className="bg-red-500 text-white p-2 rounded mr-2" 
                      >
                        X
                      </button>
                      <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                        className="flex-grow"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : sortedItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-start items-center space-x-2" 
              >
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="bg-red-500 text-white p-2 rounded mr-2" 
                >
                  X
                </button>
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={() => onItemSelect(item)}
                  className="flex-grow"
                />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
