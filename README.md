# 🍜 Bakso Murniati - Website Landing Page

Website landing page modern dan responsif untuk Bakso Murniati, warung bakso legendaris di Karangasem, Sukoharjo sejak 1985.

## ✨ Fitur Utama

- **Desain Modern & Responsif** - Tampilan yang menarik di semua perangkat
- **Performance Optimal** - Dibangun dengan Next.js 14 dan optimasi gambar
- **SEO Friendly** - Metadata lengkap, structured data, dan sitemap
- **Interactive Components** - Smooth scrolling, animasi, dan hover effects
- **Contact Integration** - WhatsApp, telepon, dan form kontak
- **Google Maps** - Lokasi warung terintegrasi
- **Progressive Web App Ready** - Fast loading dan mobile-first

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Bun
- **Images**: Unsplash CDN
- **Icons**: Heroicons
- **Fonts**: Geist Sans & Geist Mono

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ atau Bun
- Git

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/bakso-murniati.git
   cd bakso-murniati
   ```

2. **Install dependencies**
   ```bash
   # Menggunakan Bun (recommended)
   bun install
   
   # Atau menggunakan npm
   npm install
   ```

3. **Run development server**
   ```bash
   # Menggunakan Bun
   bun dev
   
   # Atau menggunakan npm
   npm run dev
   ```

4. **Open browser**
   Buka [http://localhost:3000](http://localhost:3000)

## 📁 Struktur Project

```
bakso-murniati/
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Menu.tsx        # Menu showcase
│   │   ├── About.tsx       # About section
│   │   ├── Location.tsx    # Location & maps
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Footer
│   │   ├── SEO.tsx         # SEO configuration
│   │   └── JsonLd.tsx      # Structured data
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── loading.tsx         # Loading component
│   ├── error.tsx           # Error handling
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Sitemap generator
│   └── robots.ts           # Robots.txt
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## 🎨 Sections

### 1. **Hero Section**
- Background image dengan overlay
- Call-to-action buttons
- Fitur unggulan (3 cards)
- Scroll indicator

### 2. **Menu Section**
- Grid layout menu items
- Hover effects dan animations
- Badge "Populer" untuk menu favorit
- Informasi harga dan deskripsi

### 3. **About Section**
- Cerita brand dan sejarah
- Statistik (tahun berpengalaman, pelanggan, menu)
- Gallery foto
- Nilai-nilai perusahaan

### 4. **Location Section**
- Google Maps integration
- Informasi alamat lengkap
- Jam operasional
- Kontak dan petunjuk arah

### 5. **Contact Section**
- Contact form dengan WhatsApp integration
- Multiple contact channels
- Quick action buttons
- Social media links

## 🔧 Customization

### Mengubah Konten
1. **Menu Items**: Edit array `menuItems` di `app/components/Menu.tsx`
2. **Contact Info**: Update nomor telepon dan alamat di komponen terkait
3. **Images**: Ganti URL gambar Unsplash dengan gambar custom
4. **Colors**: Modify color scheme di `tailwind.config.ts`

### SEO Configuration
Edit file `app/components/SEO.tsx` untuk:
- Meta title dan description
- Keywords
- Open Graph tags
- Twitter cards
- Structured data

## 📱 Performance Features

- **Image Optimization**: Next.js Image component dengan lazy loading
- **Font Optimization**: Local fonts dengan font-display: swap
- **Code Splitting**: Automatic dengan Next.js App Router
- **Compression**: Gzip dan Brotli compression
- **Caching**: Static generation dan ISR
- **Core Web Vitals**: Optimized untuk LCP, FID, dan CLS

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta tags
- **Structured Data**: JSON-LD untuk restaurant schema
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization

## 📦 Build & Deploy

### Build for Production
```bash
# Menggunakan Bun
bun run build

# Atau menggunakan npm
npm run build
```

### Start Production Server
```bash
# Menggunakan Bun
bun start

# Atau menggunakan npm
npm start
```

### Deploy Options

1. **Vercel** (Recommended)
   - Connect GitHub repository
   - Auto-deploy on push
   - Global CDN dan edge functions

2. **Netlify**
   - Drag & drop build folder
   - Continuous deployment
   - Form handling built-in

3. **VPS/Dedicated Server**
   - Build project locally
   - Upload ke server
   - Setup reverse proxy (Nginx)

## 🎯 Copywriting Highlights

- **Headline**: "Bakso Murniati - Cita Rasa Legendaris Sejak 1985"
- **Value Proposition**: Resep turun temurun, bahan berkualitas, selalu hangat
- **Call-to-Action**: "Lihat Menu Kami", "Kunjungi Kami"
- **Social Proof**: 38+ tahun pengalaman, 50K+ pelanggan puas
- **Local SEO**: Fokus pada "Karangasem Sukoharjo" dan "kuliner Solo"

## 📞 Contact Information

**Bakso Murniati**
- 📍 Jl. Raya Karangasem No. 123, Karangasem, Sukoharjo
- 📞 (0271) 123-4567
- 📱 +62 858-7612-0167
- 📧 hadzipamuji5@gmail.com
- 📷 @baksomurniati

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Dibuat dengan ❤️ untuk Bakso Murniati - Warung Bakso Legendaris Karangasem Sukoharjo**
