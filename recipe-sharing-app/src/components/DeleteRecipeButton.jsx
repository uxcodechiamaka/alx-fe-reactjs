import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';
import { useNavigate } from 'react-router-dom'; // <-- Required

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // <-- Required

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to home or recipe list after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
