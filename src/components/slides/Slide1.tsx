import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ShieldAlert } from 'lucide-react';

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] },
  },
};

export const Slide1: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <motion.div variants={cardVariants} className="mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider mb-3">
          Buenas prácticas & integridad de datos
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          Estándares.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {/* Card 1: GAMP 5 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="relative bg-surface rounded-3xl p-8 lg:p-10 border-2 border-line flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-brand-yellow/10 text-brand-yellow">
                Validación de Procesos
              </span>
              <ShieldAlert className="w-6 h-6 text-brand-yellow" />
            </div>

            <h3 className="text-4xl lg:text-5xl font-semibold text-text font-display tracking-tight">
              GAMP 5
            </h3>

            <p className="text-lg lg:text-xl text-text leading-relaxed font-normal">
              Guía internacional de buenas prácticas de fabricación automatizada: busca que el software y los procesos de industrias reguladas (como farma) sean confiables, estén validados y libres de riesgos de manipulación.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-line flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>Good Automated Manufacturing Practice</span>
          </div>
        </motion.div>

        {/* Card 2: ALCOA+ */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="relative bg-surface rounded-3xl p-8 lg:p-10 border-2 border-line flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-brand-yellow/10 text-brand-yellow">
                Integridad de Datos
              </span>
              <FileCheck className="w-6 h-6 text-brand-yellow" />
            </div>

            <h3 className="text-4xl lg:text-5xl font-semibold text-text font-display tracking-tight">
              ALCOA+
            </h3>

            <p className="text-lg lg:text-xl text-text leading-relaxed font-normal">
              Principios de integridad de datos: todo dato debe ser Atribuible, Legible, Contemporáneo (al momento), Original y Exacto (+ Completo, Consistente y Duradero).
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-line flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>Data Integrity Standard (FDA & WHO)</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
