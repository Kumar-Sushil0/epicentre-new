'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '../context/AdminAuthContext';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

export default function AdminProtectedRoute({
  children,
}: AdminProtectedRouteProps) {
  const { isAdminAuthenticated, isLoading, authEnabled } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (authEnabled && !isLoading && !isAdminAuthenticated) {
      router.push('/admin/login');
    }
  }, [authEnabled, isLoading, isAdminAuthenticated, router]);

  if (!authEnabled) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-earth-950">
        <div className="text-gold-400 text-xl">Loading admin panel…</div>
      </div>
    );
  }

  if (!isAdminAuthenticated) {
    return null;
  }

  return <>{children}</>;
}

