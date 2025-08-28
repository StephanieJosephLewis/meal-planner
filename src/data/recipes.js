export const recipes = [
  // Lunch Recipes
  {
    id: 1,
    name: "Turkey & Avocado Wraps",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "whole wheat tortillas", quantity: 4, unit: "pieces", category: "pantry" },
      { name: "sliced turkey", quantity: 0.75, unit: "lb", category: "deli" },
      { name: "avocados", quantity: 2, unit: "pieces", category: "produce" },
      { name: "lettuce leaves", quantity: 8, unit: "pieces", category: "produce" },
      { name: "tomatoes", quantity: 2, unit: "pieces", category: "produce" },
      { name: "swiss cheese", quantity: 4, unit: "slices", category: "dairy" },
      { name: "mayo", quantity: 2, unit: "tbsp", category: "pantry" }
    ],
    instructions: "Lay tortillas flat. Spread mayo, add turkey, cheese, avocado slices, lettuce, and tomato. Roll tightly.",
    tags: ["kid-friendly", "quick", "healthy"]
  },
  {
    id: 2,
    name: "Grilled Cheese & Tomato Soup",
    type: "lunch", 
    servings: 4,
    ingredients: [
      { name: "bread", quantity: 8, unit: "slices", category: "pantry" },
      { name: "cheddar cheese", quantity: 8, unit: "slices", category: "dairy" },
      { name: "butter", quantity: 4, unit: "tbsp", category: "dairy" },
      { name: "canned tomato soup", quantity: 2, unit: "cans", category: "pantry" },
      { name: "milk", quantity: 1, unit: "cup", category: "dairy" }
    ],
    instructions: "Butter bread, add cheese, grill until golden. Heat soup with milk.",
    tags: ["kid-friendly", "comfort", "quick"]
  },
  {
    id: 3,
    name: "Chicken Caesar Salad",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "chicken breast", quantity: 1, unit: "lb", category: "meat" },
      { name: "romaine lettuce", quantity: 2, unit: "heads", category: "produce" },
      { name: "caesar dressing", quantity: 0.5, unit: "cup", category: "pantry" },
      { name: "parmesan cheese", quantity: 0.5, unit: "cup", category: "dairy" },
      { name: "croutons", quantity: 1, unit: "cup", category: "pantry" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "pantry" }
    ],
    instructions: "Grill seasoned chicken, slice. Toss lettuce with dressing, top with chicken, cheese, and croutons.",
    tags: ["healthy", "protein"]
  },
  {
    id: 4,
    name: "Mac & Cheese with Veggies",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "elbow macaroni", quantity: 2, unit: "cups", category: "pantry" },
      { name: "cheddar cheese", quantity: 2, unit: "cups", category: "dairy" },
      { name: "milk", quantity: 0.5, unit: "cup", category: "dairy" },
      { name: "butter", quantity: 3, unit: "tbsp", category: "dairy" },
      { name: "frozen peas", quantity: 1, unit: "cup", category: "frozen" },
      { name: "carrots", quantity: 2, unit: "pieces", category: "produce" }
    ],
    instructions: "Cook pasta. Make cheese sauce with milk, butter, cheese. Mix in cooked vegetables.",
    tags: ["kid-friendly", "comfort", "vegetarian"]
  },
  {
    id: 5,
    name: "Quesadillas",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "flour tortillas", quantity: 4, unit: "pieces", category: "pantry" },
      { name: "shredded cheese", quantity: 2, unit: "cups", category: "dairy" },
      { name: "cooked chicken", quantity: 1, unit: "cup", category: "meat" },
      { name: "bell peppers", quantity: 1, unit: "pieces", category: "produce" },
      { name: "onions", quantity: 0.5, unit: "pieces", category: "produce" },
      { name: "sour cream", quantity: 0.5, unit: "cup", category: "dairy" }
    ],
    instructions: "Fill tortillas with cheese, chicken, and sautéed peppers/onions. Cook until crispy. Serve with sour cream.",
    tags: ["kid-friendly", "quick"]
  },
  {
    id: 6,
    name: "Chicken Noodle Soup",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "chicken breast", quantity: 1, unit: "lb", category: "meat" },
      { name: "egg noodles", quantity: 8, unit: "oz", category: "pantry" },
      { name: "carrots", quantity: 3, unit: "pieces", category: "produce" },
      { name: "celery", quantity: 3, unit: "stalks", category: "produce" },
      { name: "onions", quantity: 1, unit: "pieces", category: "produce" },
      { name: "chicken broth", quantity: 6, unit: "cups", category: "pantry" }
    ],
    instructions: "Simmer chicken in broth. Remove, shred. Cook vegetables and noodles in broth, add chicken back.",
    tags: ["comfort", "healthy", "kid-friendly"]
  },
  {
    id: 7,
    name: "Peanut Butter & Jelly Sandwiches",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "bread", quantity: 8, unit: "slices", category: "pantry" },
      { name: "peanut butter", quantity: 0.5, unit: "cup", category: "pantry" },
      { name: "jelly", quantity: 0.25, unit: "cup", category: "pantry" }
    ],
    instructions: "Spread peanut butter on 4 slices, jelly on other 4. Combine and cut diagonally.",
    tags: ["kid-friendly", "quick", "simple"]
  },

  // Dinner Recipes
  {
    id: 8,
    name: "Spaghetti with Meat Sauce",
    type: "dinner",
    servings: 4,
    ingredients: [
      { name: "spaghetti", quantity: 1, unit: "lb", category: "pantry" },
      { name: "ground beef", quantity: 1, unit: "lb", category: "meat" },
      { name: "marinara sauce", quantity: 2, unit: "cups", category: "pantry" },
      { name: "onions", quantity: 1, unit: "pieces", category: "produce" },
      { name: "garlic", quantity: 3, unit: "cloves", category: "produce" },
      { name: "parmesan cheese", quantity: 0.5, unit: "cup", category: "dairy" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "pantry" }
    ],
    instructions: "Cook spaghetti. Brown beef with onion and garlic. Add sauce, simmer. Serve over pasta with cheese.",
    tags: ["kid-friendly", "classic", "hearty"]
  },
  {
    id: 9,
    name: "Baked Chicken Thighs with Vegetables",
    type: "dinner",
    servings: 4,
    ingredients: [
      { name: "chicken thighs", quantity: 8, unit: "pieces", category: "meat" },
      { name: "potatoes", quantity: 4, unit: "pieces", category: "produce" },
      { name: "carrots", quantity: 4, unit: "pieces", category: "produce" },
      { name: "onions", quantity: 2, unit: "pieces", category: "produce" },
      { name: "olive oil", quantity: 3, unit: "tbsp", category: "pantry" },
      { name: "herbs", quantity: 2, unit: "tsp", category: "pantry" }
    ],
    instructions: "Toss vegetables with oil and seasonings. Bake with seasoned chicken thighs at 425°F for 35-40 minutes.",
    tags: ["healthy", "one-pan", "easy"]
  },
  {
    id: 10,
    name: "Beef Stir Fry",
    type: "dinner",
    servings: 4,
    ingredients: [
      { name: "beef strips", quantity: 1, unit: "lb", category: "meat" },
      { name: "mixed vegetables", quantity: 4, unit: "cups", category: "frozen" },
      { name: "soy sauce", quantity: 3, unit: "tbsp", category: "pantry" },
      { name: "rice", quantity: 2, unit: "cups", category: "pantry" },
      { name: "garlic", quantity: 2, unit: "cloves", category: "produce" },
      { name: "ginger", quantity: 1, unit: "tsp", category: "pantry" },
      { name: "vegetable oil", quantity: 2, unit: "tbsp", category: "pantry" }
    ],
    instructions: "Cook rice. Stir fry beef, then vegetables with garlic and ginger. Add soy sauce. Serve over rice.",
    tags: ["quick", "healthy", "asian"]
  },
  {
    id: 11,
    name: "Taco Tuesday",
    type: "dinner",
    servings: 4,
    ingredients: [
      { name: "ground beef", quantity: 1, unit: "lb", category: "meat" },
      { name: "taco shells", quantity: 8, unit: "pieces", category: "pantry" },
      { name: "taco seasoning", quantity: 1, unit: "packet", category: "pantry" },
      { name: "lettuce", quantity: 1, unit: "head", category: "produce" },
      { name: "tomatoes", quantity: 2, unit: "pieces", category: "produce" },
      { name: "shredded cheese", quantity: 1, unit: "cup", category: "dairy" },
      { name: "sour cream", quantity: 0.5, unit: "cup", category: "dairy" }
    ],
    instructions: "Brown beef with taco seasoning. Warm shells. Set up taco bar with all toppings.",
    tags: ["kid-friendly", "interactive", "mexican"]
  },
  {
    id: 12,
    name: "Baked Salmon with Rice",
    type: "dinner",
    servings: 4,
    ingredients: [
      { name: "salmon fillets", quantity: 4, unit: "pieces", category: "fish" },
      { name: "brown rice", quantity: 1.5, unit: "cups", category: "pantry" },
      { name: "asparagus", quantity: 1, unit: "lb", category: "produce" },
      { name: "lemon", quantity: 1, unit: "pieces", category: "produce" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "pantry" },
      { name: "garlic", quantity: 2, unit: "cloves", category: "produce" }
    ],
    instructions: "Bake seasoned salmon at 400°F for 15 minutes. Cook rice. Roast asparagus with garlic and lemon.",
    tags: ["healthy", "omega-3", "elegant"]
  },
  {
    id: 13,
    name: "Homemade Pizza",
    type: "dinner",
    servings: 4,
    ingredients: [
      { name: "pizza dough", quantity: 1, unit: "lb", category: "pantry" },
      { name: "pizza sauce", quantity: 1, unit: "cup", category: "pantry" },
      { name: "mozzarella cheese", quantity: 2, unit: "cups", category: "dairy" },
      { name: "pepperoni", quantity: 4, unit: "oz", category: "deli" },
      { name: "bell peppers", quantity: 1, unit: "pieces", category: "produce" },
      { name: "mushrooms", quantity: 8, unit: "oz", category: "produce" }
    ],
    instructions: "Roll out dough, add sauce and toppings. Bake at 450°F for 12-15 minutes until crust is golden.",
    tags: ["kid-friendly", "interactive", "weekend"]
  },
  {
    id: 14,
    name: "Chicken and Rice Casserole",
    type: "dinner",
    servings: 4,
    ingredients: [
      { name: "chicken breast", quantity: 1.5, unit: "lb", category: "meat" },
      { name: "white rice", quantity: 1, unit: "cup", category: "pantry" },
      { name: "chicken broth", quantity: 2, unit: "cups", category: "pantry" },
      { name: "mixed vegetables", quantity: 2, unit: "cups", category: "frozen" },
      { name: "cream of mushroom soup", quantity: 1, unit: "can", category: "pantry" },
      { name: "shredded cheese", quantity: 1, unit: "cup", category: "dairy" }
    ],
    instructions: "Mix rice, broth, soup, and vegetables in casserole dish. Top with chicken and cheese. Bake covered at 375°F for 45 minutes.",
    tags: ["comfort", "one-dish", "make-ahead"]
  }
];

// Utility functions for recipe management
export const getRecipesByType = (type) => {
  return recipes.filter(recipe => recipe.type === type);
};

export const getRecipeById = (id) => {
  return recipes.find(recipe => recipe.id === id);
};

export const getRandomRecipes = (type, count) => {
  const typeRecipes = getRecipesByType(type);
  const shuffled = [...typeRecipes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};