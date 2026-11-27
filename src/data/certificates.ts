export interface Certificate {
  id: string;
  title: string;
  titleId: string;
  issuer: string;
  issuerId: string;
  year: string;
  category: 'award' | 'internship' | 'haki' | 'grant' | 'course';
  image: string;
  secondaryImage?: string;
  description: string;
  descriptionId: string;
}

export const certificates: Certificate[] = [
  {
    id: 'fast-2026',
    title: '3rd Place Winner — Collaborative Exhibition (FAST 2026)',
    titleId: 'Juara 3 — Pameran Kolaboratif FAST 2026',
    issuer: 'Festival of Science and Technology · Life Media',
    issuerId: 'Festival of Science and Technology · Life Media',
    year: '2026',
    category: 'award',
    image: '/sertif/sertif_FAST.jpg',
    description:
      'Awarded 3rd place for the Web-Based Employee Attendance System with real-time GPS & geotagged selfie validation developed with PT Sarana Insan Muda Selaras.',
    descriptionId:
      'Meraih Juara 3 atas inovasi Sistem Presensi Pegawai Berbasis Web dengan validasi koordinat GPS real-time dan foto selfie ber-geotag bersama PT Sarana Insan Muda Selaras.',
  },
  {
    id: 'proxocoris-2025',
    title: 'Top 10 Semifinalist — PROXOCORIS International 2025',
    titleId: 'Top 10 Semifinalist — PROXOCORIS International 2025',
    issuer: 'PROXOCORIS International (Web Development)',
    issuerId: 'PROXOCORIS International (Kategori Web Development)',
    year: '2025',
    category: 'award',
    image: '/sertif/Semifinal_Web Development_The Raid.jpg',
    description:
      'Certificate of Appreciation for leading "The Raid Team" to the Top 10 Semifinalists in Web Development with the bilingual AI healthcare platform Healtisin AI.',
    descriptionId:
      'Sertifikat apresiasi atas keberhasilan memimpin "The Raid Team" menembus Top 10 Semifinalist kategori Web Development lewat platform konsultasi medis AI Healtisin AI.',
  },
  {
    id: 'haki-kemenkumham-2024',
    title: 'Intellectual Property Rights (HAKI) — Kemenkumham RI',
    titleId: 'Surat Pencatatan Ciptaan (HAKI) — Kemenkumham RI',
    issuer: 'Ministry of Law & Human Rights RI',
    issuerId: 'Kementerian Hukum & HAM RI',
    year: '2024',
    category: 'haki',
    image: '/sertif/Haki.png',
    secondaryImage: '/sertif/haki2.png',
    description:
      'Official copyright certification granted by Kemenkumham RI for the Emergency Hospital Management Information System (SIM RS Kegawatdaruratan) architecture.',
    descriptionId:
      'Sertifikasi Hak Kekayaan Intelektual (HAKI) resmi dari Kemenkumham RI atas inovasi arsitektur Sistem Informasi Manajemen Rumah Sakit Kegawatdaruratan.',
  },
  {
    id: 'aino-internship-2024',
    title: 'Certificate of Internship (Rating: Excellent)',
    titleId: 'Sertifikat Magang Industri (Predikat: Excellent)',
    issuer: 'PT Aino Indonesia',
    issuerId: 'PT Aino Indonesia',
    year: '2024',
    category: 'internship',
    image: '/sertif/M._Ilham_Wahyudi_Product Intern.jpg',
    description:
      'Official internship completion certificate with an "Excellent" performance rating as Product Intern engineering an internal Inventory Web Dashboard using Laravel, PostgreSQL, and Leaflet.js.',
    descriptionId:
      'Sertifikat resmi penyelesaian magang industri dengan predikat kinerja "Excellent" sebagai Product Intern dalam pengembangan Web Dashboard Inventory internal.',
  },
  {
    id: 'p2mw-kemdikbud-2024',
    title: 'P2MW Entrepreneurship Funding Grant Recipient',
    titleId: 'Penerima Hibah Pendanaan Wirausaha P2MW',
    issuer: 'Kemdikbudristek RI',
    issuerId: 'Kemdikbudristek RI',
    year: '2024',
    category: 'grant',
    image: '/sertif/M.ILHAM WAHYUDI_P2MW.jpg',
    description:
      'National recipient of the Student Entrepreneurship Development Program (P2MW) funding grant under the Creative Industry & Culture category.',
    descriptionId:
      'Terpilih sebagai penerima hibah pendanaan Program Pembinaan Mahasiswa Wirausaha (P2MW) tingkat nasional pada kategori Industri Kreatif & Budaya.',
  },
  {
    id: 'figma-workshop-2024',
    title: 'UI/UX Design Workshop with Figma',
    titleId: 'Sertifikat Workshop Desain UI/UX Figma',
    issuer: 'UI/UX Design Workshop',
    issuerId: 'Workshop Desain UI/UX',
    year: '2024',
    category: 'course',
    image: '/sertif/sertif_workshop figma_Ilham Wahyudi.jpg',
    description:
      'Certified completion of an intensive UI/UX design workshop covering Figma component design systems, interactive user flows, and high-fidelity prototyping.',
    descriptionId:
      'Sertifikat penyelesaian workshop intensif desain UI/UX yang mencakup penyusunan design system komponen Figma, alur pengguna interaktif, dan high-fidelity prototyping.',
  },
];
