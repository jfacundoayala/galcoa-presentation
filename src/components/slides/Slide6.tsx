import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Fingerprint, ShieldCheck, ArrowRight, ArrowDown, Lock, TrendingUp } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

const Connector: React.FC<{ label?: string }> = ({ label }) => (
  <div className="flex lg:flex-col items-center justify-center gap-2 py-1 lg:py-0 lg:px-1 text-text">
    {label && (
      <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-brand-yellow">{label}</span>
    )}
    <ArrowDown className="w-5 h-5 lg:hidden" aria-hidden="true" />
    <ArrowRight className="w-5 h-5 hidden lg:block" aria-hidden="true" />
  </div>
);

export const Slide6: React.FC = () => {
  const benefits = [
    {
      num: '01',
      label: 'Consenso',
      icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />,
      title: 'Hedera Consensus Service',
      text: 'Sello temporal de consenso inmutable y orden justo a prueba de adulteración.',
    },
    {
      num: '02',
      label: 'Privacidad',
      icon: <Lock className="w-5 h-5" aria-hidden="true" />,
      title: 'Privacidad absoluta',
      text: 'Solo se publica el hash SHA-256 del manifiesto. Tus datos comerciales y privados jamás se exponen.',
    },
    {
      num: '03',
      label: 'Escala',
      icon: <TrendingUp className="w-5 h-5" aria-hidden="true" />,
      title: 'Eficiencia y predictibilidad',
      text: 'Costos fijos en USD, altísima velocidad y bajo consumo energético. Listo para escala enterprise.',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-6"
    >
      <motion.div variants={itemVariants} className="mb-5 md:mb-6 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
          Tecnología DLT de nivel institucional
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          ¿Por qué Blockchain?
        </h2>
        <p className="text-text text-lg md:text-xl font-display leading-snug">
          Para que nadie pueda reescribir la historia de un dato.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-line border border-line">
        {/* Panel grande: qué viaja a Hedera */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 bg-brand-green p-5 lg:p-7 flex flex-col justify-between gap-5"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-text/80">
            Qué viaja a Hedera: solo la huella
          </div>

          <div className="flex flex-col lg:flex-row lg:items-stretch gap-1 lg:gap-2">
            <div className="flex-1 bg-surface-deep border border-text/30 p-4 space-y-2">
              <FileText className="w-6 h-6 text-text" aria-hidden="true" />
              <div className="font-display font-semibold text-text leading-tight">Tu documento</div>
              <div className="text-text-muted text-sm leading-snug">Privado. Se queda en tu sistema.</div>
            </div>

            <Connector label="SHA-256" />

            <div className="flex-1 bg-brand-yellow text-brand-green p-4 space-y-2">
              <Fingerprint className="w-6 h-6" aria-hidden="true" />
              <div className="font-display font-semibold leading-tight">Huella única</div>
              <div className="font-mono text-xs break-all leading-snug">9f86d081…0a08</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.05em] opacity-80">Ejemplo ilustrativo</div>
            </div>

            <Connector label="HCS" />

            <div className="flex-1 bg-paper text-brand-green p-4 space-y-2">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              <div className="font-display font-semibold leading-tight">Hedera HCS</div>
              <div className="text-sm leading-snug">Sello de tiempo y orden de consenso.</div>
            </div>
          </div>

          <p className="text-text text-base lg:text-lg font-display font-semibold leading-snug">
            Cada dato, sellado en Hedera. Nadie lo puede reescribir.
          </p>
        </motion.div>

        {/* Beneficios: filas, no tarjetas */}
        <div className="lg:col-span-5 bg-surface flex flex-col divide-y divide-line">
          {benefits.map((b) => (
            <motion.div key={b.num} variants={itemVariants} className="p-5 lg:p-6 flex-1 space-y-2">
              <div className="flex items-center justify-between text-text-muted">
                <span className="font-mono text-sm font-semibold text-brand-yellow">{b.num}</span>
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.05em]">
                  {b.label}
                  {b.icon}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-text font-display leading-tight">{b.title}</h3>
              <p className="text-text-muted text-sm leading-snug">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
