import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Handshake, Ship } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } },
};

export const AgroValor: React.FC = () => {
  const levers = [
    {
      num: '01',
      label: 'Vale más',
      icon: <TrendingUp className="w-5 h-5" aria-hidden="true" />,
      title: 'Diferenciación y poder de negociación.',
      text: 'Un producto con trazabilidad demostrable se distingue del que solo declara. Abre la puerta a mejores condiciones de venta.',
    },
    {
      num: '02',
      label: 'Se vende más',
      icon: <Handshake className="w-5 h-5" aria-hidden="true" />,
      title: 'Compradores que confían, ventas que cierran antes.',
      text: 'Compradores e industrias piden evidencia. Con la documentación lista para auditar, el productor llega con la respuesta en la mano.',
    },
    {
      num: '03',
      label: 'Se puede exportar',
      icon: <Ship className="w-5 h-5" aria-hidden="true" />,
      title: 'Una prueba que cualquier auditor entiende.',
      text: 'El mismo registro verificable, con su QR, acompaña al producto hacia mercados que exigen trazabilidad de origen.',
    },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-6">
      <motion.div variants={item} className="mb-5 md:mb-6 space-y-3">
        <div className="inline-flex px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
          Oportunidad de valor para el productor agropecuario y ganadero
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          Qué gana el productor
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-line border border-line">
        <motion.div variants={item} className="lg:col-span-5 bg-brand-green p-6 lg:p-8 flex flex-col justify-between gap-6 min-h-[240px]">
          <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-text/80">El dato como activo</div>
          <p className="text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-text font-display">
            Un producto con historia verificable <span className="text-brand-yellow">vale más.</span>
          </p>
          <p className="text-text/90 text-base leading-snug">
            Cada registro sellado en Hedera es una prueba de origen y calidad que acompaña al producto, sea cual sea.
          </p>
        </motion.div>

        <div className="lg:col-span-7 bg-surface flex flex-col divide-y divide-line">
          {levers.map((l) => (
            <motion.div key={l.num} variants={item} className="p-5 lg:p-6 flex-1 space-y-2">
              <div className="flex items-center justify-between text-text-muted">
                <span className="font-mono text-sm font-semibold text-brand-yellow">{l.num}</span>
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.05em]">
                  {l.label}
                  {l.icon}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-text font-display leading-tight">{l.title}</h3>
              <p className="text-text-muted text-sm leading-snug">{l.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
