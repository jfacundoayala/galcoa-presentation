import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Factory, Scale } from 'lucide-react';

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

export const Slide4: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <div className="space-y-8">
        {/* Quote / Highlight Box */}
        <motion.div
          variants={itemVariants}
          className="relative bg-gradient-to-r from-[#F0ECE1] to-[#E9E3D3] rounded-3xl p-8 lg:p-12 border border-[#D5CDBC] shadow-md shadow-stone-900/5"
        >
          <Quote className="w-12 h-12 text-amber-600/30 absolute top-6 right-6 pointer-events-none" />
          <p className="text-2xl md:text-4xl font-semibold text-stone-900 leading-snug tracking-tight font-display">
            "Los operarios no registran mal por falta de voluntad, sino porque las herramientas son más difíciles que la tarea misma."
          </p>
        </motion.div>

        {/* 2 Detail Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Industrias afectadas */}
          <motion.div
            variants={itemVariants}
            className="bg-white/95 rounded-2xl p-6 lg:p-8 border border-stone-200/80 shadow-sm space-y-3"
          >
            <div className="flex items-center gap-2.5 text-[#174235] font-bold text-lg md:text-xl font-display">
              <Factory className="w-5 h-5 text-[#174235]" />
              <span>Industrias afectadas:</span>
            </div>
            <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
              Agroindustria, Farma, Cadena de Frío, Minería, Construcción, Vitivinicultura y Gestión de Subproductos o Residuos.
            </p>
          </motion.div>

          {/* Impacto común */}
          <motion.div
            variants={itemVariants}
            className="bg-white/95 rounded-2xl p-6 lg:p-8 border border-stone-200/80 shadow-sm space-y-3"
          >
            <div className="flex items-center gap-2.5 text-red-700 font-bold text-lg md:text-xl font-display">
              <Scale className="w-5 h-5 text-red-600" />
              <span>Impacto común:</span>
            </div>
            <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
              Multas, pérdida de certificaciones y litigios por falta de respaldo probatorio.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
