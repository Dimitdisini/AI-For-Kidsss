# 🚀 AI for Kids: Multi-Studio & Kurikulum Logika Kreator Cilik

> Program Kursus & Workshop Edukasi AI untuk Anak (Usia 8–12 Tahun)  
> Kolaborasi: **Dimitri Ahmad** (Lead Tech, AI & 3D Maker) & **Mitra Digital Marketing**

---

## 🏛️ Arsitektur Proyek: 4 Kamar Mandiri & 1 Master Portal

Proyek ini dibangun dengan arsitektur **Zero-Dependency & Multi-Studio Isolated**—setiap modul berdiri mandiri pada kamarnya masing-masing tanpa tumpang tindih CSS/JS, dan dihubungkan oleh satu Master Cockpit Shell.

```
Deploy Vercel Project AI for Kids/
├── index.html                                          # 🌐 MASTER COCKPIT: Shell Launcher & Tab Navigator (Iframe Isolated)
│
├── Master Presentasi Kemitraan AI for Kids.html        # 📽️ KAMAR 1: Slide Pitch Kemitraan (16:9 Widescreen, 6 Slide)
├── Studio Game Komik AI for Kids.html                  # 🎮 KAMAR 2: Studio Game Anak (4 Sektor Canvas 60 FPS + Lego Prompting)
├── Kartu Misi dan Panduan Arsitek Koloni Antariksa.html# 📝 KAMAR 3: Lembar Aktivitas Kelas (Format Cetak A4 Mad-Libs)
├── Panduan Operasional dan 3D Printing AI for Kids.html# ⚙️ KAMAR 4: Blueprint Operasional & Workshop 3D Printing Dimitri
│
├── Alur Operasional dan Customer Journey AI for Kids.md# 📄 Dokumentasi Perjalanan Pelanggan & Alur Kelas
├── vercel.json                                         # 🚀 Konfigurasi Deployment Statis Vercel
├── package.json                                        # 📦 Metadata Proyek & Skrip Pengujian Otomatis
├── test_headless.js                                    # 🧪 Automated Headless Unit Testing (40+ Test Cases Node.js)
├── .gitignore                                          # 🛡️ Git Ignore File (Bebas Sampah macOS & Node)
└── Aset/                                               # 🎨 Direktori Grafis & Pustaka Offline
    ├── Karakter Bima.jpg                               # Avatar Resmi: Bima (Sahabat Logika & Fisika)
    ├── Karakter Kinar.jpg                              # Avatar Resmi: Kinar (Sahabat Desain & Seni)
    ├── Cover Studio Game Komik AI.jpg                  # Poster Seni Resmi Studio Game Komik
    └── qrcode.min.js                                   # Pustaka Generator QR Code Offline Standalone
```

---

## 🎮 Bedah 4 Kamar Studio

### 1. Kamar 1: Slide Pitch Kemitraan (`Master Presentasi Kemitraan AI for Kids.html`)
* **Format:** Presentasi Widescreen 16:9 (6 Slide terstruktur).
* **Fokus Materi:** Fondasi teknis zero-dependency, perkenalan maskot Bima & Kinar, bedah konsep sains 4 game, pipeline 3D printing workshop Dimitri, SOP ruang kelas, dan checklist peluncuran Batch 1.
* **Fitur:** Navigasi tombol sentuh + keyboard panah `[◀]` `[▶]` / `Spacebar`.

### 2. Kamar 2: Studio Game Komik AI (`Studio Game Komik AI for Kids.html`)
* **Format:** HTML5 Canvas murni 60 FPS Single-File (~307 KB).
* **4 Sektor Game Lengkap:**
  1. **Sektor 1 (Platformer Mario & Gravitasi):** Pahlawan cilik, koin putar 3D, balok misteri `[?]`, slime musuh, tiang bendera kastil, dan simulasi gravitasi Bumi vs Bulan.
  2. **Sektor 2 (Pemanen Bintang Kosmik):** Gerobak foton beroda, magnet tarikan koin/bintang, dan tembakan meriam laser badai ionik.
  3. **Sektor 3 (Galaxy Shooter Dogfight):** Kendali 4 arah kapal Starfighter, tembakan *triple plasma*, bom supernova layar penuh, dan armada alien liukan ombak.
  4. **Sektor 4 (Grand Prix Kart Racer 2D):** Balapan sirkuit sirkuler 3 lap dengan AI Bot rival (Bima Bot & Kinar Bot), *drifting*, dan semprotan Nitro Turbo.
* **Rak Lego Prompting 3 Warna:** Anak menyusun blok kata visual (*Aktor*, *Perlengkapan & Fisika*, *Atmosfer Dunia*) tanpa risiko typo koding manual.
* **Fitur Ekspor Vercel & QR Code:** Menghasilkan file game mandiri atas nama anak (`Game_NamaAnak_AI_for_Kids.html`) dan kartu koleksi 16:9 dengan QR Code untuk dimainkan di smartphone orang tua.

### 3. Kamar 3: Lembar Kerja Kelas A4 (`Kartu Misi dan Panduan Arsitek Koloni Antariksa.html`)
* **Format:** Siap cetak kertas A4 standar / simpan PDF via browser.
* **Isi:** Kartu misi gaya komik Mad-Libs untuk diisi siswa dengan pensil saat merancang aturan game sebelum membuka laptop.

### 4. Kamar 4: Rundown & 3D Printing (`Panduan Operasional dan 3D Printing AI for Kids.html`)
* **Rundown 90 Menit:** Alur kelas per fase waktu (Briefing, Resep Mad-libs, Prompting, Playtest, Refleksi Sains, Pembagian Suvenir).
* **Spesifikasi Mesin FDM Dimitri:** Material PLA non-toxic (Silk Gold, Glow-in-the-Dark, Matte Pastel), Nozzle 0.4mm, estimasi modal bahan Rp 22.500 per anak.
* **Matriks RACI:** Pembagian peran antara Dimitri Ahmad (Produk & Fasilitator Teknis) vs Mitra Digital Marketing (Funnel, Ads, CS WA, Tempat).

---

## 🧪 Pengujian Otomatis (Headless Unit Testing)

Proyek ini dilengkapi dengan test runner otomatis berbasis Node.js yang menguji seluruh fisika game loop, generator kartu QR, dan rak blok snap-together:

```bash
# Menjalankan pengujian otomatis
npm test
# atau
node test_headless.js
```

Hasil uji: **100% Lulus (Zero Error) pada 40+ test assertion**.

---

## 🚀 Panduan Menjalankan & Deployment

### A. Penggunaan Offline / Di Kelas
* Buka file `index.html` langsung di browser Chrome, Safari, atau Edge.
* 100% berjalan lancar tanpa koneksi internet dan tanpa instalasi software tambahan.

### B. Deployment ke Vercel (10 Detik Online)
1. Buka [vercel.com/new](https://vercel.com/new).
2. Hubungkan repositori GitHub ini, atau seret (*drag-and-drop*) folder proyek.
3. Vercel akan otomatis mengenali `vercel.json` dan mempublikasikan seluruh suite proyek dengan domain gratis publik (contoh: `ai-for-kids.vercel.app`).

---

## 👨‍💻 Kontributor & Lisensi
* **Lead Technology & 3D Maker:** Dimitri Ahmad
* **Digital Marketing & Operations:** Mitra Bisnis
* Dibuat khusus untuk inisiasi program edukasi teknologi ramah anak.
