#!/bin/bash

# Script untuk submit sitemap dan URL ke Google Search Console
# Jalankan setelah deployment untuk mempercepat indexing

SITE_URL="https://bakso-murniati-karangasem.vercel.app"
SITEMAP_URL="${SITE_URL}/sitemap.xml"

echo "🚀 Memulai proses submit ke Google Search Console..."

# 1. Ping Google untuk sitemap
echo "📍 Mengirim sitemap ke Google..."
curl -s "https://www.google.com/ping?sitemap=${SITEMAP_URL}"

# 2. Submit ke Bing juga
echo "📍 Mengirim sitemap ke Bing..."
curl -s "https://www.bing.com/ping?sitemap=${SITEMAP_URL}"

# 3. Submit halaman utama ke Google
echo "📍 Submit halaman utama ke Google..."
curl -s "https://www.google.com/ping?url=${SITE_URL}"

# 4. Submit halaman penting lainnya
IMPORTANT_PAGES=(
    "/#menu"
    "/#about" 
    "/#location"
    "/#contact"
)

for page in "${IMPORTANT_PAGES[@]}"; do
    echo "📍 Submit halaman: ${SITE_URL}${page}"
    curl -s "https://www.google.com/ping?url=${SITE_URL}${page}"
done

echo "✅ Selesai! Sitemap dan URL penting telah disubmit ke search engines."
echo ""
echo "📋 Langkah selanjutnya:"
echo "1. Verifikasi di Google Search Console: https://search.google.com/search-console"
echo "2. Submit sitemap manual di GSC: ${SITEMAP_URL}"
echo "3. Request indexing untuk halaman utama"
echo "4. Monitor performa di GSC dalam 24-48 jam"
echo ""
echo "🔍 Untuk cek status indexing:"
echo "   Google: site:${SITE_URL}"
echo "   Bing: site:${SITE_URL}"