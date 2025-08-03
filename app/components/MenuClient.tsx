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
  const isConvexAvailable = process.env.NEXT_PUBLIC_CONVEX_URL ? true : false;
  
  // Determine what to display
  const displayItems = (convexMenuItems && convexMenuItems.length > 0)
    ? convexMenuItems
    : fallbackItems;

  const isLoading = convexMenuItems === undefined && isConvexAvailable;

  const handleOrderClick = (item: MenuItem) => {
    const message = encodeURIComponent(
      `Halo Bakso Murniati! 🍜\n\n` +
      `Saya ingin memesan:\n` +
      `📋 Menu: ${item.name}\n` +
      `💰 Harga: Rp ${item.price.toLocaleString()}\n` +
      `📝 Deskripsi: ${item.description}\n\n` +
      `Mohon informasi untuk proses pemesanan selanjutnya. Terima kasih! 🙏`
    );
    window.open(`https://wa.me/62085876120167?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Convex Not Available Warning */}
      {!isConvexAvailable && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="text-lg font-medium text-yellow-800">Database Not Connected</h3>
              <p className="text-yellow-700 mt-1">
                Menu database is not available. Please contact administrator to configure Convex environment variables.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <span className="ml-3 text-gray-600">Loading menu from database...</span>
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
                  <button
                    onClick={() => handleOrderClick(item)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Pesan</span>
                  </button>
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {!isConvexAvailable ? "Database Not Available" : "Belum Ada Menu"}
          </h3>
          <p className="text-gray-500">
            {!isConvexAvailable
              ? "Please configure Convex environment variables to load menu from database."
              : "Menu akan muncul setelah admin menambahkan dari dashboard."}
          </p>
        </div>
      )}
    </>
  );
}