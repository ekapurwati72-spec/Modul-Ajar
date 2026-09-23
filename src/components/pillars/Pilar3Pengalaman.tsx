import React from 'react';
import { HeartHandshake, Eye, Sparkles, Smile, Clock, CheckCircle2, Award } from 'lucide-react';
import { ModulAjar } from '../../types/modul';

interface Pilar3Props {
  modul: ModulAjar;
  isEditing: boolean;
  onUpdate: (updated: Partial<ModulAjar>) => void;
}

export const Pilar3Pengalaman: React.FC<Pilar3Props> = ({
  modul,
  isEditing,
  onUpdate
}) => {
  const { pengalamanBelajar } = modul;

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-6">
      {/* Header Pilar */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-bold text-emerald-200">
            3
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">PILAR III: PENGALAMAN BELAJAR</h2>
            <p className="text-xs text-emerald-200">
              Prinsip Deep Learning Berdiferensiasi: Mindful, Meaningful, & Joyful
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <span className="px-2 py-0.5 rounded-full bg-sky-500/30 text-sky-200 border border-sky-400/30">Mindful</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">Meaningful</span>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-200 border border-amber-400/30">Joyful</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* A. Kegiatan Pendahuluan (Mindful) */}
        <div className="border border-sky-200 rounded-xl overflow-hidden bg-sky-50/30">
          <div className="bg-sky-100/80 px-4 py-2.5 flex items-center justify-between border-b border-sky-200">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
                A
              </span>
              <h3 className="text-sm font-bold text-sky-950">
                Kegiatan Pendahuluan: Orientasi & Kesadaran Penuh (Mindful)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
              <Clock className="w-3.5 h-3.5" />
              <span>{pengalamanBelajar.pendahuluan.alokasiWaktu}</span>
            </div>
          </div>

          <div className="p-4 space-y-3 text-sm">
            <div className="p-3 bg-white rounded-lg border border-sky-200 text-xs">
              <strong className="text-sky-900 flex items-center gap-1.5 mb-1">
                <Eye className="w-3.5 h-3.5 text-sky-600" />
                Aspek Kesadaran Penuh (Mindfulness):
              </strong>
              <p className="text-slate-700">{pengalamanBelajar.pendahuluan.aspekMindful}</p>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Rangkaian Aktivitas Pendahuluan:
              </span>
              <ol className="space-y-2 text-slate-800">
                {pengalamanBelajar.pendahuluan.kegiatan.map((k, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm">
                    <span className="font-bold text-sky-700 shrink-0">{idx + 1}.</span>
                    <span className="leading-relaxed">{k}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* B. Kegiatan Inti (3 Tahap Deep Learning) */}
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-100 px-4 py-2.5 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                B
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Kegiatan Inti: 3 Tahap Pembelajaran Mendalam (Deep Learning)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Clock className="w-3.5 h-3.5" />
              <span>{pengalamanBelajar.inti.alokasiWaktu}</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-6">
            {/* 1. Memahami (Mindful) */}
            <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-sky-600 text-white">
                    1. Memahami
                  </span>
                  <span className="text-xs font-semibold text-sky-800 uppercase tracking-wide">
                    Prinsip Mindful (Eksplorasi Aktif Bukan Ceramah)
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 italic">
                <strong>Fokus Eksplorasi:</strong> {pengalamanBelajar.inti.memahami.fokusEksplorasi}
              </p>

              <div className="space-y-2">
                {pengalamanBelajar.inti.memahami.aktivitas.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-sky-100 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Mengaplikasi (Meaningful & Berdiferensiasi) */}
            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-700 text-white">
                    2. Mengaplikasi
                  </span>
                  <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">
                    Prinsip Meaningful (Praktik Nyata & Berdiferensiasi)
                  </span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-emerald-200 text-sm text-slate-800">
                <strong className="text-emerald-900 block mb-1">Aktivitas Utama Berbasis Masalah Nyata:</strong>
                <p>{pengalamanBelajar.inti.mengaplikasi.aktivitasUtama}</p>
              </div>

              {/* Tabel Panduan Diferensiasi Proses */}
              <div>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Panduan Diferensiasi Proses (Tiga Kelompok Kesiapan):
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-300 text-xs space-y-1.5 shadow-2xs">
                    <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded inline-block">
                      Kelompok Mahir (Tinggi)
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokTinggi}
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-sky-300 text-xs space-y-1.5 shadow-2xs">
                    <span className="font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded inline-block">
                      Kelompok Berkembang (Sedang)
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokSedang}
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-amber-300 text-xs space-y-1.5 shadow-2xs">
                    <span className="font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded inline-block">
                      Kelompok Perlu Bimbingan
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokPerluBimbingan}
                    </p>
                  </div>
                </div>
              </div>

              {/* Diferensiasi Produk */}
              <div className="p-3 bg-white rounded-lg border border-emerald-200 text-xs">
                <strong className="text-emerald-900 block mb-1">Diferensiasi Produk (Pilihan Karya Akhir Siswa):</strong>
                <p className="text-slate-700">{pengalamanBelajar.inti.mengaplikasi.produkAkhir}</p>
              </div>
            </div>

            {/* 3. Merefleksi (Joyful) */}
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-600 text-white">
                    3. Merefleksi
                  </span>
                  <span className="text-xs font-semibold text-amber-900 uppercase tracking-wide">
                    Prinsip Joyful (Menyenangkan & Mengapresiasi Diri)
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 italic">
                <strong>Teknik Refleksi:</strong> {pengalamanBelajar.inti.merefleksi.teknikRefleksi}
              </p>

              <div className="space-y-2">
                {pengalamanBelajar.inti.merefleksi.aktivitas.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-amber-100 text-xs sm:text-sm text-slate-800">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* C. Kegiatan Penutup */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
          <div className="bg-slate-100 px-4 py-2.5 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs font-bold">
                C
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Kegiatan Penutup: Penguatan, Umpan Balik & Motivasi
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Clock className="w-3.5 h-3.5" />
              <span>{pengalamanBelajar.penutup.alokasiWaktu}</span>
            </div>
          </div>

          <div className="p-4 space-y-3 text-sm">
            <ol className="space-y-2 text-slate-800">
              {pengalamanBelajar.penutup.kegiatan.map((k, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm">
                  <span className="font-bold text-slate-600">{idx + 1}.</span>
                  <span>{k}</span>
                </li>
              ))}
            </ol>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
              <strong className="text-slate-800 flex items-center gap-1.5 mb-1">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                Catatan Umpan Balik Konstruktif Guru:
              </strong>
              <p className="text-slate-600">{pengalamanBelajar.penutup.umpanBalik}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
