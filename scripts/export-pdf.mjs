import puppeteer from 'puppeteer-core';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

// Configurables por entorno: CHROME_PATH, BASE_URL, OUTPUT_PDF_PATH
const CHROME_PATH = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TOTAL_SLIDES = 11;
const BASE_URL = process.env.BASE_URL || 'https://happy-bell.vercel.app';
const OUTPUT_PDF_PATH = path.resolve(process.env.OUTPUT_PDF_PATH || 'c:/Users/tomas/Documents/antigravity/happy-bell/GALCOA_Presentacion_Hedera_Ideathon.pdf');

async function generatePDF() {
  console.log('Iniciando navegador Chrome headless...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--force-device-scale-factor=2',
      '--window-size=1920,1080'
    ],
    defaultViewport: {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    }
  });

  const page = await browser.newPage();
  const pdfDoc = await PDFDocument.create();

  console.log(`Renderizando ${TOTAL_SLIDES} filminas en alta resolución (1080p Retina)...`);

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    const slideUrl = `${BASE_URL}/#${i}`;
    console.log(`Capturando filmina ${i + 1}/${TOTAL_SLIDES}: ${slideUrl}`);
    
    await page.goto(slideUrl, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Ocultar botones de navegación interactivos (<, >, ?, fullscreen) para que el PDF se vea limpio
    await page.addStyleTag({
      content: `
        button[aria-label="Ver atajos de teclado"],
        button[aria-label="Pantalla completa"],
        button[aria-label="Diapositiva anterior"],
        button[aria-label="Siguiente diapositiva"] {
          display: none !important;
        }
      `
    });

    // Esperar a que las animaciones de Framer Motion se asienten por completo
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const screenshotBuffer = await page.screenshot({
      type: 'png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    const pngImage = await pdfDoc.embedPng(screenshotBuffer);
    const pdfPage = pdfDoc.addPage([1920, 1080]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
    });
  }

  await browser.close();

  console.log('Generando archivo PDF...');
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_PDF_PATH, pdfBytes);

  console.log(`¡PDF generado con éxito en: ${OUTPUT_PDF_PATH}! Tamaño: ${(pdfBytes.length / (1024 * 1024)).toFixed(2)} MB`);
}

generatePDF().catch((err) => {
  console.error('Error generando PDF:', err);
  process.exit(1);
});
