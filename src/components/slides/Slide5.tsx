import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquareText, Layers, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.7, 0.3, 1] },
  },
};

export const Slide5: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-2 mb-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
          <span>Nuestra Propuesta de Valor</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-yellow tracking-tight font-display">
          Solucion
        </h2>
      </motion.div>

      {/* 3 Main Full-Width Cards with Connected Hand-Drawn Flow Arrows */}
      <div className="space-y-4 pt-1">
        {/* Recuadro 1: Causa raíz con flecha verde que sale hacia el segundo */}
        <div className="relative">
          <motion.div
            variants={itemVariants}
            className="bg-surface rounded-2xl p-5 md:p-6 border-l-4 border-brand-yellow border border-line space-y-2"
          >
            <div className="flex items-center gap-2 text-brand-yellow font-bold text-lg md:text-xl font-display">
              <MessageSquareText className="w-5 h-5 text-brand-yellow" />
              <span>Causa raíz:</span>
            </div>
            <p className="text-base md:text-lg text-text leading-relaxed font-medium">
              en campo el operario registra por chat con lenguaje natural o imagenes. eliminando pasos que solo afectan a la agilidad del proceso .
            </p>
          </motion.div>

          {/* Flecha curva izquierda verde: conectada desde Causa raíz hacia Se ve reflejado en */}
          <div className="absolute -left-6 sm:-left-9 lg:-left-12 -bottom-9 w-14 sm:w-16 md:w-20 h-24 sm:h-28 md:h-32 pointer-events-none z-30">
            <svg viewBox="0 0 80 120" fill="none" className="w-full h-full text-brand-yellow overflow-visible">
              <path
                d="M 68 6 C 24 16, 4 58, 22 94 C 28 104, 42 110, 58 113"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M 42 103 L 62 114 L 45 123"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Recuadro 2: Se ve reflejado en con flecha verde que sale hacia Consecuencia */}
        <div className="relative">
          <motion.div
            variants={itemVariants}
            className="bg-surface rounded-2xl p-5 md:p-6 border-l-4 border-brand-yellow border border-line space-y-2"
          >
            <div className="flex items-center gap-2 text-brand-yellow font-bold text-lg md:text-xl font-display">
              <Layers className="w-5 h-5 text-brand-yellow" />
              <span>Se ve reflejado en :</span>
            </div>
            <p className="text-base md:text-lg text-text leading-relaxed font-medium">
              Trazabilidad de los datos desde el dia 1 hasta el final del proceso productivo .
            </p>
          </motion.div>

          {/* Flecha curva derecha verde: conectada desde Se ve reflejado en hacia Consecuencia */}
          <div className="absolute -right-6 sm:-right-9 lg:-right-12 -bottom-9 w-14 sm:w-16 md:w-20 h-24 sm:h-28 md:h-32 pointer-events-none z-30">
            <svg viewBox="0 0 80 120" fill="none" className="w-full h-full text-brand-yellow overflow-visible">
              <path
                d="M 12 6 C 56 16, 76 58, 58 94 C 52 104, 38 110, 22 113"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M 38 103 L 18 114 L 35 123"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Recuadro 3: Consecuencia con 3 Sellos Verdes (Octagonal, Triangular, Rectangular) */}
        <div className="relative">
          <motion.div
            variants={itemVariants}
            className="bg-surface rounded-2xl p-5 md:p-6 border-l-4 border-brand-green border border-line space-y-3"
          >
            <div className="flex items-center gap-2 text-text font-bold text-lg md:text-xl font-display">
              <ShieldCheck className="w-5 h-5 text-text" />
              <span>Consecuencia:</span>
            </div>

            {/* 3 Sellos Verdes de Éxito / Disponible */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-1 items-center">
              {/* Sello 1: LIBRE DE MULTAS (Octagonal Verde) */}
              <div className="relative flex flex-col items-center justify-center p-3.5 min-h-[130px] text-center transform -rotate-1 hover:rotate-0 transition-transform">
                <svg className="absolute inset-0 w-full h-full text-text" viewBox="0 0 160 120" preserveAspectRatio="none">
                  <polygon
                    points="44,4 116,4 156,36 156,84 116,116 44,116 4,84 4,36"
                    fill="#174235"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                  />
                  <polygon
                    points="47,9 113,9 151,38 151,82 113,111 47,111 9,82 9,38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                </svg>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold tracking-widest uppercase text-text">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Conformidad</span>
                  </div>
                  <span className="text-lg md:text-xl font-semibold font-mono tracking-wider uppercase text-text leading-none my-1">
                    LIBRE DE MULTAS
                  </span>
                  <span className="text-[10px] font-mono text-text/90 leading-tight">
                    Cero penalizaciones
                  </span>
                </div>
              </div>

              {/* Sello 2: AUDITORÍAS APROBADAS (Triangular Verde) */}
              <div className="relative flex flex-col items-center justify-center p-3 min-h-[150px] text-center transform rotate-1 hover:rotate-0 transition-transform">
                <svg className="absolute inset-0 w-full h-full text-text" viewBox="0 0 170 130" preserveAspectRatio="none">
                  <polygon
                    points="85,6 164,122 6,122"
                    fill="#174235"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <polygon
                    points="85,16 154,114 16,114"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                </svg>
                <div className="relative z-10 flex flex-col items-center pt-10 pb-2">
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider uppercase text-text">
                    <Award className="w-3 h-3" />
                    <span>GAMP 5 & ALCOA+</span>
                  </div>
                  <span className="text-[11px] sm:text-xs md:text-sm font-semibold font-display tracking-tight uppercase text-text leading-tight my-0.5">
                    AUDITORÍAS APROBADAS
                  </span>
                  <span className="text-[10px] font-medium text-text/90 leading-tight">
                    Evidencia lista para auditar
                  </span>
                </div>
              </div>

              {/* Sello 3: LOTES APROBADOS (Rectangular Verde) */}
              <div className="relative border-2 border-text/60 p-3.5 bg-brand-green text-text flex flex-col items-center justify-center text-center transform -rotate-1 hover:rotate-0 transition-transform min-h-[130px]">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase text-text mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-text" />
                  <span>Liberación Inmediata</span>
                </div>
                <span className="text-xl md:text-2xl font-semibold tracking-tighter uppercase text-text font-sans">
                  LOTES APROBADOS
                </span>
                <span className="text-[11px] font-mono text-text/80 mt-1">
                  Trazabilidad 100% inmutable
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
