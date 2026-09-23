import React from 'react';
import { CheckSquare, FileSpreadsheet, AlertCircle, TrendingUp } from 'lucide-react';
import { ModulAjar } from '../../types/modul';
import { exportRubricToCSV } from '../../utils/exportHelpers';

interface Pilar4Props {
  modul: ModulAjar;
  isEditing: boolean;
  onUpdate: (updated: Partial<ModulAjar>) => void;
}

export const Pilar4Asesmen: React.FC<Pilar4Props> = ({
  modul
}) => {
  const { asesmen } = modul;

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-6">
      {/* Header Pilar */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-amber-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center font-bold text-amber-200">
            4
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">PILAR IV: ASESMEN DAN TINDAK LANJUT</h2>
            <p className="text-xs text-amber-200">
              Instrumen Diagnostik, Rubrik Formatif Real-Time, Sumatif, Remedial & Pengayaan
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => exportRubricToCSV(modul)}
          className="no-print inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-white border border-white/20 transition"
          title="Ekspor Seluruh Rubrik ke Format Tabel CSV/Excel"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-300" />
          <span>Ekspor Rubrik (.csv)</span>
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* A. Asesmen Diagnostik (Awal) */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">
              A
            </span>
            <span>Asesmen Awal (Diagnostik Non-Kognitif & Kognitif)</span>
          </h3>

          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 text-sm space-y-2">
            <p className="text-slate-800">
              <strong>Teknik & Bentuk:</strong> {asesmen.diagnostik.teknik}
            </p>
            <div className="bg-white p-3 rounded-lg border border-amber-200 text-xs">
              <strong className="text-amber-900 block mb-1">Daftar Soal / Instrumen Pemantik:</strong>
              <ul className="space-y-1 text-slate-700">
                {asesmen.diagnostik.instrumen.map((ins, i) => (
                  <li key={i}>• {ins}</li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-slate-600">
              <strong>Tindak Lanjut Hasil:</strong> {asesmen.diagnostik.tindakLanjut}
            </p>
          </div>
        </div>

        {/* B. Asesmen Proses Formatif Real-Time (Tabel Rubrik) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                B
              </span>
              <span>Asesmen Proses (Formatif Real-Time Berkelanjutan)</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              Teknik: {asesmen.formatif.teknik}
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-3 w-1/5 border-r border-slate-200">Aspek / Kriteria</th>
                  <th className="py-3 px-3 w-1/5 border-r border-slate-200 bg-emerald-50 text-emerald-900">
                    Skor 4 (Sangat Baik)
                  </th>
                  <th className="py-3 px-3 w-1/5 border-r border-slate-200 bg-sky-50 text-sky-900">
                    Skor 3 (Baik)
                  </th>
                  <th className="py-3 px-3 w-1/5 border-r border-slate-200 bg-amber-50 text-amber-900">
                    Skor 2 (Cukup)
                  </th>
                  <th className="py-3 px-3 w-1/5 bg-rose-50 text-rose-900">
                    Skor 1 (Perlu Bimbingan)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {asesmen.formatif.rubrik.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-bold text-slate-800 border-r border-slate-200 align-top">
                      {row.aspek}
                    </td>
                    <td className="py-3 px-3 text-slate-700 border-r border-slate-200 align-top leading-relaxed">
                      {row.skor4}
                    </td>
                    <td className="py-3 px-3 text-slate-700 border-r border-slate-200 align-top leading-relaxed">
                      {row.skor3}
                    </td>
                    <td className="py-3 px-3 text-slate-700 border-r border-slate-200 align-top leading-relaxed">
                      {row.skor2}
                    </td>
                    <td className="py-3 px-3 text-slate-700 align-top leading-relaxed">
                      {row.skor1}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* C. Asesmen Sumatif (Akhir) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                C
              </span>
              <span>Asesmen Akhir (Sumatif Lingkup Materi & Portofolio)</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              Bentuk: {asesmen.sumatif.bentukSoal}
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 w-1/3 border-r border-slate-200">Kriteria Penilaian</th>
                  <th className="py-3 px-4 w-24 text-center border-r border-slate-200">Bobot</th>
                  <th className="py-3 px-4">Deskripsi Indikator Ketercapaian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {asesmen.sumatif.rubrikAtauKunci.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-bold text-slate-800 border-r border-slate-200 align-top">
                      {row.kriteria}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-blue-700 border-r border-slate-200 align-top">
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                        {row.bobot}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-700 align-top leading-relaxed">
                      {row.deskripsi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* D. Program Remedial & Pengayaan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-200 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-rose-900 uppercase">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Program Remedial (Bagi yang Belum Tuntas)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {asesmen.remedialDanPengayaan.remedial}
            </p>
          </div>

          <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-emerald-900 uppercase">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Program Pengayaan (Bagi yang Telah Tuntas/Mahir)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {asesmen.remedialDanPengayaan.pengayaan}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
