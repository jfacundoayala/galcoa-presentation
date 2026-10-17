# GALCOA+ · Trazabilidad de Datos

Presentación interactiva y pitch deck para **Ideathon Hedera · NEA Tech 2026**.

## 🚀 Despliegue en Vivo
- **Web Interactiva:** [https://happy-bell.vercel.app](https://happy-bell.vercel.app)
- **Descarga directa del PDF:** [https://happy-bell.vercel.app/GALCOA_Presentacion_Hedera_Ideathon.pdf](https://happy-bell.vercel.app/GALCOA_Presentacion_Hedera_Ideathon.pdf)

---

## 💡 Sobre el Proyecto
**GALCOA+** es un harness de sanitización y validación de datos para industrias altamente reguladas (**Farma, Biotecnología, Alimentos y Cosmética**).

Automatiza la captura ágil de datos de campo (mediante chat conversacional en lenguaje natural o imágenes), estructurándolos y validándolos según la guía de buenas prácticas **GAMP 5** y los principios de integridad de datos **ALCOA+**, y anclando hashes criptográficos SHA-256 en **Hedera Consensus Service (HCS)** para lograr trazabilidad inmutable y auditable en tiempo real.

---

## 🔀 Versiones del pitch
La misma web sirve dos presentaciones, con relato distinto. Se elige con la ruta (`/agro`, `/hedera`; también funciona `/?deck=agro`) y con el selector `HEDERA | AGRO` del header:

| Versión | URL | Foco | Diapositivas |
|---|---|---|---|
| **Hedera** (por defecto) | `/` o `/hedera` | Industrias reguladas (farma primero) y Hedera como tecnología. | 11 |
| **Agro** | `/agro` | Cannabis medicinal e industrial (cáñamo) hacia la industria farma: de la semilla al producto, con Hedera como sello de confianza y el valor para el productor. | 11 |

- Las definiciones están en `src/data/slides.ts` (`DECKS`). Las diapositivas propias de Agro están en `src/components/slides/agro/`.
- `npm run pdf` genera un PDF por versión: `GALCOA_Presentacion_Hedera_Ideathon.pdf` y `GALCOA_Presentacion_Agro.pdf`.

---

## 🎤 Guiones de pitch
- [`docs/PITCH-HEDERA.md`](docs/PITCH-HEDERA.md): versión Hedera, con tiempos por diapositiva y preguntas del jurado.
- [`docs/PITCH-AGRO.md`](docs/PITCH-AGRO.md): versión Agro (cannabis medicinal e industrial), con lo que falta confirmar.

---

## 🧪 Demo interactiva
`/demo` recorre el flujo (captura → IA → confirmación → sello) con datos de ejemplo (farma y cannabis). Calcula una huella SHA-256 real en el navegador y permite alterar un dato para ver cómo deja de coincidir. **No publica en Hedera.**

## 📦 Entrega al formulario
- [`docs/ENTREGA-FORMS.md`](docs/ENTREGA-FORMS.md): qué va en cada campo.
- [`docs/VIDEO-PITCH.md`](docs/VIDEO-PITCH.md): guion del video de 2:30.

---

## 🎨 Sistema de diseño
La presentación sigue [`DESIGN.md`](DESIGN.md) (Structured Intelligence / Verified Evidence): fondo oscuro verdoso, retícula visible, esquinas rectas (`border-radius: 0`), verde `#174235` y amarillo `#FCD34D` como únicos colores de marca, Space Grotesk + IBM Plex Mono.

- Los tokens viven en `tailwind.config.js` (`brand`, `ink`, `surface`, `line`, `text`) y en las variables CSS de `src/index.css`.
- Logos en `public/img/`: `logo-galcoa-oscuro.svg` (horizontal, letras en crema, para fondos oscuros; es el que usa la app), `logo-galcoa.svg` (colores originales, para fondos claros) e `isotipo-galcoa.svg`.
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
