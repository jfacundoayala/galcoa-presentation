import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.7, 0.3, 1] },
  },
};

export const Slide0: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Diffused side image (sin recuadro, difuminada a un costado) */}
      <div
        className="pointer-events-none absolute right-[-40px] md:right-2 lg:right-6 top-1/2 -translate-y-1/2 w-[320px] md:w-[440px] lg:w-[540px] h-[75%] max-h-[580px] opacity-20 lg:opacity-30 select-none z-0"
        style={{
          maskImage: 'radial-gradient(ellipse at 70% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)',
        }}
      >
        <img
          src="/img/hero-distribucion.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* Main Centered Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-4 md:space-y-5 my-auto"
      >
        {/* Top Centered Section: Badge, GALCOA+, Subtítulo y Recuadritos sin puntitos */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent/10 border border-line text-brand-accent text-xs md:text-sm font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
            <span>Ideathon Hedera · NEA Tech</span>
          </div>

          <h1 className="sr-only">GALCOA+</h1>
          <img
            src="/img/logo-galcoa-oscuro.svg"
            alt="GALCOA+"
            className="h-14 sm:h-18 md:h-22 lg:h-24 w-auto object-contain mx-auto"
          />

          <p className="text-base sm:text-lg md:text-xl font-medium text-text">
            Evidencia comercial verificable para distribuidoras.
          </p>

          {/* Recuadritos debajo de GALCOA+ (sin puntitos) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
            <span className="px-4 py-2 bg-brand-navy border border-text/25 text-text font-mono font-bold text-sm sm:text-base">
              + historial que se puede probar
            </span>
            <span className="px-3.5 py-1 bg-danger/10 border border-danger/40 text-danger font-mono font-bold text-xs sm:text-sm">
              - oportunidades perdidas
            </span>
          </div>
        </motion.div>

        {/* Pitch Principal (sin recuadro blanco, perfectamente visible y legible sin desbordar) */}
        <motion.div variants={itemVariants} className="pt-1 md:pt-2 max-w-4xl mx-auto space-y-3.5 text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium text-text leading-snug md:leading-relaxed tracking-tight">
            Tu historial de operaciones es tu mejor carta de presentación.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium text-text leading-snug md:leading-relaxed tracking-tight">
            <span className="text-brand-accent font-semibold">GALCOA+</span> lo convierte en evidencia verificable en Hedera, para demostrar tu capacidad y abrir nuevas oportunidades comerciales.
          </p>
        </motion.div>

        {/* Construido sobre Hedera */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 pt-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted">Construido sobre</span>
          <img src="/img/hedera-blanco.svg" alt="Hedera" className="h-8 sm:h-9 w-auto" />
          <span className="w-px h-8 bg-line mx-2" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted">3er puesto en</span>
          <img src="/img/neatech.png" alt="NEA Tech Corrientes 2026" className="h-9 sm:h-10 w-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
};
