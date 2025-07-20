
import React from 'react';
import { UserProvider } from './contexts/UserContext';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default App;
