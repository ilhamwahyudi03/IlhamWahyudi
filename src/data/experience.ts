export interface Experience {
  id: string;
  role: string;
  roleId: string;
  company: string;
  period: string;
  description: string;
  descriptionId: string;
  achievements: string[];
  achievementsId: string[];
  type: 'work' | 'education' | 'achievement';
  certificateId?: string;
}

export const experiences: Experience[] = [
  {
    id: 'pt-aino-indonesia',
    role: 'Product Intern',
    roleId: 'Product Intern',
    company: 'PT Aino Indonesia',
    period: 'October 2024 — December 2024',
    description:
      'Designed the development and optimization of an internal Inventory Web Dashboard system to streamline logistics management and company asset tracking.',
    descriptionId:
      'Merancang pengembangan dan optimasi sistem Web Dashboard Inventory internal untuk mengefisiensikan manajemen logistik dan pelacakan aset perusahaan.',
    achievements: [
      'Built secure backend logic using Laravel and managed the transactional database environment with PostgreSQL',
      'Integrated interactive geospatial mapping solutions using Leaflet.js for company asset tracking',
      'Collaborated closely with cross-divisional product management teams and delivered technical analysis and UI/UX solutions',
      'Earned an "Excellent" performance rating certification upon internship completion',
    ],
    achievementsId: [
      'Membangun logika backend yang aman menggunakan Laravel dan mengelola lingkungan basis data transaksional dengan PostgreSQL',
      'Mengintegrasikan solusi pemetaan interaktif menggunakan Leaflet.js untuk pelacakan aset perusahaan',
      'Berkolaborasi erat dengan tim manajemen produk lintas divisi serta memberikan analisis teknis dan solusi UI/UX',
      'Berhasil meraih sertifikat magang industri dengan predikat kinerja "Excellent"',
    ],
    type: 'work',
    certificateId: 'aino-internship-2024',
  },
  {
    id: 'universitas-aisyiyah-yogyakarta',
    role: "Bachelor's Degree (S1) in Information Technology",
    roleId: 'Sarjana (S1) Teknologi Informasi',
    company: "Universitas 'Aisyiyah Yogyakarta",
    period: 'October 2022 — August 2026',
    description:
      'Information Technology graduate focused on Fullstack Web Development, UI/UX Design, and Data Analytics.',
    descriptionId:
      'Sarjana Teknologi Informasi berfokus pada Fullstack Web Development, UI/UX Design, dan Data Analytics.',
    achievements: [
      'GPA: 3.51 / 4.00 (Yogyakarta, Indonesia)',
      'Undergraduate Thesis: Implementation of a Long Short-Term Memory (LSTM) Model Based on RSI and MACD for BBCA Stock Prediction',
      'Successfully published a scientific journal article in the field of Information Technology',
      'Active leadership in student organizations: BEM FST Secretary of Entrepreneurship (2025-2026) & Head of Business Fundraising ITECH (2024-2025)',
      'Accreditation Volunteer for UNISA Information Technology Study Program (2023-2026)',
    ],
    achievementsId: [
      'IPK: 3.51 / 4.00 (Yogyakarta, Indonesia)',
      'Tugas Akhir / Skripsi: Implementasi Model Long Short-Term Memory (LSTM) Berbasis RSI dan MACD untuk Prediksi Saham BBCA',
      'Menyelesaikan seluruh riset dan berhasil memublikasikan jurnal ilmiah di bidang Teknologi Informasi',
      'Kepemimpinan aktif: Sekretaris Departemen Kewirausahaan BEM FST (2025-2026) & Ketua Divisi Dana Usaha ITECH UNISA (2024-2025)',
      'Relawan Akreditasi Program Studi Teknologi Informasi UNISA (2023-2026)',
    ],
    type: 'education',
  },
  {
    id: 'fast-exhibition-2026',
    role: '3rd Place Winner — Collaborative Exhibition',
    roleId: 'Juara 3 — Pameran Kolaboratif',
    company: 'Festival of Science and Technology (FAST) 2026',
    period: '2026',
    description:
      'Awarded 3rd place for the Web-Based Employee Attendance System with GPS and geotagged selfie validation developed with partner PT Sarana Insan Muda Selaras.',
    descriptionId:
      'Meraih Juara 3 untuk Sistem Presensi Pegawai Berbasis Web dengan validasi koordinat GPS dan verifikasi foto selfie ber-geotag bersama mitra PT Sarana Insan Muda Selaras.',
    achievements: [
      'Built with Laravel 10 backend and Vue.js 3.3 frontend for hybrid workforces',
      'Integrated Geolocation API and WebRTC API for fraud-proof attendance validation',
      '100% feature implementation success rate during rigorous Black-Box testing',
    ],
    achievementsId: [
      'Dikembangkan dengan backend Laravel 10 dan frontend Vue.js 3.3 untuk kebutuhan hybrid working',
      'Integrasi Geolocation API dan WebRTC API untuk validasi kehadiran bebas kecurangan lokasi',
      'Mencapai 100% tingkat keberhasilan implementasi fitur dalam pengujian Black-Box testing',
    ],
    type: 'achievement',
    certificateId: 'fast-2026',
  },
  {
    id: 'proxocoris-international-2025',
    role: 'Top 10 Semifinalist (Web Development Category)',
    roleId: 'Top 10 Semifinalist (Kategori Web Development)',
    company: 'PROXOCORIS International 2025',
    period: '2025',
    description:
      'Led "The Raid Team" in developing Healtisin AI, a bilingual AI-powered health consultation platform.',
    descriptionId:
      'Memimpin "The Raid Team" dalam pengembangan Healtisin AI, platform konsultasi kesehatan bertenaga AI dwibahasa.',
    achievements: [
      'Dual AI model integration combining Google Gemini API and DeepSeek API',
      'Interactive UI with Vite 6.x, Tailwind CSS 3.4, Vanilla JS, Dark Mode, and client-side localization',
      'Integrated Midtrans payment gateway for digital subscription consultations',
    ],
    achievementsId: [
      'Integrasi model AI ganda menggabungkan Google Gemini API dan DeepSeek API',
      'UI interaktif dengan Vite 6.x, Tailwind CSS 3.4, Vanilla JS, Dark Mode, serta lokalisasi client-side',
      'Integrasi payment gateway Midtrans untuk modul pembayaran langganan konsultasi',
    ],
    type: 'achievement',
    certificateId: 'proxocoris-2025',
  },
  {
    id: 'haki-kemenkumham-2024',
    role: 'Certified Intellectual Property Rights (HAKI)',
    roleId: 'Surat Pencatatan Ciptaan (HAKI) Resmi',
    company: 'Kemenkumham RI',
    period: '2024',
    description:
      'Official copyright registration for Emergency Hospital Management Information System (SIM RS Kegawatdaruratan) architecture.',
    descriptionId:
      'Pencatatan ciptaan resmi dari Kemenkumham RI untuk arsitektur Sistem Informasi Manajemen Rumah Sakit (SIM RS Kegawatdaruratan).',
    achievements: [
      'Led strategic collaboration with the Master of Midwifery program to digitize emergency medical records',
      'Engineered complete system architecture, complex clinical user flows, and interactive high-fidelity Figma prototypes',
    ],
    achievementsId: [
      'Memimpin kolaborasi strategis dengan program S2 Kebidanan untuk digitalisasi rekam medis darurat',
      'Merancang arsitektur sistem komprehensif, alur pengguna klinis kompleks, dan purwarupa high-fidelity Figma',
    ],
    type: 'achievement',
    certificateId: 'haki-kemenkumham-2024',
  },
  {
    id: 'p2mw-kemdikbud-2024',
    role: 'P2MW Entrepreneurship Grant Recipient',
    roleId: 'Penerima Hibah Pendanaan P2MW',
    company: 'Kemdikbudristek RI',
    period: '2024',
    description:
      'Selected national recipient of the Student Entrepreneurship Development Program (P2MW) funding grant under the Creative Industry & Culture category.',
    descriptionId:
      'Terpilih sebagai penerima hibah pendanaan Program Pembinaan Mahasiswa Wirausaha (P2MW) nasional di bawah Kategori Industri Kreatif & Budaya.',
    achievements: [
      'Successfully pitched and defended business model and digital implementation to national evaluators',
      'Managed project execution, budgeting, and milestone reporting to the Ministry of Education',
    ],
    achievementsId: [
      'Berhasil melakukan pitching dan mempertahankan model bisnis serta implementasi digital di hadapan penguji nasional',
      'Mengelola eksekusi proyek, alokasi anggaran, dan pelaporan capaian program ke Kemdikbudristek RI',
    ],
    type: 'achievement',
    certificateId: 'p2mw-kemdikbud-2024',
  },
];
