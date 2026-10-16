import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building2 } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.2, 0.7, 0.3, 1] },
  },
};

export const Slide9: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <motion.div variants={cardVariants} className="mb-8 md:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174235]/10 text-[#174235] text-xs font-semibold uppercase tracking-wider mb-3">
          Estrategia Comercial & Go-To-Market
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#174235] tracking-tight font-display">
          Modelo SaaS B2B escalable
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {/* Column 1: Entrada / Adopción */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="bg-white/95 rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-lg shadow-stone-900/5 flex flex-col justify-between"
        >
          <div>
            <div className="bg-[#E7B94B] text-stone-900 py-4 px-6 font-bold text-center text-lg lg:text-xl font-display flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-stone-900" />
              <span>Entrada / Adopción</span>
            </div>

            <div className="p-7 lg:p-9 space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 font-display">
                Plan Freemium / Starter:
              </h3>
              <p className="text-stone-700 text-lg lg:text-xl leading-relaxed">
                Para microproductores con cupo inicial de documentos sellados.
              </p>
            </div>
          </div>

          <div className="p-6 lg:p-7 bg-amber-50/60 border-t border-amber-200/60">
            <p className="text-stone-600 text-sm md:text-base italic">
              Validación sin fricción financiera para cooperativas y pequeños establecimientos.
            </p>
          </div>
        </motion.div>

        {/* Column 2: Enterprise / Recurrente */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="bg-white/95 rounded-3xl overflow-hidden border-2 border-[#174235]/40 shadow-lg shadow-stone-900/5 flex flex-col justify-between"
        >
          <div>
            <div className="bg-[#174235] text-white py-4 px-6 font-bold text-center text-lg lg:text-xl font-display flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span>Enterprise / Recurrente</span>
            </div>

            <div className="p-7 lg:p-9 space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 font-display">
                Plan Pro y Enterprise:
              </h3>
              <p className="text-stone-700 text-lg lg:text-xl leading-relaxed">
                Suscripción mensual con volumen masivo de sellado HCS, almacenamiento ampliado de evidencias, auditoría avanzada y soporte multi-rol.
              </p>
            </div>
          </div>

          <div className="p-6 lg:p-7 bg-[#174235]/5 border-t border-[#174235]/15">
            <p className="text-[#174235] font-semibold text-sm md:text-base">
              Monetización B2B escalable vinculada a volumen operativo.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
