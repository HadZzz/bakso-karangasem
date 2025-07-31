export default function InternalLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Jelajahi <span className="text-red-600">Bakso Enak di Sukoharjo</span> Lainnya
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Internal Link Cards */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <a href="#menu" className="text-red-600 hover:text-red-700">
                  Menu Bakso Enak di Sukoharjo
                </a>
              </h3>
              <p className="text-gray-600 text-sm">
                Lihat berbagai pilihan <strong>bakso enak di sukoharjo</strong> dengan harga terjangkau
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <a href="#about" className="text-red-600 hover:text-red-700">
                  Sejarah Warung Bakso Enak Karangasem
                </a>
              </h3>
              <p className="text-gray-600 text-sm">
                Pelajari sejarah <strong>warung bakso enak di karangasem</strong> sejak 2015
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <a href="#location" className="text-red-600 hover:text-red-700">
                  Lokasi Bakso Terenak Sukoharjo
                </a>
              </h3>
              <p className="text-gray-600 text-sm">
                Temukan lokasi <strong>bakso terenak sukoharjo</strong> yang mudah dijangkau
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <a href="#testimonials" className="text-red-600 hover:text-red-700">
                  Review Kuliner Enak Sukoharjo
                </a>
              </h3>
              <p className="text-gray-600 text-sm">
                Baca testimoni pelanggan tentang <strong>kuliner enak sukoharjo</strong> kami
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <a href="#contact" className="text-red-600 hover:text-red-700">
                  Kontak Warung Bakso Enak Sukoharjo
                </a>
              </h3>
              <p className="text-gray-600 text-sm">
                Hubungi <strong>warung bakso enak sukoharjo</strong> untuk pemesanan
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <a href="#blog" className="text-red-600 hover:text-red-700">
                  Artikel Tempat Makan Enak Sukoharjo
                </a>
              </h3>
              <p className="text-gray-600 text-sm">
                Baca artikel menarik tentang <strong>tempat makan enak sukoharjo</strong>
              </p>
            </div>
          </div>
          
          {/* SEO Footer Text */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-gray-800">Bakso Murniati</strong> adalah pilihan terbaik untuk 
              <strong className="text-red-600"> bakso enak di Sukoharjo</strong>. Sebagai 
              <strong> warung bakso enak di Karangasem</strong> yang telah berpengalaman sejak 2015, 
              kami menyajikan <strong>bakso terenak sukoharjo</strong> dengan kualitas terjamin. 
              Kunjungi <strong>kuliner enak sukoharjo</strong> yang satu ini dan rasakan perbedaannya!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}