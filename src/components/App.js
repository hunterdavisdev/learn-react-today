import React, { useState, createContext, useEffect } from 'react';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';
import '../css/App.css';

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  /** Initial recipe load */
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  /** Runs each time recipes change */
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New Recipe',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instructions...',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbsp.',
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => setRecipes(recipes.filter((recipe) => recipe.id !== id));

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken.\n2. Put chicken in oven.\n3. Eat chicken.',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Chicken',
        amount: '2 lbs.',
      },
      {
        id: uuidv4(),
        name: 'Salt',
        amount: '1 tbsp.',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork.\n2. Put pork in oven.\n3. Eat pork.',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Pork',
        amount: '3 lbs.',
      },
      {
        id: uuidv4(),
        name: 'Paprika',
        amount: '2 tbsp.',
      },
    ],
  },
];

export default App;
