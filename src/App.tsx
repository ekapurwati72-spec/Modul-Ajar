import React, { useState } from 'react';
import { ModulAjar } from './types/modul';
import { exemplarIPA, exemplarBahasaIndonesia } from './data/exemplarModul';
import { Header } from './components/Header';
import { PillarsNavigation, PillarTab } from './components/PillarsNavigation';
import { GeneratorModal } from './components/GeneratorModal';
import { Pilar1Identifikasi } from './components/pillars/Pilar1Identifikasi';
import { Pilar2Desain } from './components/pillars/Pilar2Desain';
import { Pilar3Pengalaman } from './components/pillars/Pilar3Pengalaman';
import { Pilar4Asesmen } from './components/pillars/Pilar4Asesmen';
import { LampiranSection } from './components/pillars/LampiranSection';
import { 
  Sparkles, 
  FileDown, 
  Printer, 
  BookOpen, 
  CheckCircle, 
  SlidersHorizontal,
  GraduationCap,
  Heart,
  Lightbulb,
  Smile
} from 'lucide-react';
import { downloadWordDocument } from './utils/exportHelpers';

export default function App() {
  const [modul, setModul] = useState<ModulAjar>(exemplarIPA);
  const [activeTab, setActiveTab] = useState<PillarTab>('all');
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleUpdateModul = (updated: Partial<ModulAjar>) => {
    setModul(prev => ({
      ...prev,
      ...updated
    }));
  };

  const handleLoadExemplarIPA = () => {
    setModul(exemplarIPA);
    showToast('Berhasil memuat contoh Modul Ajar IPA: Perubahan Wujud Zat (Fase D)');
  };

  const handleLoadExemplarBahasa = () => {
    setModul(exemplarBahasaIndonesia);
    showToast('Berhasil memuat contoh Modul Ajar Bahasa Indonesia: Teks Deskripsi (Fase D)');
  };

  const handleAISuccess = (newModul: ModulAjar) => {
    setModul(newModul);
    showToast(`Modul Ajar "${newModul.identitas.mataPelajaran}" berhasil disusun oleh AI!`);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        modul={modul}
        onOpenGenerator={() => setIsGeneratorOpen(true)}
        onLoadExemplarIPA={handleLoadExemplarIPA}
        onLoadExemplarBahasa={handleLoadExemplarBahasa}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing(!isEditing)}
      />

      {/* Pillars Navigation Bar */}
      <PillarsNavigation
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl border border-slate-700 text-xs sm:text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 no-print">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Card Overview (Non-Printable) */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-sky-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-950/15 mb-6 no-print">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/25 border border-blue-400/30 text-blue-200">
                  {modul.identitas.fase} • {modul.identitas.kelas}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/25 border border-emerald-400/30 text-emerald-200">
                  {modul.identitas.mataPelajaran}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/25 border border-amber-400/30 text-amber-200">
                  {modul.desainPembelajaran.praktikPedagogis.model}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {modul.identitas.topik}
              </h2>

              <p className="text-sm text-blue-100/90 leading-relaxed">
                Modul Ajar Deep Learning Kurikulum Merdeka yang dirancang komprehensif, terstruktur rapi, 
                siap pakai di kelas, dan mengintegrasikan pembelajaran berdiferensiasi (proses, konten, produk) 
                berdasarkan asesmen diagnostik peserta didik.
              </p>

              {/* 3 Prinsip Deep Learning Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/30 flex items-center justify-center text-sky-200 shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-sky-200 block">1. Mindful</span>
                    <span className="text-[11px] text-blue-100">Kesadaran penuh & reflektif</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/30 flex items-center justify-center text-emerald-200 shrink-0">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-200 block">2. Meaningful</span>
                    <span className="text-[11px] text-blue-100">Kontekstual & berdiferensiasi</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/30 flex items-center justify-center text-amber-200 shrink-0">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-200 block">3. Joyful</span>
                    <span className="text-[11px] text-blue-100">Asyik & menumbuhkan takjub</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsGeneratorOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-blue-900 bg-amber-300 hover:bg-amber-400 shadow-md transition active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-blue-950" />
                <span>Susun Modul Baru (AI)</span>
              </button>

              <button
                type="button"
                onClick={() => downloadWordDocument(modul)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 transition"
              >
                <FileDown className="w-4 h-4 text-blue-200" />
                <span>Unduh Word (.doc)</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / PDF Resmi</span>
              </button>
            </div>
          </div>
        </div>

        {/* Printable Document Area */}
        <div className="print-area">
          {/* Official Document Cover Header (Visible in All View & Print) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-6 shadow-xs text-center border-t-8 border-t-blue-700">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight">
              MODUL AJAR DEEP LEARNING KURIKULUM MERDEKA
            </h1>
            <p className="text-sm font-bold text-blue-700 uppercase mt-1">
              {modul.identitas.mataPelajaran} • {modul.identitas.fase} ({modul.identitas.kelas}) • {modul.identitas.semester}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {modul.identitas.namaSekolah} | Alokasi Waktu: {modul.identitas.alokasiWaktu} | Tahun Ajaran {modul.identitas.tahunAjaran}
            </p>
          </div>

          {/* Tab Views */}
          {(activeTab === 'all' || activeTab === 'pilar1') && (
            <Pilar1Identifikasi
              modul={modul}
              isEditing={isEditing}
              onUpdate={handleUpdateModul}
            />
          )}

          {(activeTab === 'all' || activeTab === 'pilar2') && (
            <Pilar2Desain
              modul={modul}
              isEditing={isEditing}
              onUpdate={handleUpdateModul}
            />
          )}

          {(activeTab === 'all' || activeTab === 'pilar3') && (
            <Pilar3Pengalaman
              modul={modul}
              isEditing={isEditing}
              onUpdate={handleUpdateModul}
            />
          )}

          {(activeTab === 'all' || activeTab === 'pilar4') && (
            <Pilar4Asesmen
              modul={modul}
              isEditing={isEditing}
              onUpdate={handleUpdateModul}
            />
          )}

          {(activeTab === 'all' || activeTab === 'lampiran') && (
            <LampiranSection
              modul={modul}
              isEditing={isEditing}
              onUpdate={handleUpdateModul}
            />
          )}
        </div>
      </main>

      {/* Footer (Non-Printable) */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-semibold text-slate-700">
            Modul Ajar Deep Learning Kurikulum Merdeka
          </p>
          <p>
            Dirancang sesuai Keputusan Kepala BSKAP Kemendikbudristek tentang Capaian Pembelajaran & Pembelajaran Mendalam Berdiferensiasi.
          </p>
        </div>
      </footer>

      {/* AI Generator Modal Drawer */}
      <GeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        onSuccess={handleAISuccess}
      />
    </div>
  );
}
