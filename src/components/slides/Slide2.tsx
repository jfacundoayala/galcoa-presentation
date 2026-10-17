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
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center px-6 lg:px-8 py-6"
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

      {/* 3 Main Full-Width Cards */}
      <div className="space-y-4 pt-1">
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

        {/* Recuadro 3: Consecuencia con 3 Sellos llamativos */}
        <motion.div
          variants={itemVariants}
          className="bg-white/95 rounded-2xl p-5 md:p-6 border-l-4 border-red-500 shadow-sm border border-stone-200/80 space-y-3"
        >
          <div className="flex items-center gap-2 text-red-700 font-bold text-lg md:text-xl font-display">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span>Consecuencia:</span>
          </div>

          {/* 3 Sellos llamativos de consecuencias */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-1">
            {/* Sello 1: MULTAS */}
            <div className="relative border-2 border-red-600 border-dashed rounded-xl p-3.5 bg-red-500/10 text-red-700 flex flex-col items-center justify-center text-center transform -rotate-1 hover:rotate-0 transition-transform shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase text-red-600 mb-0.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Sanción Regulatoria</span>
              </div>
              <span className="text-xl md:text-2xl font-black font-mono tracking-wider uppercase text-red-700">
                MULTAS
              </span>
              <span className="text-[11px] font-mono text-red-600/80 mt-1">
                Pérdidas millonarias directas
              </span>
            </div>

            {/* Sello 2: AUDITORÍAS DESAPROBADAS */}
            <div className="relative border-2 border-amber-600 rounded-xl p-3.5 bg-amber-500/10 text-amber-800 flex flex-col items-center justify-center text-center transform rotate-1 hover:rotate-0 transition-transform shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-amber-600 mb-0.5">
                <XCircle className="w-3.5 h-3.5" />
                <span>No Conformidad</span>
              </div>
              <span className="text-base sm:text-lg md:text-xl font-black font-display tracking-tight uppercase text-amber-800 leading-tight">
                AUDITORÍAS DESAPROBADAS
              </span>
              <span className="text-[11px] font-medium text-amber-700/80 mt-1">
                Bloqueo de licencias y permisos
              </span>
            </div>

            {/* Sello 3: LOTES RECHAZADOS */}
            <div className="relative border-2 border-rose-800 rounded-xl p-3.5 bg-rose-500/10 text-rose-900 flex flex-col items-center justify-center text-center transform -rotate-1 hover:rotate-0 transition-transform shadow-2xs">
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
