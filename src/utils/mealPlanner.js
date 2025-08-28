import { getRecipesByType } from '../data/recipes';

// Get previous week's meals from localStorage to avoid back-to-back repetition
const getPreviousWeekMeals = () => {
  const previousPlan = localStorage.getItem('previousWeekMealPlan');
  return previousPlan ? JSON.parse(previousPlan) : [];
};

// Save current week as previous week for next time
const savePreviousWeekMeals = (currentPlan) => {
  localStorage.setItem('previousWeekMealPlan', JSON.stringify(currentPlan));
};

// Generate a weekly meal plan with leftovers logic
export const generateWeeklyMealPlan = () => {
  const lunchRecipes = getRecipesByType('lunch');
  const dinnerRecipes = getRecipesByType('dinner');
  const previousMeals = getPreviousWeekMeals();
  
  // Filter out recipes used in previous week
  const previousRecipeIds = previousMeals.map(meal => meal.recipe.id);
  const availableLunches = lunchRecipes.filter(recipe => !previousRecipeIds.includes(recipe.id));
  const availableDinners = dinnerRecipes.filter(recipe => !previousRecipeIds.includes(recipe.id));
  
  // If we don't have enough unique recipes, use all recipes
  const lunchPool = availableLunches.length >= 7 ? availableLunches : lunchRecipes;
  const dinnerPool = availableDinners.length >= 7 ? availableDinners : dinnerRecipes;
  
  const weekPlan = [];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Track recipes used this week to allow leftovers
  const recipeUsageCount = new Map();
  
  days.forEach((day, index) => {
    // Generate lunch
    let lunchRecipe;
    
    // 30% chance of leftovers if we have recipes used only once
    const availableForLeftovers = Array.from(recipeUsageCount.entries())
      .filter(([id, count]) => count === 1)
      .map(([id]) => [...lunchPool, ...dinnerPool].find(r => r.id.toString() === id))
      .filter(r => r !== undefined);
    
    if (availableForLeftovers.length > 0 && Math.random() < 0.3 && index > 1) {
      lunchRecipe = availableForLeftovers[Math.floor(Math.random() * availableForLeftovers.length)];
    } else {
      // Select a random lunch recipe
      const availableLunchRecipes = lunchPool.filter(recipe => 
        recipe && recipe.id && (!recipeUsageCount.has(recipe.id.toString()) || recipeUsageCount.get(recipe.id.toString()) < 2)
      );
      lunchRecipe = availableLunchRecipes.length > 0 
        ? availableLunchRecipes[Math.floor(Math.random() * availableLunchRecipes.length)]
        : lunchPool[Math.floor(Math.random() * lunchPool.length)];
    }
    
    // Safety check
    if (!lunchRecipe || !lunchRecipe.id) {
      lunchRecipe = lunchPool[0]; // fallback to first recipe
    }
    
    const isLunchLeftover = recipeUsageCount.has(lunchRecipe.id.toString());
    recipeUsageCount.set(lunchRecipe.id.toString(), (recipeUsageCount.get(lunchRecipe.id.toString()) || 0) + 1);
    
    // Generate dinner
    let dinnerRecipe;
    
    // 30% chance of leftovers if we have recipes used only once
    const availableForDinnerLeftovers = Array.from(recipeUsageCount.entries())
      .filter(([id, count]) => count === 1 && id !== lunchRecipe.id.toString())
      .map(([id]) => [...lunchPool, ...dinnerPool].find(r => r.id.toString() === id))
      .filter(r => r !== undefined);
    
    if (availableForDinnerLeftovers.length > 0 && Math.random() < 0.3 && index > 1) {
      dinnerRecipe = availableForDinnerLeftovers[Math.floor(Math.random() * availableForDinnerLeftovers.length)];
    } else {
      // Select a random dinner recipe
      const availableDinnerRecipes = dinnerPool.filter(recipe => 
        recipe && recipe.id && recipe.id !== lunchRecipe.id && 
        (!recipeUsageCount.has(recipe.id.toString()) || recipeUsageCount.get(recipe.id.toString()) < 2)
      );
      dinnerRecipe = availableDinnerRecipes.length > 0 
        ? availableDinnerRecipes[Math.floor(Math.random() * availableDinnerRecipes.length)]
        : dinnerPool.filter(r => r && r.id && r.id !== lunchRecipe.id)[Math.floor(Math.random() * (dinnerPool.length - 1))];
    }
    
    // Safety check
    if (!dinnerRecipe || !dinnerRecipe.id) {
      dinnerRecipe = dinnerPool.find(r => r.id !== lunchRecipe.id) || dinnerPool[0]; // fallback
    }
    
    const isDinnerLeftover = recipeUsageCount.has(dinnerRecipe.id.toString());
    recipeUsageCount.set(dinnerRecipe.id.toString(), (recipeUsageCount.get(dinnerRecipe.id.toString()) || 0) + 1);
    
    weekPlan.push(
      {
        id: `${day}-lunch`,
        day,
        mealType: 'lunch',
        recipe: lunchRecipe,
        isLeftover: isLunchLeftover
      },
      {
        id: `${day}-dinner`,
        day,
        mealType: 'dinner', 
        recipe: dinnerRecipe,
        isLeftover: isDinnerLeftover
      }
    );
  });
  
  // Save this week's plan as previous week for next generation
  savePreviousWeekMeals(weekPlan);
  
  return weekPlan;
};

