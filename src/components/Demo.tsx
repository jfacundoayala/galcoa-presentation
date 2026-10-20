import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Camera, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, Fingerprint, Pencil, ShieldCheck, XCircle, ArrowLeft,
} from 'lucide-react';

type Sample = {
  id: string;
  tab: string;
  message: string;
  attachment: string;
  record: { campo: string; valor: string }[];
  tamperField: number;
  tamperTo: string;
  missing: string;
};

const SAMPLES: Sample[] = [
  {
    id: 'entrega',
    tab: 'Entrega a un comercio',
    message: 'Entregué el pedido 2210 en el almacén de la esquina: 40 cajas de yogur, a las 09:42, con el camión a 4,8 °C. Adjunto foto del remito.',
    attachment: 'foto_remito.jpg',
    record: [
      { campo: 'Pedido', valor: 'PED-2210' },
      { campo: 'Cliente', valor: 'Almacén (ejemplo)' },
      { campo: 'Mercadería', valor: '40 cajas de yogur' },
      { campo: 'Temperatura', valor: '4,8 °C (rango 2–8 °C)' },
      { campo: 'Hora', valor: '09:42' },
      { campo: 'Responsable', valor: 'Ana P.' },
    ],
    tamperField: 2,
    tamperTo: '48 cajas de yogur',
    missing: 'número de remito',
  },
];

const CONFIRMERS = ['Ana P. · distribuidora', 'Almacén · confirma por QR'];
const STEPS = ['Captura', 'IA', 'Confirmación', 'Sello'];

const sha256 = async (text: string) => {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
};

