'use client';
import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { User, AuthToken } from '../types/types';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Datos estáticos de usuario
  const staticUsers = [
    {
      id: 1,
      name: 'Gerente',
      email: 'jeffer@gmail.com',
      password: '123456'
    }
  ];

  // Verificar autenticación al cargar
  useEffect(() => {
    const verifyAuth = () => {
      const storedToken = localStorage.getItem('token');
      
      if (storedToken) {
        try {
          // Decodificar el token mock (en realidad deberías validarlo con tu backend)
          const decoded = JSON.parse(atob(storedToken));
          
          // Verificar expiración (simulada)
          if (decoded.expiresIn > Date.now()) {
            const foundUser = staticUsers.find(u => u.id === decoded.userId);
            if (foundUser) {
              setUser({ id: foundUser.id, name: foundUser.name, email: foundUser.email });
              setToken(storedToken);
            }
          } else {
            localStorage.removeItem('token');
          }
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setIsLoading(false);
    };

    verifyAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const foundUser = staticUsers.find(
        user => user.email === email && user.password === password
      );

      if (!foundUser) {
        throw new Error('Credenciales inválidas');
      }

      const mockToken = btoa(JSON.stringify({ 
        userId: foundUser.id, 
        expiresIn: Date.now() + 3600000 // 1 hora
      }));

      setUser({ id: foundUser.id, name: foundUser.name, email: foundUser.email });
      setToken(mockToken);
      localStorage.setItem('token', mockToken);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Verificar si el email ya existe
      if (staticUsers.some(u => u.email === email)) {
        throw new Error('El email ya está registrado');
      }

      const newUser = {
        id: staticUsers.length + 1,
        name,
        email,
        password
      };

      staticUsers.push(newUser);
      await login(email, password);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      isLoading, 
      login, 
      register, 
      logout 
    }}>
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