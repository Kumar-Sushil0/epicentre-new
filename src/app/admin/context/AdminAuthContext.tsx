'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { api, endpoints } from '@/utils/api';

const ADMIN_AUTH_ENABLED = true;

interface AdminUser {
  email: string;
  name: string;
  role?: string;
}

type AdminLoginResult = 'success' | 'invalid';

interface AdminAuthContextType {
  adminUser: AdminUser | null;
  isAdminAuthenticated: boolean;
  adminLogin: (email: string, password: string) => Promise<AdminLoginResult>;
  adminLogout: () => void;
  getAdminToken: () => string | null;
  isLoading: boolean;
  authEnabled: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined,
);

export const useAdminAuth = (): AdminAuthContextType => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return ctx;
};

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider: React.FC<AdminAuthProviderProps> = ({
  children,
}) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hydrateAdmin = async () => {
      const stored = localStorage.getItem('adminUser');
      if (stored) {
        try {
          setAdminUser(JSON.parse(stored));
        } catch {
          localStorage.removeItem('adminUser');
        }
      }

      const token = localStorage.getItem('adminToken');
      if (token && ADMIN_AUTH_ENABLED) {
        try {
          const me = await api.get<{ user: AdminUser }>(endpoints.auth.me, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (me.user && me.user.role === 'admin') {
            setAdminUser(me.user);
            localStorage.setItem('adminUser', JSON.stringify(me.user));
          } else {
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminUser');
            setAdminUser(null);
          }
        } catch {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminUser');
          setAdminUser(null);
        }
      }

      setIsLoading(false);
    };

    void hydrateAdmin();
  }, []);

  const adminLogin = async (
    email: string,
    password: string,
  ): Promise<AdminLoginResult> => {
    try {
      if (!ADMIN_AUTH_ENABLED) {
        const fakeUser: AdminUser = {
          email,
          name: email.split('@')[0] || 'Admin',
          role: 'admin',
        };
        setAdminUser(fakeUser);
        localStorage.setItem('adminUser', JSON.stringify(fakeUser));
        return 'success';
      }

      const response = await api.post<{ user?: AdminUser; token?: string }>(
        endpoints.auth.login,
        { email, password },
      );

      if (!response.user || response.user.role !== 'admin') {
        return 'invalid';
      }

      const adminData: AdminUser = {
        ...response.user,
        email: response.user.email,
        name: response.user.name,
      };

      setAdminUser(adminData);
      localStorage.setItem('adminUser', JSON.stringify(adminData));

      if (response.token) {
        localStorage.setItem('adminToken', response.token);
      }

      return 'success';
    } catch (error) {
      console.error('Admin login error:', error);
      return 'invalid';
    }
  };

  const adminLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('adminUser');
    localStorage.removeItem('adminToken');
  };

  const isAdminAuthenticated = adminUser !== null;
  const getAdminToken = () => typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;

  return (
    <AdminAuthContext.Provider
      value={{
        adminUser,
        isAdminAuthenticated,
        adminLogin,
        adminLogout,
        getAdminToken,
        isLoading,
        authEnabled: ADMIN_AUTH_ENABLED,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

