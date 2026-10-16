import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Award, Users, CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export const Slide0: React.FC = () => {
  const teamMembers = [
    'Gaston Persoglia.',
    'Nahuel Noir.',
    'Facundo Ayala.',
    'Federico Fontana.',
    'Thomas Skarp.',
  ];

  const steps = [
    { num: 1, title: 'Captura ágil', icon: <CheckCircle2 className="w-5 h-5 text-amber-600" /> },
    { num: 2, title: 'Agent AI', icon: <Cpu className="w-5 h-5 text-emerald-600" /> },
    { num: 3, title: 'Hedera HCS', icon: <Database className="w-5 h-5 text-teal-600" /> },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Core Info */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174235]/10 border border-[#174235]/20 text-[#174235] text-xs md:text-sm font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#174235]" />
              <span>Ideathon Hedera · NEA Tech</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#174235] font-display">
              GALCOA+
            </h1>

            <p className="text-xl md:text-2xl font-medium text-stone-700">
              Documentación y trazabilidad de datos.
            </p>
          </motion.div>

          {/* Stepper (1 Captura ágil - 2 Agent AI - 3 Hedera HCS) */}
          <motion.div variants={itemVariants} className="py-2">
            <div className="relative flex items-center justify-between max-w-lg">
              {/* Connecting line */}
              <div className="absolute top-5 left-6 right-6 h-1 bg-amber-500/40 z-0" />
              
              {steps.map((step) => (
                <div key={step.num} className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FDFCF7] border-2 border-amber-600 text-stone-900 font-bold flex items-center justify-center text-base md:text-lg shadow-sm">
                    {step.num}
                  </div>
                  <span className="mt-2 text-xs md:text-sm font-semibold text-stone-700 text-center">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Context */}
          <motion.div variants={itemVariants} className="border-t border-stone-300/70 pt-4">
            <p className="text-base md:text-lg font-medium text-stone-600">
              Proyecto final para la Ideathon Hedera - NEA Tech
            </p>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-2 text-stone-800 font-semibold text-base md:text-lg">
              <Users className="w-5 h-5 text-[#174235]" />
              <span>Equipo :</span>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700 text-base md:text-lg pl-1">
              {teamMembers.map((member, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0" />
                  <span className="font-medium">{member}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Visual Showcase */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-center space-y-4">
          {/* Description text box on top (enlarged text) */}
          <div className="w-full max-w-md px-6 py-4 rounded-2xl bg-white/95 border-2 border-stone-300 shadow-md flex items-center gap-3.5">
            <div className="w-3 h-3 rounded-full bg-amber-600 flex-shrink-0 animate-pulse" />
            <p className="text-sm md:text-base lg:text-[17px] text-stone-900 leading-snug font-semibold">
              <span className="text-[#174235] font-bold">Harness para sanitización de datos:</span> Transforma datos de lenguaje natural o fotos en registros inmutables de grado regulatorio mediante normativas GAMP 5 y ALCOA+, IA y Hedera HCS.
            </p>
          </div>

          {/* Hedera Ecosystem card below with photorealistic generated image */}
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-stone-300/80 group">
            <img
              src="/img/hero-galcoa.jpg"
              alt="Harness para Sanitización de Datos GALCOA+"
              className="w-full h-[280px] sm:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Cinematic overlay with card details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 p-5 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                  Hedera Ecosystem
                </span>
                <span className="text-[11px] font-mono text-emerald-300 font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  ● Live Prototype
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-white tracking-tight">
                  GAMP 5 + ALCOA+
                </h3>
                <p className="text-xs text-stone-200 leading-relaxed">
                  Consenso inmutable y auditoría descentralizada en tiempo real.
                </p>
                <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-stone-300">
                  <span>Status: Testnet Verified</span>
                  <span className="text-amber-300 font-bold">SHA-256 HCS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
