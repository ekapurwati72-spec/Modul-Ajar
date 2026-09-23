import React from 'react';
import { Compass, Users, Sparkles, Target, Layers } from 'lucide-react';
import { ModulAjar } from '../../types/modul';

interface Pilar1Props {
  modul: ModulAjar;
  isEditing: boolean;
  onUpdate: (updated: Partial<ModulAjar>) => void;
}

export const Pilar1Identifikasi: React.FC<Pilar1Props> = ({
  modul,
  isEditing,
  onUpdate
}) => {
  const { identitas, identifikasi } = modul;

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-6">
      {/* Header Pilar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-bold text-blue-200">
            1
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">PILAR I: IDENTIFIKASI</h2>
            <p className="text-xs text-blue-200">
              Identitas Modul, Pemetaan Kesiapan Peserta Didik & Dimensi Profil Pelajar Pancasila
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-white/10 rounded-full border border-white/20">
          Kesiapan & Karakteristik
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* A. Identitas Modul */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>A. Identitas Modul</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Mata Pelajaran:</span>
              <p className="font-bold text-slate-800">{identitas.mataPelajaran}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Fase / Kelas / Semester:</span>
              <p className="font-bold text-slate-800">{identitas.fase} / {identitas.kelas} / {identitas.semester}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Topik / Materi Utama:</span>
              <p className="font-bold text-blue-700">{identitas.topik}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Alokasi Waktu:</span>
              <p className="font-bold text-slate-800">{identitas.alokasiWaktu}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Satuan Pendidikan:</span>
              <p className="font-bold text-slate-800">{identitas.namaSekolah}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Tahun Pelajaran:</span>
              <p className="font-bold text-slate-800">{identitas.tahunAjaran}</p>
            </div>
          </div>
        </div>

        {/* B. Kesiapan Peserta Didik & Hasil Diagnostik */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-indigo-600" />
            <span>B. Kesiapan Peserta Didik (Hasil Asesmen Diagnostik Awal)</span>
          </h3>

          <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl text-slate-700 text-sm mb-4">
            <span className="font-semibold text-blue-900 block mb-1">Deskripsi Hasil Asesmen Awal & Gaya Belajar:</span>
            {isEditing ? (
              <textarea
                rows={3}
                value={identifikasi.kesiapanSiswa.deskripsiAwal}
                onChange={(e) => {
                  onUpdate({
                    identifikasi: {
                      ...identifikasi,
                      kesiapanSiswa: {
                        ...identifikasi.kesiapanSiswa,
                        deskripsiAwal: e.target.value
                      }
                    }
                  });
                }}
                className="w-full p-2 border rounded-lg text-sm bg-white"
              />
            ) : (
              <p>{identifikasi.kesiapanSiswa.deskripsiAwal}</p>
            )}
          </div>

          {/* 3 Kelompok Kesiapan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Kelompok Tinggi */}
            <div className="bg-gradient-to-b from-emerald-50/80 to-white p-4 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Kelompok Mahir (Tinggi)
                </span>
                <span className="text-emerald-600 text-xs font-semibold">Tantangan & Tutor</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block">Kriteria Kesiapan:</span>
                  <p className="text-slate-600">{identifikasi.kesiapanSiswa.kelompokTinggi.kriteria}</p>
                </div>
                <div className="pt-1 border-t border-emerald-100">
                  <span className="font-semibold text-emerald-900 block">Bentuk Layanan:</span>
                  <p className="text-emerald-800">{identifikasi.kesiapanSiswa.kelompokTinggi.layanan}</p>
                </div>
              </div>
            </div>

            {/* Kelompok Sedang */}
            <div className="bg-gradient-to-b from-sky-50/80 to-white p-4 rounded-xl border border-sky-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                  Kelompok Berkembang (Sedang)
                </span>
                <span className="text-sky-600 text-xs font-semibold">Guided Inquiry</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block">Kriteria Kesiapan:</span>
                  <p className="text-slate-600">{identifikasi.kesiapanSiswa.kelompokSedang.kriteria}</p>
                </div>
                <div className="pt-1 border-t border-sky-100">
                  <span className="font-semibold text-sky-900 block">Bentuk Layanan:</span>
                  <p className="text-sky-800">{identifikasi.kesiapanSiswa.kelompokSedang.layanan}</p>
                </div>
              </div>
            </div>

            {/* Kelompok Perlu Bimbingan */}
            <div className="bg-gradient-to-b from-amber-50/80 to-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  Kelompok Perlu Bimbingan
                </span>
                <span className="text-amber-600 text-xs font-semibold">Scaffolding Intensif</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block">Kriteria Kesiapan:</span>
                  <p className="text-slate-600">{identifikasi.kesiapanSiswa.kelompokPerluBimbingan.kriteria}</p>
                </div>
                <div className="pt-1 border-t border-amber-100">
                  <span className="font-semibold text-amber-900 block">Bentuk Layanan:</span>
                  <p className="text-amber-800">{identifikasi.kesiapanSiswa.kelompokPerluBimbingan.layanan}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* C. Karakteristik Materi */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>C. Karakteristik Materi Pelajaran</span>
          </h3>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Klasifikasi Materi:</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                {identifikasi.karakteristikMateri.tipe}
              </span>
            </div>
            <p className="text-slate-700">{identifikasi.karakteristikMateri.penjelasan}</p>
            <div className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
              <strong className="text-slate-800">Alasan & Urgensi Konteks: </strong>
              {identifikasi.karakteristikMateri.alasanKonteks}
            </div>
          </div>
        </div>

        {/* D. Dimensi Profil Pelajar Pancasila */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-rose-600" />
            <span>D. Dimensi Profil Pelajar Pancasila</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {identifikasi.profilPancasila.map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-slate-900 text-sm">{p.dimensi}</span>
                </div>
                <p className="text-slate-500 font-medium italic">Elemen: {p.elemen}</p>
                <p className="text-slate-700 pt-1 border-t border-slate-200">
                  <strong>Implementasi:</strong> {p.implementasiKonkrit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
