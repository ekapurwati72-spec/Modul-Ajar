import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '15mb' }));

// Initialize Gemini API client
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

// Helper to call Gemini with robust model fallback
async function callGemini(params: {
  contents: any;
  config?: any;
}) {
  const candidateModels = [
    'gemini-3.5-flash',
    'gemini-3.6-flash',
    'gemini-flash-lite-latest',
    'gemini-3.5-flash-lite',
    'gemini-3.8-flash',
    'gemini-flash-latest'
  ];

  let lastError: any = null;
  for (const model of candidateModels) {
    try {
      console.log(`[Gemini API] Mencoba memanggil model: ${model}`);
      const response = await ai.models.generateContent({
        model,
        contents: params.contents,
        config: params.config,
      });
      console.log(`[Gemini API] Berhasil dengan model: ${model}`);
      return response;
    } catch (err: any) {
      console.warn(`[Gemini API] Model ${model} gagal:`, err?.message || err);
      lastError = err;
      // Continue to next candidate model on temporary errors, high demand (503), quota (429), or 404
      continue;
    }
  }
  throw lastError || new Error('Semua model Gemini sedang sibuk. Silakan coba lagi.');
}

// Clean and parse JSON safely
function cleanAndParseJSON(rawText: string) {
  let cleaned = rawText.trim();
  // Remove markdown json block wrappers if present
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/i, '');
  }
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '');
  }
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.replace(/```\s*$/, '');
  }
  cleaned = cleaned.trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    // Attempt to extract the first balanced outer JSON object
    const startIdx = cleaned.indexOf('{');
    const lastIdx = cleaned.lastIndexOf('}');
    if (startIdx !== -1 && lastIdx !== -1 && lastIdx > startIdx) {
      const extracted = cleaned.substring(startIdx, lastIdx + 1);
      return JSON.parse(extracted);
    }
    throw err;
  }
}

// API Route to generate Modul Ajar Deep Learning
app.post('/api/generate-modul', async (req, res) => {
  try {
    const {
      mataPelajaran,
      faseKelasSemester,
      topik,
      capaianPembelajaran,
      alokasiWaktu,
      karakteristikSiswa,
      profilPancasila,
      modelPembelajaran,
      namaSekolah,
      namaGuru,
      nipGuru,
      namaKepalaSekolah,
      nipKepalaSekolah,
      kota,
      tanggal,
      instruksiTambahan
    } = req.body;

    if (!mataPelajaran || !topik) {
      return res.status(400).json({ error: 'Mata pelajaran dan topik wajib diisi' });
    }

    const systemPrompt = `Anda adalah Pakar Kurikulum Merdeka senior dan Pengembang Kurikulum Berbasis AI dari Kemendikbudristek RI.
Tugas Anda adalah merancang "Modul Ajar Deep Learning Kurikulum Merdeka" yang sangat komprehensif, terstruktur, operasional, berdiferensiasi (proses, konten, dan produk), serta mengusung 3 Prinsip Deep Learning: Mindful (Sadar Penuh & Reflektif), Meaningful (Bermakna & Kontekstual Dunia Nyata), dan Joyful (Menyenangkan & Menggugah Rasa Ingin Tahu).

Formatkan output dalam format JSON valid sesuai skema yang diminta, menggunakan Bahasa Indonesia baku, inspiratif, jelas, dan berpusat pada murid (student-centered).`;

    const userPrompt = `Buatkan Modul Ajar Deep Learning Kurikulum Merdeka lengkap dan siap pakai dengan data:
- Mata Pelajaran: ${mataPelajaran}
- Fase / Kelas / Semester: ${faseKelasSemester || 'Fase D / Kelas 7 / Semester 1'}
- Topik / Materi Utama: ${topik}
${capaianPembelajaran ? `- Capaian Pembelajaran (CP) Acuan: ${capaianPembelajaran} (Gunakan rumusan CP ini pada bagian Capaian Pembelajaran dan turunkan Tujuan Pembelajaran / TP berdasarkan CP ini)` : '- Capaian Pembelajaran (CP): Rumuskan CP Elemen Kurikulum Merdeka resmi yang relevan dan komprehensif'}
- Alokasi Waktu: ${alokasiWaktu || '2 JP (2 x 40 menit)'}
- Karakteristik / Hasil Diagnostik Siswa: ${karakteristikSiswa || 'Gaya belajar beragam (visual, kinestetik, auditori); kesiapan awal bervariasi'}
- Dimensi Profil Pelajar Pancasila: ${profilPancasila ? (Array.isArray(profilPancasila) ? profilPancasila.join(', ') : profilPancasila) : 'Bernalar Kritis, Gotong Royong, Kreatif'}
- Model Pembelajaran: ${modelPembelajaran || 'Problem-Based Learning (PBL)'}
- Data Administrasi: Sekolah ${namaSekolah || 'SMP Negeri Merdeka Belajar'}, Guru: ${namaGuru || 'Guru Pengampu'}, NIP: ${nipGuru || '-'}, Kepala Sekolah: ${namaKepalaSekolah || 'Kepala Sekolah'}, NIP: ${nipKepalaSekolah || '-'}, Kota: ${kota || 'Jakarta'}, Tanggal: ${tanggal || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
${instruksiTambahan ? `- Catatan Khusus: ${instruksiTambahan}` : ''}

Struktur wajib 4 Pilar Deep Learning:
1. IDENTIFIKASI (Identitas, Kesiapan Siswa: Tinggi, Sedang, Perlu Bimbingan, Karakteristik Materi, Dimensi Profil Pelajar Pancasila)
2. DESAIN PEMBELAJARAN (CP, TP dengan KKO Taksonomi Bloom, Pemahaman Bermakna, Pertanyaan Pemantik, Lintas Disiplin, Pedagogi, Kemitraan, Pemanfaatan Digital)
3. PENGALAMAN BELAJAR (Pendahuluan Mindful, Inti: Memahami Mindful, Mengaplikasi Meaningful + Diferensiasi Proses 3 Kelompok & Produk, Merefleksi Joyful, Penutup)
4. ASESMEN DAN LAMPIRAN (Diagnostik, Formatif Real-Time 4 Level Skor, Sumatif Pembobotan, Remedial & Pengayaan, Draf LKPD, Bahan Ajar Singkat & Glosarium, Refleksi Siswa & Guru)

Kembalikan respon HANYA berupa JSON valid dengan struktur objek berikut:
{
  "identitas": {
    "mataPelajaran": string,
    "fase": string,
    "kelas": string,
    "semester": string,
    "topik": string,
    "alokasiWaktu": string,
    "tahunAjaran": string,
    "namaSekolah": string,
    "namaGuru": string,
    "nipGuru": string,
    "namaKepalaSekolah": string,
    "nipKepalaSekolah": string,
    "kota": string,
    "tanggal": string
  },
  "identifikasi": {
    "kesiapanSiswa": {
      "deskripsiAwal": string,
      "kelompokTinggi": { "kriteria": string, "layanan": string },
      "kelompokSedang": { "kriteria": string, "layanan": string },
      "kelompokPerluBimbingan": { "kriteria": string, "layanan": string }
    },
    "karakteristikMateri": {
      "tipe": string,
      "penjelasan": string,
      "alasanKonteks": string
    },
    "profilPancasila": [
      { "dimensi": string, "elemen": string, "implementasiKonkrit": string }
    ]
  },
  "desainPembelajaran": {
    "capaianPembelajaran": string,
    "tujuanPembelajaran": [
      { "kode": string, "deskripsi": string, "kko": string }
    ],
    "pemahamanBermakna": string,
    "pertanyaanPemantik": string[],
    "lintasDisiplinIlmu": string,
    "praktikPedagogis": {
      "model": string,
      "pendekatan": string,
      "metode": string[]
    },
    "kemitraanLingkungan": string,
    "pemanfaatanDigital": string[]
  },
  "pengalamanBelajar": {
    "pendahuluan": {
      "alokasiWaktu": string,
      "kegiatan": string[],
      "aspekMindful": string
    },
    "inti": {
      "alokasiWaktu": string,
      "memahami": {
        "prinsip": "Mindful",
        "aktivitas": string[],
        "fokusEksplorasi": string
      },
      "mengaplikasi": {
        "prinsip": "Meaningful",
        "aktivitasUtama": string,
        "diferensiasi": {
          "kelompokTinggi": string,
          "kelompokSedang": string,
          "kelompokPerluBimbingan": string
        },
        "produkAkhir": string
      },
      "merefleksi": {
        "prinsip": "Joyful",
        "aktivitas": string[],
        "teknikRefleksi": string
      }
    },
    "penutup": {
      "alokasiWaktu": string,
      "kegiatan": string[],
      "umpanBalik": string
    }
  },
  "asesmen": {
    "diagnostik": {
      "teknik": string,
      "instrumen": string[],
      "tindakLanjut": string
    },
    "formatif": {
      "teknik": string,
      "rubrik": [
        { "aspek": string, "skor4": string, "skor3": string, "skor2": string, "skor1": string }
      ]
    },
    "sumatif": {
      "teknik": string,
      "bentukSoal": string,
      "rubrikAtauKunci": [
        { "kriteria": string, "bobot": string, "deskripsi": string }
      ]
    },
    "remedialDanPengayaan": {
      "remedial": string,
      "pengayaan": string
    }
  },
  "lampiran": {
    "lkpd": {
      "judul": string,
      "tujuan": string,
      "petunjuk": string[],
      "langkahKerja": string[],
      "pertanyaanDiskusi": string[],
      "panduanDiferensiasiTugas": string
    },
    "bahanAjarSingkat": {
      "judul": string,
      "ringkasan": string,
      "poinPenting": string[],
      "glosarium": [{ "istilah": string, "arti": string }]
    },
    "refleksi": {
      "pertanyaanSiswa": string[],
      "pertanyaanGuru": string[]
    }
  }
}`;

    const response = await callGemini({
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        temperature: 0.3,
      }
    });

    const responseText = response.text || '{}';
    const parsedData = cleanAndParseJSON(responseText);

    res.json(parsedData);
  } catch (error: any) {
    console.error('Error generating modul ajar:', error);
    res.status(500).json({
      error: 'Gagal membuat Modul Ajar dengan AI. Silakan coba lagi atau gunakan preset modul.',
      details: error.message
    });
  }
});

// API Route for AI Refinement / Enhancement of specific sections
app.post('/api/refine-section', async (req, res) => {
  try {
    const { sectionName, currentContent, promptInstruction, contextInfo } = req.body;

    const response = await callGemini({
      contents: `Konteks Modul Ajar: ${JSON.stringify(contextInfo || {})}.
Bagian: ${sectionName}
Konten saat ini: ${typeof currentContent === 'object' ? JSON.stringify(currentContent) : currentContent}
Instruksi Penguatan: ${promptInstruction}

Sajikan perbaikan / pengayaan yang mendalam, pedagogis, dan sesuai dengan kaidah Deep Learning Kurikulum Merdeka (Mindful, Meaningful, Joyful). Berikan dalam format JSON terstruktur atau teks siap pakai.`,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.3
      }
    });

    const text = response.text || '{}';
    res.json({ result: text });
  } catch (error: any) {
    console.error('Error refining section:', error);
    res.status(500).json({ error: error.message });
  }
});

// Vite integration or static file serving
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server Modul Ajar Deep Learning berjalan di port ${PORT}`);
  });
}

startServer();
