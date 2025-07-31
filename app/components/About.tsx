import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Mengapa <span className="text-red-600">Bakso Murniati</span> Paling Enak?
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                <strong className="text-gray-800">Bakso Murniati</strong> telah menjadi <strong className="text-red-600">bakso paling enak di Sukoharjo</strong> 
                sejak tahun <strong className="text-red-600">2015</strong>. Sebagai <strong>warung bakso enak di Karangasem</strong>, 
                kami telah melayani ribuan pelanggan yang mengakui bahwa <strong>Bakso Murniati adalah bakso terenak di Sukoharjo</strong> 
                dengan cita rasa autentik yang tak terlupakan.
              </p>
              
              <p>
                Nama &ldquo;Murniati&rdquo; diambil dari nama pendiri kami, Ibu Murniati, yang dengan penuh 
                dedikasi mengembangkan resep rahasia yang membuat <strong>Bakso Murniati menjadi bakso enak di Sukoharjo</strong>. 
                Resep ini diwariskan turun temurun dengan tetap mempertahankan kualitas dan 
                cita rasa yang menjadikan kami <strong>warung bakso paling enak di Karangasem</strong>.
              </p>
              
              <p>
                Rahasia mengapa <strong>Bakso Murniati adalah bakso terenak di Sukoharjo</strong> terletak pada penggunaan 
                <strong className="text-gray-800">daging sapi pilihan premium</strong> dan bumbu-bumbu alami tanpa pengawet. 
                Setiap bakso dibuat fresh setiap hari dengan proses yang higienis dan penuh perhatian terhadap detail, 
                menjadikan kami <strong>bakso enak di Karangasem yang paling dicari</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">38+</div>
                <div className="text-gray-600">Tahun Berpengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">50K+</div>
                <div className="text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">6</div>
                <div className="text-gray-600">Varian Menu</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Warung bakso enak di Karangasem - Bakso terenak Sukoharjo Bakso Murniati"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Small Images */}
              <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Proses pembuatan bakso enak di Sukoharjo - Kuliner enak Sukoharjo"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Bahan berkualitas bakso sapi Karangasem - Warung bakso enak Sukoharjo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">2015</div>
                <div className="text-sm">Tahun Berdiri</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nilai-Nilai <span className="text-red-600">Kami</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Kualitas Terjamin</h4>
              <p className="text-gray-600">
                Kami selalu mengutamakan kualitas bahan baku dan proses pembuatan 
                yang higienis untuk kepuasan pelanggan.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Pelayanan Ramah</h4>
              <p className="text-gray-600">
                Setiap pelanggan adalah keluarga bagi kami. Kami melayani dengan 
                sepenuh hati dan senyuman yang tulus.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Inovasi Berkelanjutan</h4>
              <p className="text-gray-600">
                Kami terus berinovasi dalam menu dan pelayanan sambil tetap 
                mempertahankan cita rasa tradisional yang autentik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}