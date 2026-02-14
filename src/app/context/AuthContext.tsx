"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api, endpoints } from '@/utils/api';

// Global config to enable/disable authentication
export const AUTH_ENABLED = false; // Set to true to enable authentication

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, name?: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  authEnabled: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, name?: string): Promise<boolean> => {
    try {
      // If auth is disabled, simulate login
      if (!AUTH_ENABLED) {
        const userData: User = {
          email,
          name: name || email.split('@')[0],
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      }

      // Real API call to Express backend
      const response = await api.post<{ user: User; token?: string }>(
        endpoints.auth.login,
        { email, password }
      );
      
      const userData: User = {
        email: response.user.email,
        name: response.user.name,
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Store token if provided
      if (response.token) {
        localStorage.setItem('token', response.token);
      }
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      // If auth is disabled, simulate signup
      if (!AUTH_ENABLED) {
        const userData: User = {
          email,
          name,
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      }

      // Real API call to Express backend
      const response = await api.post<{ user: User; token?: string }>(
        endpoints.auth.signup,
        { email, password, name }
      );
      
      const userData: User = {
        email: response.user.email,
        name: response.user.name,
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Store token if provided
      if (response.token) {
        localStorage.setItem('token', response.token);
      }
      
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/login');
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout, isLoading, authEnabled: AUTH_ENABLED }}>
      {children}
    </AuthContext.Provider>
  );
};
