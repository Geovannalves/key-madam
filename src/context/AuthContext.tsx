import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  passwords: { appName: string; password: string }[];
}

const defaultValue: AuthContextType = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  passwords: [],
};

export const AuthContext = createContext<AuthContextType>(defaultValue);


interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwords, setPasswords] = useState([
    { appName: 'Facebook', password: 'facebook123' },
    { appName: 'Instagram', password: 'instagram123' },
    { appName: 'Twitter', password: 'twitter123' },
  ]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, passwords }}>
      {children}
    </AuthContext.Provider>
  );
};
