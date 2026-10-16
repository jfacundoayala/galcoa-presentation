import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, FileSpreadsheet, Ban } from 'lucide-react';

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

export const Slide2: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Problem statement */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-700 text-xs font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
              <span>Diagnóstico de Fricción Operativa</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#174235] tracking-tight font-display">
              El dolor en las industrias reguladas
            </h2>
          </motion.div>

          <div className="space-y-6 pt-2">
            {/* Causa raíz */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 rounded-2xl p-6 lg:p-7 border-l-4 border-amber-500 shadow-sm border border-stone-200/80 space-y-2"
            >
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg md:text-xl font-display">
                <FileSpreadsheet className="w-5 h-5 text-amber-600" />
                <span>Causa raíz:</span>
              </div>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed">
                En campo, los operarios usan planillas de papel, Excels o chats informales porque los sistemas tradicionales son rígidos, lentos e inviables.
              </p>
            </motion.div>

            {/* Consecuencia */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 rounded-2xl p-6 lg:p-7 border-l-4 border-red-500 shadow-sm border border-stone-200/80 space-y-2"
            >
              <div className="flex items-center gap-2 text-red-700 font-bold text-lg md:text-xl font-display">
                <XCircle className="w-5 h-5 text-red-600" />
                <span>Consecuencia:</span>
              </div>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed">
                Cargas tardías, datos dispersos, sospecha de manipulación retroactiva y rechazo de lotes en auditorías.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Visual illustration card */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-stone-900 rounded-3xl p-8 text-white shadow-2xl border border-stone-700/60 relative overflow-hidden flex flex-col justify-between aspect-[4/4]">
            {/* Ambient glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
                  Falla de integridad
                </span>
                <Ban className="w-6 h-6 text-red-400" />
              </div>

              <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-300 font-mono text-xs space-y-2">
                <div className="flex justify-between text-red-400">
                  <span>[ERROR DE AUDITORÍA]</span>
                  <span>LOTE #8492</span>
                </div>
                <div>Planilla física: No coincide timestamp</div>
                <div>Modificación retroactiva detectada</div>
                <div className="text-amber-400">Riesgo: Rechazo de certificación</div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-stone-800 text-stone-400 text-xs">
              El costo de un lote rechazado en industrias de alto valor puede superar los miles de dólares.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
