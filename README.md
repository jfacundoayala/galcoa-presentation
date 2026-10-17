# GALCOA+ · Trazabilidad de Datos

Presentación interactiva y pitch deck para **Ideathon Hedera · NEA Tech 2026**.

## 🚀 Despliegue en Vivo
- **Web Interactiva:** [https://happy-bell.vercel.app](https://happy-bell.vercel.app)
- **Descarga directa del PDF:** [https://happy-bell.vercel.app/GALCOA_Presentacion_Hedera_Ideathon.pdf](https://happy-bell.vercel.app/GALCOA_Presentacion_Hedera_Ideathon.pdf)

---

## 💡 Sobre el Proyecto
**GALCOA+** es un harness de sanitización y validación de datos para industrias altamente reguladas (**Farma, Biotecnología, Alimentos y Cosmética**).

Automatiza la captura ágil de datos de campo (mediante chat conversacional en lenguaje natural o imágenes), estructurándolos y validándolos con normativas **GAMP 5** y principios **ALCOA+**, y anclando hashes criptográficos SHA-256 en **Hedera Consensus Service (HCS)** para lograr trazabilidad inmutable y auditable en tiempo real.

---

## 🎨 Sistema de diseño
La presentación sigue [`DESIGN.md`](DESIGN.md) (Structured Intelligence / Verified Evidence): fondo oscuro verdoso, retícula visible, esquinas rectas (`border-radius: 0`), verde `#174235` y amarillo `#FCD34D` como únicos colores de marca, Space Grotesk + IBM Plex Mono.

- Los tokens viven en `tailwind.config.js` (`brand`, `ink`, `surface`, `line`, `text`) y en las variables CSS de `src/index.css`.
- Logos en `public/img/`: `logo-galcoa.svg` (horizontal, se usa sobre placa crema porque el wordmark es verde) e `isotipo-galcoa.svg`.
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

# Generar PDF de la presentación (configurable por entorno)
# CHROME_PATH=/ruta/a/chrome BASE_URL=http://127.0.0.1:4173 OUTPUT_PDF_PATH=GALCOA_Presentacion_Hedera_Ideathon.pdf \
node scripts/export-pdf.mjs
```
