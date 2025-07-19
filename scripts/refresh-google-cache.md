# Cara Memaksa Google Refresh Cache Website

## Langkah-langkah untuk memaksa Google mengupdate hasil pencarian:

### 1. Google Search Console
- Buka [Google Search Console](https://search.google.com/search-console)
- Pilih property website Anda
- Pergi ke "URL Inspection"
- Masukkan URL: https://bakso-murniati.vercel.app
- Klik "Request Indexing"

### 2. Submit Sitemap Baru
- Di Google Search Console, pergi ke "Sitemaps"
- Submit sitemap: https://bakso-murniati.vercel.app/sitemap.xml

### 3. Fetch as Google (Manual)
- Buka browser dalam mode incognito
- Ketik di Google: `site:bakso-murniati.vercel.app`
- Ini akan memaksa Google untuk crawl ulang

### 4. Social Media Debugger
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### 5. Tunggu 24-72 jam
Cache Google biasanya akan terupdate dalam 1-3 hari setelah perubahan.

## Perubahan yang Sudah Dilakukan:
1. ✅ Menambahkan meta tag Open Graph yang lebih spesifik
2. ✅ Menambahkan icon dengan berbagai ukuran
3. ✅ Menambahkan meta tag untuk aplikasi mobile
4. ✅ Menambahkan browserconfig.xml untuk Windows tiles
5. ✅ Memperbaiki struktur metadata