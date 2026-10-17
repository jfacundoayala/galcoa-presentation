import React from 'react';
import { motion } from 'framer-motion';

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

export const Slide4: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center items-center px-6 lg:px-12 py-8"
    >
      <motion.div
        variants={itemVariants}
        className="relative bg-gradient-to-r from-[#F0ECE1] to-[#E9E3D3] rounded-3xl p-10 sm:p-14 md:p-16 border border-[#D5CDBC] shadow-lg shadow-stone-900/5 text-center max-w-4xl"
      >
        <p className="text-2xl sm:text-3xl md:text-5xl font-semibold text-stone-900 leading-snug md:leading-snug tracking-tight font-display">
          "Los operarios no registran mal por falta de voluntad, sino porque las herramientas son más difíciles que la tarea misma."
        </p>
      </motion.div>
    </motion.div>
  );
};
