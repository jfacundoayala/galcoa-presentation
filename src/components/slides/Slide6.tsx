import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, TrendingUp } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.2, 0.7, 0.3, 1] },
  },
};

export const Slide6: React.FC = () => {
  const cards = [
    {
      badge: 'Hedera HCS',
      badgeBg: 'bg-brand-green text-white',
      icon: <ShieldCheck className="w-5 h-5 text-brand-yellow" />,
      title: 'Hedera Consensus Service:',
      content:
        'Otorga sello temporal de consenso inmutable y orden justo a prueba de adulteración.',
      border: 'border-line',
    },
    {
      badge: 'Privacidad Criptográfica',
      badgeBg: 'bg-brand-yellow text-brand-green',
      icon: <Lock className="w-5 h-5 text-text" />,
      title: 'Privacidad absoluta:',
      content:
        'Solo se publica en el topic de Hedera el hash criptográfico del manifiesto, SHA-256; los datos comerciales y privados jamás se exponen en la red pública.',
      border: 'border-brand-yellow/50',
    },
    {
      badge: 'Escala Enterprise',
      badgeBg: 'bg-brand-yellow text-brand-green',
      icon: <TrendingUp className="w-5 h-5 text-brand-yellow" />,
      title: 'Eficiencia y predictibilidad:',
      content:
        'Costos fijos en USD, altísima velocidad y bajo consumo energético, ideal para escala enterprise.',
      border: 'border-brand-yellow/30',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-8"
    >
      <motion.div variants={cardVariants} className="mb-8 md:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider mb-3">
          Tecnología DLT de Nivel Institucional
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          Por que Blockchain?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className={`bg-surface rounded-3xl overflow-hidden border-2 ${c.border}   flex flex-col`}
          >
            {/* Header banner badge */}
            <div
              className={`${c.badgeBg} py-4 px-6 font-bold text-center text-lg lg:text-xl font-display flex items-center justify-center gap-2`}
            >
              {c.icon}
              <span>{c.badge}</span>
            </div>

            {/* Body */}
            <div className="p-7 lg:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-text font-display">
                  {c.title}
                </h3>
                <p className="text-text text-base lg:text-lg leading-relaxed">
                  {c.content}
                </p>
              </div>

              <div className="pt-4 border-t border-line text-xs font-mono text-text-muted">
                Hedera Hashgraph Network
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
