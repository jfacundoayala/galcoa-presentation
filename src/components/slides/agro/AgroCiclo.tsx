import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } },
};

export const AgroCiclo: React.FC = () => {
  const stages = [
    { n: '01', name: 'Siembra', text: 'Lote, fecha y responsable.' },
    { n: '02', name: 'Aplicaciones', text: 'Producto, dosis y condiciones.' },
    { n: '03', name: 'Cosecha', text: 'Cantidad, fecha y lote de origen.' },
    { n: '04', name: 'Acopio y traslado', text: 'Quién lo movió, cuándo y hacia dónde.' },
    { n: '05', name: 'Entrega', text: 'Documentación lista para auditar.' },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-6">
      <motion.div variants={item} className="mb-5 md:mb-6 space-y-3">
        <div className="inline-flex px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
          Trazabilidad del lote
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          Cada etapa deja evidencia
        </h2>
        <p className="text-text text-lg md:text-xl font-display leading-snug">De la siembra a la entrega, sin un solo registro suelto.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line">
        {stages.map((s, i) => (
          <motion.div key={s.n} variants={item} className="relative bg-surface p-5 flex flex-col gap-3 min-h-[170px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-semibold text-brand-yellow">{s.n}</span>
              {i < stages.length - 1 && <ArrowRight className="w-4 h-4 text-text-muted hidden lg:block" aria-hidden="true" />}
            </div>
            <h3 className="text-xl font-semibold text-text font-display leading-tight">{s.name}</h3>
            <p className="text-text-muted text-sm leading-snug">{s.text}</p>
            <span className="mt-auto self-start inline-flex items-center gap-1.5 px-2 py-1 bg-brand-green text-text font-mono text-[11px] uppercase tracking-[0.05em]">
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
              Sellado en Hedera
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p variants={item} className="mt-4 bg-brand-green text-text px-5 py-4 text-base md:text-lg font-semibold font-display leading-snug">
        Un QR por lote: toda su historia, a un escaneo de distancia.
      </motion.p>
    </motion.div>
  );
};
