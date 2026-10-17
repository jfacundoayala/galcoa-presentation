import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

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
  hidden: { opacity: 0, y: 25, scale: 0.98 },
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
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <motion.div variants={cardVariants} className="mb-6 md:mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174235]/10 text-[#174235] text-xs font-semibold uppercase tracking-wider mb-2">
          Estrategia Comercial & Go-To-Market
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#174235] tracking-tight font-display">
          Modelo SaaS B2B escalable
        </h2>
      </motion.div>

      {/* Single Enterprise Showcase Card */}
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="bg-white/95 rounded-3xl overflow-hidden border-2 border-[#174235]/40 shadow-xl shadow-stone-900/5 flex flex-col justify-between"
        >
          <div>
            <div className="bg-[#174235] text-white py-4 px-6 font-bold text-center text-lg lg:text-xl font-display flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span>Enterprise / Recurrente</span>
            </div>

            <div className="p-8 lg:p-10 space-y-5">
              <h3 className="text-2xl lg:text-4xl font-bold text-stone-900 font-display">
                Plan Pro y Enterprise:
              </h3>
              <p className="text-stone-700 text-lg lg:text-xl leading-relaxed font-medium">
                Suscripción mensual con volumen masivo de sellado HCS, almacenamiento ampliado de evidencias, auditoría avanzada y soporte multi-rol.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-800 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Sellado HCS Masivo</span>
                </div>
                <div className="flex items-center gap-2 text-stone-800 text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Auditoría Avanzada</span>
                </div>
                <div className="flex items-center gap-2 text-stone-800 text-sm font-semibold">
                  <Zap className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Soporte Multi-Rol</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-7 bg-[#174235]/5 border-t border-[#174235]/15 text-center sm:text-left">
            <p className="text-[#174235] font-semibold text-base md:text-lg">
              Monetización B2B escalable vinculada a volumen operativo.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
