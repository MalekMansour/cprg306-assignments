import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ingredient) {
      const fetchMeals = async () => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          const data = await response.json();
          setMeals(data.meals || []);
        } catch (error) {
          console.error("Error fetching meals:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchMeals();
    }
  }, [ingredient]);

  const handleMealClick = (idMeal) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.idMeal === idMeal ? { ...meal, showIngredients: !meal.showIngredients } : meal
      )
    );
  };

  if (loading) {
    return <div className="text-center text-white">Loading meals...</div>;
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas with {ingredient}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-64"
            onClick={() => handleMealClick(meal.idMeal)}
          >
            <h3 className="text-lg font-semibold">{meal.strMeal}</h3>

            {meal.showIngredients && (
              <div className="mt-2">
                <h4 className="font-semibold">Ingredients:</h4>
                <ul>
                  {Object.keys(meal)
                    .filter((key) => key.includes("strIngredient") && meal[key])
                    .map((key) => (
                      <li key={key} className="text-gray-300">
                        {meal[key]}: {meal[`strMeasure${key.slice(13)}`]}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealIdeas;
