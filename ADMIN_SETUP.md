# Bakso Murniati - Admin Dashboard Setup

## 🚀 Setup Convex Database

### 1. Install Dependencies
```bash
npm install convex
```

### 2. Initialize Convex
```bash
npx convex dev --configure
```

Ikuti instruksi untuk:
- Login ke akun Convex
- Buat project baru
- Copy URL yang diberikan ke `.env.local`

### 3. Environment Variables
Update file `.env.local`:
```env
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
CONVEX_DEPLOY_KEY=your-deploy-key
```

### 4. Run Development
```bash
# Terminal 1: Start Convex
npm run convex:dev

# Terminal 2: Start Next.js
npm run dev
```

## 📱 Admin Dashboard Features

### Login Credentials (Demo)
- **Email**: admin@baksomurniati.com
- **Password**: admin123

### Dashboard URLs
- **Admin Login**: `/admin/login`
- **Dashboard**: `/admin`
- **Menu Management**: `/admin/menu`
- **Add Menu**: `/admin/menu/create`

## 🛠️ Database Schema

### Menu Table
```typescript
{
  name: string,           // Nama menu
  description: string,    // Deskripsi menu
  price: number,         // Harga dalam Rupiah
  category: "bakso" | "minuman" | "tambahan",
  image?: string,        // URL gambar (optional)
  available: boolean,    // Status ketersediaan
  popular: boolean,      // Status populer
  createdAt: number,     // Timestamp
  updatedAt: number      // Timestamp
}
```

### Admin Table
```typescript
{
  email: string,         // Email admin
  name: string,          // Nama admin
  passwordHash: string,  // Password (demo only)
  createdAt: number      // Timestamp
}
```

## 🔧 CRUD Operations

### Create Menu Item
1. Go to `/admin/menu/create`
2. Fill form dengan data menu
3. Submit untuk menyimpan

### Read/View Menu
- Dashboard: Statistik menu
- Menu Management: List semua menu dengan filter

### Update Menu
1. Click "Edit" pada menu item
2. Update data yang diperlukan
3. Save changes

### Delete Menu
1. Click "Delete" pada menu item
2. Confirm deletion

### Toggle Status
- **Availability**: Click status badge untuk toggle available/unavailable
- **Popular**: Click popular badge untuk toggle popular/regular

## 🎨 Frontend Integration

Menu component (`app/components/Menu.tsx`) sudah terintegrasi dengan Convex:
- Fetch data real-time dari database
- Fallback ke static data jika database kosong
- Loading states
- Error handling

## 📊 Real-time Features

Semua perubahan di admin dashboard akan langsung terlihat di frontend:
- Add menu → Langsung muncul di website
- Update harga → Langsung update di website
- Toggle availability → Menu hilang/muncul di website
- Toggle popular → Badge populer muncul/hilang

## 🔒 Security Notes

**PENTING**: Implementasi saat ini untuk demo purposes only!

Untuk production:
1. Gunakan proper password hashing (bcrypt/argon2)
2. Implement proper session management
3. Add input validation & sanitization
4. Add rate limiting
5. Use environment variables untuk credentials
6. Add CSRF protection

## 🚀 Deployment

### Deploy to Vercel
```bash
# Deploy Convex
npm run convex:deploy

# Deploy Next.js
vercel --prod
```

### Environment Variables di Vercel
Set di Vercel dashboard:
- `NEXT_PUBLIC_CONVEX_URL`
- `CONVEX_DEPLOY_KEY`

## 📝 Usage Examples

### Add Sample Data
Setelah setup, bisa add menu via admin dashboard atau run:
```javascript
// Di Convex dashboard atau via mutation
await ctx.db.insert("menu", {
  name: "Bakso Spesial",
  description: "Bakso dengan telur puyuh",
  price: 15000,
  category: "bakso",
  available: true,
  popular: true,
  createdAt: Date.now(),
  updatedAt: Date.now()
});
```

## 🎯 Next Steps

Untuk pengembangan lebih lanjut:
1. Add image upload functionality
2. Add order management system
3. Add customer reviews
4. Add analytics & reporting
5. Add email notifications
6. Add inventory management

## 🆘 Troubleshooting

### Common Issues

**1. Convex URL not found**
- Make sure `.env.local` has correct `NEXT_PUBLIC_CONVEX_URL`
- Restart development server

**2. TypeScript errors**
- Run `npx convex dev` to generate types
- Check import paths

**3. Admin login not working**
- Use exact credentials: admin@baksomurniati.com / admin123
- Check browser console for errors

**4. Menu not showing**
- Check Convex dashboard for data
- Fallback data should show if database empty
- Check browser network tab

### Support
Untuk bantuan lebih lanjut, check:
- [Convex Documentation](https://docs.convex.dev)
- [Next.js Documentation](https://nextjs.org/docs)