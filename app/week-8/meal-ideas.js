import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const result = ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${result}`);
    const data = await response.json();
    return data.meals || [];
};

const fetchMealDetails = async (idMeal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const data = await response.json();
    return data.meals[0];
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [mealDetails, setMealDetails] = useState({}); // State to hold details of each meal

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        const detailsPromises = mealIdeas.map(meal => fetchMealDetails(meal.idMeal)); // Fetch details for each meal
        const mealsWithDetails = await Promise.all(detailsPromises);
        
        // Set the meals with their details
        const mealsWithIngredients = mealIdeas.map((meal, index) => ({
            ...meal,
            ingredients: extractIngredients(mealsWithDetails[index]), // Extract ingredients for each meal
        }));
        setMeals(mealsWithIngredients);
    };

    const extractIngredients = (mealDetails) => {
        const ingredients = {};
        Object.keys(mealDetails).forEach((key) => {
            if (key.startsWith("strIngredient") && mealDetails[key]) {
                const index = key.replace("strIngredient", "");
                ingredients[mealDetails[key]] = mealDetails[`strMeasure${index}`];
            }
        });
        return ingredients;
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-4 bg-gray-900 text-white rounded-lg">
            {
                meals.length === 0 ? (
                    <p>No meal ideas found for {ingredient}</p>
                ) : (
                    <>
                        <header>
                            <h2 className='font-bold text-2xl'>Here are some ideas using {ingredient}</h2>
                        </header>
                        <ul className="mt-4">
                            {meals.map(meal => (
                                <li key={meal.idMeal} className="bg-gray-800 p-4 mb-2 rounded-lg">
                                    <h3 className='font-semibold text-lg'>{meal.strMeal}</h3>
                                    <h4 className='font-semibold'>Ingredients:</h4>
                                    <ul className="list-disc pl-5">
                                        {Object.keys(meal.ingredients).map((ingredient) => (
                                            <li key={ingredient} className="text-gray-400">
                                                {ingredient}: {meal.ingredients[ingredient]}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </>
                )
            }
        </div>
    );
}
