export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://bakso-murniati.vercel.app/#restaurant",
        "name": "Bakso Murniati - Bakso Paling Enak di Sukoharjo",
        "alternateName": ["Warung Bakso Murniati", "Bakso Enak Karangasem", "Bakso Terenak Sukoharjo"],
        "description": "Bakso Murniati adalah bakso paling enak di Sukoharjo! Warung bakso enak di Karangasem sejak 1985 dengan cita rasa legendaris yang membuat kami bakso terenak di Sukoharjo",
        "url": "https://bakso-murniati.vercel.app",
        "telephone": "+62-271-123-4567",
        "email": "hadzipamuji5@gmail.com",
        "foundingDate": "1985",
        "founder": {
          "@type": "Person",
          "name": "Murniati"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Raya Karangasem No. 123",
          "addressLocality": "Karangasem",
          "addressRegion": "Sukoharjo",
          "postalCode": "57552",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -7.623456,
          "longitude": 110.823456
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "22:00"
          }
        ],
        "servesCuisine": ["Indonesian", "Traditional"],
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Mobile Payment"],
        "currenciesAccepted": "IDR",
        "hasMenu": {
          "@type": "Menu",
          "hasMenuSection": [
            {
              "@type": "MenuSection",
              "name": "Bakso Spesial",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Bakso Spesial Murniati",
                  "description": "Bakso enak khas Murniati dengan isian telur puyuh, tahu, dan sayuran segar. Menu andalan yang membuat kami bakso terenak di Sukoharjo",
                  "offers": {
                    "@type": "Offer",
                    "price": "15000",
                    "priceCurrency": "IDR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "Bakso Jumbo Enak",
                  "description": "Bakso jumbo berukuran extra dengan daging sapi premium dan kuah gurih khas Bakso Murniati yang enak",
                  "offers": {
                    "@type": "Offer",
                    "price": "18000",
                    "priceCurrency": "IDR"
                  }
                }
              ]
            }
          ]
        },
        "image": [
          "https://bakso-murniati.vercel.app/logo-1024.png",
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        "sameAs": [
          "https://instagram.com/baksomurniati",
          "https://facebook.com/baksomurniati"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Budi Santoso"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Bakso Murniati memang bakso paling enak di Sukoharjo! Sudah langganan dari tahun 90an, rasanya konsisten dan selalu enak. Bakso sapi nya juara!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Siti Aminah"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Sebagai warga Karangasem, saya bangga punya warung bakso enak seperti Bakso Murniati. Kuahnya gurih banget dan baksonya kenyal. Memang bakso terenak di Sukoharjo!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ahmad Wijaya"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Dari Solo sering ke Sukoharjo cuma buat makan di Bakso Murniati. Emang beda sama yang lain, ini bakso enak di Karangasem yang wajib dicoba!"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bakso-murniati.vercel.app/#localbusiness",
        "name": "Bakso Murniati - Warung Bakso Enak di Karangasem",
        "description": "Warung bakso paling enak di Sukoharjo sejak 1985. Bakso Murniati adalah bakso terenak di Karangasem dengan cita rasa legendaris",
        "url": "https://bakso-murniati.vercel.app",
        "telephone": "+62-271-123-4567",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Raya Karangasem No. 123",
          "addressLocality": "Karangasem",
          "addressRegion": "Sukoharjo",
          "postalCode": "57552",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -7.623456,
          "longitude": 110.823456
        },
        "openingHours": [
          "Mo-Fr 08:00-21:00",
          "Sa-Su 07:00-22:00"
        ],
        "image": "https://bakso-murniati.vercel.app/logo-1024.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://bakso-murniati.vercel.app/#website",
        "url": "https://bakso-murniati.vercel.app",
        "name": "Bakso Murniati - Bakso Paling Enak di Sukoharjo",
        "description": "Website resmi Bakso Murniati - Warung bakso enak di Karangasem, Sukoharjo. Bakso terenak dengan cita rasa legendaris sejak 1985",
        "publisher": {
          "@id": "https://bakso-murniati.vercel.app/#restaurant"
        },
        "inLanguage": "id-ID"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bakso-murniati.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://bakso-murniati.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Bakso Enak di Sukoharjo",
            "item": "https://bakso-murniati.vercel.app/#menu"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Warung Bakso Enak di Karangasem",
            "item": "https://bakso-murniati.vercel.app/#location"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://bakso-murniati.vercel.app/#organization",
        "name": "Bakso Murniati",
        "alternateName": "Warung Bakso Enak Karangasem",
        "url": "https://bakso-murniati.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bakso-murniati.vercel.app/logo-1024.png",
          "width": 1024,
          "height": 1024,
          "caption": "Logo Bakso Murniati - Bakso Paling Enak di Sukoharjo"
        },
        "image": "https://bakso-murniati.vercel.app/logo-1024.png",
        "description": "Bakso Murniati adalah warung bakso paling enak di Sukoharjo sejak 1985",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Raya Karangasem No. 123",
          "addressLocality": "Karangasem",
          "addressRegion": "Sukoharjo",
          "postalCode": "57552",
          "addressCountry": "ID"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-271-123-4567",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://instagram.com/baksomurniati",
          "https://facebook.com/baksomurniati"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}