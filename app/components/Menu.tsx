"use client";

import ConvexImage from "./ConvexImage";
import { useEffect, useState } from "react";
import { MenuItem } from "../../types/menu";

// Static fallback menu items for build time and when Convex is not available
const fallbackItems: MenuItem[] = [
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _id: "fallback-1" as any,
    name: "Bakso Spesial Murniati",
    description: "Bakso sapi premium dengan kuah gurih dan bumbu rahasia",
    price: 15000,
    category: "bakso" as const,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    available: true,
    popular: true,
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _id: "fallback-2" as any,
    name: "Bakso Urat",
    description: "Bakso dengan urat sapi yang kenyal dan lezat",
    price: 18000,
    category: "bakso" as const,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    available: true,
    popular: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _id: "fallback-3" as any,
    name: "Bakso Tahu",
    description: "Kombinasi bakso dan tahu goreng yang lezat",
    price: 12000,
    category: "bakso" as const,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    available: true,
    popular: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
];

export default function Menu() {
  const [menuItems] = useState<MenuItem[]>(fallbackItems);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and then show fallback items
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Menu <span className="text-red-600">Bakso Enak</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Inilah mengapa <strong>Bakso Murniati</strong> menjadi <strong>bakso paling enak di Sukoharjo</strong>! 
            Menu <strong>bakso enak di Karangasem</strong> dengan cita rasa yang tak terlupakan
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        )}

        {/* Menu Grid */}
        {!isLoading && menuItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item: MenuItem) => (
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
        ) : !isLoading ? (
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Menu</h3>
            <p className="text-gray-500">Menu akan muncul setelah admin menambahkan dari dashboard.</p>
          </div>
        ) : null}

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Harga Terjangkau</h3>
              <p className="text-gray-600">Cita rasa premium dengan harga yang ramah di kantong</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pelayanan Cepat</h3>
              <p className="text-gray-600">Pesanan Anda akan disajikan dengan cepat dan hangat</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dibuat dengan Cinta</h3>
              <p className="text-gray-600">Setiap porsi dibuat dengan penuh perhatian dan kasih sayang</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}