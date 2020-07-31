import React from 'react';

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleIngredientChange } = props;

  const handleChange = ({ target: { name, value } }) => {
    handleIngredientChange(ingredient.id, { ...ingredient, [name]: value });
  };
  return (
    <>
      <input className='recipe-edit__input' type='text' value={ingredient.name} onInput={handleChange} />
      <input className='recipe-edit__input' type='text' value={ingredient.amount} />
      <button className='btn btn--danger'>&times;</button>
    </>
  );
}
