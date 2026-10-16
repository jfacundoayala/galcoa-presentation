import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, Cpu, FileCheck2 } from 'lucide-react';

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

export const Slide5: React.FC = () => {
  const pillars = [
    {
      icon: <MessageSquareText className="w-8 h-8 text-white" />,
      iconBg: 'bg-[#B25E28]',
      title: 'Entrada sin fricción:',
      content:
        'El operario relata la operación por chat conversacional con lenguaje natural y adjunta evidencias, como fotos o remitos.',
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      iconBg: 'bg-[#985324]',
      title: 'Inteligencia en background:',
      content:
        'Un pipeline dual de IA procesa, estructura y detecta contradicciones de forma autónoma.',
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-white" />,
      iconBg: 'bg-[#8A4521]',
      title: 'Salida automática:',
      content:
        'Documento formal y auditable generado sin que el usuario llene formularios complejos.',
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
          Nuestra Propuesta de Valor
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#174235] tracking-tight font-display">
          Solucion
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-[#F6F2E8] rounded-3xl p-8 border border-[#E2DBD0] shadow-sm flex flex-col items-center text-center space-y-6"
          >
            {/* Round Icon Button */}
            <div
              className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md`}
            >
              {item.icon}
            </div>

            <div className="space-y-3">
              <h3 className="text-xl lg:text-2xl font-bold text-stone-900 font-display">
                {item.title}
              </h3>
              <p className="text-stone-700 text-base lg:text-lg leading-relaxed">
                {item.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
