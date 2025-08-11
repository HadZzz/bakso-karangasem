"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import AdminWrapper from "../components/AdminWrapper";

interface Admin {
  email: string;
  name: string;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if admin is logged in
    const adminData = localStorage.getItem("admin");
    if (adminData) {
      setAdmin(JSON.parse(adminData));
    } else if (pathname !== "/admin/login") {
      router.push("/admin/login");
    }
    setLoading(false);
  }, [router, pathname]);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  // If on login page, show login page without layout
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // If not logged in and not on login page, redirect
  if (!admin) {
    return null;
  }

  return (
    <AdminWrapper>
    <div className="admin min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center min-w-0 flex-1">
              <div className="flex-shrink-0">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                  Bakso Murniati Admin
                </h1>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link
                  href="/admin"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === "/admin"
                      ? "border-red-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/menu"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname.startsWith("/admin/menu")
                      ? "border-red-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Menu Management
                </Link>
              </div>
            </div>
            <div className="flex items-center flex-shrink-0">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className="hidden sm:inline text-sm text-gray-700">
                  Welcome, {admin.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden border-t border-gray-200 pt-2 pb-3 space-y-1">
            <Link
              href="/admin"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/admin"
                  ? "bg-red-50 border-red-500 text-red-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/admin/menu"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname.startsWith("/admin/menu")
                  ? "bg-red-50 border-red-500 text-red-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Menu Management
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          {children}
        </div>
      </main>
    </div>
    </AdminWrapper>
  );
}