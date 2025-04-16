"use client";
import { createContext, ReactNode, useContext, useState } from 'react';
import { User, AuthToken } from '../types/Types';

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Datos estáticos de usuario (simulando base de datos)
  const staticUsers = [
    {
      id: 1,
      name: 'Gerente',
      email: 'jeffer@gmail.com',
      password: '123456'
    }
  ];

  const login = async (email: string, password: string) => {
    const foundUser = staticUsers.find(
      user => user.email === email && user.password === password
    );

    if (!foundUser) {
      throw new Error('Credenciales inválidas');
    }

    // Simulamos un token JWT (en realidad sería generado por el backend)
    const mockToken = btoa(JSON.stringify({ 
      userId: foundUser.id, 
      expiresIn: Date.now() + 3600000 
    }));

    setUser({ id: foundUser.id, name: foundUser.name, email: foundUser.email });
    setToken(mockToken);
    localStorage.setItem('token', mockToken);
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulación de registro
    const newUser = {
      id: staticUsers.length + 1,
      name,
      email,
      password
    };

    staticUsers.push(newUser);
    
    // Autologin después del registro
    await login(email, password);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};