// Regenerate a single meal
export const regenerateIndividualMeal = (currentPlan, mealId) => {
  const mealIndex = currentPlan.findIndex(meal => meal.id === mealId);
  if (mealIndex === -1) return currentPlan;
  
  const meal = currentPlan[mealIndex];
  const recipes = getRecipesByType(meal.mealType);
  
  // Get currently used recipes in this week's plan
  const currentRecipeIds = currentPlan.map(m => m.recipe.id);
  
  // Filter out the recipe being replaced
  const filteredCurrentIds = currentRecipeIds.filter((id, index) => index !== mealIndex);
  
  // Find available recipes (prefer unused ones)
  const unusedRecipes = recipes.filter(recipe => !filteredCurrentIds.includes(recipe.id));
  const availableRecipes = unusedRecipes.length > 0 ? unusedRecipes : recipes;
  
  // Select new recipe
  const newRecipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
  
  // Check if this creates a leftover situation
  const isLeftover = filteredCurrentIds.includes(newRecipe.id);
  
  const updatedPlan = [...currentPlan];
  updatedPlan[mealIndex] = {
    ...meal,
    recipe: newRecipe,
    isLeftover
  };
  
  return updatedPlan;
};

// Convert recipe ingredients to grocery list format with proper unit conversion
const convertToCommonUnit = (ingredient) => {
  const { name, quantity, unit } = ingredient;
  
  // Common unit conversions
  const conversions = {
    // Volume conversions to cups
    'tbsp': { factor: 1/16, unit: 'cups' },
    'tsp': { factor: 1/48, unit: 'cups' },
    'fl oz': { factor: 1/8, unit: 'cups' },
    
    // Weight conversions to pounds  
    'oz': { factor: 1/16, unit: 'lbs' },
    
    // Count items stay as pieces
    'pieces': { factor: 1, unit: 'pieces' },
    'slices': { factor: 1, unit: 'slices' },
    'cloves': { factor: 1, unit: 'cloves' },
    'cans': { factor: 1, unit: 'cans' },
    'packets': { factor: 1, unit: 'packets' },
    'heads': { factor: 1, unit: 'heads' },
    'stalks': { factor: 1, unit: 'stalks' }
  };
  
  const conversion = conversions[unit];
  if (conversion) {
    return {
      name: name.toLowerCase(),
      quantity: quantity * conversion.factor,
      unit: conversion.unit,
      category: ingredient.category
    };
  }
  
  // Default - keep original unit but normalize name
  return {
    name: name.toLowerCase(),
    quantity,
    unit: unit || 'pieces',
    category: ingredient.category
  };
};

// Generate grocery list from meal plan
export const generateGroceryList = (mealPlan) => {
  const groceryMap = new Map();
  
  // Process all ingredients from all meals
  mealPlan.forEach(meal => {
    if (!meal.isLeftover) { // Don't add ingredients for leftover meals
      meal.recipe.ingredients.forEach(ingredient => {
        const converted = convertToCommonUnit(ingredient);
        const key = converted.name;
        
        if (groceryMap.has(key)) {
          const existing = groceryMap.get(key);
          // Only combine if same unit
          if (existing.unit === converted.unit) {
            existing.quantity += converted.quantity;
          } else {
            // Create separate entry with different unit
            const newKey = `${key} (${converted.unit})`;
            groceryMap.set(newKey, converted);
          }
        } else {
          groceryMap.set(key, { ...converted });
        }
      });
    }
  });
  
  // Convert map to array and group by category
  const groceryItems = Array.from(groceryMap.values());
  const categorizedList = {};
  
  groceryItems.forEach(item => {
    const category = item.category || 'other';
    if (!categorizedList[category]) {
      categorizedList[category] = [];
    }
    categorizedList[category].push(item);
  });
  
  // Sort items within each category
  Object.keys(categorizedList).forEach(category => {
    categorizedList[category].sort((a, b) => a.name.localeCompare(b.name));
  });
  
  return categorizedList;
};