import React from 'react';
import { Lightbulb, HelpCircle, Network, Cpu, BookOpen, CheckCircle } from 'lucide-react';
import { ModulAjar } from '../../types/modul';

interface Pilar2Props {
  modul: ModulAjar;
  isEditing: boolean;
  onUpdate: (updated: Partial<ModulAjar>) => void;
}

export const Pilar2Desain: React.FC<Pilar2Props> = ({
  modul,
  isEditing,
  onUpdate
}) => {
  const { desainPembelajaran } = modul;

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-6">
      {/* Header Pilar */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center font-bold text-indigo-200">
            2
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">PILAR II: DESAIN PEMBELAJARAN</h2>
            <p className="text-xs text-indigo-200">
              Capaian & Tujuan Pembelajaran (KKO), Lintas Disiplin Ilmu, Pedagogi & Media Digital
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-white/10 rounded-full border border-white/20">
          Tujuan & Strategi
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* A. Capaian Pembelajaran (CP) */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>A. Capaian Pembelajaran (CP) Elemen</span>
          </h3>

          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-sm">
            {isEditing ? (
              <textarea
                rows={3}
                value={desainPembelajaran.capaianPembelajaran}
                onChange={(e) =>
                  onUpdate({
                    desainPembelajaran: {
                      ...desainPembelajaran,
                      capaianPembelajaran: e.target.value
                    }
                  })
                }
                className="w-full p-2 border rounded-lg bg-white text-slate-800 text-sm"
              />
            ) : (
              <p className="text-slate-800 leading-relaxed font-medium">
                {desainPembelajaran.capaianPembelajaran}
              </p>
            )}
          </div>
        </div>

        {/* B. Tujuan Pembelajaran (TP) Terukur dengan KKO */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>B. Tujuan Pembelajaran (TP) Terukur (Kata Kerja Operasional - KKO)</span>
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-28">Kode TP</th>
                  <th className="py-3 px-4">Rumusan Tujuan Pembelajaran</th>
                  <th className="py-3 px-4 w-40 text-center">Level KKO Bloom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {desainPembelajaran.tujuanPembelajaran.map((tp, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition">
                    <td className="py-3.5 px-4 font-bold text-blue-700">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">
                        {tp.kode}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-800">
                      {tp.deskripsi}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {tp.kko}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* C. Pemahaman Bermakna & Pertanyaan Pemantik */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pemahaman Bermakna */}
          <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 text-sm space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Pemahaman Bermakna (Deep Understanding)</span>
            </div>
            <p className="text-slate-800 leading-relaxed italic">
              "{desainPembelajaran.pemahamanBermakna}"
            </p>
          </div>

          {/* Pertanyaan Pemantik */}
          <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-200 text-sm space-y-2">
            <div className="flex items-center gap-2 text-sky-900 font-bold text-xs uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-sky-600" />
              <span>Pertanyaan Pemantik (Inquiry Triggers)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-800">
              {desainPembelajaran.pertanyaanPemantik.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-sky-700">{idx + 1}.</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* D. Lintas Disiplin Ilmu & Praktik Pedagogis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Lintas Disiplin */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900 uppercase">
              <Network className="w-4 h-4 text-purple-600" />
              <span>Lintas Disiplin Ilmu</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {desainPembelajaran.lintasDisiplinIlmu}
            </p>
          </div>

          {/* Praktik Pedagogis */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <span className="font-bold text-slate-900 uppercase block">Praktik Pedagogis:</span>
            <p className="text-slate-700">
              <strong>Model:</strong> {desainPembelajaran.praktikPedagogis.model}
            </p>
            <p className="text-slate-700">
              <strong>Pendekatan:</strong> {desainPembelajaran.praktikPedagogis.pendekatan}
            </p>
            <div className="pt-1">
              <strong>Metode:</strong>
              <div className="flex flex-wrap gap-1 mt-1">
                {desainPembelajaran.praktikPedagogis.metode.map((m, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-300 text-slate-700 text-[11px]">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pemanfaatan Digital & Kemitraan */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div>
              <div className="flex items-center gap-2 font-bold text-slate-900 uppercase">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Pemanfaatan Digital</span>
              </div>
              <ul className="mt-1 space-y-1 text-slate-700">
                {desainPembelajaran.pemanfaatanDigital.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <span className="font-bold text-slate-900 block">Kemitraan & Lingkungan:</span>
              <p className="text-slate-600 mt-0.5">{desainPembelajaran.kemitraanLingkungan}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
