"use client"; // This is a client-side component

import React, { useEffect, useState } from 'react';

// API fetching function to get meal ideas based on the ingredient
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || []; // Return an empty array if no meals are found
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]); // State to store the fetched meals

  // Function to load meal ideas
  const loadMealIdeas = async () => {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  };

  // useEffect to load meal ideas whenever the ingredient changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas(); // Fetch meal ideas if ingredient is provided
    }
  }, [ingredient]); // Run effect whenever the ingredient prop changes

  return (
    <div>
      <h2>Meal Ideas for: {ingredient}</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map(meal => (
            <li key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No meals found for {ingredient}.</p>
      )}
    </div>
  );
};

export default MealIdeas;
