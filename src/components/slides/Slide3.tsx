import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, QrCode } from 'lucide-react';

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

export const Slide3: React.FC = () => {
  const cards = [
    {
      num: '1',
      icon: <Search className="w-5 h-5 text-brand-yellow" />,
      title: 'Busqueda del problema:',
      content:
        'Llevamos tiempo investigando las regulaciones de la industria farmacéutica, conocemos de cerca el dolor principal en la falta de un sistema de trazabilidad de datos y con el equipo llegamos a una solución simple y efectiva, que logra ahorrar tiempo y dinero.',
      highlightColor: 'border-brand-yellow',
      badgeBg: 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow',
    },
    {
      num: '2',
      icon: <Compass className="w-5 h-5 text-brand-yellow" />,
      title: 'El hallazgo:',
      content:
        'La falta de trazabilidad nace de la fricción en la captura diaria. Cargar datos en el lote es incómodo, lo que arruina la contemporaneidad del dato.',
      highlightColor: 'border-line',
      badgeBg: 'bg-brand-yellow/10 text-brand-yellow border-line',
    },
    {
      num: '3',
      icon: <QrCode className="w-5 h-5 text-brand-yellow" />,
      title: 'Resultado esperado:',
      content:
        'Escanear un QR en el lote y ver al instante su historial cronológico inmutable y firmas de conformidad.',
      highlightColor: 'border-brand-yellow',
      badgeBg: 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow',
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
          Caso de Estudio Directo
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          Validación real en campo
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`bg-surface rounded-3xl p-7 lg:p-8 border-2 ${card.highlightColor}   flex flex-col justify-between`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div
                  className={`w-9 h-9 rounded-xl border-2 ${card.badgeBg} font-mono font-bold flex items-center justify-center text-base`}
                >
                  {card.num}
                </div>
                {card.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold text-text font-display">
                  {card.title}
                </h3>
                <p className="text-text text-base lg:text-lg leading-relaxed">
                  {card.content}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line text-xs font-mono text-text-muted">
              Paso {card.num} de 3
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
