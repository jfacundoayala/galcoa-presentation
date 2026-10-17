import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

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
        className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 py-6 flex flex-col items-center justify-center text-center space-y-6 md:space-y-8"
      >
        {/* Top Centered Section: Badge, GALCOA+, Subtítulo y Recuadritos sin puntitos */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-3">
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

          {/* Recuadritos debajo de GALCOA+ (sin puntitos) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <span className="px-4 py-1.5 rounded-full bg-emerald-700/10 border border-emerald-700/20 text-[#174235] font-mono font-bold text-xs sm:text-sm md:text-base">
              + datos en tiempo y forma
            </span>
            <span className="px-4 py-1.5 rounded-full bg-red-700/10 border border-red-700/20 text-red-700 font-mono font-bold text-xs sm:text-sm md:text-base">
              - perdidas millonarias
            </span>
          </div>
        </motion.div>

        {/* Pitch Principal (unificado con el mismo formato y color text-stone-700 font-medium) */}
        <motion.div variants={itemVariants} className="pt-2 md:pt-4 max-w-4xl mx-auto space-y-5 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-stone-700 leading-relaxed md:leading-relaxed tracking-tight">
            - En industrias reguladas como Farma, Biotecnología o Alimentos, cumplir con GAMP5 y ALCOA+ (Trazabilidad de datos) es una exigencia. La friccion del operario al cargar datos puede costar millones en Multas, Auditorias o Lotes rechazados.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-stone-700 leading-relaxed md:leading-relaxed tracking-tight">
            - <span className="text-[#174235] font-semibold">Galcoa+</span> lo soluciona de forma simple: Automatiza la captura, sanitizacion y validacion de la informacion en tiempo y forma.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
