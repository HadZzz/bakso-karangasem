import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bakso Murniati - Bakso Paling Enak di Sukoharjo Karangasem',
    short_name: 'Bakso Murniati',
    description: 'Bakso Murniati adalah bakso paling enak di Sukoharjo! Warung bakso enak di Karangasem sejak 2015 dengan cita rasa terenak',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2626',
    orientation: 'portrait',
    scope: '/',
    lang: 'id',
    categories: ['food', 'restaurant', 'business'],
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Menu',
        short_name: 'Menu',
        description: 'Lihat menu bakso kami',
        url: '/#menu',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Lokasi',
        short_name: 'Lokasi',
        description: 'Temukan lokasi warung kami',
        url: '/#location',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Kontak',
        short_name: 'Kontak',
        description: 'Hubungi kami',
        url: '/#contact',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
    ],
  };
}