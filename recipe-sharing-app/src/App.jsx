import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import FavoritesList from '../components/FavoritesList';
import RecommendationsList from '../components/RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm';

const Home = () => {
  return (
    <div>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default Home;
