import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Search</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default Home;
