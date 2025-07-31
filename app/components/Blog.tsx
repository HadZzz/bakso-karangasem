export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Mengapa Bakso Enak di Sukoharjo Hanya Ada di Bakso Murniati?",
      excerpt: "Temukan rahasia mengapa warung bakso enak sukoharjo kami menjadi yang terdepan dalam menyajikan kuliner enak sukoharjo sejak 2015.",
      slug: "bakso-enak-di-sukoharjo-bakso-murniati",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Warung Bakso Enak di Karangasem: Sejarah Bakso Murniati",
      excerpt: "Perjalanan panjang warung bakso enak di karangasem yang telah menjadi bakso terenak sukoharjo selama puluhan tahun.",
      slug: "warung-bakso-enak-karangasem-sejarah",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Kuliner Enak Sukoharjo: Panduan Lengkap Wisata Kuliner",
      excerpt: "Jelajahi kuliner enak sukoharjo dengan panduan lengkap tempat makan enak sukoharjo yang wajib dikunjungi.",
      slug: "kuliner-enak-sukoharjo-panduan-wisata",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Artikel <span className="text-red-600">Kuliner Enak Sukoharjo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Baca artikel menarik tentang <strong>bakso enak di sukoharjo</strong>, 
            <strong>warung bakso enak di karangasem</strong>, dan <strong>kuliner enak sukoharjo</strong> lainnya
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="text-sm text-red-600 mb-2">{article.date}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-300">
                  Baca Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Mengapa <span className="text-red-600">Bakso Enak di Sukoharjo</span> Hanya di Bakso Murniati?
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-800">Bakso enak di Sukoharjo</strong> memang banyak, tapi 
                <strong className="text-red-600"> warung bakso enak sukoharjo</strong> yang benar-benar istimewa 
                hanya ada di Bakso Murniati. Sebagai <strong>bakso terenak sukoharjo</strong>, kami telah 
                membuktikan konsistensi kualitas selama puluhan tahun.
              </p>
              
              <p>
                Lokasi <strong>warung bakso enak di karangasem</strong> kami strategis dan mudah dijangkau. 
                Banyak wisatawan yang mencari <strong>kuliner enak sukoharjo</strong> selalu merekomendasikan 
                Bakso Murniati sebagai <strong>tempat makan enak sukoharjo</strong> yang wajib dikunjungi.
              </p>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Rahasia <strong>bakso sapi karangasem</strong> kami terletak pada pemilihan daging sapi premium 
                dan bumbu rahasia yang diwariskan turun temurun. Inilah yang membuat kami menjadi 
                <strong className="text-red-600"> bakso terkenal sukoharjo</strong> yang selalu ramai pengunjung.
              </p>
              
              <p>
                Sebagai bagian dari <strong>wisata kuliner sukoharjo</strong>, Bakso Murniati menawarkan 
                <strong>makanan khas sukoharjo</strong> dengan harga terjangkau. Kami bangga menjadi 
                <strong>restoran bakso sukoharjo</strong> yang halal dan higienis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}