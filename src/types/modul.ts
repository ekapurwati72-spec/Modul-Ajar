export interface IdentitasModul {
  mataPelajaran: string;
  fase: string;
  kelas: string;
  semester: string;
  topik: string;
  alokasiWaktu: string;
  tahunAjaran: string;
  namaSekolah: string;
  namaGuru: string;
  nipGuru: string;
  namaKepalaSekolah: string;
  nipKepalaSekolah: string;
  kota: string;
  tanggal: string;
}

export interface KesiapanKelompok {
  kriteria: string;
  layanan: string;
}

export interface Identifikasi {
  kesiapanSiswa: {
    deskripsiAwal: string;
    kelompokTinggi: KesiapanKelompok;
    kelompokSedang: KesiapanKelompok;
    kelompokPerluBimbingan: KesiapanKelompok;
  };
  karakteristikMateri: {
    tipe: string;
    penjelasan: string;
    alasanKonteks: string;
  };
  profilPancasila: Array<{
    dimensi: string;
    elemen: string;
    implementasiKonkrit: string;
  }>;
}

export interface DesainPembelajaran {
  capaianPembelajaran: string;
  tujuanPembelajaran: Array<{
    kode: string;
    deskripsi: string;
    kko: string;
  }>;
  pemahamanBermakna: string;
  pertanyaanPemantik: string[];
  lintasDisiplinIlmu: string;
  praktikPedagogis: {
    model: string;
    pendekatan: string;
    metode: string[];
  };
  kemitraanLingkungan: string;
  pemanfaatanDigital: string[];
}

export interface PengalamanBelajar {
  pendahuluan: {
    alokasiWaktu: string;
    kegiatan: string[];
    aspekMindful: string;
  };
  inti: {
    alokasiWaktu: string;
    memahami: {
      prinsip: 'Mindful';
      aktivitas: string[];
      fokusEksplorasi: string;
    };
    mengaplikasi: {
      prinsip: 'Meaningful';
      aktivitasUtama: string;
      diferensiasi: {
        kelompokTinggi: string;
        kelompokSedang: string;
        kelompokPerluBimbingan: string;
      };
      produkAkhir: string;
    };
    merefleksi: {
      prinsip: 'Joyful';
      aktivitas: string[];
      teknikRefleksi: string;
    };
  };
  penutup: {
    alokasiWaktu: string;
    kegiatan: string[];
    umpanBalik: string;
  };
}

export interface RubrikFormatifRow {
  aspek: string;
  skor4: string; // Sangat Baik
  skor3: string; // Baik
  skor2: string; // Cukup
  skor1: string; // Perlu Bimbingan
}

export interface RubrikSumatifRow {
  kriteria: string;
  bobot: string;
  deskripsi: string;
}

export interface Asesmen {
  diagnostik: {
    teknik: string;
    instrumen: string[];
    tindakLanjut: string;
  };
  formatif: {
    teknik: string;
    rubrik: RubrikFormatifRow[];
  };
  sumatif: {
    teknik: string;
    bentukSoal: string;
    rubrikAtauKunci: RubrikSumatifRow[];
  };
  remedialDanPengayaan: {
    remedial: string;
    pengayaan: string;
  };
}

export interface Lampiran {
  lkpd: {
    judul: string;
    tujuan: string;
    petunjuk: string[];
    langkahKerja: string[];
    pertanyaanDiskusi: string[];
    panduanDiferensiasiTugas: string;
  };
  bahanAjarSingkat: {
    judul: string;
    ringkasan: string;
    poinPenting: string[];
    glosarium: Array<{
      istilah: string;
      arti: string;
    }>;
  };
  refleksi: {
    pertanyaanSiswa: string[];
    pertanyaanGuru: string[];
  };
}

export interface ModulAjar {
  identitas: IdentitasModul;
  identifikasi: Identifikasi;
  desainPembelajaran: DesainPembelajaran;
  pengalamanBelajar: PengalamanBelajar;
  asesmen: Asesmen;
  lampiran: Lampiran;
}
