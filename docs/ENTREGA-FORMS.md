# Qué va en cada campo del formulario (NEA Tech Ideathon)

| Campo | Contenido |
|---|---|
| **Título** | `GALCOA+ · Evidencia que nadie puede reescribir` |
| **Descripción** | Ver el texto de abajo (admite Markdown). |
| **Repositorio** | El repo que contenga el MVP que funciona. Confirmar con el equipo cuál es; el repo `nanonoir/galcoa` hoy solo tiene plantilla, componentes y PRD. |
| **Demo** | `https://TU-URL.vercel.app/demo` (demo interactiva con datos de ejemplo). |
| **Pitch deck** (link) | `https://TU-URL.vercel.app`. |
| **Video del pitch** (subir) | Grabación de 2:30 siguiendo `docs/VIDEO-PITCH.md`. |
| **Presentación PPT/PDF** (subir) | `GALCOA_Presentacion_Hedera_Ideathon.pdf`. |
| **Otros links** (hasta 6) | PDF de la presentación · Guion del pitch · Código de la presentación. |
| **Categoría** | La que mejor encaje (Hedera / trazabilidad). |
| **Tech stack** | Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Gemini, Groq, Hedera HCS, React PDF |

## Pitch deck vs. Presentación
Son el mismo contenido en dos formatos: el **Pitch deck** es el link para verlo en el navegador; la **Presentación** es el archivo (PDF) para descargar.

## Descripción (pegar tal cual y completar lo marcado)
```markdown
**GALCOA+** convierte las operaciones cotidianas de una distribuidora en evidencia comercial verificable en **Hedera (HCS)**: «Tu historial de operaciones es tu mejor carta de presentación».

**Problema.** Las distribuidoras pymes de alimentos, bebidas y consumo masivo pueden trabajar bien durante años y no poder demostrarlo ante una marca nueva: documentos en papel, planillas y WhatsApp, reclamos difíciles de reconstruir y datos que nadie más confirma.

**Solución.** La distribuidora cuenta la operación por chat; una IA arma el documento y otra busca faltantes y contradicciones; la persona aprueba y se genera el PDF; el comercio confirma la entrega por enlace o QR; la huella SHA-256 queda en Hedera. Con eso se arma un historial con indicadores para compartir con marcas. Probá el flujo en la demo (`/demo`).

**Por qué Hedera.** Solo se publica la huella y un identificador opaco, nunca el documento. Hedera prueba cuándo se registró y que no cambió; la confirmación del comercio respalda la entrega. Lo declarado y lo confirmado van siempre separados. Etapa posterior: acuerdos programables con Smart Contract Service.

**Modelo.** Suscripción mensual para pymes, con precios de prueba a validar (USD 30, 60 y 120 por mes).

**Qué falta.** [Estado real: qué está construido hoy]. Entrevistas con 3 distribuidoras y 2 marcas y un piloto (validación); panel de indicadores y perfil para marcas (Fase 2); acuerdos programables (Fase 3).
```
