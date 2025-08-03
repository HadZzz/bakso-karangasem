"use client";

import { useEffect, useState } from "react";

interface AdminWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function AdminWrapper({ children, fallback }: AdminWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [hasConvex, setHasConvex] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setHasConvex(!!process.env.NEXT_PUBLIC_CONVEX_URL);
  }, []);

  // During SSR or build time, show fallback
  if (!isClient) {
    return fallback || (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  // If no Convex URL, show setup message
  if (!hasConvex) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Setup Required</h1>
          <p className="text-gray-600 mb-4">
            Please configure Convex environment variables to access the admin panel.
          </p>
          <p className="text-sm text-gray-500">
            Check the ADMIN_SETUP.md file for setup instructions.
          </p>
        </div>
      </div>
    );
  }

  // Render admin content
  return <>{children}</>;
}