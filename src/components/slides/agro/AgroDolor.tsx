import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileSearch, ClipboardX, TrendingDown } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } },
};

export const AgroDolor: React.FC = () => {
  const today = [
    'Cuadernos de campo y planillas de papel',
    'Excels armados a fin de mes',
    'Fotos y audios sueltos en chats informales',
    'Datos cargados tarde, de memoria',
  ];
  const costs = [
    { icon: <FileSearch className="w-5 h-5" aria-hidden="true" />, tag: 'Evidencia dispersa', text: 'Cuando piden el registro, nadie lo encuentra.' },
    { icon: <ClipboardX className="w-5 h-5" aria-hidden="true" />, tag: 'Hallazgos en auditoría', text: 'Documentación incompleta o armada a último momento.' },
    { icon: <TrendingDown className="w-5 h-5" aria-hidden="true" />, tag: 'Pérdida de capital', text: 'Lotes demorados o rechazados y ventas en riesgo.' },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-6">
      <motion.div variants={item} className="mb-5 md:mb-6 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-danger/10 text-danger text-xs font-semibold uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
          Diagnóstico de fricción operativa
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">El dolor en el campo</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-line border border-line">
        <motion.div variants={item} className="lg:col-span-5 bg-surface p-5 lg:p-7 space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted">Así se registra hoy</div>
          <ul className="divide-y divide-line">
            {today.map((t) => (
              <li key={t} className="py-3 text-text text-lg font-display leading-snug">{t}</li>
            ))}
          </ul>
        </motion.div>

        <div className="lg:col-span-7 bg-surface-deep p-5 lg:p-7 space-y-4">
          <motion.div variants={item} className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted">
            Y cuando llega la auditoría
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {costs.map((c) => (
              <motion.div key={c.tag} variants={item} className="border-2 border-brand-yellow bg-brand-yellow/10 p-4 space-y-2 text-brand-yellow">
                {c.icon}
                <div className="font-display font-semibold uppercase leading-tight">{c.tag}</div>
                <div className="text-sm text-text leading-snug">{c.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.p variants={item} className="mt-4 bg-brand-green text-text px-5 py-4 text-base md:text-lg font-semibold font-display leading-snug">
        La causa raíz no es la gente: son herramientas más difíciles que la tarea misma.
      </motion.p>
    </motion.div>
  );
};
