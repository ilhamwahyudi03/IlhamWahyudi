import { NextRequest, NextResponse } from "next/server";
import { CV_CONTEXT, createGeminiClient } from "@/lib/gemini";

// Helper for offline intelligent CV assistant fallback
function generateLocalCVResponse(userMsg: string): string {
  const q = userMsg.toLowerCase();

  // Tech stack / Keahlian
  if (
    q.includes("stack") ||
    q.includes("teknologi") ||
    q.includes("bahasa") ||
    q.includes("skill") ||
    q.includes("keahlian") ||
    q.includes("frontend") ||
    q.includes("backend") ||
    q.includes("database")
  ) {
    return (
      "Ilham menguasai ekosistem Fullstack Web, UI/UX, dan Data Analytics secara komprehensif:\n\n" +
      "• Web & Fullstack: Laravel, Vue.js, React.js, Next.js, Node.js, Tailwind CSS, Bootstrap, Leaflet.js\n" +
      "• Core Languages: Python, JavaScript, PHP, C, Hack, SQL (PostgreSQL & MySQL)\n" +
      "• Data & Machine Learning: Hadoop (HDFS), Apache Hive, Machine Learning (LSTM), Deep Learning Frameworks\n" +
      "• Tools & Desain: Git, GitHub, Figma (UI/UX Design), AI-Assisted Coding Tools, Canva\n" +
      "• Bahasa: Indonesia (Mahir / Proficient), Inggris (Menengah / Intermediate)"
    );
  }

  // Pengalaman / Experience / Pendidikan / Prestasi
  if (
    q.includes("pengalaman") ||
    q.includes("kerja") ||
    q.includes("experience") ||
    q.includes("karir") ||
    q.includes("riwayat") ||
    q.includes("magang") ||
    q.includes("pendidikan") ||
    q.includes("kuliah") ||
    q.includes("prestasi") ||
    q.includes("sertifikat") ||
    q.includes("haki")
  ) {
    return (
      "Riwayat pengalaman profesional, pendidikan, dan prestasi M. Ilham Wahyudi:\n\n" +
      "1. Product Intern @ PT Aino Indonesia (Okt 2024 — Des 2024, Yogyakarta)\n" +
      "   • Pengembangan Web Dashboard Inventory internal (Laravel, PostgreSQL, Leaflet.js)\n" +
      "   • Berhasil meraih predikat kinerja 'Excellent' bersertifikat resmi\n\n" +
      "2. Sarjana (S1) Teknologi Informasi — Universitas 'Aisyiyah Yogyakarta (2022 — 2026)\n" +
      "   • IPK: 3.51 / 4.00\n" +
      "   • Skripsi: Implementasi Model LSTM Berbasis RSI dan MACD untuk Prediksi Saham BBCA (Publikasi Jurnal Ilmiah)\n\n" +
      "3. Prestasi & Penghargaan:\n" +
      "   • Juara 3 Pameran Kolaboratif FAST 2026 (Presensi GPS & Geotag Selfie)\n" +
      "   • Top 10 Semifinalist PROXOCORIS International 2025 (Healtisin AI)\n" +
      "   • Surat Pencatatan Ciptaan (HAKI) Kemenkumham RI 2024 (Rekam Medis Darurat)\n" +
      "   • Penerima Hibah Pendanaan P2MW Kemdikbudristek RI 2024"
    );
  }

  // Proyek / Projects
  if (
    q.includes("proyek") ||
    q.includes("project") ||
    q.includes("karya") ||
    q.includes("portfolio") ||
    q.includes("buat apa") ||
    q.includes("bikin apa")
  ) {
    return (
      "Proyek rekayasa unggulan yang telah dibangun Ilham:\n\n" +
      "1. Sistem Presensi Pegawai Berbasis Web (Laravel 10, Vue.js 3.3, Geolocation API, WebRTC) — Juara 3 FAST 2026 bersama PT Sarana Insan Muda Selaras.\n" +
      "2. Healtisin AI (Gemini API & DeepSeek, Vite 6, Tailwind, Midtrans) — Top 10 Semifinalist PROXOCORIS International 2025.\n" +
      "3. Mental Health Predictor Application (Python ML, Laravel, CLI) — Sistem deteksi dini faktor risiko psikologis.\n" +
      "4. SIM RS Rekam Medis Kegawatdaruratan (Figma, System Analyst & UI) — Tersertifikasi resmi HAKI Kemenkumham RI 2024 bersama program S2 Kebidanan.\n" +
      "5. Pipeline Analisis Data Kesehatan Skala Besar (Hadoop HDFS, Apache Hive, Python ETL).\n" +
      "6. Platform Web Health Tourism & Rekomendasi Jamu (Laravel, PHP, Tailwind CSS)."
    );
  }

  // Ketersediaan / Availability / Hire / Kontak
  if (
    q.includes("tersedia") ||
    q.includes("available") ||
    q.includes("hire") ||
    q.includes("kontak") ||
    q.includes("hubungi") ||
    q.includes("email") ||
    q.includes("gaji") ||
    q.includes("rate") ||
    q.includes("freelance") ||
    q.includes("wa") ||
    q.includes("whatsapp") ||
    q.includes("telepon")
  ) {
    return (
      "M. Ilham Wahyudi saat ini TERSEDIA untuk peluang kerja Full-Time, Kontrak, maupun proyek Freelance / Kolaborasi Teknis.\n\n" +
      "Anda dapat menghubungi Ilham secara langsung melalui:\n" +
      "• Email: ilhamwahyudi4625@gmail.com\n" +
      "• WhatsApp / Telepon: +62 878-7156-3112\n" +
      "• Domisili: Yogyakarta, Indonesia\n" +
      "• LinkedIn: linkedin.com/in/m-ilham-wahyudi-0b1365310\n" +
      "• GitHub: github.com/ilhamwahyudi03\n" +
      "• Portfolio: ilham-portofolio-black.vercel.app/"
    );
  }

  // Sapaan / Greeting
  if (
    q.includes("halo") ||
    q.includes("hai") ||
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("pagi") ||
    q.includes("siang") ||
    q.includes("malam") ||
    q.includes("siapa kamu") ||
    q.includes("who are you")
  ) {
    return (
      "Halo! Saya adalah asisten AI personal untuk M. Ilham Wahyudi.\n\n" +
      "Saya bisa membantu Anda mengetahui lebih banyak tentang keahlian teknis Ilham (Fullstack, UI/UX, Data Analytics), proyek-proyek unggulan, pengalaman magang bersertifikat Excellent di PT Aino Indonesia, atau ketersediaannya untuk kolaborasi. Apa yang ingin Anda ketahui?"
    );
  }

  // Default response
  return (
    `M. Ilham Wahyudi adalah Sarjana Teknologi Informasi (IPK 3.51) dari Universitas 'Aisyiyah Yogyakarta berfokus pada Fullstack Web Development, UI/UX Design, dan Data Analytics.\n\n` +
    `Terkait pertanyaan Anda: "${userMsg}", Anda dapat menanyakan tentang tech stack, proyek studi kasus, riwayat magang di PT Aino Indonesia, atau langsung mengontak Ilham via email: ilhamwahyudi4625@gmail.com.`
  );
}

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY?.trim();
    const isMockKey =
      !apiKey ||
      apiKey === "your_gemini_api_key_here" ||
      apiKey === "your-gemini-api-key-here" ||
      apiKey.startsWith("your_") ||
      apiKey.startsWith("your-");

    // If no valid external key is yet configured, respond instantly with local CV knowledge base!
    if (isMockKey) {
      const localReply = generateLocalCVResponse(message);
      return NextResponse.json({
        reply: localReply,
        isLocal: true,
      });
    }

    // Attempt calling real Gemini API
    try {
      const genAI = createGeminiClient(apiKey);
      if (!genAI) {
        return NextResponse.json({
          reply: generateLocalCVResponse(message),
          isLocal: true,
        });
      }

      const safeHistory = Array.isArray(history) ? history : [];
      const chatHistory = (safeHistory as { role: string; content: string }[])
        .slice(0, -1)
        .filter((msg) => msg && typeof msg.content === "string")
        .map((msg) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        }));

      const chat = genAI.chats.create({
        model: "gemini-2.0-flash",
        config: {
          systemInstruction: CV_CONTEXT,
        },
        history: chatHistory,
      });

      const response = await chat.sendMessage({ message });
      const reply = response.text || generateLocalCVResponse(message);

      return NextResponse.json({ reply, isLocal: false });
    } catch (apiError: unknown) {
      console.warn(
        "[Gemini API Fallback triggered]:",
        apiError instanceof Error ? apiError.message : String(apiError)
      );
      // Fallback to intelligent local response so chatbot NEVER crashes
      const fallbackReply = generateLocalCVResponse(message);
      return NextResponse.json({
        reply: fallbackReply,
        isLocal: true,
      });
    }
  } catch (error) {
    console.error("[Chat Route Error]", error);
    return NextResponse.json(
      { error: "Gagal memproses pesan" },
      { status: 500 }
    );
  }
}
