// src/App.jsx
import React from 'react';
import UserProvider from './components/UserContext';
import UserProfile from './components/UserProfile';
import { UserContext } from './components/UserContext';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UserContext.Provider>
        <ProfilePage value='userData ' />
      </UserContext.Provider>
    </UserProvider>
   
  );
};

export default App;
