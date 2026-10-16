import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ShieldCheck, CheckCheck } from 'lucide-react';

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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174235]/10 text-[#174235] text-xs font-semibold uppercase tracking-wider mb-3">
          Verificación Abierta & Descentralizada
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#174235] tracking-tight font-display">
          Confianza entre contrapartes
        </h2>
      </motion.div>

      <div className="space-y-6">
        {/* Row 1: QR */}
        <motion.div
          variants={itemVariants}
          className="bg-white/95 rounded-2xl p-6 lg:p-8 border border-stone-200/90 shadow-sm flex items-start gap-5 lg:gap-6"
        >
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex-shrink-0">
            <QrCode className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl lg:text-2xl font-bold text-stone-900 font-display">
              Invitaciones por enlace o QR:
            </h3>
            <p className="text-stone-700 text-base lg:text-lg leading-relaxed">
              Compradores o intermediarios corroboran el mismo snapshot congelado desde su móvil sin necesidad de crearse cuentas.
            </p>
          </div>
        </motion.div>

        {/* Row 2: Verificador público */}
        <motion.div
          variants={itemVariants}
          className="bg-white/95 rounded-2xl p-6 lg:p-8 border border-stone-200/90 shadow-sm flex items-start gap-5 lg:gap-6"
        >
          <div className="p-3.5 rounded-2xl bg-[#174235]/10 border border-[#174235]/20 text-[#174235] flex-shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl lg:text-2xl font-bold text-stone-900 font-display">
              Verificador público:
            </h3>
            <p className="text-stone-700 text-base lg:text-lg leading-relaxed">
              Cualquiera con el PDF final puede auditar la integridad del archivo contra el Mirror Node de Hedera en segundos.
            </p>
          </div>
        </motion.div>

        {/* Bottom highlight bar */}
        <motion.div
          variants={itemVariants}
          className="bg-[#F0ECE1] rounded-2xl p-5 lg:p-6 border border-[#DDD5C5] text-center flex items-center justify-center gap-3 text-stone-800 font-semibold text-base lg:text-xl"
        >
          <CheckCheck className="w-6 h-6 text-[#174235] flex-shrink-0" />
          <span>
            Verificación descentralizada instantánea sin fricción de registro para clientes y auditores externos.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};
