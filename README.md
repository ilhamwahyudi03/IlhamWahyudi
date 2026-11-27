<div align="center">

# 🌐 M. Ilham Wahyudi — Engineering Portfolio
### Fullstack Web Developer & Data Specialist

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ilham--portofolio-blue?style=for-the-badge&logo=vercel&logoColor=white)](https://ilham-portofolio-black.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js%2015.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%203.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini API](https://img.shields.io/badge/Google%20Gemini-8E75C4?style=for-the-badge&logo=googlebard&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<p align="center">
  Modern, high-craft engineering portfolio and interactive case study platform showcasing real-world software architecture, AI solutions, data pipelines, and verified intellectual property credentials.
</p>

[**Explore Live Demo »**](https://ilham-portofolio-black.vercel.app/) · [Report Bug](https://github.com/ilhamwahyudi03/ilham-portfolio/issues) · [Request Feature](https://github.com/ilhamwahyudi03/ilham-portfolio/issues)

</div>

---

## 📑 Daftar Isi (Table of Contents)
- [🌟 Ikhtisar Proyek (Project Overview)](#-ikhtisar-proyek-project-overview)
- [✨ Fitur Utama (Key Features)](#-fitur-utama-key-features)
- [🛠️ Arsitektur & Tech Stack](#️-arsitektur--tech-stack)
- [📱 Desain Responsif & Mobile Architecture](#-desain-responsif--mobile-architecture)
- [📂 Struktur Repositori (Project Structure)](#-struktur-repositori-project-structure)
- [🚀 Panduan Menjalankan (Getting Started)](#-panduan-menjalankan-getting-started)
- [⚙️ Variabel Lingkungan (Environment Variables)](#️-variabel-lingkungan-environment-variables)
- [🚢 Panduan Deployment (Deployment Guide)](#-panduan-deployment-deployment-guide)
- [🏆 Pencapaian & Proyek Unggulan](#-pencapaian--proyek-unggulan)
- [📬 Kontak & Jejaring Profesional](#-kontak--jejaring-profesional)

---

## 🌟 Ikhtisar Proyek (Project Overview)

Portofolio digital ini dirancang dan dibangun dari nol dengan standar rekayasa modern (**Clean Layered Architecture**, **Type-Level Safety**, dan prinsip **Zero AI-Slop**). Menampilkan karya rekayasa nyata dari **M. Ilham Wahyudi**—lulusan Sarjana (S1) Teknologi Informasi Universitas 'Aisyiyah Yogyakarta (IPK 3.51) dengan pengalaman sebagai **Product Intern** di PT Aino Indonesia.

Platform ini memadukan ekosistem **Next.js 15 App Router**, **Framer Motion 12**, **Google Gemini API**, dan **next-intl** untuk menghadirkan pengalaman eksplorasi interaktif berkinerja tinggi bagi rekruter teknis, klien, dan kolaborator industri.

---

## ✨ Fitur Utama (Key Features)

### 1. 🤖 Interactive AI Portfolio Assistant (Google Gemini 2.5 / 1.5)
- Asisten AI chatbot cerdas terintegrasi langsung di web (`/api/chat`).
- Di-grounding secara akurat pada CV, riwayat pendidikan, skripsi LSTM, magang industri, dan portofolio teknis Ilham Wahyudi.
- Menjawab pertanyaan seputar tech stack, alur proyek, dan ketersediaan kerja dalam dwibahasa (Indonesia & Inggris).

### 2. 🌍 Internationalization (i18n Dwibahasa Penuh)
- Dukungan lokalisasi mulus antara **Bahasa Indonesia (`/id`)** dan **Bahasa Inggris (`/en`)** menggunakan `next-intl`.
- Routing otomatis dengan URL bersih dan pergantian bahasa instan (*zero page reload*).

### 3. 🎯 Dual-Engine Responsive Design (Mobile Dedicated Layout)
- **Tampilan Khusus Mobile**: Alih-alih mengecilkan tampilan desktop secara paksa, versi smartphone dirancang dengan *compact identity avatar*, kartu proyek horizontal *snap carousel*, *inline skill tags*, dan *collapsible timeline*.
- **Tampilan Desktop**: Tampilan editorial megah dengan grid bento, video walkthrough interaktif, dan split layout 12-kolom.

### 4. 📜 Verified Credentials & Multi-Page Lightbox Modal
- Galeri sertifikat resmi berfilter kategori (*Awards*, *HAKI*, *Internship*, *Grants*, *Workshops*).
- Dilengkapi **Interactive Lightbox Modal**: zoom in/out, keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), dan pergantian multi-halaman untuk sertifikat resmi (seperti dokumen Surat Pencatatan Ciptaan HAKI Kemenkumham 2 lembar).

### 5. ♾️ Seamless Infinite Horizontal Tech Marquee
- Komponen marquee horizontal yang bergerak mulus menampilkan 22 logo teknologi terapan (Laravel, Vue.js, React, Next.js, Python, PostgreSQL, Leaflet.js, Git, Figma, dll.) dengan fitur otomatis jeda saat kursor diarahkan (*hover to pause*).

### 6. 🎥 Rich Project Case Studies & Video Demos
- Setiap studi kasus dilengkapi rekaman video walkthrough sistem (`.webm`), penjelasan masalah & solusi bisnis, peran arsitektur framework, metrik hasil, dan tautan repositori.

---

## 🛠️ Arsitektur & Tech Stack

| Lapisan (Layer) | Teknologi / Pustaka | Peran & Penggunaan |
|---|---|---|
| **Framework** | [Next.js 15.1 (App Router)](https://nextjs.org/) | Core fullstack framework dengan Server & Client Components |
| **UI Library** | [React 19](https://react.dev/) | Primitif antarmuka reaktif berkinerja tinggi |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Validasi tipe data ketat dan kontrak antar modul |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utilitas desain responsif dengan sistem variabel warna CSS |
| **Animations** | [Framer Motion 12](https://motion.dev/) | Transisi halus, stagger animations, modal dialog, & drawer |
| **Smooth Scroll** | [Lenis Scroll](https://lenis.darkroom.engineering/) | Alur scroll ergonomis dengan performa 60 FPS |
| **AI Integration** | [@google/genai SDK](https://www.npmjs.com/package/@google/genai) | Integrasi API Google Gemini untuk chatbot portofolio |
| **Localization** | [next-intl 3.26](https://next-intl-docs.vercel.app/) | Manajemen terjemahan dwibahasa (ID / EN) berbasis JSON |
| **Icons** | [Lucide React](https://lucide.dev/) | Set ikon SVG minimalis dan tajam |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) | Pengalih tema Dark Mode / Light Mode tanpa hydration flicker |
| **Deployment** | [Vercel Edge Network](https://vercel.com/) | Automated CI/CD, image optimization, dan serverless functions |

---

## 📱 Desain Responsif & Mobile Architecture

Portofolio ini menerapkan prinsip arsitektur **Mobile Layout Reflow** (bukan sekadar desktop yang diperkecil):

```
+------------------------------------+      +---------------------------+
|          DESKTOP (>= 768px)        |      |       MOBILE (< 768px)    |
+------------------------------------+      +---------------------------+
| [NAVBAR: Logo ...... Menu ... ID]  |      | [NAV: IW .... ID  Menu☰]  |
|                                    |      |                           |
| [KIRI: 7 Kolom]    [KANAN: 5 Kolom]|      | 🟢 Available  📍 Yogya, ID|
| • Bio Lengkap      • Foto Portrait |      | [Avatar 64px] Ilham W.    | <- Compact Header
| • Metrik Lebar       Frame 340px   |      | Fullstack Web & Data      |
| • 3 Tombol Aksi                    |      | +-----------------------+ |
|                                    |      | | 6+ Proy | 5 HAKI | 3 Bid| | <- Micro-Metric
| [PROYEK BENTO GRID (2 Kolom)]      |      | [ Unduh CV ] [Proyek] [✉] | <- 1-Baris Ergonomis
| • 1 Flagship Split Card            |      |                           |
| • 2 Equal Featured Cards           |      | [PROYEK: SNAP CAROUSEL ⇄] | <- Geser Samping
|                                    |      | [Card 1] [Card 2] [Card 3]| (Hemat Ruang!)
| [TIMELINE PENGALAMAN VERTIKAL]     |      |                           |
| • Poin pencapaian terbuka penuh    |      | [TIMELINE: ACCORDION ▾]   | <- Collapsible Points
+------------------------------------+      +---------------------------+
```

---

## 📂 Struktur Repositori (Project Structure)

```text
ilham-portfolio/
├── messages/                       # Kamus lokalisasi dwibahasa
│   ├── id.json                     # Terjemahan Bahasa Indonesia
│   └── en.json                     # Terjemahan Bahasa Inggris
├── public/                         # Aset publik statis
│   ├── cv/                         # Berkas PDF Curriculum Vitae (ID & EN)
│   ├── images/                     # Foto profil berkualitas tinggi
│   ├── projects/                   # Tangkapan layar proyek & arsitektur
│   ├── sertif/                     # Dokumen sertifikat resmi & HAKI
│   └── videos/                     # Rekaman demo walkthrough aplikasi (.webm)
├── src/
│   ├── app/
│   │   ├── [locale]/               # Dinamis i18n App Router
│   │   │   ├── layout.tsx          # Root shell layout, theme, & metadata
│   │   │   ├── page.tsx            # Halaman utama portofolio
│   │   │   └── projects/
│   │   │       └── [id]/page.tsx   # Halaman studi kasus mendalam tiap proyek
│   │   └── api/
│   │       └── chat/route.ts       # Endpoint POST chatbot bertenaga Gemini
│   ├── components/
│   │   ├── ai-assistant/           # Chatbot widget & chat panel
│   │   ├── animations/             # Tech canvas, custom cursor, scroll progress
│   │   ├── layout/                 # Navbar responsif & footer
│   │   ├── projects/               # Video player & arsitektur breakdown
│   │   ├── providers/              # Theme provider & smooth scroll
│   │   └── sections/               # Komponen seksi modular halaman utama
│   │       ├── hero-section.tsx
│   │       ├── about-section.tsx
│   │       ├── bento-projects.tsx
│   │       ├── skills-section.tsx
│   │       ├── tech-marquee.tsx
│   │       ├── experience-timeline.tsx
│   │       ├── certificate-showcase.tsx
│   │       ├── certificate-modal.tsx
│   │       └── contact-section.tsx
│   ├── data/                       # Single source of truth (typed datasets)
│   │   ├── certificates.ts         # Arsip metadata sertifikat & HAKI
│   │   ├── experience.ts           # Data riwayat karir, kampus, & prestasi
│   │   ├── projects.ts             # Detail arsitektur & metrik proyek
│   │   └── skills.ts               # Matriks keahlian & pengelompokan tech
│   ├── i18n/                       # Konfigurasi routing & request next-intl
│   ├── lib/                        # Konfigurasi Google GenAI & helper utils
│   └── styles/
│       └── globals.css             # CSS token, font setting, & utility padding
├── .env.example                    # Template variabel lingkungan
├── next.config.ts                  # Konfigurasi plugin Next.js
├── tailwind.config.ts              # Konfigurasi token Tailwind & tema warna
└── tsconfig.json                   # Konfigurasi TypeScript strict mode
```

---

## 🚀 Panduan Menjalankan (Getting Started)

### Prasyarat (Prerequisites)
Pastikan lingkungan lokal Anda telah terinstal:
- **Node.js**: versi `18.18.0` atau `20.x` (LTS direkomendasikan)
- **Package Manager**: `npm`, `pnpm`, atau `yarn`
- **Git**

### 1. Kloning Repositori
```bash
git clone https://github.com/ilhamwahyudi03/ilham-portfolio.git
cd ilham-portfolio
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Konfigurasi Variabel Lingkungan
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Buka file `.env.local` dan masukkan kunci API Google Gemini Anda (dapatkan gratis di [Google AI Studio](https://aistudio.google.com/)):
```env
GEMINI_API_KEY="AIzaSyYourGeminiApiKeyHere"
```

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka peramban di [http://localhost:3000](http://localhost:3000) untuk melihat portofolio berjalan secara langsung.

### 5. Skrip Perintah Tersedia (Available Scripts)
- `npm run dev`: Menjalankan server pengembangan lokal dengan Hot Reloading.
- `npm run build`: Melakukan kompilasi produksi dan optimasi static/dynamic prerender.
- `npm run start`: Menjalankan server produksi hasil build.
- `npm run lint`: Memeriksa standar kode dan potensi galat melalui ESLint 9.

---

## ⚙️ Variabel Lingkungan (Environment Variables)

| Variabel | Deskripsi | Wajib? | Contoh |
|---|---|---|---|
| `GEMINI_API_KEY` | Kunci API resmi Google GenAI untuk asisten chatbot CV interaktif | **Ya** (untuk fitur chatbot) | `AIzaSyB...` |

*(Catatan: Aplikasi tetap dapat berjalan untuk navigasi portofolio statis meskipun API key tidak diisi; chatbot akan menampilkan fallback pesan informatif jika koneksi API belum terhubung).*

---

## 🚢 Panduan Deployment (Deployment Guide)

Aplikasi ini dioptimalkan untuk di-deploy secara instan di platform **Vercel**:

1. Lakukan *Push* repositori Anda ke GitHub.
2. Buka dashboard [Vercel](https://vercel.com/) dan pilih **Add New Project**.
3. Hubungkan repositori GitHub `ilham-portfolio`.
4. Pada bagian **Environment Variables**, tambahkan:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Masukkan API key Gemini Anda.
5. Klik **Deploy**. Vercel akan otomatis mengompilasi dan mempublikasikan situs web dengan dukungan CDN global dan SSL gratis.

---

## 🏆 Pencapaian & Proyek Unggulan

Beberapa proyek dan pencapaian yang terdokumentasi lengkap di dalam portofolio ini:

1. **Sistem Presensi Pegawai Berbasis Web (FAST 2026)**
   - *Prestasi*: **Juara 3** Pameran Kolaboratif Festival of Science and Technology 2026.
   - *Teknologi*: Laravel, Vue.js 3.3, Geolocation API, WebRTC Camera Geotagging, MySQL.
2. **Surat Pencatatan Ciptaan (HAKI) Resmi — Kemenkumham RI**
   - *Pencatatan*: Hak Kekayaan Intelektual resmi untuk arsitektur Sistem Informasi Manajemen Rumah Sakit (SIM RS) Kegawatdaruratan.
3. **Penerima Hibah Pendanaan Wirausaha P2MW Kemdikbudristek RI**
   - Lolos seleksi nasional Program Pembinaan Mahasiswa Wirausaha Kategori Industri Kreatif & Budaya.
4. **Healtisin AI — Top 10 Semifinalist PROXOCORIS International 2025**
   - Platform konsultasi medis bilingual bertenaga integrasi model Google Gemini API & DeepSeek API dengan Midtrans Payment Gateway.
5. **Skripsi & Publikasi Jurnal Prediksi Saham BBCA (LSTM)**
   - Riset peramalan harga saham berbasis model *Deep Learning* Long Short-Term Memory dengan indikator teknikal RSI & MACD.
6. **Magang Industri Berpredikat "Excellent" di PT Aino Indonesia**
   - Pengembangan internal Inventory Web Dashboard berbasis Laravel, PostgreSQL, dan Leaflet.js.

---

## 📬 Kontak & Jejaring Profesional

Saya selalu terbuka untuk diskusi teknis, peluang rekrutmen (*Full-time*, *Contract*, *Hybrid/Remote*), maupun kolaborasi proyek perangkat lunak dan analisis data.

- **Nama**: M. Ilham Wahyudi
- **Domisili**: Yogyakarta, Indonesia
- **Email**: [ilhamwahyudi4625@gmail.com](mailto:ilhamwahyudi4625@gmail.com)
- **WhatsApp**: [+62 878-7156-3112](https://wa.me/6287871563112)
- **LinkedIn**: [linkedin.com/in/m-ilham-wahyudi-0b1365310](https://linkedin.com/in/m-ilham-wahyudi-0b1365310)
- **GitHub**: [github.com/ilhamwahyudi03](https://github.com/ilhamwahyudi03)
- **Live Portfolio**: [ilham-portofolio-black.vercel.app](https://ilham-portofolio-black.vercel.app/)

---

<div align="center">
  <sub>Dibangun dengan dedikasi rekayasa perangkat lunak oleh <b>M. Ilham Wahyudi</b>. © 2026 Hak Cipta Dilindungi.</sub>
</div>
#   I l h a m W a h y u d i  
 