import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import FavoritesList from '../components/FavoritesList';
import RecommendationsList from '../components/RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={RecipeList} />
      <Route path='/add' element={AddRecipeForm} />
      <Route path='/search' element={SearchBar} />
      <Route path='/favorite' element={FavoritesList} />
      <Route path='/recomendation' element={RecommendationsList} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
