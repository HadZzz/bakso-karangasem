import { Metadata } from 'next';

export const seoConfig = {
  title: 'Bakso Murniati - Bakso Legendaris Karangasem Sukoharjo',
  description: 'Nikmati kelezatan bakso legendaris Bakso Murniati di Karangasem, Sukoharjo. Bakso sapi pilihan dengan kuah gurih dan bumbu rahasia turun temurun sejak 1985.',
  keywords: [
    'bakso',
    'bakso murniati', 
    'karangasem',
    'sukoharjo',
    'kuliner solo',
    'bakso sapi',
    'makanan tradisional',
    'warung bakso',
    'bakso enak',
    'bakso legendaris'
  ],
  url: 'https://bakso-murniati.vercel.app',
  siteName: 'Bakso Murniati',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: 'Bakso Murniati - Bakso Legendaris Karangasem Sukoharjo',
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
  };
};