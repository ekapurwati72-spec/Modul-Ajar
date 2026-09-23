import { ModulAjar } from '../types/modul';

export function generateMarkdown(modul: ModulAjar): string {
  const { identitas, identifikasi, desainPembelajaran, pengalamanBelajar, asesmen, lampiran } = modul;

  return `# MODUL AJAR DEEP LEARNING KURIKULUM MERDEKA
**Mata Pelajaran:** ${identitas.mataPelajaran}
**Fase / Kelas / Semester:** ${identitas.fase} / ${identitas.kelas} / ${identitas.semester}
**Topik / Materi:** ${identitas.topik}
**Alokasi Waktu:** ${identitas.alokasiWaktu}
**Sekolah:** ${identitas.namaSekolah} | **Tahun Ajaran:** ${identitas.tahunAjaran}

---

## 1. PILAR I: IDENTIFIKASI
### A. Identitas Modul
- **Penyusun:** ${identitas.namaGuru} (NIP: ${identitas.nipGuru || '-'})
- **Instansi:** ${identitas.namaSekolah}
- **Jenjang / Kelas:** ${identitas.fase} / ${identitas.kelas}
- **Alokasi Waktu:** ${identitas.alokasiWaktu}

### B. Kesiapan Peserta Didik
${identifikasi.kesiapanSiswa.deskripsiAwal}

**Pemetaan 3 Kelompok Kesiapan:**
1. **Kelompok Mahir / Tinggi:**
   - *Kriteria:* ${identifikasi.kesiapanSiswa.kelompokTinggi.kriteria}
   - *Bentuk Layanan:* ${identifikasi.kesiapanSiswa.kelompokTinggi.layanan}
2. **Kelompok Berkembang / Sedang:**
   - *Kriteria:* ${identifikasi.kesiapanSiswa.kelompokSedang.kriteria}
   - *Bentuk Layanan:* ${identifikasi.kesiapanSiswa.kelompokSedang.layanan}
3. **Kelompok Perlu Bimbingan / Dasar:**
   - *Kriteria:* ${identifikasi.kesiapanSiswa.kelompokPerluBimbingan.kriteria}
   - *Bentuk Layanan:* ${identifikasi.kesiapanSiswa.kelompokPerluBimbingan.layanan}

### C. Karakteristik Materi
- **Tipe Materi:** ${identifikasi.karakteristikMateri.tipe}
- **Penjelasan:** ${identifikasi.karakteristikMateri.penjelasan}
- **Konteks:** ${identifikasi.karakteristikMateri.alasanKonteks}

### D. Dimensi Profil Pelajar Pancasila
${identifikasi.profilPancasila.map(p => `- **${p.dimensi}** (Elemen: ${p.elemen}):\n  ${p.implementasiKonkrit}`).join('\n')}

---

## 2. PILAR II: DESAIN PEMBELAJARAN
### A. Capaian Pembelajaran (CP)
${desainPembelajaran.capaianPembelajaran}

### B. Tujuan Pembelajaran (TP)
${desainPembelajaran.tujuanPembelajaran.map(tp => `- **[${tp.kode}]** ${tp.deskripsi} *(KKO: ${tp.kko})*`).join('\n')}

### C. Pemahaman Bermakna
${desainPembelajaran.pemahamanBermakna}

### D. Pertanyaan Pemantik
${desainPembelajaran.pertanyaanPemantik.map((q, idx) => `${idx + 1}. ${q}`).join('\n')}

### E. Lintas Disiplin Ilmu & Konteks Nyata
${desainPembelajaran.lintasDisiplinIlmu}

### F. Praktik Pedagogis
- **Model Pembelajaran:** ${desainPembelajaran.praktikPedagogis.model}
- **Pendekatan:** ${desainPembelajaran.praktikPedagogis.pendekatan}
- **Metode:** ${desainPembelajaran.praktikPedagogis.metode.join(', ')}

### G. Kemitraan & Lingkungan Pembelajaran
${desainPembelajaran.kemitraanLingkungan}

### H. Pemanfaatan Digital
${desainPembelajaran.pemanfaatanDigital.map(d => `- ${d}`).join('\n')}

---

## 3. PILAR III: PENGALAMAN BELAJAR (Mindful, Meaningful, Joyful)
### A. Kegiatan Pendahuluan (${pengalamanBelajar.pendahuluan.alokasiWaktu}) - Prinsip Mindful
*Aspek Mindful:* ${pengalamanBelajar.pendahuluan.aspekMindful}
${pengalamanBelajar.pendahuluan.kegiatan.map((k, i) => `${i + 1}. ${k}`).join('\n')}

### B. Kegiatan Inti (${pengalamanBelajar.inti.alokasiWaktu})
#### 1. Memahami (Mindful)
*Fokus:* ${pengalamanBelajar.inti.memahami.fokusEksplorasi}
${pengalamanBelajar.inti.memahami.aktivitas.map((a, i) => `${i + 1}. ${a}`).join('\n')}

#### 2. Mengaplikasi (Meaningful - Pembelajaran Berdiferensiasi)
*Aktivitas Utama:* ${pengalamanBelajar.inti.mengaplikasi.aktivitasUtama}
- **Diferensiasi Kelompok Mahir (Tinggi):** ${pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokTinggi}
- **Diferensiasi Kelompok Berkembang (Sedang):** ${pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokSedang}
- **Diferensiasi Kelompok Perlu Bimbingan:** ${pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokPerluBimbingan}
- **Diferensiasi Produk:** ${pengalamanBelajar.inti.mengaplikasi.produkAkhir}

#### 3. Merefleksi (Joyful)
*Teknik Refleksi:* ${pengalamanBelajar.inti.merefleksi.teknikRefleksi}
${pengalamanBelajar.inti.merefleksi.aktivitas.map((a, i) => `${i + 1}. ${a}`).join('\n')}

### C. Kegiatan Penutup (${pengalamanBelajar.penutup.alokasiWaktu})
${pengalamanBelajar.penutup.kegiatan.map((k, i) => `${i + 1}. ${k}`).join('\n')}
*Catatan Umpan Balik:* ${pengalamanBelajar.penutup.umpanBalik}

---

## 4. PILAR IV: ASESMEN DAN LAMPIRAN
### A. Asesmen Diagnostik (Awal)
- **Teknik:** ${asesmen.diagnostik.teknik}
- **Instrumen:**
${asesmen.diagnostik.instrumen.map((ins, i) => `  ${i + 1}. ${ins}`).join('\n')}
- **Tindak Lanjut:** ${asesmen.diagnostik.tindakLanjut}

### B. Asesmen Formatif Real-Time (Rubrik Proses)
**Teknik:** ${asesmen.formatif.teknik}

| Aspek Penilaian | Skor 4 (Sangat Baik) | Skor 3 (Baik) | Skor 2 (Cukup) | Skor 1 (Perlu Bimbingan) |
|---|---|---|---|---|
${asesmen.formatif.rubrik.map(r => `| ${r.aspek} | ${r.skor4} | ${r.skor3} | ${r.skor2} | ${r.skor1} |`).join('\n')}

### C. Asesmen Sumatif (Akhir)
- **Teknik:** ${asesmen.sumatif.teknik}
- **Bentuk Soal:** ${asesmen.sumatif.bentukSoal}

| Kriteria Penilaian | Bobot | Deskripsi Indikator |
|---|---|---|
${asesmen.sumatif.rubrikAtauKunci.map(s => `| ${s.kriteria} | ${s.bobot} | ${s.deskripsi} |`).join('\n')}

### D. Program Remedial & Pengayaan
- **Remedial:** ${asesmen.remedialDanPengayaan.remedial}
- **Pengayaan:** ${asesmen.remedialDanPengayaan.pengayaan}

---

## 5. LAMPIRAN
### A. Lembar Kerja Peserta Didik (LKPD)
**Judul:** ${lampiran.lkpd.judul}
**Tujuan:** ${lampiran.lkpd.tujuan}

**Petunjuk:**
${lampiran.lkpd.petunjuk.map(p => `- ${p}`).join('\n')}

**Langkah Kerja:**
${lampiran.lkpd.langkahKerja.map((l, i) => `${i + 1}. ${l}`).join('\n')}

**Pertanyaan Diskusi:**
${lampiran.lkpd.pertanyaanDiskusi.map((q, i) => `${i + 1}. ${q}`).join('\n')}

**Panduan Diferensiasi LKPD:**
${lampiran.lkpd.panduanDiferensiasiTugas}

### B. Bahan Ajar Singkat
**Judul:** ${lampiran.bahanAjarSingkat.judul}
${lampiran.bahanAjarSingkat.ringkasan}

**Poin-Poin Kunci:**
${lampiran.bahanAjarSingkat.poinPenting.map(p => `- ${p}`).join('\n')}

**Glosarium:**
${lampiran.bahanAjarSingkat.glosarium.map(g => `- **${g.istilah}**: ${g.arti}`).join('\n')}

### C. Lembar Refleksi
**Refleksi Siswa:**
${lampiran.refleksi.pertanyaanSiswa.map((q, i) => `${i + 1}. ${q}`).join('\n')}

**Refleksi Guru:**
${lampiran.refleksi.pertanyaanGuru.map((q, i) => `${i + 1}. ${q}`).join('\n')}

---

### PENGESAHAN MODUL AJAR
${identitas.kota}, ${identitas.tanggal}

Mengetahui,  
**Kepala ${identitas.namaSekolah}**  
  
  
*(Tanda Tangan & Cap)*  
**${identitas.namaKepalaSekolah}**  
NIP. ${identitas.nipKepalaSekolah || '...........................................'}

**Guru Mata Pelajaran**  
  
  
*(Tanda Tangan)*  
**${identitas.namaGuru}**  
NIP. ${identitas.nipGuru || '...........................................'}
`;
}

