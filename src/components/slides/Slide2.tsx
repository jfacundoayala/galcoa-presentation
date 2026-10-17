import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileSpreadsheet, Layers, XCircle, Ban } from 'lucide-react';

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

export const Slide2: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-2 mb-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-700 text-xs font-semibold uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
          <span>Diagnóstico de Fricción Operativa</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#174235] tracking-tight font-display">
          El dolor en las industrias reguladas
        </h2>
      </motion.div>

      {/* 3 Main Full-Width Cards with Hand-Drawn Flow Arrows */}
      <div className="relative space-y-3.5 md:space-y-4 pt-1">
        {/* Flecha curva izquierda: Causa raíz -> Se ve reflejado en */}
        <div className="hidden sm:block absolute -left-7 lg:-left-11 top-[20%] w-8 lg:w-11 h-20 pointer-events-none z-20">
          <svg viewBox="0 0 50 85" fill="none" className="w-full h-full text-amber-600/90 overflow-visible">
            <path
              d="M 38 4 C 16 14, 4 38, 12 56 C 16 66, 24 73, 34 77"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 21 68 L 36 78 L 34 60"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Recuadro 1: Causa raíz */}
        <motion.div
          variants={itemVariants}
          className="bg-white/95 rounded-2xl p-5 md:p-6 border-l-4 border-amber-500 shadow-sm border border-stone-200/80 space-y-2"
        >
          <div className="flex items-center gap-2 text-amber-700 font-bold text-lg md:text-xl font-display">
            <FileSpreadsheet className="w-5 h-5 text-amber-600" />
            <span>Causa raíz:</span>
          </div>
          <p className="text-base md:text-lg text-stone-700 leading-relaxed font-medium">
            En campo, los operarios usan planillas de papel, Excels o chats informales porque los sistemas tradicionales son rígidos, lentos e inviables.
          </p>
        </motion.div>

        {/* Recuadro 2: Se ve reflejado en : */}
        <motion.div
          variants={itemVariants}
          className="bg-white/95 rounded-2xl p-5 md:p-6 border-l-4 border-orange-500 shadow-sm border border-stone-200/80 space-y-2"
        >
          <div className="flex items-center gap-2 text-orange-700 font-bold text-lg md:text-xl font-display">
            <Layers className="w-5 h-5 text-orange-600" />
            <span>Se ve reflejado en :</span>
          </div>
          <p className="text-base md:text-lg text-stone-700 leading-relaxed font-medium">
            Cargas tardias, datos dispersos, manipulacion, dificil acceso a la trazabilidad de los datos.
          </p>
        </motion.div>

        {/* Flecha curva derecha: Se ve reflejado en -> Consecuencia */}
        <div className="hidden sm:block absolute -right-7 lg:-right-11 top-[56%] w-8 lg:w-11 h-20 pointer-events-none z-20">
          <svg viewBox="0 0 50 85" fill="none" className="w-full h-full text-red-600/90 overflow-visible">
            <path
              d="M 12 4 C 34 14, 46 38, 38 56 C 34 66, 26 73, 16 77"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 29 68 L 14 78 L 16 60"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Recuadro 3: Consecuencia con 3 Sellos (1 Octagonal, 1 Triangular, 1 Rectangular) */}
        <motion.div
          variants={itemVariants}
          className="bg-white/95 rounded-2xl p-5 md:p-6 border-l-4 border-red-500 shadow-sm border border-stone-200/80 space-y-3"
        >
          <div className="flex items-center gap-2 text-red-700 font-bold text-lg md:text-xl font-display">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span>Consecuencia:</span>
          </div>

          {/* 3 Sellos llamativos: Octagonal, Triangular, Rectangular */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-1 items-center">
            {/* Sello 1: MULTAS (Octagonal) */}
            <div className="relative flex flex-col items-center justify-center p-4 min-h-[124px] text-center transform -rotate-1 hover:rotate-0 transition-transform">
              <svg className="absolute inset-0 w-full h-full text-red-600" viewBox="0 0 160 120" preserveAspectRatio="none">
                <polygon
                  points="42,4 118,4 156,36 156,84 118,116 42,116 4,84 4,36"
                  fill="rgba(239, 68, 68, 0.08)"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                />
                <polygon
                  points="45,9 115,9 151,38 151,82 115,111 45,111 9,82 9,38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </svg>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-1 text-[11px] font-mono font-bold tracking-widest uppercase text-red-600">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Sanción</span>
                </div>
                <span className="text-xl md:text-2xl font-black font-mono tracking-wider uppercase text-red-700 leading-none my-1">
                  MULTAS
                </span>
                <span className="text-[10px] font-mono text-red-600/90 leading-tight">
                  Pérdidas millonarias
                </span>
              </div>
            </div>

            {/* Sello 2: AUDITORÍAS DESAPROBADAS (Triangular) */}
            <div className="relative flex flex-col items-center justify-center p-4 min-h-[124px] text-center transform rotate-1 hover:rotate-0 transition-transform">
              <svg className="absolute inset-0 w-full h-full text-amber-600" viewBox="0 0 160 120" preserveAspectRatio="none">
                <polygon
                  points="80,4 156,114 4,114"
                  fill="rgba(217, 130, 43, 0.08)"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <polygon
                  points="80,14 146,108 14,108"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </svg>
              <div className="relative z-10 flex flex-col items-center pt-5">
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider uppercase text-amber-700">
                  <XCircle className="w-3 h-3" />
                  <span>No Conformidad</span>
                </div>
                <span className="text-sm sm:text-base md:text-lg font-black font-display tracking-tight uppercase text-amber-800 leading-tight my-0.5">
                  AUDITORÍAS DESAPROBADAS
                </span>
                <span className="text-[10px] font-medium text-amber-700/90 leading-tight">
                  Bloqueo de licencias
                </span>
              </div>
            </div>

            {/* Sello 3: LOTES RECHAZADOS (Rectangular) */}
            <div className="relative border-2 border-rose-800 rounded-xl p-3.5 bg-rose-500/10 text-rose-900 flex flex-col items-center justify-center text-center transform -rotate-1 hover:rotate-0 transition-transform shadow-2xs min-h-[124px]">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase text-rose-700 mb-0.5">
                <Ban className="w-3.5 h-3.5" />
                <span>Cuarentena Total</span>
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-rose-900 font-sans">
                LOTES RECHAZADOS
              </span>
              <span className="text-[11px] font-mono text-rose-700/80 mt-1">
                Destrucción física del producto
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
