'use client';

import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Sukoharjo",
    rating: 5,
    text: "Bakso Murniati memang bakso paling enak di Sukoharjo! Sudah langganan dari tahun 90an, rasanya konsisten dan selalu enak. Bakso sapi nya juara!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Siti Aminah",
    location: "Karangasem",
    rating: 5,
    text: "Sebagai warga Karangasem, saya bangga punya warung bakso enak seperti Bakso Murniati. Kuahnya gurih banget dan baksonya kenyal. Memang bakso terenak di Sukoharjo!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Ahmad Wijaya",
    location: "Solo",
    rating: 5,
    text: "Dari Solo sering ke Sukoharjo cuma buat makan di Bakso Murniati. Emang beda sama yang lain, ini bakso enak di Karangasem yang wajib dicoba!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Dewi Lestari",
    location: "Sukoharjo",
    rating: 5,
    text: "Bakso Murniati adalah bakso enak di Sukoharjo yang sudah jadi langganan keluarga. Anak-anak suka banget, harganya juga terjangkau. Recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Rudi Hartono",
    location: "Yogyakarta",
    rating: 5,
    text: "Kalau lewat Sukoharjo pasti mampir ke Bakso Murniati. Bakso jumbonya enak banget! Pantas disebut bakso paling enak di Sukoharjo.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "Rina Sari",
    location: "Karangasem",
    rating: 5,
    text: "Warung bakso enak di Karangasem yang paling favorit! Pelayanannya ramah, tempatnya bersih, dan yang pasti baksonya enak banget. Bakso Murniati memang the best!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Kata Mereka Tentang <span className="text-red-600">Bakso Murniati</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ribuan pelanggan mengakui bahwa <strong>Bakso Murniati adalah bakso paling enak di Sukoharjo</strong>. 
            Inilah testimoni mereka tentang <strong>warung bakso enak di Karangasem</strong> kami.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-red-600 text-white p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-red-100">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-red-100">Rating Rata-rata</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">38+</div>
              <div className="text-red-100">Tahun Melayani</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-red-100">Review Positif</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold mb-4">
              Buktikan Sendiri Mengapa Kami Bakso Terenak di Sukoharjo!
            </h3>
            <p className="text-red-100 mb-6">
              Bergabunglah dengan ribuan pelanggan yang sudah merasakan kelezatan <strong>bakso enak di Karangasem</strong> kami
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('location');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Kunjungi Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}