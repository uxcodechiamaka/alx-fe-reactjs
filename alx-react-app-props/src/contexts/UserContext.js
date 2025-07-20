// src/contexts/UserContext.js
import React, { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
