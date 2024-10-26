import { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const number=10
  return <AuthContext.Provider value={number}>{children}</AuthContext.Provider>;
};


