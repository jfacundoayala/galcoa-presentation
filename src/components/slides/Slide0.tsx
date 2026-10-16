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
  hidden: { opacity: 0, y: 18 },
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
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Diffused side image (sin recuadro, difuminada a un costado) */}
      <div
        className="pointer-events-none absolute right-[-40px] md:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-[340px] md:w-[480px] lg:w-[580px] h-[80%] max-h-[640px] opacity-25 lg:opacity-40 select-none z-0"
        style={{
          maskImage: 'radial-gradient(ellipse at 70% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)',
        }}
      >
        <img
          src="/img/hero-galcoa.jpg"
          alt="Harness para Sanitización de Datos GALCOA+"
          className="w-full h-full object-cover object-center filter blur-[0.5px]"
        />
      </div>

      {/* Main Centered Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 py-6 flex flex-col items-center justify-center text-center space-y-6 md:space-y-7"
      >
        {/* Top Centered Section (Screen 2: Titulo, Subtitulo, Badge) */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#174235]/10 border border-[#174235]/20 text-[#174235] text-xs md:text-sm font-semibold tracking-wide shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#174235]" />
            <span>Ideathon Hedera · NEA Tech</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#174235] font-display">
            GALCOA+
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-700">
            Documentación y trazabilidad de datos.
          </p>
        </motion.div>

        {/* Centered Stepper (1 Captura ágil - 2 Agent AI - 3 Hedera HCS) */}
        <motion.div variants={itemVariants} className="w-full max-w-md py-1">
          <div className="relative flex items-center justify-between">
            {/* Connecting line */}
            <div className="absolute top-5 left-7 right-7 h-1 bg-amber-500/40 z-0" />

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

        {/* Pitch Headline (Screen 1): NO white card, centered, enlarged */}
        <motion.div variants={itemVariants} className="pt-2 md:pt-3 max-w-4xl mx-auto space-y-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-stone-900 leading-snug md:leading-snug tracking-tight text-center">
            En industrias reguladas (farma, biotecnología, alimentos y cosmética), la fricción del operario al cargar datos cuesta millones en multas y lotes rechazados. <span className="text-[#174235]">GALCOA+</span> automatiza la captura, sanitización y validación de dicha informacion .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 pt-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-700/10 border border-emerald-700/20 text-[#174235] font-mono font-bold text-xs sm:text-sm md:text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              + datos en tiempo y forma
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-700/10 border border-red-700/20 text-red-700 font-mono font-bold text-xs sm:text-sm md:text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              – perdidas millonarias
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
