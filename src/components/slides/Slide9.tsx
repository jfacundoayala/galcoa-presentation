import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Building2, Layers, Repeat } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } },
};

export const Slide9: React.FC = () => {
  const equation = [
    {
      icon: <Building2 className="w-6 h-6" aria-hidden="true" />,
      label: 'Quién paga',
      title: 'Empresas reguladas y productores',
      text: 'Los que necesitan evidencia verificable para auditar, vender y exportar.',
      style: 'bg-surface text-text',
    },
    {
      icon: <Layers className="w-6 h-6" aria-hidden="true" />,
      label: 'Qué crece',
      title: 'Volumen de registros sellados',
      text: 'Más lotes, más registros, más sellos en Hedera, más evidencia almacenada.',
      style: 'bg-surface text-text',
    },
    {
      icon: <Repeat className="w-6 h-6" aria-hidden="true" />,
      label: 'Qué obtenemos',
      title: 'Ingreso recurrente',
      text: 'Suscripción mensual atada a volumen operativo: cuanto más usan, más crece la cuenta.',
      style: 'bg-brand-yellow text-brand-green',
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
        <div className="inline-flex px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
          Estrategia comercial & go-to-market
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          Modelo SaaS B2B escalable
        </h2>
      </motion.div>

      {/* Ecuación de ingresos */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] border border-line">
        {equation.map((cell, i) => (
          <React.Fragment key={cell.label}>
            {i > 0 && (
              <div className="flex items-center justify-center bg-ink px-3 py-1 md:py-0 font-mono text-2xl text-text-muted border-y md:border-y-0 md:border-x border-line">
                {i === 1 ? '×' : '='}
              </div>
            )}
            <motion.div variants={itemVariants} className={`${cell.style} p-5 lg:p-6 space-y-3`}>
              <div className="flex items-center justify-between">
                {cell.icon}
                <span className="font-mono text-[11px] uppercase tracking-[0.05em] opacity-80">{cell.label}</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold font-display leading-tight">{cell.title}</h3>
              <p className="text-sm leading-snug opacity-90">{cell.text}</p>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      {/* Planes */}
      <motion.div variants={itemVariants} className="mt-px border border-t-0 border-line bg-brand-green p-5 lg:p-6 space-y-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl lg:text-2xl font-semibold text-text font-display">Plan Pro y Enterprise</h3>
          <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-text/80">Suscripción mensual</span>
        </div>
        <p className="text-text text-base leading-snug max-w-4xl">
          Volumen masivo de sellado HCS, almacenamiento ampliado de evidencias, auditoría avanzada y soporte multi-rol.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { icon: <CheckCircle2 className="w-4 h-4" aria-hidden="true" />, t: 'Sellado HCS masivo' },
            { icon: <ShieldCheck className="w-4 h-4" aria-hidden="true" />, t: 'Auditoría avanzada' },
            { icon: <Zap className="w-4 h-4" aria-hidden="true" />, t: 'Soporte multi-rol' },
          ].map((f) => (
            <li key={f.t} className="flex items-center gap-2 text-text text-sm font-semibold">
              <span className="text-brand-yellow">{f.icon}</span>
              {f.t}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
