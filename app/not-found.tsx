import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-red-600 mb-4">404</div>
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.207-2.175.193-.205.393-.408.597-.609A7.962 7.962 0 0112 9c2.34 0 4.5.816 6.207 2.175-.193.205-.393.408-.597.609z" />
            </svg>
          </div>
        </div>
        
        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau URL yang dimasukkan salah.
        </p>
        
        {/* Navigation Options */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Kembali ke Beranda
          </Link>
          
          <Link 
            href="/#menu"
            className="block w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Lihat Menu Kami
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-gray-600 mb-3">Atau kunjungi:</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link href="/#about" className="text-red-600 hover:text-red-700">
              Tentang Kami
            </Link>
            <Link href="/#location" className="text-red-600 hover:text-red-700">
              Lokasi
            </Link>
            <Link href="/#contact" className="text-red-600 hover:text-red-700">
              Kontak
            </Link>
            <a 
              href="https://wa.me/62085876120167" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
        
        {/* Bakso Murniati Branding */}
        <div className="mt-8">
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">BM</span>
            </div>
            <span className="text-sm">Bakso Murniati - Sejak 2015</span>
          </div>
        </div>
      </div>
    </div>
  );
}