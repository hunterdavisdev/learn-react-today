import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <h1> Hello from Github 👋 </h1>
      <div>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
