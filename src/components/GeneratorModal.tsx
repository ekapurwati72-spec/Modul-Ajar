import React, { useState } from 'react';
import { Sparkles, X, Loader2, BookOpen, Layers, Check, School, User } from 'lucide-react';
import { ModulAjar } from '../types/modul';

interface GeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newModul: ModulAjar) => void;
}

const PROFIL_OPTIONS = [
  'Bernalar Kritis',
  'Gotong Royong',
  'Kreatif',
  'Mandiri',
  'Beriman, Bertakwa kepada Tuhan YME & Berakhlak Mulia',
  'Berkebinekaan Global'
];

export const GeneratorModal: React.FC<GeneratorModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [mataPelajaran, setMataPelajaran] = useState('Ilmu Pengetahuan Alam (IPA)');
  const [faseKelasSemester, setFaseKelasSemester] = useState('Fase D / Kelas 7 / Semester 1');
  const [topik, setTopik] = useState('Perubahan Wujud Zat & Model Partikel');
  const [capaianPembelajaran, setCapaianPembelajaran] = useState(
    'Peserta didik mampu mengidentifikasi sifat dan karakteristik zat, membedakan perubahan fisika dan kimia serta memisahkan campuran sederhana, dan mendeskripsikan model partikel zat padat, cair, dan gas.'
  );
  const [alokasiWaktu, setAlokasiWaktu] = useState('2 JP (2 x 40 Menit)');
  const [karakteristikSiswa, setKarakteristikSiswa] = useState(
    '40% gaya belajar visual, 60% kinestetik; pemahaman dasar konsep suhu dan kalor masih beragam'
  );
  const [selectedProfil, setSelectedProfil] = useState<string[]>([
    'Bernalar Kritis',
    'Gotong Royong',
    'Kreatif'
  ]);
  const [modelPembelajaran, setModelPembelajaran] = useState('Problem-Based Learning (PBL)');
  const [namaSekolah, setNamaSekolah] = useState('SMP Negeri Merdeka Belajar');
  const [namaGuru, setNamaGuru] = useState('Eka Purwati, S.Pd.');
  const [nipGuru, setNipGuru] = useState('19880415 201212 2 003');
  const [namaKepalaSekolah, setNamaKepalaSekolah] = useState('Drs. H. Bambang Suryono, M.Pd.');
  const [nipKepalaSekolah, setNipKepalaSekolah] = useState('19700101 199503 1 005');
  const [kota, setKota] = useState('Nusantara');
  const [tanggal, setTanggal] = useState('23 September 2026');
  const [instruksiTambahan, setInstruksiTambahan] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleProfil = (item: string) => {
    if (selectedProfil.includes(item)) {
      setSelectedProfil(selectedProfil.filter(p => p !== item));
    } else {
      setSelectedProfil([...selectedProfil, item]);
    }
  };

  const handleApplyPreset = (preset: 'ipa' | 'bindo' | 'mtk' | 'ipas' | 'infor') => {
    if (preset === 'ipa') {
      setMataPelajaran('Ilmu Pengetahuan Alam (IPA)');
      setFaseKelasSemester('Fase D / Kelas 7 / Semester 1');
      setTopik('Perubahan Wujud Zat & Teori Partikel');
      setCapaianPembelajaran('Peserta didik mampu mengidentifikasi sifat dan karakteristik zat, membedakan perubahan fisika dan kimia serta memisahkan campuran sederhana, dan mendeskripsikan model partikel zat padat, cair, dan gas.');
      setAlokasiWaktu('2 JP (2 x 40 Menit)');
      setKarakteristikSiswa('40% gaya belajar visual, 60% kinestetik; pemahaman dasar tentang suhu masih beragam');
      setSelectedProfil(['Bernalar Kritis', 'Gotong Royong', 'Kreatif']);
      setModelPembelajaran('Problem-Based Learning (PBL)');
    } else if (preset === 'bindo') {
      setMataPelajaran('Bahasa Indonesia');
      setFaseKelasSemester('Fase D / Kelas 7 / Semester 1');
      setTopik('Menulis Teks Deskripsi Objek Wisata Nusantara');
      setCapaianPembelajaran('Peserta didik mampu menulis gagasan, pikiran, pandangan, arahan atau pesan tertulis untuk berbagai tujuan secara logis, kritis, dan kreatif dalam bentuk teks deskripsi.');
      setAlokasiWaktu('2 JP (2 x 40 Menit)');
      setKarakteristikSiswa('Siswa memiliki daya imajinasi baik namun perbendaharaan kata panca indra dan pemahaman struktur teks masih bervariasi');
      setSelectedProfil(['Kreatif', 'Berkebinekaan Global', 'Mandiri']);
      setModelPembelajaran('Project-Based Learning (PjBL)');
    } else if (preset === 'mtk') {
      setMataPelajaran('Matematika');
      setFaseKelasSemester('Fase D / Kelas 7 / Semester 1');
      setTopik('Aljabar & Pemodelan Finansial Sederhana Belanja Pasar');
      setCapaianPembelajaran('Peserta didik dapat mengenali, memprediksi dan menggeneralisasi pola dalam bentuk susunan benda dan bilangan. Mereka dapat menyatakan suatu situasi ke dalam bentuk aljabar.');
      setAlokasiWaktu('2 JP (2 x 40 Menit)');
      setKarakteristikSiswa('Sebagian siswa masih mengalami hambatan operasi hitung bilangan negatif dan mengabstraksikan variabel x, y');
      setSelectedProfil(['Bernalar Kritis', 'Mandiri', 'Gotong Royong']);
      setModelPembelajaran('Problem-Based Learning (PBL)');
    } else if (preset === 'ipas') {
      setMataPelajaran('Ilmu Pengetahuan Alam dan Sosial (IPAS)');
      setFaseKelasSemester('Fase C / Kelas 5 / Semester 1');
      setTopik('Harmoni dalam Ekosistem: Jaring-Jaring Makanan & Pelestarian Alam');
      setCapaianPembelajaran('Peserta didik menyelidiki bagaimana hubungan saling ketergantungan antar komponen biotik-abiotik dapat mempengaruhi kestabilan suatu ekosistem di lingkungan sekitarnya.');
      setAlokasiWaktu('2 JP (2 x 35 Menit)');
      setKarakteristikSiswa('Siswa sangat antusias dengan binatang dan alam terbuka; 50% visual, 50% auditori-kinestetik');
      setSelectedProfil(['Beriman, Bertakwa kepada Tuhan YME & Berakhlak Mulia', 'Gotong Royong', 'Bernalar Kritis']);
      setModelPembelajaran('Inquiry Learning Terbimbing');
    } else if (preset === 'infor') {
      setMataPelajaran('Informatika');
      setFaseKelasSemester('Fase E / Kelas 10 / Semester 1');
      setTopik('Berpikir Komputasional: Dekomposisi & Algoritma Kehidupan Nyata');
      setCapaianPembelajaran('Peserta didik mampu menerapkan berpikir komputasional untuk menghasilkan banyak solusi dari persoalan dengan data diskrit bervolume kecil serta mendisposisikan berpikir komputasional.');
      setAlokasiWaktu('2 JP (2 x 45 Menit)');
      setKarakteristikSiswa('Keterampilan logika bervariasi; sebagian mahir menggunakan gawai, sebagian membutuhkan analogi unplugged');
      setSelectedProfil(['Bernalar Kritis', 'Kreatif', 'Gotong Royong']);
      setModelPembelajaran('Problem-Based Learning (PBL)');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-modul', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mataPelajaran,
          faseKelasSemester,
          topik,
          capaianPembelajaran,
          alokasiWaktu,
          karakteristikSiswa,
          profilPancasila: selectedProfil,
          modelPembelajaran,
          namaSekolah,
          namaGuru,
          nipGuru,
          namaKepalaSekolah,
          nipKepalaSekolah,
          kota,
          tanggal,
          instruksiTambahan
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.details || 'Gagal memproses Modul Ajar.');
      }

      const generatedModul: ModulAjar = await response.json();
      onSuccess(generatedModul);
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Terjadi kesalahan saat menyusun modul dengan AI. Pastikan server terhubung.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Modal */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-xs">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Penyusun Modul Ajar Deep Learning AI</h2>
              <p className="text-xs text-blue-100">
                Otomatisasi 4 Pilar Kurikulum Merdeka: Mindful, Meaningful, Joyful & Berdiferensiasi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={loading}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {error && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs sm:text-sm space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold flex items-center gap-1.5">
                  <span>⚠️ Kendala Pembuatan:</span>
                </p>
                <button
                  type="button"
                  onClick={() => setError(null)}
                  className="text-xs text-rose-600 hover:underline font-semibold"
                >
                  Tutup
                </button>
              </div>
              <p>{error}</p>
              <div className="pt-2 border-t border-rose-200 flex flex-wrap items-center gap-2">
                <span className="text-slate-600 font-medium">Atau gunakan langsung:</span>
                <button
                  type="button"
                  onClick={() => {
                    handleApplyPreset('ipa');
                    setError(null);
                  }}
                  className="px-2.5 py-1 bg-white border border-rose-300 rounded text-rose-800 font-semibold hover:bg-rose-100 transition"
                >
                  Muat Contoh IPA
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleApplyPreset('bindo');
                    setError(null);
                  }}
                  className="px-2.5 py-1 bg-white border border-rose-300 rounded text-rose-800 font-semibold hover:bg-rose-100 transition"
                >
                  Muat Contoh B. Indonesia
                </button>
              </div>
            </div>
          )}

          {/* Preset Buttons */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              ⚡ Template Cepat (Klik untuk Isi Otomatis)
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleApplyPreset('ipa')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition"
              >
                🔬 IPA: Perubahan Wujud Zat (Fase D)
              </button>
              <button
                type="button"
                onClick={() => handleApplyPreset('bindo')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100 transition"
              >
                📖 B. Indonesia: Teks Deskripsi (Fase D)
              </button>
              <button
                type="button"
                onClick={() => handleApplyPreset('mtk')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition"
              >
                📐 Matematika: Aljabar (Fase D)
              </button>
              <button
                type="button"
                onClick={() => handleApplyPreset('ipas')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition"
              >
                🌿 IPAS: Ekosistem (Fase C)
              </button>
            </div>
          </div>

          {/* Form Fields: Data Utama */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mata Pelajaran <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={mataPelajaran}
                onChange={(e) => setMataPelajaran(e.target.value)}
                placeholder="Contoh: IPA / Bahasa Indonesia / Matematika"
                required
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Fase / Kelas / Semester <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={faseKelasSemester}
                onChange={(e) => setFaseKelasSemester(e.target.value)}
                placeholder="Contoh: Fase D / Kelas 7 / Semester 1"
                required
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Topik / Materi Utama <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={topik}
                onChange={(e) => setTopik(e.target.value)}
                placeholder="Contoh: Perubahan Wujud Zat & Model Partikel"
                required
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Capaian Pembelajaran (CP) */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Capaian Pembelajaran (CP) Elemen</span>
                  <span className="text-[11px] font-normal text-slate-500">
                    (Acuan Kurikulum Merdeka BSKAP)
                  </span>
                </label>
                <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full font-medium border border-blue-200">
                  Dapat disesuaikan / opsional
                </span>
              </div>
              <textarea
                rows={2}
                value={capaianPembelajaran}
                onChange={(e) => setCapaianPembelajaran(e.target.value)}
                placeholder="Contoh: Peserta didik mampu mengidentifikasi sifat dan karakteristik zat, membedakan perubahan fisika dan kimia... (atau kosongkan untuk dirumuskan otomatis oleh AI sesuai standar BSKAP)"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none leading-relaxed"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                💡 <strong>Catatan:</strong> Rumusan Capaian Pembelajaran ini akan menjadi fondasi utama bagi AI untuk menurunkan Tujuan Pembelajaran (TP) terukur (KKO Taksonomi Bloom), Alur Kegiatan Deep Learning, serta Rubrik Asesmen.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Alokasi Waktu
              </label>
              <input
                type="text"
                value={alokasiWaktu}
                onChange={(e) => setAlokasiWaktu(e.target.value)}
                placeholder="Contoh: 2 JP (2 x 40 Menit)"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Model Pembelajaran
              </label>
              <select
                value={modelPembelajaran}
                onChange={(e) => setModelPembelajaran(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value="Problem-Based Learning (PBL)">Problem-Based Learning (PBL)</option>
                <option value="Project-Based Learning (PjBL)">Project-Based Learning (PjBL)</option>
                <option value="Inquiry Learning Terbimbing">Inquiry Learning Terbimbing</option>
                <option value="Discovery Learning">Discovery Learning</option>
                <option value="Station Learning (Rotasi Stasiun)">Station Learning (Rotasi Stasiun)</option>
              </select>
            </div>
          </div>

          {/* Karakteristik / Diagnostik Siswa */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Karakteristik & Hasil Asesmen Diagnostik Siswa (Untuk Diferensiasi)
            </label>
            <textarea
              rows={2}
              value={karakteristikSiswa}
              onChange={(e) => setKarakteristikSiswa(e.target.value)}
              placeholder="Contoh: 40% gaya belajar visual, 60% kinestetik; pengetahuan dasar tentang suhu masih beragam..."
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              AI akan otomatis memetakan 3 kelompok kesiapan: Mahir (Tinggi), Berkembang (Sedang), dan Perlu Bimbingan (Dasar).
            </p>
          </div>

          {/* Dimensi Profil Pelajar Pancasila */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Dimensi Profil Pelajar Pancasila (Pilih 2 - 3 Dimensi)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PROFIL_OPTIONS.map((dimensi) => {
                const checked = selectedProfil.includes(dimensi);
                return (
                  <button
                    key={dimensi}
                    type="button"
                    onClick={() => toggleProfil(dimensi)}
                    className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium border text-left transition ${
                      checked
                        ? 'bg-blue-50 text-blue-900 border-blue-300'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border ${
                        checked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                      }`}
                    >
                      {checked && <Check className="w-3 h-3 stroke-3" />}
                    </div>
                    <span>{dimensi}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Data Administrasi Sekolah & Pengesahan */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <School className="w-4 h-4 text-blue-600" />
              <span>Data Administrasi & Pengesahan (Opsional)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-600 font-medium">Nama Sekolah:</label>
                <input
                  type="text"
                  value={namaSekolah}
                  onChange={(e) => setNamaSekolah(e.target.value)}
                  className="w-full mt-1 px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-slate-800"
                />
              </div>

              <div>
                <label className="text-slate-600 font-medium">Kota & Tanggal:</label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    value={kota}
                    onChange={(e) => setKota(e.target.value)}
                    placeholder="Kota"
                    className="w-1/2 px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-slate-800"
                  />
                  <input
                    type="text"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    placeholder="Tanggal"
                    className="w-1/2 px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-600 font-medium">Nama Guru Pengampu:</label>
                <input
                  type="text"
                  value={namaGuru}
                  onChange={(e) => setNamaGuru(e.target.value)}
                  className="w-full mt-1 px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-slate-800"
                />
              </div>

              <div>
                <label className="text-slate-600 font-medium">NIP Guru:</label>
                <input
                  type="text"
                  value={nipGuru}
                  onChange={(e) => setNipGuru(e.target.value)}
                  className="w-full mt-1 px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-slate-800"
                />
              </div>

              <div>
                <label className="text-slate-600 font-medium">Nama Kepala Sekolah:</label>
                <input
                  type="text"
                  value={namaKepalaSekolah}
                  onChange={(e) => setNamaKepalaSekolah(e.target.value)}
                  className="w-full mt-1 px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-slate-800"
                />
              </div>

              <div>
                <label className="text-slate-600 font-medium">NIP Kepala Sekolah:</label>
                <input
                  type="text"
                  value={nipKepalaSekolah}
                  onChange={(e) => setNipKepalaSekolah(e.target.value)}
                  className="w-full mt-1 px-2.5 py-1.5 border border-slate-300 rounded-md bg-white text-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Footer Submit */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-blue-500/25 transition active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Menyusun Modul 4 Pilar...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Modul Ajar (AI)</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
