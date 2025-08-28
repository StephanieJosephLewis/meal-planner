// Your custom lunch options with detailed ingredients - edit this list as needed
export const customLunchRecipes = [
  {
    id: "lunch_1",
    name: "Sandwiches",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "bread", quantity: 8, unit: "slices", category: "pantry" },
      { name: "deli meat", quantity: 0.5, unit: "lb", category: "deli" },
      { name: "cheese slices", quantity: 4, unit: "slices", category: "dairy" },
      { name: "lettuce", quantity: 4, unit: "leaves", category: "produce" },
      { name: "tomatoes", quantity: 1, unit: "pieces", category: "produce" },
      { name: "mayo or mustard", quantity: 2, unit: "tbsp", category: "pantry" }
    ],
    instructions: "Layer ingredients on bread to make sandwiches for the family.",
    tags: ["kid-friendly", "quick", "customizable"]
  },
  {
    id: "lunch_2", 
    name: "Salad",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "mixed greens", quantity: 6, unit: "cups", category: "produce" },
      { name: "cherry tomatoes", quantity: 1, unit: "cup", category: "produce" },
      { name: "cucumber", quantity: 1, unit: "pieces", category: "produce" },
      { name: "carrots", quantity: 1, unit: "pieces", category: "produce" },
      { name: "salad dressing", quantity: 0.25, unit: "cup", category: "pantry" },
      { name: "croutons", quantity: 0.5, unit: "cup", category: "pantry" }
    ],
    instructions: "Combine all vegetables in a large bowl, toss with dressing and top with croutons.",
    tags: ["healthy", "fresh", "vegetarian"]
  },
  {
    id: "lunch_3",
    name: "Soup",
    type: "lunch", 
    servings: 4,
    ingredients: [
      { name: "canned soup", quantity: 2, unit: "cans", category: "pantry" },
      { name: "milk or water", quantity: 2, unit: "cups", category: "dairy" },
      { name: "crackers", quantity: 1, unit: "sleeve", category: "pantry" },
      { name: "shredded cheese", quantity: 0.5, unit: "cup", category: "dairy" }
    ],
    instructions: "Heat soup according to package directions, serve with crackers and cheese.",
    tags: ["comfort", "warm", "easy"]
  },
  {
    id: "lunch_4",
    name: "Leftover Dinner", 
    type: "lunch",
    servings: 4,
    ingredients: [],
    instructions: "Reheat and serve previous night's dinner portions.",
    tags: ["convenient", "no-waste", "economical"]
  },
  {
    id: "lunch_5",
    name: "Quesadillas",
    type: "lunch",
    servings: 4, 
    ingredients: [
      { name: "flour tortillas", quantity: 4, unit: "pieces", category: "pantry" },
      { name: "shredded cheese", quantity: 2, unit: "cups", category: "dairy" },
      { name: "cooked chicken", quantity: 1, unit: "cup", category: "meat" },
      { name: "bell peppers", quantity: 1, unit: "pieces", category: "produce" },
      { name: "sour cream", quantity: 0.5, unit: "cup", category: "dairy" },
      { name: "salsa", quantity: 0.5, unit: "cup", category: "pantry" }
    ],
    instructions: "Fill tortillas with cheese and chicken, cook until crispy. Serve with sour cream and salsa.",
    tags: ["kid-friendly", "quick", "mexican"]
  },
  {
    id: "lunch_6", 
    name: "Wraps",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "large tortillas", quantity: 4, unit: "pieces", category: "pantry" },
      { name: "deli turkey", quantity: 0.75, unit: "lb", category: "deli" },
      { name: "cream cheese", quantity: 4, unit: "oz", category: "dairy" },
      { name: "lettuce", quantity: 4, unit: "leaves", category: "produce" },
      { name: "tomatoes", quantity: 1, unit: "pieces", category: "produce" },
      { name: "avocado", quantity: 1, unit: "pieces", category: "produce" }
    ],
    instructions: "Spread cream cheese on tortillas, add turkey and vegetables, roll tightly and slice.",
    tags: ["fresh", "portable", "healthy"]
  },
  {
    id: "lunch_7",
    name: "Mac and Cheese", 
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "elbow macaroni", quantity: 2, unit: "cups", category: "pantry" },
      { name: "cheddar cheese", quantity: 2, unit: "cups", category: "dairy" },
      { name: "milk", quantity: 0.5, unit: "cup", category: "dairy" },
      { name: "butter", quantity: 3, unit: "tbsp", category: "dairy" },
      { name: "frozen peas", quantity: 1, unit: "cup", category: "frozen" }
    ],
    instructions: "Cook pasta, make cheese sauce with milk and butter, mix in peas for added nutrition.",
    tags: ["kid-friendly", "comfort", "cheesy"]
  },
  {
    id: "lunch_8",
    name: "Grilled Cheese",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "bread", quantity: 8, unit: "slices", category: "pantry" },
      { name: "cheese slices", quantity: 8, unit: "slices", category: "dairy" },
      { name: "butter", quantity: 4, unit: "tbsp", category: "dairy" },
      { name: "canned tomato soup", quantity: 2, unit: "cans", category: "pantry" }
    ],
    instructions: "Butter bread, add cheese, grill until golden brown. Serve with heated tomato soup.",
    tags: ["classic", "comfort", "kid-friendly"]
  },
  {
    id: "lunch_9", 
    name: "Pizza",
    type: "lunch",
    servings: 4,
    ingredients: [
      { name: "frozen pizza", quantity: 2, unit: "pieces", category: "frozen" },
      { name: "extra mozzarella", quantity: 1, unit: "cup", category: "dairy" },
      { name: "pepperoni", quantity: 2, unit: "oz", category: "deli" },
      { name: "italian seasoning", quantity: 1, unit: "tsp", category: "pantry" }
    ],
    instructions: "Bake frozen pizzas according to package directions, add extra toppings if desired.",
    tags: ["easy", "kid-friendly", "quick"]
  },
  {
    id: "lunch_10",
    name: "Pasta",
    type: "lunch", 
    servings: 4,
    ingredients: [
      { name: "pasta", quantity: 1, unit: "lb", category: "pantry" },
      { name: "marinara sauce", quantity: 2, unit: "cups", category: "pantry" },
      { name: "parmesan cheese", quantity: 0.5, unit: "cup", category: "dairy" },
      { name: "ground beef", quantity: 0.5, unit: "lb", category: "meat" },
      { name: "garlic", quantity: 2, unit: "cloves", category: "produce" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "pantry" }
    ],
    instructions: "Cook pasta, brown ground beef with garlic, combine with sauce and serve with parmesan.",
    tags: ["hearty", "italian", "filling"]
  }
];