export const Demo: React.FC = () => {
  const [sampleId, setSampleId] = useState(SAMPLES[0].id);
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState<boolean[]>([false, false]);
  const [sealed, setSealed] = useState<{ hash: string; at: string } | null>(null);
  const [tampered, setTampered] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  const sample = SAMPLES.find((s) => s.id === sampleId)!;
  const allConfirmed = confirmed.every(Boolean);

  const record = useMemo(
    () => sample.record.map((r, i) => (tampered && i === sample.tamperField ? { ...r, valor: sample.tamperTo } : r)),
    [sample, tampered],
  );
  const payload = (rows: typeof record, at: string) => JSON.stringify({ version: 1, registro: rows, confirmaciones: CONFIRMERS, fecha: at });

  const reset = (id = sampleId) => {
    setSampleId(id); setStep(1); setConfirmed([false, false]); setSealed(null); setTampered(false); setCurrentHash('');
  };

  const goNext = async () => {
    if (step === 3 && allConfirmed) {
      const at = new Date().toLocaleString('es-AR');
      const hash = await sha256(payload(sample.record, at));
      setSealed({ hash, at });
      setCurrentHash(hash);
      setStep(4);
    } else if (step < 3) {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    if (!sealed) return;
    sha256(payload(record, sealed.at)).then(setCurrentHash);
  }, [tampered]); // eslint-disable-line react-hooks/exhaustive-deps

  const matches = sealed ? currentHash === sealed.hash : true;
  const nextDisabled = step === 4 || (step === 3 && !allConfirmed);

  const checks = [
    { name: 'Atribuible', ok: true, note: 'Responsable identificado' },
    { name: 'Legible', ok: true, note: 'Registro estructurado' },
    { name: 'Contemporáneo', ok: true, note: 'Registrado en el momento' },
    { name: 'Original', ok: true, note: 'Foto adjunta como evidencia' },
    { name: 'Completo', ok: false, note: `Falta: ${sample.missing}` },
  ];

  return (
    <div className="fixed inset-0 overflow-y-auto bg-ink text-text" style={{ overscrollBehavior: 'contain' }}>
      <header className="sticky top-0 z-20 flex items-stretch border-b border-line bg-ink min-h-[56px]">
        <div className="flex items-center gap-3 pl-4 sm:pl-6 pr-4 border-r border-line">
          <img src="/img/logo-galcoa-oscuro.svg" alt="GALCOA+" className="h-7 sm:h-8 w-auto" />
        </div>
        <div className="flex-1 flex items-center px-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.05em] text-text-muted">
          Demo interactiva
        </div>
        <a href="/" aria-label="Volver a la presentación" className="min-h-[44px] px-4 flex items-center gap-2 border-l border-line font-mono text-xs uppercase tracking-[0.05em] text-text-muted hover:bg-surface hover:text-text">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" /> <span className="hidden sm:inline">Presentación</span>
        </a>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <div role="note" className="border border-brand-accent bg-brand-accent/10 px-4 py-3 text-sm text-text flex gap-3">
          <AlertTriangle className="w-5 h-5 shrink-0 text-brand-accent" aria-hidden="true" />
          <p>
            <strong className="text-brand-accent">Demostración con datos de ejemplo.</strong> Muestra el flujo de punta a punta y calcula una huella SHA-256 real en tu navegador, pero <strong>no publica nada en Hedera</strong>.
          </p>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-semibold text-brand-accent tracking-tight">Del mensaje a la evidencia sellada</h1>
          <div className="flex flex-wrap gap-px bg-line border border-line w-fit" role="tablist" aria-label="Ejemplo">
            {SAMPLES.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={s.id === sampleId}
                onClick={() => reset(s.id)}
                className={`min-h-[44px] px-4 font-mono text-xs uppercase tracking-[0.05em] font-semibold ${s.id === sampleId ? 'bg-brand-accent text-brand-navy' : 'bg-surface text-text-muted hover:text-text'}`}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </div>

        <ol className="grid grid-cols-4 gap-px bg-line border border-line" aria-label="Pasos">
          {STEPS.map((label, i) => {
            const n = i + 1;
            return (
              <li key={label} aria-current={n === step ? 'step' : undefined} className={`px-2 sm:px-4 py-3 ${n === step ? 'bg-brand-accent text-brand-navy' : n < step ? 'bg-brand-navy text-text' : 'bg-surface text-text-muted'}`}>
                <span className="font-mono text-xs font-semibold">0{n}</span>
                <span className="block font-display font-semibold text-[11px] sm:text-base leading-tight break-words">{label}</span>
              </li>
            );
          })}
        </ol>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line border border-line">
          {/* Chat */}
          <section className="bg-surface p-4 sm:p-5 space-y-3 min-h-[260px]" aria-label="Chat">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted">Chat</h2>
            <motion.div key={`m1-${sampleId}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="ml-auto max-w-[90%] bg-brand-navy p-3 space-y-2">
              <p className="text-sm leading-snug">{sample.message}</p>
              <span className="inline-flex items-center gap-1.5 border border-text/30 px-2 py-1 font-mono text-[11px]"><Camera className="w-3.5 h-3.5" aria-hidden="true" />{sample.attachment}</span>
            </motion.div>
            {step >= 2 && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-[90%] bg-surface-deep border border-line p-3 text-sm leading-snug">
                Registro ordenado. Lo revisé contra ALCOA+: <strong className="text-brand-accent">1 advertencia</strong> (no bloquea).
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-[90%] bg-surface-deep border border-line p-3 text-sm leading-snug">
                Versión 1 congelada. Falta la confirmación de {CONFIRMERS.join(' y ')}.
              </motion.div>
            )}
            {step >= 4 && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-[90%] bg-surface-deep border border-line p-3 text-sm leading-snug">
                Confirmado por todos. Huella calculada. En producción se sella en Hedera HCS.
              </motion.div>
            )}
          </section>

          {/* Registro */}
          <section className="bg-surface-deep p-4 sm:p-5 space-y-4 min-h-[260px]" aria-label="Registro">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted">Registro</h2>
            {step === 1 && <p className="text-text-muted text-sm">Esperando el análisis de la IA. Pulsa <strong className="text-text">Siguiente</strong>.</p>}

            {step >= 2 && (
              <table className="w-full text-sm">
                <caption className="sr-only">Registro estructurado</caption>
                <tbody>
                  {record.map((r, i) => (
                    <tr key={r.campo} className="border-b border-line">
                      <th scope="row" className="py-2 pr-3 text-left font-normal text-text-muted w-2/5">{r.campo}</th>
                      <td className={`py-2 font-mono ${tampered && i === sample.tamperField ? 'text-danger' : 'text-text'}`}>{r.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {step === 2 && (
              <ul className="space-y-1.5">
                {checks.map((c) => (
                  <li key={c.name} className="flex items-start gap-2 text-sm">
                    {c.ok ? <CheckCircle2 className="w-4 h-4 mt-0.5 text-text" aria-hidden="true" /> : <AlertTriangle className="w-4 h-4 mt-0.5 text-brand-accent" aria-hidden="true" />}
                    <span><strong>{c.name}</strong> <span className={c.ok ? 'text-text-muted' : 'text-brand-accent'}>· {c.ok ? 'sin observaciones' : 'advertencia'}. {c.note}</span></span>
                  </li>
                ))}
              </ul>
            )}

            {step === 3 && (
              <div className="space-y-2">
                <p className="text-text-muted text-sm">Cada responsable confirma la <strong className="text-text">misma versión</strong>:</p>
                {CONFIRMERS.map((who, i) => (
                  <div key={who} className="flex items-center justify-between gap-3 border border-line bg-surface p-3">
                    <span className="text-sm">{who}</span>
                    <button
                      onClick={() => setConfirmed((c) => c.map((v, j) => (j === i ? true : v)))}
                      disabled={confirmed[i]}
                      className={`min-h-[44px] px-4 font-mono text-xs uppercase tracking-[0.05em] font-semibold ${confirmed[i] ? 'bg-brand-navy text-text' : 'bg-brand-accent text-brand-navy hover:brightness-95'}`}
                    >
                      {confirmed[i] ? 'Confirmado ✓' : 'Confirmar'}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {step === 4 && sealed && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-display font-semibold"><Fingerprint className="w-5 h-5 text-brand-accent" aria-hidden="true" /> Huella SHA-256 · {sealed.at}</div>
                <p className="font-mono text-xs break-all leading-relaxed border border-line bg-ink p-3">{sealed.hash}</p>
                <p className="text-xs text-text-muted">Red: Hedera Testnet · <strong>no publicado en esta demo</strong>.</p>

                <div className="border-t border-line pt-3 space-y-2">
                  <p className="text-sm">Probá alterar un dato después del sello:</p>
                  <button onClick={() => setTampered((t) => !t)} className="min-h-[44px] px-4 inline-flex items-center gap-2 border border-brand-accent text-brand-accent font-mono text-xs uppercase tracking-[0.05em] font-semibold hover:bg-brand-accent/10">
                    <Pencil className="w-4 h-4" aria-hidden="true" /> {tampered ? 'Restaurar el dato original' : 'Alterar un dato'}
                  </button>
                  <div role="status" className={`flex items-start gap-2 p-3 border text-sm ${matches ? 'border-line bg-brand-navy' : 'border-danger bg-danger/10'}`}>
                    {matches ? <ShieldCheck className="w-5 h-5 shrink-0" aria-hidden="true" /> : <XCircle className="w-5 h-5 shrink-0 text-danger" aria-hidden="true" />}
                    <span>
                      {matches
                        ? 'La huella coincide: el registro es el mismo que se selló.'
                        : <><strong className="text-danger">La huella ya no coincide.</strong> Se detecta la alteración. Nadie puede reescribir el dato sin que se note.</>}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        <div className="flex flex-wrap gap-3 pb-8">
          <button
            onClick={goNext}
            disabled={nextDisabled}
            className="min-h-[44px] px-5 inline-flex items-center gap-2 bg-brand-accent text-brand-navy font-display font-semibold hover:brightness-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {step === 3 ? 'Sellar registro' : 'Siguiente'} <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <button onClick={() => reset()} className="min-h-[44px] px-5 inline-flex items-center gap-2 border border-line text-text hover:bg-surface font-display font-semibold">
            <RotateCcw className="w-4 h-4" aria-hidden="true" /> Reiniciar
          </button>
          {step === 3 && !allConfirmed && <span className="self-center text-xs text-text-muted">Faltan confirmaciones para sellar.</span>}
        </div>
      </main>
    </div>
  );
};
