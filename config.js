/**
 * =================================================================
 * KONFIGURASI UTAMA ASISTEN ELXZ BUILD v5
 * Engine: Flutter Build Bot v5.0.0
 * Owner: Elxz
 * =================================================================
 * SEMUA PENGATURAN DAPAT DIISI LANGSUNG DI SINI TANPA MEMERLUKAN .env
 */

const path = require('path');

module.exports = {
  // ==================== INFORMASI OWNER ====================
  OWNER_NAME: 'elnicholl',
  OWNER_ID: '7571009414', // GANTI dengan ID Telegram Anda (contoh: '592819201')
  OWNER_USERNAME: 'elnicholl',
  BOT_USERNAME: 'elxzbuildbot', // Ganti dengan username bot Telegram Anda tanpa @

  // ==================== KREDENSIAL TELEGRAM ====================
  // Token dari @BotFather
  BOT_TOKEN: '8903285716:AAFqZnHovKkko4Hjh1dAmj0C4v1w9-PONKE',

  // ==================== GITHUB ACTIONS ENGINE ====================
  // Personal Access Token (PAT) GitHub dengan scope: repo, workflow, write:packages
  GITHUB_TOKEN: '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',
  GITHUB_OWNER: 'elxiters-docker', // Username akun GitHub Anda
  GITHUB_REPO: 'asisten-elxz-builder', // Nama repository tempat file .github/workflows/ berada
  GITHUB_BRANCH: 'main',

  // Workflow files di .github/workflows/
  WORKFLOW_WEB2APK: 'web2apk.yml',
  WORKFLOW_FLUTTER: 'flutter_build.yml',

  // ==================== MEDIA BANNER & LOG ====================
  // URL Gambar banner atas yang sesuai gambar Web2APK Tirzz / Cyberpunk
  BANNER_PHOTO: 'https://files.catbox.moe/e1j1zy.jpg',
  // Atau path file video banner jika ingin kirim video
  BANNER_VIDEO_PATH: path.join(__dirname, 'banner.mp4'),
  USE_VIDEO_BANNER: false, // Ubah ke true jika ingin kirim banner.mp4 saat /start

  // Gambar aktivitas bot (seperti gambar mobil hitam putih aesthetic di referensi)
  ACTIVITY_PHOTO: 'https://files.catbox.moe/e1j1zy.jpg',

  // ID Channel/Group khusus untuk kirim log aktivitas publik (Opsional, biarkan kosong jika hanya di chat bot)
  ACTIVITY_LOG_CHANNEL: '', 

  // ==================== 3 CHANNEL WAJIB JOIN (FORCE SUB) ====================
  // User WAJIB bergabung ke 3 channel ini sebelum bisa menggunakan bot.
  // PENTING: Bot WAJIB ditambahkan sebagai ADMINISTRATOR di ke-3 channel ini!
  FORCE_SUB_ENABLED: true,
  CHANNELS_REQUIRED: [
    {
      id: '@informasichnlel', // Username atau ID channel 1
      name: '📢 ＣＨＡＮＮＥＬ  ＵＰＤＡＴＥ  １',
      url: 'https://t.me/informasichnlel'
    },
    {
      id: '@elxzchannel', // Username atau ID channel 2
      name: '📢 ＣＨＡＮＮＥＬ  ＴＥＳＴＩＭＯＮＩ  ２',
      url: 'https://t.me/elxzchannel'
    },
    {
      id: '@informasipenukaranell', // Username atau ID channel 3
      name: '📢 ＣＨＡＮＮＥＬ  ＩＮＦＯ  ＡＰＫ  ３',
      url: 'https://t.me/informasipenukaranell'
    }
  ],

  // ==================== PENGATURAN SALDO & ROLE ====================
  DEFAULT_FREE_CREDITS: 28, // Default saldo pengguna baru (28 credit sesuai tampilan)
  CREDIT_PER_BUILD: 1,

  // ==================== SERVER KEEP-ALIVE (PTERODACTYL / KOYEB) ====================
  PORT: 3000
};
