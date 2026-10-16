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
      color: 'border-amber-600 bg-amber-600 text-white',
    },
    {
      num: 2,
      badge: 'Fase 2',
      title: 'Fase 2:',
      desc: 'Captura multimodal por voz o audio en campo e integración con sensores IoT y balanzas.',
      active: false,
      color: 'border-stone-400 bg-white text-stone-800',
    },
    {
      num: 3,
      badge: 'Fase 3',
      title: 'Fase 3:',
      desc: 'Migración a Hedera Mainnet, validación formal GAMP 5 y cobros automatizados.',
      active: false,
      color: 'border-stone-400 bg-white text-stone-800',
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174235]/10 text-[#174235] text-xs font-semibold uppercase tracking-wider mb-2">
          Próximos Pasos & Capacidad de Ejecución
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#174235] tracking-tight font-display">
          Roadmap y equipo
        </h2>
      </motion.div>

      {/* Top Banner: Contexto & Integrantes del Equipo */}
      <motion.div variants={itemVariants} className="space-y-3 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-stone-500 font-mono">
          <span>Proyecto final para la Ideathon Hedera - NEA Tech</span>
          <span className="text-[#174235] font-bold">5 Desarrolladores & Especialistas</span>
        </div>

        <div className="bg-white/95 rounded-2xl p-5 border border-stone-200/90 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#174235]/10 text-[#174235] flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold block">
                Equipo :
              </span>
              <p className="text-stone-700 text-xs sm:text-sm font-medium">
                Especialistas en Frontend, Backend, IA/Prompting, Web3/Hedera y Producto.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {teamMembers.map((member, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F6F3EB] border border-[#E0D9C8] text-stone-800 text-xs sm:text-sm font-semibold shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0" />
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
          <div className="absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 bg-amber-500/40 z-0" />
          
          {phases.map((p) => (
            <div key={p.num} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-11 h-11 rounded-full border-2 font-bold flex items-center justify-center text-lg shadow-sm ${p.color}`}
              >
                {p.num}
              </div>
              <span className="mt-2 text-xs md:text-sm font-bold text-stone-700">
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
              className="bg-white/95 rounded-3xl p-6 lg:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-stone-100 text-stone-600">
                    {p.badge}
                  </span>
                  {idx === 0 ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  ) : idx === 1 ? (
                    <Flag className="w-5 h-5 text-amber-600" />
                  ) : (
                    <Rocket className="w-5 h-5 text-[#174235]" />
                  )}
                </div>

                <p className="text-stone-800 text-base lg:text-lg leading-relaxed font-medium">
                  {p.title} {p.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs font-mono text-stone-400">
                {idx === 0 ? 'Entregable Hackathon' : idx === 1 ? 'Q2 2026' : 'Q3-Q4 2026'}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
