import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ViewRecipe from './pages/ViewRecipe';
import EditRecipe from './pages/EditRecipe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/view/:id" element={<ViewRecipe />} />
      <Route path="/edit/:id" element={<EditRecipe />} />
    </Routes>
  );
}

export default App;
