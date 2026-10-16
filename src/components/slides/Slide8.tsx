import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Sparkles, Blocks } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.2, 0.7, 0.3, 1] },
  },
};

export const Slide8: React.FC = () => {
  const layers = [
    {
      badge: 'Capa 1 · Web',
      icon: <Layout className="w-5 h-5 text-sky-600" />,
      title: 'Frontend y backend:',
      content: 'Next.js 16 (App Router), TypeScript, Tailwind CSS v4 y shadcn/ui.',
      badgeStyle: 'bg-sky-100 text-sky-800 border-sky-300',
    },
    {
      badge: 'Capa 2 · Datos',
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      title: 'Backend y base de datos:',
      content:
        'Supabase, PostgreSQL con RLS, Auth y Storage privado para evidencias.',
      badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      badge: 'Capa 3 · IA',
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      title: 'IA dual:',
      content:
        'Gemini 3.5 Flash-Lite para redacción autónoma y GPT-OSS 120B en Groq para contraste textual de coherencia.',
      badgeStyle: 'bg-purple-100 text-purple-800 border-purple-300',
    },
    {
      badge: 'Capa 4 · Web3',
      icon: <Blocks className="w-5 h-5 text-[#174235]" />,
      title: 'Blockchain y documentos:',
      content:
        'Hedera HCS SDK (@hiero-ledger/sdk en Testnet) y @react-pdf/renderer.',
      badgeStyle: 'bg-[#174235]/10 text-[#174235] border-[#174235]/30',
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
          Stack Tecnológico de Producción
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#174235] tracking-tight font-display">
          Arquitectura robusta y moderna
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {layers.map((layer, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="bg-white/95 rounded-3xl p-7 lg:p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${layer.badgeStyle}`}
                >
                  {layer.badge}
                </span>
                {layer.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold text-stone-900 font-display">
                  {layer.title}
                </h3>
                <p className="text-stone-700 text-base lg:text-lg leading-relaxed">
                  {layer.content}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
              <span>Producción Ready</span>
              <span>100% Tipado</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
