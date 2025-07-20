// src/App.jsx
import React from 'react';
import { UserProvider } from './components/UserContext';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;
