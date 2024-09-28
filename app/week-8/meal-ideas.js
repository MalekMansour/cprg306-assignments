import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredientDetails, setIngredientDetails] = useState({});

  useEffect(() => {
    const fetchMeals = async () => {
      if (ingredient) {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          const data = await response.json();
          setMeals(data.meals || []);
        } catch (error) {
          console.error("Error fetching meals:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMeals();
  }, [ingredient]);

  const handleMealClick = async (idMeal) => {
    if (ingredientDetails[idMeal]) {
      setIngredientDetails((prev) => ({ ...prev, [idMeal]: null }));
    } else {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        const mealDetails = data.meals[0];

        const ingredients = {};
        Object.keys(mealDetails).forEach((key) => {
          if (key.startsWith("strIngredient") && mealDetails[key]) {
            const index = key.replace("strIngredient", "");
            ingredients[mealDetails[key]] = mealDetails[`strMeasure${index}`];
          }
        });

        setIngredientDetails((prev) => ({
          ...prev,
          [idMeal]: ingredients,
        }));
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }
  };

  if (loading) {
    return <div className="text-center text-white">Loading meals...</div>;
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas with {ingredient}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-gray-800 p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-60" 
              onClick={() => handleMealClick(meal.idMeal)}
            >
              <h3 className="text-lg font-semibold">{meal.strMeal}</h3>

              {ingredientDetails[meal.idMeal] && (
                <div className="mt-2">
                  <h4 className="font-semibold">Ingredients:</h4>
                  <ul>
                    {Object.keys(ingredientDetails[meal.idMeal]).map((ingredient) => (
                      <li key={ingredient} className="text-gray-300">
                        {ingredient}: {ingredientDetails[meal.idMeal][ingredient]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No meals found for this ingredient.</p>
        )}
      </div>
    </div>
  );
};

export default MealIdeas;
