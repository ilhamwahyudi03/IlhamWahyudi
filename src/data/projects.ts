export interface FrameworkRole {
  name: string;
  layer: string;
  layerId: string;
  role: string;
  roleId: string;
}

export interface ProjectScreenModule {
  id: string;
  image: string;
  width: number;
  height: number;
  frameStyle: "studio" | "browser";
  browserUrl?: string;
  tag: string;
  tagId: string;
  title: string;
  titleId: string;
  summary: string;
  summaryId: string;
  highlights: string[];
  highlightsId: string[];
  frameworksUsed: string[];
}

export interface SystemOverview {
  problem: string;
  problemId: string;
  solution: string;
  solutionId: string;
  architectureNote: string;
  architectureNoteId: string;
}

export interface Project {
  id: string;
  title: string;
  titleId: string;
  category: string;
  categoryId: string;
  description: string;
  descriptionId: string;
  longDescription: string;
  longDescriptionId: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  size: "large" | "medium" | "small";
  accentColor: string;
  previewImage?: string;
  videoDemo?: string;
  videoPoster?: string;
  videoCaption?: string;
  videoCaptionId?: string;
  systemOverview?: SystemOverview;
  frameworkStack?: FrameworkRole[];
  gallery?: ProjectScreenModule[];
}

export const projects: Project[] = [
  {
    id: "sistem-presensi-pegawai",
    title: "Web-Based Employee Attendance System",
    titleId: "Sistem Presensi Pegawai Berbasis Web",
    category: "Fullstack Web App",
    categoryId: "Aplikasi Web Fullstack",
    description:
      "Responsive hybrid attendance system featuring real-time GPS coordinate validation and secure geotagged selfie verification. Awarded 3rd Place at FAST 2026.",
    descriptionId:
      "Aplikasi absensi pegawai end-to-end responsif untuk hybrid work dengan validasi GPS real-time dan verifikasi foto selfie ber-geotag aman. Meraih Juara 3 pada FAST 2026.",
    longDescription: `Developed an end-to-end, responsive employee attendance web application in collaboration with industry partner PT Sarana Insan Muda Selaras, tailored specifically for hybrid working environments.\n\nKey engineering decisions & highlights:\n- Engineered robust backend logic using Laravel with a reactive, modular frontend built on Vue.js 3.3, Blade Views, Vite, and Tailwind CSS\n- Integrated the HTML5 Geolocation API and WebRTC Camera API to enforce real-time GPS coordinate boundaries and capture anti-spoof geotagged selfies\n- Conducted rigorous Black-Box functional testing across all modules, achieving a 100% implementation success rate with zero runtime errors\n- Won 3rd Place at the collaborative Festival of Science and Technology (FAST) 2026 exhibition for innovation in automated location verification`,
    longDescriptionId: `Membangun aplikasi absensi pegawai end-to-end yang responsif berkolaborasi bersama mitra industri PT Sarana Insan Muda Selaras, disesuaikan untuk kebutuhan kerja hybrid modern.\n\nKeputusan rekayasa utama & pencapaian:\n- Membangun arsitektur backend andal menggunakan Laravel serta antarmuka reaktif menggunakan Vue.js 3.3, Blade Views, Vite, dan Tailwind CSS\n- Mengintegrasikan Geolocation API dan WebRTC API untuk validasi koordinat GPS secara real-time dan verifikasi foto selfie ber-geotag yang aman dari manipulasi\n- Melakukan verifikasi fungsionalitas menyeluruh melalui Black-Box Testing dengan tingkat keberhasilan implementasi fitur 100% tanpa runtime error\n- Berhasil meraih Juara 3 pada pameran kolaboratif Festival of Science and Technology (FAST) 2026 atas keunggulan inovasi dan fitur validasi lokasi`,
    tech: [
      "Laravel",
      "Vue.js 3.3",
      "Tailwind CSS",
      "Geolocation API",
      "WebRTC API",
      "MySQL",
      "Black-Box Testing",
    ],
    metrics: [
      { label: "FAST 2026 Award", value: "3rd Place" },
      { label: "Feature Success", value: "100%" },
      { label: "Runtime Errors", value: "0" },
      { label: "Verification", value: "GPS & Geotag" },
    ],
    githubUrl: "https://github.com/ilhamwahyudi03",
    featured: true,
    size: "large",
    accentColor: "from-blue-500/10 to-cyan-500/5",
    previewImage: "/projects/sistem-presensi/02-hero-showcase-admin.png",
    videoDemo: "/videos/sistem-presensi-demo.webm",
    videoPoster: "/projects/sistem-presensi/02-hero-showcase-admin.png",
    videoCaption:
      "End-to-end live walkthrough covering employee GPS check-in, camera geotagging, overtime submission, and HR admin validation.",
    videoCaptionId:
      "Rekaman demo langsung alur lengkap: absensi pegawai via GPS, verifikasi kamera live, pengajuan lembur, hingga validasi oleh admin HR.",
    systemOverview: {
      problem:
        "Hybrid field engineers and office staff needed a unified attendance workflow that prevents buddy-punching and fake file uploads while remaining effortless on smartphones.",
      problemId:
        "Pegawai lapangan (dinas luar) maupun staf kantor membutuhkan sistem presensi terpadu yang mampu mencegah titip absen serta manipulasi unggahan foto tanpa menyulitkan pengguna mobile.",
      solution:
        "Designed a dual-portal Laravel & Vue/Tailwind web platform combining live HTML5 Geolocation boundaries, direct WebRTC camera capture (blocking gallery uploads), break/overtime tracking, and one-click CSV/Print HR exports.",
      solutionId:
        "Membangun platform web dual-portal berbasis Laravel & Vue/Tailwind yang menggabungkan validasi radius GPS real-time, kamera langsung WebRTC (tanpa unggah galeri), pelacakan jam istirahat/lembur, dan ekspor laporan HR (CSV/Print).",
      architectureNote:
        "Multi-role RBAC architecture separating Employee Self-Service and HR Admin Operations over normalized MySQL relational schemas, validated with 100% Black-Box functional pass rate.",
      architectureNoteId:
        "Arsitektur multi-role RBAC memisahkan layanan mandiri pegawai dan operasional admin HR di atas skema relasional MySQL, teruji 100% lulus lewat Black-Box Testing.",
    },
    frameworkStack: [
      {
        name: "Laravel (PHP 8.2)",
        layer: "Backend & API",
        layerId: "Backend & Keamanan",
        role: "Handles multi-role authentication, work-hour & tardiness calculation, overtime validation workflows, and CSV report generation.",
        roleId:
          "Mengelola autentikasi multi-role, kalkulasi jam kerja dan keterlambatan, alur validasi lembur, serta generator laporan CSV.",
      },
      {
        name: "Vue.js 3.3, Vite & Tailwind CSS",
        layer: "Frontend & UI",
        layerId: "Frontend & Antarmuka",
        role: "Powers reactive mobile-first attendance cards, real-time digital clocks, responsive sidebars, and interactive attendance charts.",
        roleId:
          "Menyusun antarmuka mobile-first yang reaktif, jam presensi real-time, navigasi responsif, dan visualisasi grafik kehadiran.",
      },
      {
        name: "HTML5 Geolocation & WebRTC",
        layer: "Device & Sensor API",
        layerId: "Integrasi Sensor & Lokasi",
        role: "Captures live latitude/longitude coordinates and live webcam/front-camera frames directly from browser hardware.",
        roleId:
          "Mengambil koordinat GPS secara langsung serta memicu kamera WebRTC agar foto wajah tidak dapat dimanipulasi dari galeri.",
      },
      {
        name: "MySQL & Black-Box QA",
        layer: "Database & Testing",
        layerId: "Basis Data & Pengujian",
        role: "Stores structured daily attendance, break logs, and overtime attachments with verified zero-error functional test coverage.",
        roleId:
          "Menyimpan log kedatangan, istirahat, pulang, dan bukti lembur secara terstruktur dengan cakupan uji fungsional bebas error.",
      },
    ],
    gallery: [
      {
        id: "presensi-admin-dashboard",
        image: "/projects/sistem-presensi/02-hero-showcase-admin.png",
        width: 3200,
        height: 2000,
        frameStyle: "studio",
        tag: "Module 01 // HR Command Center",
        tagId: "Modul 01 // Dasbor Admin HR",
        title: "Admin Analytics & Real-Time Workforce Monitoring",
        titleId: "Dasbor Analitik & Monitoring Kehadiran Pegawai",
        summary:
          "Centralized control room providing HR administrators with daily attendance ratios, in-office vs. field distribution metrics, and pending overtime alerts across both desktop and mobile viewports.",
        summaryId:
          "Pusat kendali bagi admin HR untuk memantau total pegawai hadir, distribusi kerja dalam/luar kantor, grafik tren bulanan, serta antrean lembur yang perlu divalidasi secara responsif.",
        highlights: [
          "Live KPI counters for Present, Absent, In-Office, Field Work, and Approved Overtime",
          "Monthly bar analytics tracking attendance vs. overtime ratios",
          "Responsive mobile drawer and filterable attendance breakdown",
        ],
        highlightsId: [
          "Ringkasan metrik harian: hadir, tidak hadir, kantor, dinas luar, dan lembur disetujui",
          "Grafik batang rekap bulanan kehadiran, absen, dan lembur",
          "Akses monitoring penuh baik dari layar desktop maupun smartphone HR",
        ],
        frameworksUsed: ["Laravel", "Tailwind CSS", "Vite", "MySQL"],
      },
      {
        id: "presensi-employee-dashboard",
        image: "/projects/sistem-presensi/01-hero-showcase-user.png",
        width: 3200,
        height: 2000,
        frameStyle: "studio",
        tag: "Module 02 // Employee Portal",
        tagId: "Modul 02 // Portal Pegawai",
        title: "Personal Work Mode Insights & Daily Check-In Status",
        titleId: "Ringkasan Produktivitas & Status Kehadiran Harian",
        summary:
          "Gives each employee instant visibility into total workdays, monthly attendance, WFH/field ratios, tardiness count, and active daily check-in/check-out location logs.",
        summaryId:
          "Memberikan transparansi kepada setiap pegawai mengenai total hari kerja, statistik bulanan, rasio WFH/dinas luar, riwayat keterlambatan, serta log titik lokasi presensi hari berjalan.",
        highlights: [
          "Work-mode comparison chart separating Office, Field Work, and Overtime",
          "Attendance pie ratio highlighting discipline & punctuality",
          "Real-time 'Today Status' banner showing check-in/out timestamp & field location",
        ],
        highlightsId: [
          "Grafik perbandingan mode kerja (Kantor, Luar Kantor, dan Lembur) per bulan",
          "Diagram proporsi kehadiran untuk memantau kedisiplinan pribadi",
          "Kartu Status Hari Ini berisi jam check-in/out serta titik lokasi tugas",
        ],
        frameworksUsed: ["Vue.js 3.3", "Laravel Blade", "Chart Analytics"],
      },
      {
        id: "presensi-mobile-geotag",
        image: "/projects/sistem-presensi/03-mobile-trio-showcase.png",
        width: 3200,
        height: 2000,
        frameStyle: "studio",
        tag: "Module 03 // Mobile Field Workflow",
        tagId: "Modul 03 // Alur Mobile & GPS",
        title: "Multi-Stage Clocking & Anti-Spoof GPS Camera Overtime",
        titleId: "Presensi Bertahap & Pengajuan Lembur Kamera GPS",
        summary:
          "Purpose-built mobile UX covering secure login, real-time clocking (Arrival, Break, Return), and field overtime submission with automatic GPS coordinates and live camera verification.",
        summaryId:
          "Antarmuka mobile yang ringkas mulai dari autentikasi aman, tombol presensi bertahap (Kedatangan, Istirahat, Kembali), hingga formulir lembur yang otomatis mengunci koordinat GPS dan foto kamera live.",
        highlights: [
          "Live digital timer synced with server time to prevent client clock tampering",
          "Auto-filled latitude/longitude coordinates (-7.7956, 110.3695) via Geolocation API",
          "Direct WebRTC camera capture eliminating pre-saved gallery photo uploads",
        ],
        highlightsId: [
          "Timer digital real-time tersinkronisasi untuk presensi masuk, istirahat, dan kembali",
          "Pengisian koordinat GPS otomatis via HTML5 Geolocation API",
          "Wajib ambil foto wajah langsung dari kamera via WebRTC Camera API",
        ],
        frameworksUsed: ["Geolocation API", "WebRTC API", "Mobile-First CSS"],
      },
      {
        id: "presensi-operations-bento",
        image: "/projects/sistem-presensi/04-features-bento-grid.png",
        width: 3200,
        height: 2000,
        frameStyle: "studio",
        tag: "Module 04 // Operations & Reporting",
        tagId: "Modul 04 // Operasional & Ekspor",
        title: "Attendance Filtering, Overtime Approval & CSV/Print Reports",
        titleId: "Kelola Presensi, Validasi Lembur & Rekap Ekspor CSV",
        summary:
          "Streamlines administrative payroll preparation through multi-criteria filters (Year, Month, Location, Status), unread overtime notification queues, and instant CSV/Print recapitulation.",
        summaryId:
          "Mempercepat penyusunan laporan HR melalui filter multi-kriteria (Tahun, Bulan, Lokasi, Status), kotak masuk validasi lembur berstatus baca, serta rekapitulasi siap cetak dan ekspor CSV.",
        highlights: [
          "Multi-parameter search across employee attendance and field activity logs",
          "One-click CSV export and formatted print views for HR payroll cycles",
          "Dedicated overtime inbox with read-state tracking and reason verification",
        ],
        highlightsId: [
          "Filter periode, lokasi kerja, dan status kehadiran dengan riwayat kegiatan lengkap",
          "Fitur Export CSV & Print langsung untuk kebutuhan penggajian dan audit HR",
          "Panel validasi pengajuan lembur dengan penanda status baca dan filter tanggal",
        ],
        frameworksUsed: ["Laravel Eloquent", "MySQL", "CSV Export"],
      },
    ],
  },
  {
    id: "healtisin-ai",
    title: "Healtisin AI — Health Consultation Platform",
    titleId: "Healtisin AI — Platform Konsultasi Kesehatan",
    category: "AI Healthcare Platform",
    categoryId: "Layanan Kesehatan Berbasis AI",
    description:
      "Bilingual AI health consultation platform built with Laravel 11, Google Gemini & DeepSeek APIs, Midtrans Pro subscription, and real-time client-side localization. Top 10 Semifinalist PROXOCORIS 2025.",
    descriptionId:
      "Platform konsultasi medis AI dua bahasa (ID & EN) berbasis Laravel 11, integrasi API Gemini & DeepSeek, pembayaran Midtrans Pro, dan lokalisasi real-time. Top 10 Semifinalist PROXOCORIS 2025.",
    longDescription: `Served as Team Leader & Frontend Developer of "The Raid Team" in engineering Healtisin AI, an innovative bilingual (Indonesian & English) AI-powered medical consultation platform.\n\nArchitecture & engineering highlights:\n- Built on Laravel 11 with Sanctum & Google Socialite authentication, Role-Based Access Control, and system audit trail logging\n- Integrated dual LLM backends combining Google Gemini API and DeepSeek API for accurate, context-aware health screening insights\n- Designed and built a responsive user interface with adaptive Dark/Light Mode support using Vite 6, Tailwind CSS 3.4, Vanilla JS, Axios, and Blade Views\n- Implemented dynamic real-time client-side localization via google-translate-api-browser and Chart.js admin analytics\n- Integrated an end-to-end Pro subscription payment workflow through the Midtrans Payment Gateway\n- Successfully led technical coordination and task distribution, steering the prototype to a Top 10 Semifinalist placement at the PROXOCORIS International 2025 competition`,
    longDescriptionId: `Bertindak sebagai Team Leader & Frontend Developer dari "The Raid Team" dalam pengembangan Healtisin AI, platform konsultasi medis berbasis kecerdasan buatan dua bahasa (Indonesia & Inggris).\n\nHighlight arsitektur & rekayasa:\n- Dibangun di atas Laravel 11 dengan autentikasi Sanctum & Google OAuth (Socialite), kontrol akses berbasis peran (RBAC), dan pencatatan audit log sistem\n- Integrasi model AI ganda yang menggabungkan Google Gemini API dan DeepSeek API untuk skrining gejala kesehatan yang kontekstual dan akurat\n- Merancang antarmuka interaktif dan responsif dengan dukungan Dark/Light Mode adaptif menggunakan Vite 6, Tailwind CSS 3.4, Vanilla JS, Axios, dan Blade Views\n- Mengimplementasikan lokalisasi client-side secara real-time menggunakan google-translate-api-browser serta analitik admin via Chart.js\n- Mengintegrasikan modul pembayaran langganan Healtisin Pro melalui Midtrans Payment Gateway\n- Mengelola koordinasi teknis tim yang sukses membawa purwarupa ini meraih Top 10 Semifinalist pada kompetisi internasional PROXOCORIS 2025`,
    tech: [
      "Laravel 11",
      "Gemini API",
      "DeepSeek API",
      "Vite 6",
      "Tailwind CSS 3.4",
      "Chart.js",
      "Midtrans Gateway",
    ],
    metrics: [
      { label: "PROXOCORIS 2025", value: "Top 10" },
      { label: "Bilingual Support", value: "ID & EN" },
      { label: "AI Engines", value: "Dual API" },
      { label: "Payment", value: "Midtrans" },
    ],
    githubUrl: "https://github.com/ilhamwahyudi03",
    featured: true,
    size: "medium",
    accentColor: "from-indigo-500/10 to-blue-500/5",
    previewImage: "/projects/healtisin/mockup-1-hero-overview.png",
    videoDemo: "/videos/healtisin-demo.webm",
    videoPoster: "/projects/healtisin/mockup-2-ai-assistant.png",
    videoCaption:
      "Live platform walkthrough demonstrating bilingual navigation, interactive AI symptom triage chat, theme switching, and Pro subscription flow.",
    videoCaptionId:
      "Video demo interaktif menampilkan navigasi dua bahasa, percakapan triase gejala bersama AI, pergantian Dark Mode, hingga alur langganan Pro.",
    systemOverview: {
      problem:
        "Patients often struggle to obtain structured initial symptom guidance 24/7 in accessible Indonesian/English medical language without waiting hours for basic triage.",
      problemId:
        "Masyarakat kerap kesulitan mendapatkan panduan skrining gejala kesehatan awal secara cepat 24/7 dalam bahasa yang mudah dipahami sebelum berkonsultasi ke dokter.",
      solution:
        "Engineered a bilingual AI medical screening SaaS built with Laravel 11 & Dual LLM APIs (Gemini + DeepSeek), complete with persistent consultation threads, voice input, dark mode UX, and Midtrans Pro tiering.",
      solutionId:
        "Merancang SaaS skrining medis berbasis AI dengan Laravel 11 & Dual-LLM (Gemini + DeepSeek), lengkap dengan riwayat sesi persisten, input suara, mode gelap adaptif, dan langganan Pro terintegrasi Midtrans.",
      architectureNote:
        "Fullstack Laravel 11 monolith paired with Vite 6 asset bundling, Chart.js operational telemetry, Google OAuth, and structured audit trail logging.",
      architectureNoteId:
        "Arsitektur Fullstack Laravel 11 terpadu dengan bundling Vite 6, telemetri Chart.js di panel admin, Google OAuth, dan pencatatan audit log sistem.",
    },
    frameworkStack: [
      {
        name: "Laravel 11, Sanctum & Socialite",
        layer: "Backend & Security",
        layerId: "Backend & Autentikasi",
        role: "Manages Google OAuth login, role-based access (User/Admin), persistent chat threads, and backoffice system audit logs.",
        roleId:
          "Mengelola login Google OAuth, hak akses berbasis peran (User/Admin), penyimpanan riwayat chat, serta log audit aktivitas sistem.",
      },
      {
        name: "Google Gemini & DeepSeek API",
        layer: "AI & Triage Engine",
        layerId: "Mesin Kecerdasan Buatan",
        role: "Processes multi-turn patient symptoms to return structured triage follow-up questions and safe initial self-care advice.",
        roleId:
          "Memproses keluhan gejala pasien secara kontekstual untuk menghasilkan pertanyaan skrining lanjutan dan saran penanganan awal terstruktur.",
      },
      {
        name: "Vite 6, Blade & Tailwind CSS 3.4",
        layer: "Frontend & UX",
        layerId: "Frontend & Responsivitas",
        role: "Delivers fast asset compilation, adaptive Dark/Light Mode styling, voice input UI, and responsive mobile drawers.",
        roleId:
          "Menyajikan antarmuka ringan dengan Dark/Light Mode adaptif, tombol input suara, serta tata letak responsif di desktop maupun ponsel.",
      },
      {
        name: "Midtrans PHP, Chart.js & i18n",
        layer: "Payment & Analytics",
        layerId: "Pembayaran & Analitik",
        role: "Automates Pro plan checkout via Midtrans, renders admin activity doughnut/revenue charts, and translates UI dynamically.",
        roleId:
          "Mengotomatiskan transaksi paket Pro via Midtrans, merender grafik analitik pengguna di admin, serta menerjemahkan UI secara client-side.",
      },
    ],
    gallery: [
      {
        id: "healtisin-hero-overview",
        image: "/projects/healtisin/mockup-1-hero-overview.png",
        width: 3200,
        height: 2000,
        frameStyle: "studio",
        tag: "Module 01 // Public Portal & Branding",
        tagId: "Modul 01 // Halaman Publik & Branding",
        title: "24/7 Smart Digital Health Screening Entry",
        titleId: "Gerbang Platform Skrining Kesehatan Digital 24/7",
        summary:
          "Welcoming landing page featuring custom 3D assistant branding, quick language/theme controls in the top navbar, and one-click onboarding toward free AI medical screening.",
        summaryId:
          "Halaman utama yang memperkenalkan asisten kesehatan digital 24/7 lengkap dengan pengalih bahasa dan tema langsung di navbar serta akses cepat uji coba gratis.",
        highlights: [
          "Responsive multi-device layout synced cleanly between desktop browser and iOS viewport",
          "Built-in navbar language switcher (ID/EN) & Dark Mode toggle",
          "Direct onboarding CTA routing users into interactive AI consultation",
        ],
        highlightsId: [
          "Tata letak responsif konsisten antara tampilan browser desktop dan layar mobile",
          "Kontrol pengalih bahasa (ID/EN) dan mode tema terpasang di header",
          "Alur onboarding ringkas menuju ruang konsultasi AI",
        ],
        frameworksUsed: ["Laravel 11", "Tailwind CSS", "Vite 6"],
      },
      {
        id: "healtisin-ai-assistant",
        image: "/projects/healtisin/mockup-2-ai-assistant.png",
        width: 3200,
        height: 2000,
        frameStyle: "studio",
        tag: "Module 02 // AI Consultation Workspace",
        tagId: "Modul 02 // Ruang Konsultasi AI",
        title: "Context-Aware Symptom Triage & Persistent Chat History",
        titleId: "Skrining Gejala Kontekstual & Riwayat Chat Persisten",
        summary:
          "Conversational workspace allowing users to describe symptoms via text or voice input while maintaining structured follow-up questions and saved consultation history in the sidebar.",
        summaryId:
          "Ruang percakapan interaktif yang memungkinkan pengguna menyampaikan keluhan melalui teks maupun suara, menerima pertanyaan triase bernomor, dan menyimpan riwayat sesi di sidebar.",
        highlights: [
          "Structured medical follow-up questions narrowing down symptom severity",
          "Left sidebar managing past consultations (sleep quality, fever, nutrition)",
          "Voice input trigger & quick-action buttons on every AI response",
        ],
        highlightsId: [
          "Respons AI terstruktur dengan poin pertanyaan medis lanjutan yang sistematis",
          "Sidebar riwayat chat persisten untuk meninjau ulang sesi konsultasi sebelumnya",
          "Dukungan tombol mikrofon (voice input) dan lampiran di kolom pesan",
        ],
        frameworksUsed: ["Gemini API", "DeepSeek API", "Axios", "Blade Views"],
      },
      {
        id: "healtisin-dark-mode",
        image: "/projects/healtisin/mockup-3-dark-mode-ai.png",
        width: 3200,
        height: 2000,
        frameStyle: "studio",
        tag: "Module 03 // Adaptive Dark Experience",
        tagId: "Modul 03 // Mode Gelap & Kontrol Pesan",
        title: "Synchronized Dark Theme & Message Regenerate Controls",
        titleId: "Pengalaman Dark Mode Adaptif & Regenerasi Pesan",
        summary:
          "Low-glare dark mode palette optimized for evening consultations across both desktop and mobile screens, equipped with message editing, copy, and response regeneration controls.",
        summaryId:
          "Palet warna gelap ramah mata untuk kenyamanan konsultasi di malam hari pada desktop maupun smartphone, lengkap dengan tombol salin, edit prompt, dan regenerasi jawaban.",
        highlights: [
          "Consistent dark-teal surface hierarchy preserving high text readability",
          "Interactive message actions (edit prompt & regenerate AI output)",
          "Real-time client-side translation support across consultation threads",
        ],
        highlightsId: [
          "Hierarki permukaan dark-teal yang kontras dan nyaman dibaca di ruang redup",
          "Kontrol interaktif pada setiap balon chat (edit pertanyaan & regenerasi respons)",
          "Lokalisasi antarmuka ID/EN sinkron secara real-time di desktop & mobile",
        ],
        frameworksUsed: [
          "Tailwind Dark Mode",
          "Client-Side i18n",
          "Vanilla JS",
        ],
      },
      {
        id: "healtisin-admin-pricing",
        image: "/projects/healtisin/mockup-4-admin-pricing.png",
        width: 3200,
        height: 2000,
        frameStyle: "studio",
        tag: "Module 04 // SaaS Backoffice & Payment",
        tagId: "Modul 04 // Analitik Admin & Langganan Pro",
        title: "Admin Telemetry Dashboard & Midtrans Pro Subscription",
        titleId: "Dasbor Analitik Admin & Alur Upgrade Healtisin Pro",
        summary:
          "Complete SaaS backoffice tracking active users, transaction volume, Chart.js engagement analytics, and system audit logs alongside a clear Free vs. Pro upgrade table powered by Midtrans.",
        summaryId:
          "Panel admin SaaS untuk memantau pengguna aktif, volume transaksi, grafik donut Chart.js, dan log audit sistem, bersanding dengan halaman perbandingan fitur Free vs Pro via Midtrans.",
        highlights: [
          "Doughnut & financial KPI widgets tracking user engagement and orders",
          "Dedicated admin menus for API keys, Payment config, Pricing, and System Logs",
          "Clear Free vs. Pro comparison card driving Midtrans subscription checkout",
        ],
        highlightsId: [
          "Visualisasi metrik aktivitas pengguna aktif vs non-aktif dan ringkasan transaksi",
          "Manajemen terpusat untuk konfigurasi API, Payment, Pricing, dan Log Sistem",
          "Tabel perbandingan paket Free vs Pro di mobile menuju pembayaran Midtrans",
        ],
        frameworksUsed: ["Midtrans PHP", "Chart.js", "Laravel RBAC"],
      },
    ],
  },
  {
    id: "mental-health-predictor",
    title: "Mental Health Predictor Application",
    titleId: "Aplikasi Mental Health Predictor & ML",
    category: "Machine Learning & Health",
    categoryId: "Machine Learning & Kesehatan",
    description:
      "Self-monitoring health system for early detection of psychological risk factors powered by Random Forest Machine Learning, PHP/Laravel web dashboard, PHQ-9/GAD-7 clinical screening, and geospatial psychologist locator.",
    descriptionId:
      "Sistem pemantauan kesehatan mental mandiri untuk deteksi dini faktor risiko psikologis berbasis Machine Learning Random Forest, portal web PHP/Laravel, instrumen klinis PHQ-9/GAD-7, serta peta pencari psikolog terdekat.",
    longDescription: `Developed a multi-interface self-monitoring mental health system designed for early screening of psychological risk factors using Python (Scikit-learn, Flask, Gradio), PHP MVC (laravel_web), MySQL, and interactive CLI.\n\nTechnical execution:\n- Trained and evaluated Random Forest, Logistic Regression, and XGBoost models via Jupyter Notebook, serialized as .pkl pipelines via joblib\n- Designed multi-modal access: a responsive web portal for patient self-assessment, Flask REST API & Gradio web UI, plus an efficient CLI for clinicians\n- Implemented 13-step behavioral assessment wizards, PHQ-9 & GAD-7 clinical screening tools, and Leaflet/OpenStreetMap GPS psychologist search\n- Built clean probability distribution charts and personalized follow-up recommendations with patient audit trails`,
    longDescriptionId: `Mengembangkan sistem pemantauan kesehatan mental multi-antarmuka untuk deteksi dini faktor risiko psikologis memanfaatkan Python (Scikit-learn, Flask, Gradio), portal web PHP MVC (laravel_web), MySQL, serta CLI interaktif.\n\nEksekusi teknis:\n- Melatih dan mengevaluasi model Machine Learning (Random Forest, Logistic Regression, XGBoost) yang diserialisasi ke format .pkl dengan joblib\n- Menyediakan jalur akses menyeluruh: portal web responsif untuk asesmen mandiri pasien, Flask REST API & Gradio, serta Command Line Interface (CLI) untuk tenaga medis\n- Mengintegrasikan kuesioner bertahap 13 langkah, instrumen standar klinis PHQ-9 & GAD-7, serta peta interaktif Leaflet/OpenStreetMap untuk mencari psikolog terdekat\n- Merancang visualisasi distribusi probabilitas risiko (Low/Moderate/High) beserta rekomendasi tindak lanjut yang terstruktur`,
    tech: [
      "Python",
      "Scikit-learn",
      "Flask API",
      "PHP MVC / MySQL",
      "Tailwind / Bootstrap",
      "Leaflet.js",
      "CLI Tools",
    ],
    metrics: [
      { label: "Access Modalities", value: "Web & CLI" },
      { label: "ML Algorithm", value: "Random Forest" },
      { label: "Clinical Tools", value: "PHQ-9 / GAD-7" },
      { label: "Locator", value: "GPS Map" },
    ],
    githubUrl: "https://github.com/ilhamwahyudi03",
    featured: true,
    size: "medium",
    accentColor: "from-emerald-500/10 to-teal-500/5",
    previewImage: "/projects/mental-health/mockup-mobile-5screens.png",
    systemOverview: {
      problem:
        "Early psychological risk symptoms often go undetected because clinical screening forms feel intimidating and nearby professional support is difficult to locate quickly.",
      problemId:
        "Indikasi awal risiko gangguan kesehatan mental sering terlewat karena form asesmen terasa kaku bagi masyarakat awam dan sulitnya menemukan tenaga profesional terdekat.",
      solution:
        "Built an accessible dual Web & CLI Machine Learning predictor combining a friendly 13-step guided assessment, probability breakdown cards, standardized PHQ-9/GAD-7 screening, and a live OpenStreetMap psychologist finder.",
      solutionId:
        "Membangun sistem prediksi Machine Learning (Web & CLI) dengan kuesioner 13 langkah yang ramah pengguna, visualisasi probabilitas risiko AI, skrining standar PHQ-9/GAD-7, serta peta lokasi psikolog otomatis.",
      architectureNote:
        "Decoupled ML prediction engine (Python Scikit-learn + Flask/Gradio + CLI) serving probabilities to a PHP/MySQL patient portal with PHPMailer, Google OAuth, and audit logging.",
      architectureNoteId:
        "Arsitektur terpisah antara engine Machine Learning Python (Scikit-learn + Flask/Gradio + CLI) dengan portal web PHP/MySQL yang dilengkapi Google OAuth, PHPMailer, dan audit log akses pasien.",
    },
    frameworkStack: [
      {
        name: "Python, Scikit-learn, Pandas & Joblib",
        layer: "ML & Data Pipeline",
        layerId: "Pipeline Machine Learning",
        role: "Handles data cleaning, categorical encoding, Random Forest model inference (.pkl), and confidence/probability scoring.",
        roleId:
          "Menangani preprocessing data, encoding fitur perilaku, inferensi model Random Forest (.pkl), dan skor probabilitas risiko.",
      },
      {
        name: "Flask REST API, Gradio & Python CLI",
        layer: "Inference & Serving",
        layerId: "API & Multi-Antarmuka",
        role: "Exposes real-time prediction endpoints for web/hospital integration alongside interactive Gradio blocks and terminal CLI tools.",
        roleId:
          "Menyediakan REST API prediksi real-time untuk integrasi sistem, UI Gradio, serta antarmuka terminal CLI untuk tenaga medis.",
      },
      {
        name: "PHP MVC, MySQL (PDO) & PHPMailer",
        layer: "Web Portal & Security",
        layerId: "Portal Web & Basis Data",
        role: "Manages patient accounts, Google OAuth, chronological screening history, PDF-ready reports, and clinical audit trails.",
        roleId:
          "Mengelola akun pengguna, Google OAuth, riwayat pemeriksaan kronologis di MySQL, serta audit trail keamanan data.",
      },
      {
        name: "Leaflet.js, OpenStreetMap & PHQ-9/GAD-7",
        layer: "Geospatial & Clinical UX",
        layerId: "Peta Geospasial & Klinis",
        role: "Integrates live GPS coordinates onto interactive maps to locate nearest psychologists alongside validated depression/anxiety tests.",
        roleId:
          "Menghubungkan GPS otomatis dengan peta OpenStreetMap untuk mencari psikolog terdekat serta modul skrining PHQ-9 dan GAD-7.",
      },
    ],
    gallery: [
      {
        id: "mhp-mobile-flow",
        image: "/projects/mental-health/mockup-mobile-5screens.png",
        width: 2528,
        height: 1636,
        frameStyle: "studio",
        tag: "Module 01 // Mobile Responsive Suite",
        tagId: "Modul 01 // Pengalaman Mobile 5 Layar",
        title: "End-to-End Mobile Self-Monitoring Journey",
        titleId: "Alur Lengkap Pemantauan Mandiri di Layar Smartphone",
        summary:
          "Cohesive 5-screen responsive mobile experience guiding users seamlessly from landing hero and personal dashboard through the AI questionnaire, risk breakdown, and psychologist map.",
        summaryId:
          "Rangkaian 5 layar mobile responsif (390x844) yang memandu pengguna mulai dari beranda, dasbor personal, kuesioner bertahap, hasil analisis AI, hingga pencari psikolog.",
        highlights: [
          "Consistent navigation drawer & purple-to-indigo visual calm palette",
          "Touch-friendly 4-stage wizard progress pills (Profil, Emosi, Gaya Hidup, Hasil)",
          "Readable mobile probability bars and GPS map pin interactions",
        ],
        highlightsId: [
          "Desain tenang bernuansa ungu-biru dengan navigasi mobile yang konsisten",
          "Indikator langkah wizard 4 tahap (Profil, Emosi, Gaya Hidup, Hasil) ramah sentuhan",
          "Grafik probabilitas dan peta OpenStreetMap tetap tajam di layar kecil",
        ],
        frameworksUsed: ["Responsive Web UI", "Bootstrap 5", "Tailwind CSS"],
      },
      {
        id: "mhp-dashboard",
        image: "/projects/mental-health/03-dashboard.png",
        width: 2880,
        height: 1800,
        frameStyle: "browser",
        browserUrl: "mentalhealthpredictor.app/dashboard",
        tag: "Module 02 // Patient Home",
        tagId: "Modul 02 // Dasbor Pengguna",
        title: "Personalized Patient Dashboard & Quick Actions",
        titleId: "Dasbor Pasca-Login & Navigasi Akses Cepat",
        summary:
          "Welcoming post-login workspace offering one-click entry to mental health checkups, chronological assessment history, nearby professional lookup, and curated mental wellness articles.",
        summaryId:
          "Dasbor personal pasca-login dengan banner sapaan hangat, kartu aksi cepat menuju tes asesmen mandiri, riwayat data, pencarian bantuan terdekat, dan artikel edukasi kesehatan jiwa.",
        highlights: [
          "Personalized greeting banner paired with multi-slide wellness carousel",
          "Three quick-action tiles: Cek Kesehatan Mental, Lihat Riwayat, Cari Bantuan",
          "Top navigation bar unifying clinical screening & history modules",
        ],
        highlightsId: [
          "Hero slider edukatif dengan sapaan personal nama pengguna",
          "Tiga kartu aksi cepat untuk memulai tes, melihat riwayat, atau mencari bantuan",
          "Navigasi terpadu menghubungkan seluruh modul asesmen dan riwayat",
        ],
        frameworksUsed: ["PHP MVC", "MySQL PDO", "Session Auth"],
      },
      {
        id: "mhp-wizard",
        image: "/projects/mental-health/04-assessment-wizard.png",
        width: 2880,
        height: 1800,
        frameStyle: "browser",
        browserUrl: "mentalhealthpredictor.app/assessment",
        tag: "Module 03 // Guided Screening",
        tagId: "Modul 03 // Kuesioner 13 Langkah",
        title: "4-Stage, 13-Question Behavioral Assessment Wizard",
        titleId: "Wizard Asesmen Bertahap 13 Pertanyaan Berbasis AI",
        summary:
          "Breaks down complex clinical and lifestyle indicators into a calm, progressive 13-question wizard grouped across Profile, Emotions, Lifestyle, and Result stages.",
        summaryId:
          "Memecah 13 parameter klinis dan gaya hidup ke dalam alur pengisian bertahap 4 fase (Profil, Emosi, Gaya Hidup, Hasil) untuk menjaga fokus dan kenyamanan psikologis pengguna.",
        highlights: [
          "Clear Goal-Gradient 4-step progress indicator reducing form fatigue",
          "Privacy assurance badges (~3 Minutes, 100% Confidential, AI-Powered)",
          "Structured inputs mapped directly to Scikit-learn feature vectors",
        ],
        highlightsId: [
          "Indikator progres 4 fase yang jelas untuk mengurangi kelelahan pengisian form",
          "Jaminan privasi pengguna (~3 Menit, 100% Aman & Rahasia, Berbasis AI)",
          "Input pertanyaan terpetakan langsung ke vektor fitur model Machine Learning",
        ],
        frameworksUsed: ["Multi-Step Form", "Scikit-learn Features", "UX Flow"],
      },
      {
        id: "mhp-result",
        image: "/projects/mental-health/05-assessment-result.png",
        width: 2880,
        height: 1800,
        frameStyle: "browser",
        browserUrl: "mentalhealthpredictor.app/assessment#result",
        tag: "Module 04 // ML Inference Output",
        tagId: "Modul 04 // Hasil Prediksi AI",
        title: "Risk Classification, Confidence Score & Actionable Advice",
        titleId: "Klasifikasi Risiko, Skor Keyakinan AI & Rekomendasi",
        summary:
          "Translates raw Random Forest model probabilities into an interpretable clinical summary featuring an overall risk badge, AI confidence percentage (78.0%), class breakdown bars, and personalized next steps.",
        summaryId:
          "Menerjemahkan output probabilitas model Random Forest menjadi laporan yang mudah dipahami berisi badge tingkat risiko, persentase keyakinan AI (78.0%), bar distribusi Low/Moderate/High, dan saran langkah sehat.",
        highlights: [
          "Color-coded risk badge (Low / Moderate / High Risk) with confidence metric",
          "Transparent probability distribution bars across all three risk classes",
          "Actionable lifestyle and counselor-consultation recommendations",
        ],
        highlightsId: [
          "Badge status risiko berkode warna beserta persentase tingkat keyakinan model",
          "Visualisasi bar distribusi probabilitas Risiko Rendah, Sedang, dan Tinggi",
          "Daftar rekomendasi tindak lanjut yang dipersonalisasi sesuai hasil prediksi",
        ],
        frameworksUsed: ["Random Forest", "Flask API", "Joblib", "Pandas"],
      },
      {
        id: "mhp-professionals",
        image: "/projects/mental-health/07-professionals.png",
        width: 2880,
        height: 1800,
        frameStyle: "browser",
        browserUrl: "mentalhealthpredictor.app/professionals",
        tag: "Module 05 // Geospatial Support",
        tagId: "Modul 05 // Pencarian Psikolog GPS",
        title: "Interactive OpenStreetMap & GPS Psychologist Finder",
        titleId: "Peta Interaktif Pencarian Profesional Kesehatan Mental",
        summary:
          "Bridges early self-screening with real-world clinical help by embedding an interactive Leaflet + OpenStreetMap locator supporting automatic GPS detection or manual map pinning.",
        summaryId:
          "Menjembatani hasil skrining mandiri menuju bantuan profesional nyata lewat peta interaktif Leaflet & OpenStreetMap yang mendukung deteksi GPS otomatis maupun pemilihan titik lokasi manual.",
        highlights: [
          "One-click 'GPS Otomatis' & interactive pin placement on OpenStreetMap",
          "Live coordinate display (-6.2088, 106.8456) and city/address lookup",
          "Complements PHQ-9 and GAD-7 clinical modules for actionable care",
        ],
        highlightsId: [
          "Tombol 'GPS Otomatis' dan 'Tentukan Lokasi di Peta' berbasis Leaflet.js",
          "Pemantauan koordinat langsung beserta pencarian berdasarkan kota/alamat",
          "Melengkapi modul asesmen PHQ-9 dan GAD-7 agar pengguna mudah mencari bantuan",
        ],
        frameworksUsed: ["Leaflet.js", "OpenStreetMap", "Geolocation API"],
      },
    ],
  },
  {
    id: "sim-rs-kegawatdaruratan",
    title: "Emergency Hospital Management System (SIM RS)",
    titleId: "SIM RS Rekam Medis Kegawatdaruratan",
    category: "Health Informatics & UI/UX",
    categoryId: "Informatika Medis & UI/UX",
    description:
      "Digitalized emergency medical record system engineered in collaboration with the Master of Midwifery program. Officially certified with Intellectual Property Rights (HAKI) by Kemenkumham RI.",
    descriptionId:
      "Digitalisasi dokumen rekam medis elektronik pada kondisi kegawatdaruratan berkolaborasi dengan program S2 Kebidanan. Sukses terdaftar dan tersertifikasi resmi HAKI oleh Kemenkumham RI.",
    longDescription: `Led a strategic multidisciplinary collaboration with the Master of Midwifery program to digitize and structure emergency clinical documentation by transitioning physical records into a high-efficiency digital system.\n\nArchitecture & achievements:\n- Mapped complete system architecture and structured complex clinical emergency user flows to minimize data entry latency during critical triage moments\n- Crafted an interactive, high-fidelity user interface prototype using Figma adhering strictly to medical accessibility and cognitive load standards\n- Official Achievement: The innovation and architecture were officially registered and granted Intellectual Property Rights (HAKI) certification by the Ministry of Law and Human Rights (Kemenkumham RI) in 2024`,
    longDescriptionId: `Memimpin proyek kolaborasi strategis dengan program S2 Kebidanan untuk melakukan digitalisasi dokumen rekam medis elektronik pada kondisi kegawatdaruratan klinis.\n\nArsitektur & prestasi:\n- Memetakan arsitektur sistem dan merancang alur pengguna (user flow) yang kompleks guna meminimalisir waktu input saat kondisi kritis triage\n- Menyusun purwarupa antarmuka pengguna interaktif (high-fidelity prototype) menggunakan Figma dengan standar aksesibilitas dan kemudahan penggunaan klinis\n- Pencatatan Prestasi: Inovasi arsitektur sistem ini sukses meraih dan terdaftar resmi dalam sertifikasi Hak Kekayaan Intelektual (HAKI) dari Kemenkumham RI tahun 2024`,
    tech: [
      "Figma",
      "System Architecture",
      "User Flow",
      "High-Fidelity Prototype",
      "Design Systems",
      "HAKI Certified",
    ],
    metrics: [
      { label: "Certification", value: "HAKI RI" },
      { label: "Collaboration", value: "S2 Kebidanan" },
      { label: "Deliverable", value: "Hi-Fi System" },
    ],
    githubUrl: "https://github.com/ilhamwahyudi03",
    featured: false,
    size: "small",
    accentColor: "from-rose-500/10 to-pink-500/5",
  },
  {
    id: "pipeline-analisis-data-kesehatan",
    title: "Large-Scale Health Data Analytics Pipeline",
    titleId: "Pipeline Analisis Data Kesehatan Skala Besar",
    category: "Big Data Engineering",
    categoryId: "Rekayasa Big Data",
    description:
      "Scalable data pipeline built on Hadoop Distributed File System (HDFS) and Apache Hive with automated Python ETL scripts and geographical medical anomaly trend mapping.",
    descriptionId:
      "Pipeline data pemrosesan dataset kesehatan publik skala besar berbasis ekosistem HDFS dan Apache Hive dengan skrip pembersihan Python otomatis dan pemetaan tren anomali medis.",
    longDescription: `Architected and executed an end-to-end big data processing pipeline for large-scale public health datasets using the Apache Hadoop and Hive ecosystem.\n\nKey technical points:\n- Ingested and distributed multi-gigabyte public health records across Hadoop Distributed File System (HDFS)\n- Leveraged Apache Hive for structured SQL-like analytical querying across partitioned distributed datasets\n- Created automated Python ETL scripts for data cleansing, outlier detection, and descriptive statistical modeling\n- Produced spatial medical anomaly maps tracking geographic distribution of health risks`,
    longDescriptionId: `Membangun dan mengeksekusi pipeline pemrosesan data kesehatan publik skala besar memanfaatkan ekosistem Apache Hadoop dan Hive.\n\nPoin teknis utama:\n- Mengelola penyimpanan dan distribusi dataset kesehatan publik multi-gigabyte menggunakan Hadoop Distributed File System (HDFS)\n- Mengoptimalkan kueri analitis terdistribusi menggunakan Apache Hive dengan skema data terpartisi\n- Menulis skrip Python otomatis untuk pembersihan data (ETL), eliminasi anomali, dan pemodelan deskriptif\n- Memetakan tren anomali medis secara geografis untuk memudahkan analisis kesehatan masyarakat`,
    tech: [
      "Hadoop HDFS",
      "Apache Hive",
      "Python",
      "ETL Automation",
      "Descriptive Modeling",
      "Geographical Mapping",
    ],
    metrics: [
      { label: "Storage Engine", value: "HDFS" },
      { label: "Query Engine", value: "Apache Hive" },
      { label: "Automation", value: "Python ETL" },
    ],
    githubUrl: "https://github.com/ilhamwahyudi03",
    featured: false,
    size: "small",
    accentColor: "from-amber-500/10 to-orange-500/5",
  },
  {
    id: "health-tourism-jamu",
    title: "Health Tourism & Jamu Recommendation Web Platform",
    titleId: "Platform Web Health Tourism & Rekomendasi Jamu",
    category: "Full-Stack Web Platform",
    categoryId: "Platform Web Full-Stack",
    description:
      "Medical tourism web platform built with Laravel and PHP promoting traditional Indonesian herbal medicine with multilingual front-end modules styled with Tailwind CSS and Bootstrap.",
    descriptionId:
      "Platform pariwisata medis (health tourism) dibangun dengan Laravel dan PHP untuk mempromosikan sektor jamu tradisional dengan modul front-end multibahasa berbasis Tailwind & Bootstrap.",
    longDescription: `Collaborated on engineering a medical tourism (health tourism) platform to promote and expand Indonesia's traditional herbal medicine (jamu) sector to domestic and global audiences.\n\nKey contributions:\n- Developed backend services and recommendation logic using Laravel and PHP\n- Engineered clean, responsive, and localized front-end modules using Tailwind CSS and Bootstrap\n- Implemented multilingual language switching to cater to international tourists as well as local visitors`,
    longDescriptionId: `Berkolaborasi dalam membangun platform pariwisata medis (health tourism) menggunakan Laravel dan PHP untuk mempromosikan sektor jamu tradisional nusantara ke ranah domestik maupun internasional.\n\nKontribusi utama:\n- Mengembangkan layanan backend dan logika sistem rekomendasi berbasis Laravel dan PHP\n- Mengembangkan modul front-end khusus dengan Tailwind CSS dan Bootstrap untuk menghasilkan sistem informasi yang bersih, modern, dan terlokalisasi\n- Mendukung fitur multi-bahasa bagi wisatawan lokal maupun mancanegara`,
    tech: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "Multi-Language",
    ],
    metrics: [
      { label: "Language Reach", value: "Multilingual" },
      { label: "Domain", value: "Health Tourism" },
      { label: "Frontend Stack", value: "Tailwind + BS" },
    ],
    githubUrl: "https://github.com/ilhamwahyudi03",
    featured: false,
    size: "small",
    accentColor: "from-teal-500/10 to-cyan-500/5",
  },
];
