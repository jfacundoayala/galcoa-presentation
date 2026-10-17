import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ShieldCheck } from 'lucide-react';

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

export const Slide7: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <motion.div variants={itemVariants} className="mb-8 md:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider mb-3">
          Verificación Abierta & Descentralizada
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          Confianza entre contrapartes
        </h2>
      </motion.div>

      <div className="space-y-6">
        {/* Row 1: QR */}
        <motion.div
          variants={itemVariants}
          className="bg-surface rounded-2xl p-6 lg:p-8 border border-line flex items-start gap-5 lg:gap-6"
        >
          <div className="p-3.5 rounded-2xl bg-brand-yellow/10 border border-brand-yellow text-brand-yellow flex-shrink-0">
            <QrCode className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl lg:text-2xl font-bold text-text font-display">
              Invitaciones por enlace o QR:
            </h3>
            <p className="text-text text-base lg:text-lg leading-relaxed">
              Compradores o intermediarios corroboran el mismo snapshot congelado desde su móvil sin necesidad de crearse cuentas.
            </p>
          </div>
        </motion.div>

        {/* Row 2: Verificador público */}
        <motion.div
          variants={itemVariants}
          className="bg-surface rounded-2xl p-6 lg:p-8 border border-line flex items-start gap-5 lg:gap-6"
        >
          <div className="p-3.5 rounded-2xl bg-brand-yellow/10 border border-line text-brand-yellow flex-shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl lg:text-2xl font-bold text-text font-display">
              Verificador público:
            </h3>
            <p className="text-text text-base lg:text-lg leading-relaxed">
              Cualquiera con el PDF final puede auditar la integridad del archivo contra el Mirror Node de Hedera en segundos.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
