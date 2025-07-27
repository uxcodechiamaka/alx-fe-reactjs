import React, { useState } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const EditRecipeForm = ({ recipe, onFinishEditing }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // <-- This line is required
    updateRecipe(recipe.id, { title, description });
    onFinishEditing();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      ></textarea>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
