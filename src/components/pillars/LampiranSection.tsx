import React from 'react';
import { Paperclip, BookOpen, MessageSquare, CheckCircle, FileText } from 'lucide-react';
import { ModulAjar } from '../../types/modul';

interface LampiranProps {
  modul: ModulAjar;
  isEditing: boolean;
  onUpdate: (updated: Partial<ModulAjar>) => void;
}

export const LampiranSection: React.FC<LampiranProps> = ({
  modul,
  isEditing,
  onUpdate
}) => {
  const { lampiran, identitas } = modul;

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-6">
      {/* Header Pilar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white">
            <Paperclip className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">LAMPIRAN-LAMPIRAN PEMBELAJARAN</h2>
            <p className="text-xs text-slate-300">
              Draf LKPD Siap Pakai, Ringkasan Bahan Ajar, Format Refleksi, dan Lembar Pengesahan
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-white/10 rounded-full border border-white/20">
          Siap Pakai & Cetak
        </span>
      </div>

      <div className="p-6 space-y-8">
        {/* Lampiran 1: LKPD */}
        <div className="border border-blue-200 rounded-xl overflow-hidden bg-blue-50/20">
          <div className="bg-blue-100/70 px-4 py-3 flex items-center justify-between border-b border-blue-200">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-700" />
              <h3 className="font-bold text-blue-950 text-sm sm:text-base">
                Lampiran 1: {lampiran.lkpd.judul}
              </h3>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-200 text-blue-800">
              LKPD Siswa
            </span>
          </div>

          <div className="p-5 space-y-4 text-sm">
            <div className="bg-white p-3.5 rounded-lg border border-blue-100">
              <strong className="text-blue-900 block text-xs uppercase tracking-wider mb-1">
                Tujuan Penyelidikan:
              </strong>
              <p className="text-slate-800">{lampiran.lkpd.tujuan}</p>
            </div>

            <div>
              <strong className="text-slate-800 text-xs uppercase tracking-wider block mb-1.5">
                Petunjuk Pengerjaan:
              </strong>
              <ul className="space-y-1 text-xs text-slate-700">
                {lampiran.lkpd.petunjuk.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="text-slate-800 text-xs uppercase tracking-wider block mb-1.5">
                Langkah Kerja Investigasi:
              </strong>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-800">
                {lampiran.lkpd.langkahKerja.map((step, i) => (
                  <li key={i} className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-start gap-2">
                    <span className="font-bold text-blue-700 shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <strong className="text-slate-800 text-xs uppercase tracking-wider block mb-1.5">
                Pertanyaan Diskusi & Analisis:
              </strong>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-800">
                {lampiran.lkpd.pertanyaanDiskusi.map((q, i) => (
                  <li key={i} className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-start gap-2">
                    <span className="font-bold text-emerald-700 shrink-0">?</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs">
              <strong className="text-amber-900 block mb-0.5">Panduan Diferensiasi LKPD:</strong>
              <p className="text-amber-800">{lampiran.lkpd.panduanDiferensiasiTugas}</p>
            </div>
          </div>
        </div>

        {/* Lampiran 2: Bahan Ajar Singkat */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
          <div className="bg-slate-100 px-4 py-3 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-700" />
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Lampiran 2: {lampiran.bahanAjarSingkat.judul}
              </h3>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
              Rangkuman Materi
            </span>
          </div>

          <div className="p-5 space-y-4 text-sm">
            <p className="text-slate-700 leading-relaxed bg-white p-3.5 rounded-lg border border-slate-200">
              {lampiran.bahanAjarSingkat.ringkasan}
            </p>

            <div>
              <strong className="text-slate-800 text-xs uppercase tracking-wider block mb-2">
                Poin-Poin Kunci Konsep Esensial:
              </strong>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                {lampiran.bahanAjarSingkat.poinPenting.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white p-2 rounded-lg border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <strong className="text-slate-800 text-xs uppercase tracking-wider block mb-2">
                Glosarium Istilah:
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {lampiran.bahanAjarSingkat.glosarium.map((g, i) => (
                  <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200">
                    <span className="font-bold text-blue-800">{g.istilah}: </span>
                    <span className="text-slate-600">{g.arti}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lampiran 3: Lembar Refleksi Siswa & Guru */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
          <div className="bg-slate-100 px-4 py-3 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Lampiran 3: Instrumen Refleksi Diri Siswa & Guru
              </h3>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
              Joyful Reflection
            </span>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider text-sky-800">
                Pertanyaan Refleksi Peserta Didik:
              </strong>
              <ol className="space-y-1.5 text-slate-700">
                {lampiran.refleksi.pertanyaanSiswa.map((q, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold text-sky-600">{i + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider text-emerald-800">
                Pertanyaan Refleksi Pendidik (Guru):
              </strong>
              <ol className="space-y-1.5 text-slate-700">
                {lampiran.refleksi.pertanyaanGuru.map((q, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold text-emerald-600">{i + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Format Pengesahan Resmi */}
        <div className="border-t-2 border-slate-300 pt-6 mt-8">
          <div className="text-right text-xs text-slate-700 font-medium mb-6">
            {identitas.kota}, {identitas.tanggal}
          </div>

          <div className="grid grid-cols-2 gap-8 text-center text-xs sm:text-sm">
            <div>
              <p className="text-slate-600">Mengetahui,</p>
              <p className="font-bold text-slate-900 uppercase">
                Kepala {identitas.namaSekolah}
              </p>
              <div className="h-20 flex items-center justify-center text-slate-400 italic text-xs">
                (Tanda Tangan & Cap Sekolah)
              </div>
              <p className="font-bold text-slate-900 underline">
                {identitas.namaKepalaSekolah}
              </p>
              <p className="text-slate-600 text-xs">
                NIP. {identitas.nipKepalaSekolah || '...........................................'}
              </p>
            </div>

            <div>
              <p className="text-slate-600">&nbsp;</p>
              <p className="font-bold text-slate-900 uppercase">
                Guru Mata Pelajaran
              </p>
              <div className="h-20 flex items-center justify-center text-slate-400 italic text-xs">
                (Tanda Tangan)
              </div>
              <p className="font-bold text-slate-900 underline">
                {identitas.namaGuru}
              </p>
              <p className="text-slate-600 text-xs">
                NIP. {identitas.nipGuru || '...........................................'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
