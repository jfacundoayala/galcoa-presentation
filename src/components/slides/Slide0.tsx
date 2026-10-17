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
        className="pointer-events-none absolute right-[-40px] md:right-2 lg:right-6 top-1/2 -translate-y-1/2 w-[320px] md:w-[440px] lg:w-[540px] h-[75%] max-h-[580px] opacity-20 lg:opacity-35 select-none z-0"
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
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-4 md:space-y-5 my-auto"
      >
        {/* Top Centered Section: Badge, GALCOA+, Subtítulo y Recuadritos sin puntitos */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-yellow/10 border border-line text-brand-yellow text-xs md:text-sm font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Ideathon Hedera · NEA Tech</span>
          </div>

          <h1 className="sr-only">GALCOA+</h1>
          <img
            src="/img/logo-galcoa-oscuro.svg"
            alt="GALCOA+"
            className="h-14 sm:h-18 md:h-22 lg:h-24 w-auto object-contain mx-auto"
          />

          <p className="text-base sm:text-lg md:text-xl font-medium text-text">
            Documentación y trazabilidad de datos.
          </p>

          {/* Recuadritos debajo de GALCOA+ (sin puntitos) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
            <span className="px-3.5 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow text-brand-yellow font-mono font-bold text-xs sm:text-sm">
              + datos en tiempo y forma
            </span>
            <span className="px-3.5 py-1 rounded-full bg-red-700/10 border border-red-700/20 text-danger font-mono font-bold text-xs sm:text-sm">
              - perdidas millonarias
            </span>
          </div>
        </motion.div>

        {/* Pitch Principal (sin recuadro blanco, perfectamente visible y legible sin desbordar) */}
        <motion.div variants={itemVariants} className="pt-1 md:pt-2 max-w-4xl mx-auto space-y-3.5 text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium text-text leading-snug md:leading-relaxed tracking-tight">
            - En industrias reguladas como Farma, Biotecnología o Alimentos, cumplir con GAMP5 y ALCOA+ (Trazabilidad de datos) es una exigencia. La friccion del operario al cargar datos puede costar millones en Multas, Auditorias o Lotes rechazados.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium text-text leading-snug md:leading-relaxed tracking-tight">
            - <span className="text-brand-yellow font-semibold">Galcoa+</span> lo soluciona de forma simple: Automatiza la captura, sanitizacion y validacion de la informacion en tiempo y forma.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
