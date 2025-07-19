import Image from 'next/image';

const menuItems = [
  {
    id: 1,
    name: 'Bakso Spesial Murniati',
    description: 'Bakso enak khas Murniati dengan isian telur puyuh, tahu, dan sayuran segar. Menu andalan yang membuat kami bakso terenak di Sukoharjo!',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 2,
    name: 'Bakso Jumbo Enak',
    description: 'Bakso jumbo berukuran extra dengan daging sapi premium dan kuah gurih khas Bakso Murniati yang enak',
    price: 'Rp 18.000',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 3,
    name: 'Bakso Urat',
    description: 'Bakso dengan campuran urat sapi yang kenyal dan gurih',
    price: 'Rp 16.000',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 4,
    name: 'Bakso Keju',
    description: 'Inovasi terbaru dengan isian keju mozzarella yang meleleh',
    price: 'Rp 20.000',
    image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 5,
    name: 'Mie Ayam Bakso',
    description: 'Kombinasi mie ayam dengan bakso sapi dalam satu mangkuk',
    price: 'Rp 17.000',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 6,
    name: 'Bakso Bakar',
    description: 'Bakso yang dibakar dengan bumbu khas dan sambal pedas',
    price: 'Rp 19.000',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true
  }
];

export default function Menu() {
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

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
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
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
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