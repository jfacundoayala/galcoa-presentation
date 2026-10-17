import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } },
};

/** Geometría de verificación: arcos concéntricos con checkpoints, anclados a la esquina de la celda. */
const VerificationGeometry: React.FC = () => {
  const radii = [120, 200, 280, 360];
  const pt = (r: number) => ({ x: r * Math.SQRT1_2, y: 400 - r * Math.SQRT1_2 });
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMinYMax slice" className="w-full h-full" role="img" aria-label="Arcos concéntricos con puntos de verificación">
      <rect width="400" height="400" fill="#174235" />
      <path d="M0 400 L0 280 A120 120 0 0 1 120 400 Z" fill="#FCD34D" />
      {radii.map((r) => (
        <path key={r} d={`M0 ${400 - r} A${r} ${r} 0 0 1 ${r} 400`} fill="none" stroke="#F5F4EC" strokeOpacity={0.55} strokeWidth={1.5} />
      ))}
      <line x1="0" y1="400" x2="400" y2="0" stroke="#F5F4EC" strokeOpacity={0.25} strokeWidth={1} />
      {[200, 360].map((r) => {
        const p = pt(r);
        return <rect key={r} x={p.x - 6} y={p.y - 6} width={12} height={12} fill="#F5F4EC" />;
      })}
      {(() => {
        const p = pt(280);
        return (
          <g>
            <rect x={p.x - 18} y={p.y - 18} width={36} height={36} fill="#FCD34D" />
            <polyline points={`${p.x - 9},${p.y} ${p.x - 2},${p.y + 8} ${p.x + 10},${p.y - 8}`} fill="none" stroke="#174235" strokeWidth={4} strokeLinecap="square" />
          </g>
        );
      })()}
    </svg>
  );
};

export const AgroPortada: React.FC = () => (
  <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-line border border-line">
      <div className="lg:col-span-7 bg-ink p-6 lg:p-10 flex flex-col justify-between gap-6">
        <motion.div variants={item} className="space-y-5">
          <div className="inline-flex px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider font-mono">
            GALCOA+ · Cannabis medicinal e industrial
          </div>
          <h1 className="text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-text">
            De la semilla al producto. <span className="text-brand-yellow">Con evidencia que nadie puede reescribir.</span>
          </h1>
          <p className="max-w-xl text-text-muted text-lg leading-snug">
            Documentación y trazabilidad de toda la cadena del cannabis medicinal y el cáñamo industrial, con la huella de cada registro sellada en Hedera.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-brand-green border border-text/25 text-text font-mono font-bold text-sm sm:text-base">
            + lotes documentados en tiempo y forma
          </span>
          <span className="px-3.5 py-2 bg-danger/10 border border-danger/40 text-danger font-mono font-bold text-xs sm:text-sm">
            - pérdidas por documentación
          </span>
        </motion.div>
      </div>

      <motion.div variants={item} className="lg:col-span-5 bg-brand-green min-h-[220px] lg:min-h-[420px]">
        <VerificationGeometry />
      </motion.div>
    </div>
  </motion.div>
);
