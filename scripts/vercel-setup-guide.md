# Panduan Lengkap Setup Vercel untuk Bakso Murniati

## 1. Mengubah Project Name di Vercel

### Langkah-langkah:
1. Login ke [vercel.com](https://vercel.com)
2. Pilih project Anda
3. Klik **Settings** (tab di atas)
4. Di bagian **General** > **Project Name**
5. Ubah nama menjadi: `bakso-murniati-karangasem`
6. Klik **Save**

### Hasil:
- Domain baru: `bakso-murniati-karangasem.vercel.app`
- Domain lama akan redirect otomatis

## 2. Mengubah Environment Variables (Opsional)

Di **Settings** > **Environment Variables**, tambahkan:
```
NEXT_PUBLIC_SITE_URL=https://bakso-murniati-karangasem.vercel.app
NEXT_PUBLIC_SITE_NAME=Bakso Murniati
```

## 3. Custom Domain (Jika Punya)

### Jika punya domain sendiri (misal: baksomurniati.com):
1. Di **Settings** > **Domains**
2. Klik **Add**
3. Masukkan domain: `baksomurniati.com`
4. Follow instruksi DNS setup

## 4. Mengapa Muncul "Vercel" di Google Search

### Penyebab:
- ✅ **Project name generic** → SUDAH DIPERBAIKI
- ✅ **Meta tags kurang lengkap** → SUDAH DIPERBAIKI  
- ⏳ **Google cache lama** → PERLU WAKTU 1-3 HARI
- ⏳ **Belum submit ke Google Search Console** → PERLU DILAKUKAN

## 5. Langkah Selanjutnya

### A. Setelah Deploy Ulang:
1. **Test metadata** dengan tools:
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Google Rich Results Test](https://search.google.com/test/rich-results)

### B. Submit ke Google:
1. **Google Search Console:**
   - Tambahkan property: `bakso-murniati-karangasem.vercel.app`
   - Request indexing untuk homepage
   - Submit sitemap: `/sitemap.xml`

### C. Monitor Progress:
- Cek hasil Google search setiap hari
- Biasanya 24-72 jam untuk update
- Jika masih "Vercel" setelah 1 minggu, ada masalah lain

## 6. Tips Tambahan

### Jika masih muncul "Vercel":
1. **Cek robots.txt:** `/robots.txt`
2. **Cek sitemap:** `/sitemap.xml`  
3. **Manual Google search:** `site:bakso-murniati-karangasem.vercel.app`
4. **Clear browser cache**

### Monitoring Tools:
- Google Search Console
- Google Analytics (jika sudah setup)
- Vercel Analytics (built-in)

---

**Status Update:** ✅ Semua kode sudah diperbaiki dan di-push ke GitHub!