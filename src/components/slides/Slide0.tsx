import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Database, CheckCircle2 } from 'lucide-react';

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
        </div>

        {/* Right Column: Visual Showcase */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-center space-y-4">
          {/* Box on top */}
          <div className="w-full max-w-md px-6 py-4 rounded-2xl bg-white/95 border-2 border-stone-300 shadow-md flex flex-col gap-2.5">
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse flex-shrink-0 mt-1" />
              <p className="text-xs sm:text-[13px] md:text-sm text-stone-900 leading-relaxed font-medium">
                En industrias reguladas (farma, biotecnología, alimentos y cosmética), la fricción del operario al cargar datos cuesta millones en multas y lotes rechazados. GALCOA+ automatiza la captura, sanitización y validación de dicha informacion .
              </p>
            </div>
            <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between text-xs font-bold">
              <span className="text-[#174235] font-mono">+ datos en tiempo y forma</span>
              <span className="text-red-700 font-mono">– perdidas millonarias</span>
            </div>
          </div>

          {/* Clean hero image card */}
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-stone-300/80 group">
            <img
              src="/img/hero-galcoa.jpg"
              alt="Harness para Sanitización de Datos GALCOA+"
              className="w-full h-[280px] sm:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Elegant clean bottom title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent p-5 flex flex-col justify-end text-white">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-white tracking-tight">
                  GAMP 5 + ALCOA+
                </h3>
                <p className="text-xs text-stone-200 leading-relaxed">
                  Consenso inmutable y auditoría descentralizada en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
