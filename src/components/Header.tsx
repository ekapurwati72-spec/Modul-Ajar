import React from 'react';
import { 
  Sparkles, 
  FileDown, 
  Printer, 
  Share2, 
  BookOpen, 
  Layers, 
  Copy, 
  Check, 
  Download,
  FileSpreadsheet
} from 'lucide-react';
import { ModulAjar } from '../types/modul';
import { downloadWordDocument, downloadMarkdownFile, exportRubricToCSV } from '../utils/exportHelpers';

interface HeaderProps {
  modul: ModulAjar;
  onOpenGenerator: () => void;
  onLoadExemplarIPA: () => void;
  onLoadExemplarBahasa: () => void;
  isEditing: boolean;
  onToggleEdit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  modul,
  onOpenGenerator,
  onLoadExemplarIPA,
  onLoadExemplarBahasa,
  isEditing,
  onToggleEdit
}) => {
  const [copied, setCopied] = React.useState(false);
  const [showShareMenu, setShowShareMenu] = React.useState(false);

  const handleCopy = () => {
    const text = `${modul.identitas.mataPelajaran} - ${modul.identitas.topik} (${modul.identitas.fase})\n${modul.desainPembelajaran.capaianPembelajaran}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3">
          {/* Logo & App Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-bold text-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl">
                  Modul Ajar Deep Learning
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Kurikulum Merdeka
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                4 Pilar Berdiferensiasi: Mindful • Meaningful • Joyful
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Quick Exemplar Dropdown / Buttons */}
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
              <span className="text-slate-500 px-2 font-medium hidden lg:inline">Contoh:</span>
              <button
                type="button"
                onClick={onLoadExemplarIPA}
                className="px-2.5 py-1.5 rounded-md font-medium text-slate-700 hover:bg-white hover:shadow-xs transition"
                title="Muat Modul Ajar IPA Perubahan Wujud Zat (Fase D)"
              >
                🔬 IPA (Fase D)
              </button>
              <button
                type="button"
                onClick={onLoadExemplarBahasa}
                className="px-2.5 py-1.5 rounded-md font-medium text-slate-700 hover:bg-white hover:shadow-xs transition"
                title="Muat Modul Ajar Bahasa Indonesia (Fase D)"
              >
                📖 B. Indonesia
              </button>
            </div>

            {/* AI Generator Button */}
            <button
              type="button"
              onClick={onOpenGenerator}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm shadow-blue-500/25 transition active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Susun dengan AI</span>
            </button>

            {/* Edit Mode Toggle */}
            <button
              type="button"
              onClick={onToggleEdit}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition ${
                isEditing
                  ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Mode Baca' : 'Edit Langsung'}</span>
            </button>

            {/* Word Export Button */}
            <button
              type="button"
              onClick={() => downloadWordDocument(modul)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 transition shadow-xs"
              title="Unduh Modul Ajar dalam Format Microsoft Word (.doc) lengkap tabel & format resmi"
            >
              <FileDown className="w-4 h-4 text-blue-700" />
              <span className="hidden sm:inline">Unduh</span> Word (.doc)
            </button>

            {/* Print / PDF Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-800 text-white hover:bg-slate-900 transition shadow-xs"
              title="Cetak atau Simpan sebagai PDF resmi A4"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Cetak /</span> PDF
            </button>

            {/* Share / More Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 rounded-lg text-slate-700 border border-slate-300 bg-white hover:bg-slate-50 transition"
                title="Pilihan Ekspor Tambahan"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {showShareMenu && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-40 text-xs text-slate-700 animate-in fade-in slide-in-from-top-1"
                  onMouseLeave={() => setShowShareMenu(false)}
                >
                  <button
                    onClick={() => {
                      exportRubricToCSV(modul);
                      setShowShareMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center gap-2"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    <span>Ekspor Rubrik ke CSV (Excel)</span>
                  </button>
                  <button
                    onClick={() => {
                      downloadMarkdownFile(modul);
                      setShowShareMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-indigo-600" />
                    <span>Unduh Format Markdown (.md)</span>
                  </button>
                  <button
                    onClick={() => {
                      handleCopy();
                      setShowShareMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center gap-2 border-t border-slate-100 mt-1 pt-2"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                    <span>{copied ? 'Tersalin ke Klip!' : 'Salin Ringkasan Modul'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
