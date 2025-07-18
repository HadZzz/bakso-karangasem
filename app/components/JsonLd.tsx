export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://baksomurniati.com/#restaurant",
        "name": "Bakso Murniati",
        "alternateName": "Warung Bakso Murniati",
        "description": "Bakso legendaris dengan cita rasa autentik sejak 1985 di Karangasem, Sukoharjo",
        "url": "https://baksomurniati.com",
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
                  "name": "Bakso Spesial",
                  "description": "Bakso sapi pilihan dengan isian telur puyuh, tahu, dan sayuran segar",
                  "offers": {
                    "@type": "Offer",
                    "price": "15000",
                    "priceCurrency": "IDR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "Bakso Jumbo",
                  "description": "Bakso berukuran jumbo dengan daging sapi premium dan kuah gurih",
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
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        "sameAs": [
          "https://instagram.com/baksomurniati",
          "https://facebook.com/baksomurniati"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://baksomurniati.com/#localbusiness",
        "name": "Bakso Murniati",
        "description": "Warung bakso legendaris di Karangasem, Sukoharjo sejak 1985",
        "url": "https://baksomurniati.com",
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
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        "@type": "WebSite",
        "@id": "https://baksomurniati.com/#website",
        "url": "https://baksomurniati.com",
        "name": "Bakso Murniati",
        "description": "Website resmi Bakso Murniati - Bakso legendaris Karangasem Sukoharjo",
        "publisher": {
          "@id": "https://baksomurniati.com/#restaurant"
        },
        "inLanguage": "id-ID"
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