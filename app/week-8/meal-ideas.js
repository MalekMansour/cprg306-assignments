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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
