# Qué va en cada campo del formulario (NEA Tech Ideathon)

| Campo | Contenido |
|---|---|
| **Título** | `GALCOA+ · Evidencia que nadie puede reescribir` |
| **Descripción** | Ver el texto de abajo (admite Markdown). |
| **Repositorio** | El repo que contenga el MVP que funciona. Confirmar con el equipo cuál es; el repo `nanonoir/galcoa` hoy solo tiene plantilla, componentes y PRD. |
| **Demo** | `https://TU-URL.vercel.app/demo` (demo interactiva con datos de ejemplo). |
| **Pitch deck** (link) | `https://TU-URL.vercel.app` (Hedera) o `https://TU-URL.vercel.app/agro`, según la categoría. |
| **Video del pitch** (subir) | Grabación de 2:30 siguiendo `docs/VIDEO-PITCH.md`. |
| **Presentación PPT/PDF** (subir) | El PDF de la misma versión que el Pitch deck: `GALCOA_Presentacion_Hedera_Ideathon.pdf` o `GALCOA_Presentacion_Agro.pdf`. |
| **Otros links** (hasta 6) | Versión Agro · PDF Hedera · PDF Agro · Guion del pitch · Código de la presentación · Fuente ANMAT. |
| **Categoría** | La que mejor encaje (Hedera / trazabilidad / salud-agro). |
| **Tech stack** | Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Gemini, Groq, Hedera HCS, React PDF |

## Pitch deck vs. Presentación
Son el mismo contenido en dos formatos: el **Pitch deck** es el link para verlo en el navegador; la **Presentación** es el archivo (PDF) para descargar.

## Descripción (pegar tal cual y completar lo marcado)
```markdown
**GALCOA+** documenta y verifica la trazabilidad de datos con IA y sella la huella de cada registro en **Hedera (HCS)**.

**Problema.** En industrias reguladas (farma, alimentos, cannabis medicinal) la evidencia se lleva en papel, Excel y chats. Un dato mal cargado o una cadena de frío sin respaldo puede terminar en multas, auditorías desaprobadas o en descartar el lote.

**Solución.** El operario escribe o manda una foto; la IA ordena el registro y lo revisa contra los criterios ALCOA+; los responsables confirman la misma versión; se genera el PDF y la huella queda sellada en Hedera, con QR para ver toda la historia. Probá el flujo en la demo interactiva (`/demo`).

**Por qué Hedera.** En la red solo se publica la huella SHA-256 y un identificador opaco, nunca el documento. Sello de tiempo por consenso, costos fijos en USD y bajo consumo energético.

**Foco Agro.** El cannabis medicinal y de exportación es ya parte de la industria farma (farmacias, formulaciones magistrales, laboratorios, droguerías). Ya existe una empresa chaqueña certificada para exportar: la evidencia por lote es lo que abre ese mercado.

**Modelo.** Suscripción B2B (Pro y Enterprise) atada al volumen de registros sellados.

**Qué falta.** [Estado real: qué está construido hoy]. Captura por audio (Q2 2026), sensores IoT y cadena de frío (Fase 2) y migración a Mainnet (Fase 3).
```
