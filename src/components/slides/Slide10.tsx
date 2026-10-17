import React from 'react';
import { motion } from 'framer-motion';
import { Users, Flag, Rocket, CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.7, 0.3, 1] },
  },
};

export const Slide10: React.FC = () => {
  const teamMembers = [
    'Gaston Persoglia.',
    'Nahuel Noir.',
    'Facundo Ayala.',
    'Federico Fontana.',
    'Thomas Skarp.',
  ];

  const phases = [
    {
      num: 1,
      badge: 'Fase 1',
      title: 'Fase 1 — Hackathon MVP:',
      desc: 'Flujo completo funcional en Testnet.',
      active: true,
      color: 'border-brand-yellow bg-brand-green text-white',
    },
    {
      num: 2,
      badge: 'Fase 2',
      title: 'Fase 2:',
      desc: 'Captura multimodal por voz o audio en campo e integración con sensores IoT y balanzas.',
      active: false,
      color: 'border-line bg-surface text-text',
    },
    {
      num: 3,
      badge: 'Fase 3',
      title: 'Fase 3:',
      desc: 'Migración a Hedera Mainnet, validación formal GAMP 5 y cobros automatizados.',
      active: false,
      color: 'border-line bg-surface text-text',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <motion.div variants={itemVariants} className="mb-4 md:mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider mb-2">
          Próximos Pasos & Capacidad de Ejecución
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold text-brand-yellow tracking-tight font-display">
          Roadmap y equipo
        </h2>
      </motion.div>

      {/* Top Banner: Contexto & Integrantes del Equipo */}
      <motion.div variants={itemVariants} className="space-y-3 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-text-muted font-mono">
          <span>Proyecto final para la Ideathon Hedera - NEA Tech</span>
          <span className="text-brand-yellow font-bold">5 Desarrolladores & Especialistas</span>
        </div>

        <div className="bg-surface rounded-2xl p-5 border border-line flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-yellow/10 text-brand-yellow flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-sm font-mono uppercase tracking-wider text-brand-yellow font-bold">
              Equipo :
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {teamMembers.map((member, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-deep border border-line text-text text-xs sm:text-sm font-semibold"
              >
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                {member}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div variants={itemVariants} className="space-y-6">
        {/* Step Numbers Line */}
        <div className="relative flex items-center justify-between max-w-2xl mx-auto px-6 py-2">
          <div className="absolute top-1/2 left-10 right-10 -translate-y-1/2 h-px bg-line z-0" />
          
          {phases.map((p) => (
            <div key={p.num} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-11 h-11 rounded-full border-2 font-bold flex items-center justify-center text-lg  ${p.color}`}
              >
                {p.num}
              </div>
              <span className="mt-2 text-xs md:text-sm font-bold text-text">
                {p.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Phase Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {phases.map((p, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-surface rounded-3xl p-6 lg:p-7 border border-line flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-surface-deep text-text-muted">
                    {p.badge}
                  </span>
                  {idx === 0 ? (
                    <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  ) : idx === 1 ? (
                    <Flag className="w-5 h-5 text-brand-yellow" />
                  ) : (
                    <Rocket className="w-5 h-5 text-brand-yellow" />
                  )}
                </div>

                <p className="text-text text-base lg:text-lg leading-relaxed font-medium">
                  {p.title} {p.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-line text-xs font-mono text-text-muted">
                {idx === 0 ? 'Entregable Hackathon' : idx === 1 ? 'Q2 2026' : 'Q3-Q4 2026'}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
