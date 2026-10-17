import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, Camera, Mic, ScanSearch, UsersRound, ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
  },
};

type Variant = 'hedera' | 'agro';

const COPY = {
  agro: {
    quote: 'Los equipos no registran mal por falta de voluntad, sino porque las herramientas son más difíciles que la tarea misma.',
    steps: [
      { title: 'El técnico escribe, manda una foto o un audio.', text: 'Desde el cultivo o el laboratorio, con el celular y en segundos. Sin planillas.' },
      { title: 'La IA ordena y revisa el registro.', text: 'Lo estructura (lote, etapa, parámetros, fecha) y detecta lo que falta o no cierra.' },
      { title: 'Los responsables confirman.', text: 'Técnico y responsable de calidad validan la misma versión del registro.' },
      { title: 'Cada dato, sellado en Hedera.', text: 'PDF listo y huella en Hedera HCS. Nadie lo puede reescribir. Un QR muestra la historia del lote.' },
    ],
  },
} as const;

const ComoFunciona: React.FC<{ variant: Variant }> = ({ variant }) => {
  const steps = [
    {
      num: '01',
      label: 'Captura',
      title: 'El operario escribe, manda una foto o un audio.',
      text: 'Sin planillas ni formularios: lenguaje natural, desde el lote, en segundos.',
      icons: [MessageSquareText, Camera, Mic],
      soon: 'Audio · Próximamente Q2 2026',
    },
    {
      num: '02',
      label: 'IA',
      title: 'La IA ordena y revisa el dato.',
      text: 'Lo estructura y lo contrasta con ALCOA+ al instante. Cada registro nace con ALCOA+ incluido.',
      icons: [ScanSearch],
    },
    {
      num: '03',
      label: 'Confirmación',
      title: 'Los responsables confirman.',
      text: 'Todos validan la misma versión del registro antes de que se genere nada.',
      icons: [UsersRound],
    },
    {
      num: '04',
      label: 'Sello',
      title: 'Cada dato, sellado en Hedera.',
      text: 'PDF listo y huella en Hedera HCS. Nadie lo puede reescribir. Un QR muestra todo el historial.',
      icons: [ShieldCheck],
    },
  ];

  const agro = variant === 'agro' ? COPY.agro : null;
  const shown = agro ? steps.map((st, i) => ({ ...st, ...agro.steps[i] })) : steps;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-6"
    >
      <motion.div variants={itemVariants} className="mb-5 md:mb-6 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
          Producto
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-brand-yellow tracking-tight font-display">
          Cómo funciona
        </h2>
        <p className="max-w-3xl text-text-muted text-base md:text-lg leading-snug">
          “{agro ? agro.quote : 'Los operarios no registran mal por falta de voluntad, sino porque las herramientas son más difíciles que la tarea misma.'}”
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
        {shown.map((step) => (
          <motion.div
            key={step.num}
            variants={itemVariants}
            className="bg-surface p-5 lg:p-6 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-semibold text-brand-yellow">{step.num}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted">
                {step.label}
              </span>
            </div>

            <div className="flex items-center gap-2 text-text">
              {step.icons.map((Icon, i) => (
                <Icon key={i} className="w-6 h-6" aria-hidden="true" />
              ))}
            </div>

            <h3 className="text-lg lg:text-xl font-semibold text-text font-display leading-tight">
              {step.title}
            </h3>
            <p className="text-text-muted text-sm leading-snug">{step.text}</p>

            {step.soon && (
              <span className="self-start mt-auto px-2 py-1 border border-brand-yellow text-brand-yellow font-mono text-[11px] uppercase tracking-[0.05em]">
                {step.soon}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={itemVariants}
        className="mt-4 bg-brand-green text-text px-5 py-4 text-base md:text-lg font-semibold font-display leading-snug"
      >
        Cero planillas. Cero fricción. Elimina la causa de las multas: el dato mal cargado.
      </motion.p>
    </motion.div>
  );
};

export const Slide4: React.FC = () => <ComoFunciona variant="hedera" />;
export const Slide4Agro: React.FC = () => <ComoFunciona variant="agro" />;
