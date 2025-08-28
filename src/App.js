import React, { useState, useEffect } from 'react';
import { generateWeeklyMealPlan, regenerateIndividualMeal, generateGroceryList } from './utils/mealPlanner';
import MealCard from './components/MealCard';
import GroceryList from './components/GroceryList';

function App() {
  const [mealPlan, setMealPlan] = useState([]);
  const [groceryList, setGroceryList] = useState({});
  const [activeTab, setActiveTab] = useState('meals');
  const [isLoading, setIsLoading] = useState(false);

  // Load meal plan from localStorage on component mount
  useEffect(() => {
    const savedPlan = localStorage.getItem('currentMealPlan');
    if (savedPlan) {
      const plan = JSON.parse(savedPlan);
      setMealPlan(plan);
      setGroceryList(generateGroceryList(plan));
    }
  }, []);

  // Save meal plan to localStorage whenever it changes
  useEffect(() => {
    if (mealPlan.length > 0) {
      localStorage.setItem('currentMealPlan', JSON.stringify(mealPlan));
      setGroceryList(generateGroceryList(mealPlan));
    }
  }, [mealPlan]);

  const handleGenerateWeeklyPlan = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newPlan = generateWeeklyMealPlan();
      setMealPlan(newPlan);
      setIsLoading(false);
    }, 500); // Small delay to show loading state
  };

  const handleRegenerateMeal = (mealId) => {
    const updatedPlan = regenerateIndividualMeal(mealPlan, mealId);
    setMealPlan(updatedPlan);
  };

  const groupMealsByType = (meals) => {
    const grouped = { lunch: [], dinner: [] };
    meals.forEach(meal => {
      grouped[meal.mealType].push(meal);
    });
    return grouped;
  };

  const groupedMeals = groupMealsByType(mealPlan);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Family Meal Planner</h1>
          <p className="text-gray-600">Weekly meal planning for 2 adults + 2 kids</p>
        </div>

        {/* Generate Button */}
        {mealPlan.length === 0 && (
          <div className="text-center mb-8">
            <button
              onClick={handleGenerateWeeklyPlan}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              {isLoading ? 'Generating...' : 'Generate Weekly Plan'}
            </button>
          </div>
        )}

        {/* Tab Navigation */}
        {mealPlan.length > 0 && (
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('meals')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'meals'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Meal Plan
              </button>
              <button
                onClick={() => setActiveTab('grocery')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'grocery'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Grocery List
              </button>
            </div>
          </div>
        )}

        {/* Content */}
        {activeTab === 'meals' && mealPlan.length > 0 && (
          <div>
            {/* Regenerate Button */}
            <div className="text-center mb-6">
              <button
                onClick={handleGenerateWeeklyPlan}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                {isLoading ? 'Generating...' : 'Generate New Week'}
              </button>
            </div>

            {/* Lunch Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                This Week's Lunches
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groupedMeals.lunch.map(meal => (
                  <MealCard
                    key={meal.id}
                    meal={meal}
                    onRegenerate={handleRegenerateMeal}
                  />
                ))}
              </div>
            </div>

            {/* Dinner Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                This Week's Dinners
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groupedMeals.dinner.map(meal => (
                  <MealCard
                    key={meal.id}
                    meal={meal}
                    onRegenerate={handleRegenerateMeal}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grocery' && (
          <GroceryList groceryList={groceryList} />
        )}
      </div>
    </div>
  );
}

export default App;
