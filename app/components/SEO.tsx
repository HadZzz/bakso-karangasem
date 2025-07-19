import { Metadata } from 'next';

export const seoConfig = {
  title: 'Bakso Enak di Sukoharjo - Bakso Murniati Karangasem Terenak Sejak 1985',
  description: 'Bakso enak di Sukoharjo paling terkenal! Warung bakso enak di Karangasem - Bakso Murniati menyajikan bakso terenak sukoharjo sejak 1985. Kuliner enak sukoharjo dengan bakso sapi premium, kuah gurih dan cita rasa legendaris. Warung bakso enak sukoharjo yang wajib dikunjungi!',
  keywords: [
    'bakso enak di sukoharjo',
    'bakso enak di karangasem',
    'warung bakso enak sukoharjo',
    'bakso terenak sukoharjo',
    'kuliner enak sukoharjo',
    'bakso murniati',
    'bakso paling enak di sukoharjo',
    'bakso enak karangasem sukoharjo',
    'bakso murniati sukoharjo',
    'bakso legendaris sukoharjo',
    'bakso sapi enak sukoharjo',
    'makanan enak di sukoharjo',
    'warung bakso karangasem',
    'bakso kuah enak sukoharjo',
    'bakso jumbo enak sukoharjo',
    'tempat makan enak sukoharjo',
    'warung makan enak karangasem',
    'bakso enak murah sukoharjo',
    'bakso halal sukoharjo',
    'bakso sapi karangasem',
    'kuliner karangasem sukoharjo',
    'makanan khas sukoharjo',
    'wisata kuliner sukoharjo',
    'bakso terkenal sukoharjo',
    'restoran bakso sukoharjo'
  ],
  url: 'https://bakso-murniati-karangasem.vercel.app',
  siteName: 'Bakso Murniati',
  images: [
    {
      url: '/logo-1024.png',
      width: 1024,
      height: 1024,
      alt: 'Logo Bakso Murniati - Bakso Paling Enak di Sukoharjo Karangasem',
    },
    {
      url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: 'Bakso Murniati - Bakso Paling Enak di Sukoharjo Karangasem',
    },
  ],
  locale: 'id_ID',
  type: 'website',
};

export const generateMetadata = (): Metadata => {
  return {
    title: {
      default: seoConfig.title,
      template: '%s | Bakso Murniati',
    },
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    authors: [{ name: 'Bakso Murniati', url: seoConfig.url }],
    creator: 'Bakso Murniati',
    publisher: 'Bakso Murniati',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.url),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: seoConfig.title,
      description: seoConfig.description,
      url: seoConfig.url,
      siteName: seoConfig.siteName,
      images: seoConfig.images,
      locale: seoConfig.locale,
      type: 'website',
    },
    icons: {
      icon: [
        { url: '/logo.png', type: 'image/png' },
        { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/logo.png',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoConfig.title,
      description: seoConfig.description,
      images: seoConfig.images,
      creator: '@baksomurniati',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: '5mAM5b2AU2ijdyRFKokDSX1NQ6b22MibtjoO2wRlsR8',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-site-verification-code',
    },
    other: {
      'business:contact_data:locality': 'Karangasem',
      'business:contact_data:region': 'Sukoharjo',
      'business:contact_data:country_name': 'Indonesia',
      'business:contact_data:phone_number': '+62-271-123-4567',
      'place:location:latitude': '-7.623456',
      'place:location:longitude': '110.823456',
      'og:site_name': 'Bakso Murniati',
      'og:title': seoConfig.title,
      'og:image': '/logo-1024.png',
      'og:image:width': '1024',
      'og:image:height': '1024',
      'og:image:alt': 'Logo Bakso Murniati - Bakso Paling Enak di Sukoharjo Karangasem',
    },
  };
};