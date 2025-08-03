"use client";

import { useConvexQuery } from "../hooks/useConvexQuery";
import { api } from "../../convex/_generated/api";
import ConvexImage from "./ConvexImage";
import { MenuItem } from "../../types/menu";

interface MenuClientProps {
  fallbackItems?: MenuItem[];
}

export default function MenuClient({ fallbackItems = [] }: MenuClientProps) {
  // Always call useConvexQuery - never conditionally
  const convexMenuItems = useConvexQuery(api.menu.getAvailable);
  
  // Determine what to display
  const displayItems = (convexMenuItems && convexMenuItems.length > 0)
    ? convexMenuItems
    : fallbackItems;

  const isLoading = convexMenuItems === undefined;

  return (
    <>
      {/* Loading State */}
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <span className="ml-3 text-gray-600">Loading menu...</span>
        </div>
      ) : displayItems.length > 0 ? (
        /* Menu Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item: MenuItem) => (
            <div 
              key={item._id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ConvexImage
                  storageId={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Populer
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">
                    Rp {item.price.toLocaleString()}
                  </span>
                  <a 
                    href="https://wa.me/62085876120167" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors duration-300 inline-block text-center"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Menu</h3>
          <p className="text-gray-500">Menu akan muncul setelah admin menambahkan dari dashboard.</p>
        </div>
      )}
    </>
  );
}