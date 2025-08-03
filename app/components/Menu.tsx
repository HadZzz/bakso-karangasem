"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import MenuClient to avoid SSR issues
const MenuClient = dynamic(() => import("./MenuClient"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      <span className="ml-3 text-gray-600">Loading menu...</span>
    </div>
  )
});

// No static fallback items to prevent flickering

export default function Menu() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

        {/* Menu Content - Only render on client side */}
        {isClient ? (
          <MenuClient />
        ) : (
          // Loading placeholder for SSR
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <span className="ml-3 text-gray-600">Loading menu...</span>
          </div>
        )}

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