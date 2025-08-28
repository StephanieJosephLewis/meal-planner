import React, { useState } from 'react';

const MealCard = ({ meal, onRegenerate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    setTimeout(() => {
      onRegenerate(meal.id);
      setIsRegenerating(false);
    }, 300);
  };

  const formatIngredients = (ingredients) => {
    return ingredients.map(ing => 
      `${ing.quantity} ${ing.unit} ${ing.name}`
    ).join(', ');
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {meal.recipe.name}
            </h3>
            <p className="text-sm text-gray-500 capitalize">
              {meal.day} • {meal.mealType}
            </p>
          </div>
          {meal.isLeftover && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
              Leftovers
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Recipe Tags */}
        {meal.recipe.tags && meal.recipe.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {meal.recipe.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Servings */}
        <div className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Serves:</span> {meal.recipe.servings}
        </div>

        {/* Expandable Instructions */}
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2 block"
          >
            {isExpanded ? 'Hide' : 'Show'} Instructions & Ingredients
          </button>
          
          {isExpanded && (
            <div className="space-y-3 text-sm">
              {/* Instructions */}
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Instructions:</h4>
                <p className="text-gray-600 leading-relaxed">
                  {meal.recipe.instructions}
                </p>
              </div>
              
              {/* Ingredients */}
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Ingredients:</h4>
                <p className="text-gray-600 leading-relaxed">
                  {formatIngredients(meal.recipe.ingredients)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <button
          onClick={handleRegenerate}
          disabled={isRegenerating}
          className="w-full bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
        >
          {isRegenerating ? 'Changing...' : 'Change This Meal'}
        </button>
      </div>
    </div>
  );
};

export default MealCard;