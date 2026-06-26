// ─── Akses & Konfigurasi Bot ───────────────────────────────────────────────

const numberAllowed = ['6285246154386']; // Nomor yang diizinkan menggunakan bot

// ─── Global Config ─────────────────────────────────────────────────────────

global.prefix = ['.', '#'];         // Prefix perintah
global.jeda = 15000;                // Jeda broadcast (ms) — default 15 detik
global.name_script = 'Script Nefu Jpm';
global.botName    = 'NEFU JPM';
global.botOwner   = 'Nepu-Nepu';
global.botWeb     = 'nefusoft.com';
global.version = '2.1';
global.banner = 'https://nefuu.my.id/83xO.jpg'; // URL gambar banner

// ─── Konfigurasi Auto JPM ──────────────────────────────────────────────────

global.autojpm = {
  hidetag: false,       // true = hidetag aktif, false = nonaktif
  jedaPutaran: 10000,   // Jeda antar putaran (ms) — default 10 detik
};

// ─── Export ────────────────────────────────────────────────────────────────

export { numberAllowed };
