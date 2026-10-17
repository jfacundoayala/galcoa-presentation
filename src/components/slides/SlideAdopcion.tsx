import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, ShieldCheck, Award, Sparkles } from 'lucide-react';

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
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const SlideAdopcion: React.FC = () => {
  const points = [
    {
      title: 'Entrada simple:',
      text: 'El operario registra por chat en segundos, sin planillas ni formularios.',
      icon: <MessageSquareText className="w-6 h-6 text-brand-yellow" />,
      badgeBg: 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow',
      border: 'border-brand-yellow',
    },
    {
      title: 'Trazabilidad estricta:',
      text: 'Garantiza principios ALCOA+ y GAMP 5 de forma automática.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-yellow" />,
      badgeBg: 'bg-brand-yellow/10 text-brand-yellow border-line',
      border: 'border-line',
    },
    {
      title: 'Alto valor regulatorio:',
      text: 'Blinda a sectores críticos (farma, agro, química, minería) contra multas y fallos de auditoría con verificación instantánea por QR.',
      icon: <Award className="w-6 h-6 text-brand-yellow" />,
      badgeBg: 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow',
      border: 'border-brand-yellow',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      {/* Title */}
      <motion.div variants={itemVariants} className="mb-6 md:mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider mb-3">
          Adopción Operativa & Impacto
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold text-brand-yellow tracking-tight font-display leading-tight">
          "Cero fricción de entrada = Máxima adopción operativa."
        </h2>
      </motion.div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
        {points.map((p, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`bg-surface rounded-3xl p-7 lg:p-8 border-2 ${p.border}   flex flex-col justify-between space-y-4`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-2xl border ${p.badgeBg}`}>
                  {p.icon}
                </div>
                <span className="text-xs font-mono font-bold text-text-muted">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold text-text font-display">
                  {p.title}
                </h3>
                <p className="text-text text-base lg:text-lg leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.div
        variants={itemVariants}
        className="bg-surface p-4 lg:p-5 border border-line text-center flex items-center justify-center gap-3 text-text font-bold text-base md:text-xl"
      >
        <Sparkles className="w-5 h-5 text-brand-yellow flex-shrink-0" />
        <span>Una interfaz intuitiva que maximiza el uso diario</span>
      </motion.div>
    </motion.div>
  );
};
