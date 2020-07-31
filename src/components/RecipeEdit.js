import React, { useContext } from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange } = useContext(RecipeContext);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'servings') {
      handleRecipeChange(recipe.id, {
        ...recipe,
        [name]: parseInt(value) || '',
      });
    } else {
      handleRecipeChange(recipe.id, { ...recipe, [name]: value });
    }
  };

  /** Find an ingredient in the current recipe's ingredient array
   * and replace it with a new ingredient
   */
  // const handleIngredientChange = (id, ingredient) => {
  //   const newIngredients = [...recipe.ingredients];
  //   const index = newIngredients.findIndex((ingredient) => ingredient.id === id);
  //   newIngredients[index] = ingredient;
  //   handleChange({ ingrdients: newIngredients });
  // };

  const handleIngredientChange = (id, newIngredient) =>
    handleChange({ ingredients: recipe.ingredients.map((i) => (i.id === id ? newIngredient : i)) });

  return (
    <div className='recipe-edit'>
      <div className='recipe-edit__remove-btn-container'>
        <button className='btn recipe-edit__remove-btn'>&times;</button>
      </div>
      <div className='recipe-edit__details-grid'>
        <label className='recipe-edit__label' htmlFor='name'>
          Name
        </label>
        <input
          className='recipe-edit__input'
          type='text'
          name='name'
          id='name'
          value={recipe.name}
          onChange={handleChange}
        />
        <label className='recipe-edit__label' htmlFor='cookTime'>
          Cook Time
        </label>
        <input
          className='recipe-edit__input'
          type='text'
          name='cookTime'
          id='cookTime'
          value={recipe.cookTime}
          onChange={handleChange}
        />
        <label className='recipe-edit__label' htmlFor='servings'>
          Servings
        </label>
        <input
          className='recipe-edit__input'
          type='number'
          min={1}
          name='servings'
          id='servings'
          value={recipe.servings}
          onChange={handleChange}
        />
        <label className='recipe-edit__label' htmlFor='instructions'>
          Instructions
        </label>
        <textarea
          className='recipe-edit__input'
          name='instructions'
          id='instructions'
          value={recipe.instructions}
          onChange={handleChange}
        />
      </div>
      <br />
      <label className='recipe-edit__label'>Ingredients</label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
          />
        ))}
      </div>
      <div className='recipe-edit__add-ingredient-btn-container'>
        <button className='btn btn--primary'>Add Ingredient</button>
      </div>
    </div>
  );
}
