// Genera el PDF de la presentación de punta a punta (multiplataforma):
//   npm run pdf
// Compila, levanta la app local, captura las 9 filminas y guarda el PDF en
// la raíz y en public/ (versión Hedera). Opcional: CHROME_PATH=/ruta/a/chrome
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, copyFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const PORT = 4173;
const DECKS = [
  { deck: 'hedera', total: 9, pdf: 'GALCOA_Presentacion_Hedera_Ideathon.pdf' },
];
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];
  const pw = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (pw && existsSync(pw)) {
    for (const d of readdirSync(pw).filter((n) => n.startsWith('chromium-'))) {
      candidates.push(path.join(pw, d, 'chrome-linux', 'chrome'));
    }
  }
  const found = candidates.find((c) => existsSync(c));
  if (!found) throw new Error('No se encontró Chrome/Chromium. Definí CHROME_PATH.');
  return found;
}

async function waitFor(url, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try { if ((await fetch(url)).ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`El servidor local no respondió en ${url}`);
}

const chrome = findChrome();
console.log('Compilando...');
if (spawnSync(npm, ['run', 'build'], { stdio: 'inherit', shell: process.platform === 'win32' }).status !== 0) process.exit(1);

const server = spawn(npx, ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1', '--strictPort'], {
  stdio: 'ignore',
  shell: process.platform === 'win32',
});
let code = 1;
try {
  await waitFor(`http://127.0.0.1:${PORT}/`);
  code = 0;
  for (const { deck, total, pdf } of DECKS) {
    const res = spawnSync(process.execPath, ['scripts/export-pdf.mjs'], {
      stdio: 'inherit',
      env: { ...process.env, CHROME_PATH: chrome, BASE_URL: `http://127.0.0.1:${PORT}`, OUTPUT_PDF_PATH: pdf, DECK: deck, TOTAL_SLIDES: String(total) },
    });
    if ((res.status ?? 1) !== 0) { code = res.status ?? 1; break; }
    copyFileSync(pdf, path.join('public', pdf));
    console.log(`Listo: ${pdf} (y copia en public/)`);
  }
} finally {
  server.kill();
}
process.exit(code);
