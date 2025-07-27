import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './components/recipeStore'; // ✅ make sure this matches the folder name

function App() {
  // You can call the store here if you want, like:
  // const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}

export default App;
