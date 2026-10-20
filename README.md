# GALCOA+ · Trazabilidad de Datos

Presentación interactiva y pitch deck para **Ideathon Hedera · NEA Tech 2026**.

## 🚀 Despliegue en Vivo
- **Web Interactiva:** [https://happy-bell.vercel.app](https://happy-bell.vercel.app)
- **Descarga directa del PDF:** [https://happy-bell.vercel.app/GALCOA_Presentacion_Hedera_Ideathon.pdf](https://happy-bell.vercel.app/GALCOA_Presentacion_Hedera_Ideathon.pdf)

---

## 💡 Sobre el Proyecto
**GALCOA+** convierte las operaciones cotidianas de una **distribuidora pyme** (alimentos, bebidas y consumo masivo, empezando por el NEA) en **evidencia comercial verificable**, para ayudarla a generar confianza, resolver disputas y acceder a nuevas marcas.

La distribuidora cuenta cada operación por chat; la IA arma y revisa el documento; el comercio confirma la entrega por QR; y la huella SHA-256 queda en **Hedera Consensus Service (HCS)**. El enfoque completo está en [`docs/ORIENTACION-DISTRIBUIDORES.md`](docs/ORIENTACION-DISTRIBUIDORES.md).

---

## 🔀 Versión del pitch
Hay una sola versión: **Hedera** (`/`), con 9 diapositivas definidas en `src/data/slides.ts`.

- `npm run pdf` genera `GALCOA_Presentacion_Hedera_Ideathon.pdf`.

---

## 🎤 Guiones de pitch
- [`docs/PITCH-HEDERA.md`](docs/PITCH-HEDERA.md): versión Hedera, con tiempos por diapositiva y preguntas del jurado.

---

## 🧪 Demo interactiva
`/demo` recorre el flujo (captura → IA → confirmación → sello) con datos de ejemplo. Calcula una huella SHA-256 real en el navegador y permite alterar un dato para ver cómo deja de coincidir. **No publica en Hedera.**

## 📦 Entrega al formulario
- [`docs/ENTREGA-FORMS.md`](docs/ENTREGA-FORMS.md): qué va en cada campo.
- [`docs/VIDEO-PITCH.md`](docs/VIDEO-PITCH.md): guion del video de 2:30.

---

## 🎨 Sistema de diseño
La presentación sigue [`DESIGN.md`](DESIGN.md) (Structured Intelligence / Verified Evidence): fondo azul noche, retícula visible, esquinas rectas (`border-radius: 0`), azul marino `#1E3A5F` y azul claro `#7DB4F5` como únicos colores de marca, Space Grotesk + IBM Plex Mono.

- Los tokens viven en `tailwind.config.js` (`brand`, `ink`, `surface`, `line`, `text`) y en las variables CSS de `src/index.css`.
- Logos en `public/img/`: `logo-galcoa-oscuro.svg` (cerebro azul, tilde y letras blancas, para fondos oscuros; es el que usa la app), `logo-galcoa.svg` (azul marino, para fondos claros) e `isotipo-galcoa.svg` (ícono de la pestaña).
- Responsive verificado en 375, 768, 1024 y 1440 px sin overflow horizontal; en pantallas bajas la diapositiva se desplaza verticalmente.

---

## 🛠️ Tecnologías Utilizadas
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **Framer Motion**
- **Lucide Icons**
- **Puppeteer** + **pdf-lib** (Pipeline de exportación de PDF 1080p Retina)
- **Vercel** (Hosting y CDN global)

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Generar PDF de la presentación (compila, captura y guarda el PDF)
npm run pdf

# Alternativa manual, configurable por entorno
# CHROME_PATH=/ruta/a/chrome BASE_URL=http://127.0.0.1:4173 OUTPUT_PDF_PATH=GALCOA_Presentacion_Hedera_Ideathon.pdf \
node scripts/export-pdf.mjs
```
