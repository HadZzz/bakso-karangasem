'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        {/* Error Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Terjadi Kesalahan</h2>
        <p className="text-gray-600 mb-6">
          Maaf, terjadi kesalahan saat memuat halaman. Silakan coba lagi atau hubungi kami jika masalah berlanjut.
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Coba Lagi
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Kembali ke Beranda
          </button>
        </div>
        
        {/* Contact Info */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Butuh bantuan?</p>
          <div className="flex justify-center space-x-4 text-sm">
            <a 
              href="tel:+62271234567" 
              className="text-red-600 hover:text-red-700 font-medium"
            >
              (0271) 123-4567
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="https://wa.me/62085876120167" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}