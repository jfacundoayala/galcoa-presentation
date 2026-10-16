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
      badgeBg: 'bg-[#174235] text-white',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Hedera Consensus Service:',
      content:
        'Otorga sello temporal de consenso inmutable y orden justo a prueba de adulteración.',
      border: 'border-[#174235]/30',
    },
    {
      badge: 'Privacidad Criptográfica',
      badgeBg: 'bg-[#E3A83F] text-stone-900',
      icon: <Lock className="w-5 h-5 text-stone-900" />,
      title: 'Privacidad absoluta:',
      content:
        'Solo se publica en el topic de Hedera el hash criptográfico del manifiesto, SHA-256; los datos comerciales y privados jamás se exponen en la red pública.',
      border: 'border-[#E3A83F]/50',
    },
    {
      badge: 'Escala Enterprise',
      badgeBg: 'bg-[#C1653B] text-white',
      icon: <TrendingUp className="w-5 h-5 text-amber-200" />,
      title: 'Eficiencia y predictibilidad:',
      content:
        'Costos fijos en USD, altísima velocidad y bajo consumo energético, ideal para escala enterprise.',
      border: 'border-[#C1653B]/30',
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174235]/10 text-[#174235] text-xs font-semibold uppercase tracking-wider mb-3">
          Tecnología DLT de Nivel Institucional
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#174235] tracking-tight font-display">
          Por que Blockchain?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className={`bg-white/95 rounded-3xl overflow-hidden border-2 ${c.border} shadow-lg shadow-stone-900/5 flex flex-col`}
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
                <h3 className="text-xl lg:text-2xl font-bold text-stone-900 font-display">
                  {c.title}
                </h3>
                <p className="text-stone-700 text-base lg:text-lg leading-relaxed">
                  {c.content}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 text-xs font-mono text-stone-400">
                Hedera Hashgraph Network
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
