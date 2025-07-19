'use client';

import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "Mengapa Bakso Murniati disebut bakso paling enak di Sukoharjo?",
    answer: "Bakso Murniati telah menjadi bakso paling enak di Sukoharjo sejak 1985 karena menggunakan resep rahasia turun temurun, daging sapi pilihan premium, dan bumbu alami tanpa pengawet. Ribuan pelanggan mengakui bahwa Bakso Murniati adalah bakso terenak di Sukoharjo dengan cita rasa yang tak terlupakan."
  },
  {
    id: 2,
    question: "Dimana lokasi warung bakso enak di Karangasem ini?",
    answer: "Bakso Murniati berlokasi di Jl. Raya Karangasem No. 123, Karangasem, Sukoharjo. Kami adalah warung bakso enak di Karangasem yang mudah dijangkau, dekat dengan Pasar Karangasem dan Masjid Al-Ikhlas. Parkir luas tersedia untuk kenyamanan Anda."
  },
  {
    id: 3,
    question: "Apa yang membuat Bakso Murniati berbeda dari bakso lain di Sukoharjo?",
    answer: "Yang membuat Bakso Murniati menjadi bakso enak di Sukoharjo adalah penggunaan daging sapi pilihan premium, kuah kaldu yang dimasak selama berjam-jam, dan bumbu rahasia yang diwariskan turun temurun sejak 1985. Setiap bakso dibuat fresh setiap hari dengan standar kualitas tinggi."
  },
  {
    id: 4,
    question: "Berapa harga bakso enak di Bakso Murniati?",
    answer: "Harga bakso enak di Bakso Murniati sangat terjangkau mulai dari Rp 15.000 untuk Bakso Spesial Murniati. Meskipun kami bakso paling enak di Sukoharjo, kami tetap menjaga harga yang ramah di kantong untuk semua kalangan."
  },
  {
    id: 5,
    question: "Jam berapa Bakso Murniati buka?",
    answer: "Warung bakso enak di Karangasem ini buka setiap hari. Senin-Jumat: 08:00-21:00, Sabtu-Minggu: 07:00-22:00. Kami siap melayani Anda dengan bakso terenak di Sukoharjo kapan saja!"
  },
  {
    id: 6,
    question: "Apakah Bakso Murniati melayani delivery?",
    answer: "Ya! Kami melayani delivery untuk area Sukoharjo dan sekitarnya. Anda bisa memesan bakso enak kami melalui WhatsApp di +62 858-7612-0167. Nikmati bakso paling enak di Sukoharjo langsung di rumah Anda!"
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            FAQ <span className="text-red-600">Bakso Enak</span> di Sukoharjo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pertanyaan yang sering ditanyakan tentang <strong>Bakso Murniati</strong> - 
            <strong>bakso paling enak di Sukoharjo</strong>
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${
                    openItems.includes(item.id) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-red-600 text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Masih Ada Pertanyaan Tentang Bakso Enak Kami?
            </h3>
            <p className="mb-6">
              Hubungi kami langsung untuk informasi lebih lanjut tentang <strong>bakso paling enak di Sukoharjo</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/62085876120167"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Chat WhatsApp
              </a>
              <a
                href="tel:+62271234567"
                className="bg-white hover:bg-gray-100 text-red-600 px-6 py-3 rounded-full transition-colors border-2 border-white"
              >
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}