export function downloadWordDocument(modul: ModulAjar) {
  const { identitas, identifikasi, desainPembelajaran, pengalamanBelajar, asesmen, lampiran } = modul;

  const htmlContent = `
    <!DOCTYPE html>
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>Modul Ajar Deep Learning - ${identitas.topik}</title>
      <style>
        body { font-family: 'Calibri', 'Segoe UI', Tahoma, sans-serif; font-size: 11pt; line-height: 1.45; color: #1a1a1a; margin: 20mm; }
        h1 { font-size: 17pt; color: #1e3a8a; text-align: center; margin-bottom: 4px; text-transform: uppercase; font-weight: bold; }
        h2 { font-size: 13pt; color: #1e3a8a; border-bottom: 2px solid #2563eb; padding-bottom: 4px; margin-top: 18px; margin-bottom: 8px; text-transform: uppercase; }
        h3 { font-size: 11.5pt; color: #1f2937; margin-top: 12px; margin-bottom: 4px; font-weight: bold; }
        h4 { font-size: 10.5pt; color: #374151; margin-top: 8px; margin-bottom: 4px; font-weight: bold; }
        p { margin: 4px 0 6px 0; }
        ul, ol { margin: 4px 0 6px 20px; padding: 0; }
        li { margin-bottom: 3px; }
        table { width: 100%; border-collapse: collapse; margin: 10px 0 14px 0; font-size: 10pt; }
        th, td { border: 1px solid #4b5563; padding: 6px 8px; text-align: left; vertical-align: top; }
        th { background-color: #f1f5f9; font-weight: bold; color: #0f172a; }
        .meta-table td { border: none; padding: 3px 6px; }
        .badge { display: inline-block; padding: 2px 6px; font-size: 9pt; border-radius: 4px; font-weight: bold; }
        .mindful { background-color: #e0f2fe; color: #0369a1; }
        .meaningful { background-color: #ecfdf5; color: #047857; }
        .joyful { background-color: #fef3c7; color: #b45309; }
        .box { border-left: 4px solid #2563eb; background-color: #f8fafc; padding: 8px 12px; margin: 8px 0; }
        .signature-table { width: 100%; border: none; margin-top: 30px; }
        .signature-table td { border: none; text-align: center; width: 50%; }
      </style>
    </head>
    <body>
      <div style="text-align: center; margin-bottom: 15px;">
        <h1>MODUL AJAR DEEP LEARNING</h1>
        <div style="font-size: 13pt; font-weight: bold; color: #2563eb;">KURIKULUM MERDEKA</div>
        <div style="font-size: 11pt; color: #4b5563; margin-top: 4px;">Pendekatan Pembelajaran Mendalam: Mindful, Meaningful, & Joyful</div>
      </div>

      <table class="meta-table" style="margin-bottom: 15px; border-bottom: 1px solid #94a3b8; padding-bottom: 8px;">
        <tr>
          <td style="width: 20%; font-weight: bold;">Mata Pelajaran</td>
          <td style="width: 30%;">: ${identitas.mataPelajaran}</td>
          <td style="width: 20%; font-weight: bold;">Satuan Pendidikan</td>
          <td style="width: 30%;">: ${identitas.namaSekolah}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Fase / Kelas / Smt</td>
          <td>: ${identitas.fase} / ${identitas.kelas} / ${identitas.semester}</td>
          <td style="font-weight: bold;">Tahun Ajaran</td>
          <td>: ${identitas.tahunAjaran}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Topik / Materi Pokok</td>
          <td>: ${identitas.topik}</td>
          <td style="font-weight: bold;">Alokasi Waktu</td>
          <td>: ${identitas.alokasiWaktu}</td>
        </tr>
      </table>

      <h2>1. IDENTIFIKASI</h2>
      <h3>A. Kesiapan Peserta Didik (Hasil Asesmen Diagnostik Awal)</h3>
      <p>${identifikasi.kesiapanSiswa.deskripsiAwal}</p>
      <table>
        <thead>
          <tr>
            <th style="width: 25%;">Kategori Kelompok</th>
            <th style="width: 40%;">Karakteristik & Kesiapan</th>
            <th style="width: 35%;">Diferensiasi Layanan Pembelajaran</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Kelompok Mahir (Tinggi)</strong></td>
            <td>${identifikasi.kesiapanSiswa.kelompokTinggi.kriteria}</td>
            <td>${identifikasi.kesiapanSiswa.kelompokTinggi.layanan}</td>
          </tr>
          <tr>
            <td><strong>Kelompok Berkembang (Sedang)</strong></td>
            <td>${identifikasi.kesiapanSiswa.kelompokSedang.kriteria}</td>
            <td>${identifikasi.kesiapanSiswa.kelompokSedang.layanan}</td>
          </tr>
          <tr>
            <td><strong>Kelompok Perlu Bimbingan (Dasar)</strong></td>
            <td>${identifikasi.kesiapanSiswa.kelompokPerluBimbingan.kriteria}</td>
            <td>${identifikasi.kesiapanSiswa.kelompokPerluBimbingan.layanan}</td>
          </tr>
        </tbody>
      </table>

      <h3>B. Karakteristik Materi Pelajaran</h3>
      <p><strong>Tipe Materi:</strong> ${identifikasi.karakteristikMateri.tipe}</p>
      <p>${identifikasi.karakteristikMateri.penjelasan}</p>
      <p><em>Alasan & Konteks:</em> ${identifikasi.karakteristikMateri.alasanKonteks}</p>

      <h3>C. Dimensi Profil Pelajar Pancasila</h3>
      <ul>
        ${identifikasi.profilPancasila.map(p => `<li><strong>${p.dimensi}</strong> (Elemen: ${p.elemen})<br/><em>Implementasi:</em> ${p.implementasiKonkrit}</li>`).join('')}
      </ul>

      <h2>2. DESAIN PEMBELAJARAN</h2>
      <h3>A. Capaian Pembelajaran (CP)</h3>
      <div class="box">${desainPembelajaran.capaianPembelajaran}</div>

      <h3>B. Tujuan Pembelajaran (TP) Terukur (KKO)</h3>
      <table>
        <thead>
          <tr>
            <th style="width: 15%;">Kode TP</th>
            <th style="width: 70%;">Rumusan Tujuan Pembelajaran</th>
            <th style="width: 15%;">Level KKO</th>
          </tr>
        </thead>
        <tbody>
          ${desainPembelajaran.tujuanPembelajaran.map(tp => `
            <tr>
              <td><strong>${tp.kode}</strong></td>
              <td>${tp.deskripsi}</td>
              <td>${tp.kko}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <h3>C. Pemahaman Bermakna & Pertanyaan Pemantik</h3>
      <p><strong>Pemahaman Bermakna:</strong> ${desainPembelajaran.pemahamanBermakna}</p>
      <p><strong>Pertanyaan Pemantik:</strong></p>
      <ol>
        ${desainPembelajaran.pertanyaanPemantik.map(q => `<li>${q}</li>`).join('')}
      </ol>

      <h3>D. Lintas Disiplin Ilmu, Praktik Pedagogis & Pemanfaatan Digital</h3>
      <p><strong>Keterkaitan Lintas Disiplin Ilmu:</strong> ${desainPembelajaran.lintasDisiplinIlmu}</p>
      <p><strong>Model Pembelajaran:</strong> ${desainPembelajaran.praktikPedagogis.model}</p>
      <p><strong>Pendekatan:</strong> ${desainPembelajaran.praktikPedagogis.pendekatan}</p>
      <p><strong>Metode:</strong> ${desainPembelajaran.praktikPedagogis.metode.join(', ')}</p>
      <p><strong>Kemitraan & Lingkungan:</strong> ${desainPembelajaran.kemitraanLingkungan}</p>
      <p><strong>Media & Alat Digital:</strong> ${desainPembelajaran.pemanfaatanDigital.join('; ')}</p>

      <h2>3. PENGALAMAN BELAJAR (Mindful, Meaningful, Joyful)</h2>
      
      <h3>A. Kegiatan Pendahuluan (${pengalamanBelajar.pendahuluan.alokasiWaktu}) - <span class="badge mindful">Mindful</span></h3>
      <p><em>Aspek Mindfulness:</em> ${pengalamanBelajar.pendahuluan.aspekMindful}</p>
      <ol>
        ${pengalamanBelajar.pendahuluan.kegiatan.map(k => `<li>${k}</li>`).join('')}
      </ol>

      <h3>B. Kegiatan Inti (${pengalamanBelajar.inti.alokasiWaktu})</h3>
      <h4>1. Memahami (Prinsip: Mindful)</h4>
      <p><em>Fokus Eksplorasi:</em> ${pengalamanBelajar.inti.memahami.fokusEksplorasi}</p>
      <ul>
        ${pengalamanBelajar.inti.memahami.aktivitas.map(a => `<li>${a}</li>`).join('')}
      </ul>

      <h4>2. Mengaplikasi (Prinsip: Meaningful & Pembelajaran Berdiferensiasi)</h4>
      <p><em>Aktivitas Utama:</em> ${pengalamanBelajar.inti.mengaplikasi.aktivitasUtama}</p>
      <table>
        <thead>
          <tr>
            <th style="width: 30%;">Kelompok Belajar</th>
            <th style="width: 70%;">Panduan Diferensiasi Proses & Pendampingan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Kelompok Mahir (Tinggi)</strong></td>
            <td>${pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokTinggi}</td>
          </tr>
          <tr>
            <td><strong>Kelompok Berkembang (Sedang)</strong></td>
            <td>${pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokSedang}</td>
          </tr>
          <tr>
            <td><strong>Kelompok Perlu Bimbingan</strong></td>
            <td>${pengalamanBelajar.inti.mengaplikasi.diferensiasi.kelompokPerluBimbingan}</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Diferensiasi Produk:</strong> ${pengalamanBelajar.inti.mengaplikasi.produkAkhir}</p>

      <h4>3. Merefleksi (Prinsip: Joyful)</h4>
      <p><em>Teknik Refleksi:</em> ${pengalamanBelajar.inti.merefleksi.teknikRefleksi}</p>
      <ul>
        ${pengalamanBelajar.inti.merefleksi.aktivitas.map(a => `<li>${a}</li>`).join('')}
      </ul>

      <h3>C. Kegiatan Penutup (${pengalamanBelajar.penutup.alokasiWaktu})</h3>
      <ol>
        ${pengalamanBelajar.penutup.kegiatan.map(k => `<li>${k}</li>`).join('')}
      </ol>
      <p><em>Umpan Balik:</em> ${pengalamanBelajar.penutup.umpanBalik}</p>

      <h2>4. ASESMEN DAN LAMPIRAN</h2>
      <h3>A. Asesmen Diagnostik (Awal)</h3>
      <p><strong>Teknik:</strong> ${asesmen.diagnostik.teknik}</p>
      <p><strong>Instrumen:</strong></p>
      <ul>
        ${asesmen.diagnostik.instrumen.map(ins => `<li>${ins}</li>`).join('')}
      </ul>
      <p><strong>Tindak Lanjut Hasil:</strong> ${asesmen.diagnostik.tindakLanjut}</p>

      <h3>B. Asesmen Formatif Real-Time (Rubrik Proses)</h3>
      <p><strong>Teknik:</strong> ${asesmen.formatif.teknik}</p>
      <table>
        <thead>
          <tr>
            <th style="width: 20%;">Aspek Penilaian</th>
            <th style="width: 20%;">Skor 4 (Sangat Baik)</th>
            <th style="width: 20%;">Skor 3 (Baik)</th>
            <th style="width: 20%;">Skor 2 (Cukup)</th>
            <th style="width: 20%;">Skor 1 (Perlu Bimbingan)</th>
          </tr>
        </thead>
        <tbody>
          ${asesmen.formatif.rubrik.map(r => `
            <tr>
              <td><strong>${r.aspek}</strong></td>
              <td>${r.skor4}</td>
              <td>${r.skor3}</td>
              <td>${r.skor2}</td>
              <td>${r.skor1}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <h3>C. Asesmen Sumatif (Akhir)</h3>
      <p><strong>Teknik:</strong> ${asesmen.sumatif.teknik} | <strong>Bentuk Soal:</strong> ${asesmen.sumatif.bentukSoal}</p>
      <table>
        <thead>
          <tr>
            <th style="width: 35%;">Kriteria Penilaian</th>
            <th style="width: 15%;">Bobot</th>
            <th style="width: 50%;">Deskripsi Indikator Keberhasilan</th>
          </tr>
        </thead>
        <tbody>
          ${asesmen.sumatif.rubrikAtauKunci.map(s => `
            <tr>
              <td><strong>${s.kriteria}</strong></td>
              <td>${s.bobot}</td>
              <td>${s.deskripsi}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <h3>D. Rencana Tindak Lanjut: Remedial & Pengayaan</h3>
      <p><strong>Program Remedial:</strong> ${asesmen.remedialDanPengayaan.remedial}</p>
      <p><strong>Program Pengayaan:</strong> ${asesmen.remedialDanPengayaan.pengayaan}</p>

      <h2>5. LAMPIRAN-LAMPIRAN</h2>
      
      <h3>Lampiran 1: Lembar Kerja Peserta Didik (LKPD)</h3>
      <div class="box">
        <h4 style="margin-top: 0;">${lampiran.lkpd.judul}</h4>
        <p><strong>Tujuan:</strong> ${lampiran.lkpd.tujuan}</p>
        <p><strong>Petunjuk:</strong></p>
        <ul>${lampiran.lkpd.petunjuk.map(p => `<li>${p}</li>`).join('')}</ul>
        <p><strong>Langkah Kerja Penyelidikan:</strong></p>
        <ol>${lampiran.lkpd.langkahKerja.map(l => `<li>${l}</li>`).join('')}</ol>
        <p><strong>Pertanyaan Diskusi:</strong></p>
        <ol>${lampiran.lkpd.pertanyaanDiskusi.map(q => `<li>${q}</li>`).join('')}</ol>
        <p><strong>Panduan Diferensiasi LKPD:</strong> ${lampiran.lkpd.panduanDiferensiasiTugas}</p>
      </div>

      <h3>Lampiran 2: Bahan Ajar Singkat</h3>
      <div class="box">
        <h4 style="margin-top: 0;">${lampiran.bahanAjarSingkat.judul}</h4>
        <p>${lampiran.bahanAjarSingkat.ringkasan}</p>
        <p><strong>Poin Kunci Esensial:</strong></p>
        <ul>${lampiran.bahanAjarSingkat.poinPenting.map(p => `<li>${p}</li>`).join('')}</ul>
        <p><strong>Glosarium:</strong></p>
        <ul>${lampiran.bahanAjarSingkat.glosarium.map(g => `<li><strong>${g.istilah}:</strong> ${g.arti}</li>`).join('')}</ul>
      </div>

      <h3>Lampiran 3: Lembar Refleksi Diri Siswa & Guru</h3>
      <p><strong>Pertanyaan Refleksi Siswa:</strong></p>
      <ul>${lampiran.refleksi.pertanyaanSiswa.map(q => `<li>${q}</li>`).join('')}</ul>
      <p><strong>Pertanyaan Refleksi Guru:</strong></p>
      <ul>${lampiran.refleksi.pertanyaanGuru.map(q => `<li>${q}</li>`).join('')}</ul>

      <br/><br/>
      <table class="signature-table">
        <tr>
          <td>
            Mengetahui,<br/>
            <strong>Kepala ${identitas.namaSekolah}</strong>
            <br/><br/><br/><br/>
            <u><strong>${identitas.namaKepalaSekolah}</strong></u><br/>
            NIP. ${identitas.nipKepalaSekolah || '...........................................'}
          </td>
          <td>
            ${identitas.kota}, ${identitas.tanggal}<br/>
            <strong>Guru Mata Pelajaran</strong>
            <br/><br/><br/><br/>
            <u><strong>${identitas.namaGuru}</strong></u><br/>
            NIP. ${identitas.nipGuru || '...........................................'}
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', htmlContent], {
    type: 'application/msword;charset=utf-8'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const fileName = `Modul_Ajar_DeepLearning_${identitas.mataPelajaran.replace(/\s+/g, '_')}_${identitas.kelas.replace(/\s+/g, '_')}.doc`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadMarkdownFile(modul: ModulAjar) {
  const content = generateMarkdown(modul);
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const fileName = `Modul_Ajar_${modul.identitas.mataPelajaran.replace(/\s+/g, '_')}.md`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportRubricToCSV(modul: ModulAjar) {
  const formatifHeaders = ['Tipe Asesmen', 'Aspek / Kriteria', 'Skor 4 (Sangat Baik)', 'Skor 3 (Baik)', 'Skor 2 (Cukup)', 'Skor 1 (Perlu Bimbingan)', 'Bobot'];
  const rows: string[][] = [formatifHeaders];

  modul.asesmen.formatif.rubrik.forEach(r => {
    rows.push([
      'Formatif Real-Time',
      `"${r.aspek.replace(/"/g, '""')}"`,
      `"${r.skor4.replace(/"/g, '""')}"`,
      `"${r.skor3.replace(/"/g, '""')}"`,
      `"${r.skor2.replace(/"/g, '""')}"`,
      `"${r.skor1.replace(/"/g, '""')}"`,
      '-'
    ]);
  });

  modul.asesmen.sumatif.rubrikAtauKunci.forEach(s => {
    rows.push([
      'Sumatif',
      `"${s.kriteria.replace(/"/g, '""')}"`,
      `"${s.deskripsi.replace(/"/g, '""')}"`,
      '-',
      '-',
      '-',
      `"${s.bobot}"`
    ]);
  });

  const csvContent = rows.map(e => e.join(',')).join('\n');
  const blob = new Blob(['\ufeff', csvContent], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Rubrik_Penilaian_${modul.identitas.mataPelajaran.replace(/\s+/g, '_')}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
