import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Sparkles, Blocks } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } },
};

export const Slide8: React.FC = () => {
  const layers = [
    {
      n: '01',
      label: 'Web',
      icon: <Layout className="w-5 h-5" aria-hidden="true" />,
      title: 'Frontend y backend',
      stack: ['Next.js 16 (App Router)', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui'],
    },
    {
      n: '02',
      label: 'Datos',
      icon: <Database className="w-5 h-5" aria-hidden="true" />,
      title: 'Base de datos y evidencias',
      stack: ['Supabase', 'PostgreSQL con RLS', 'Auth', 'Storage privado'],
    },
    {
      n: '03',
      label: 'IA',
      icon: <Sparkles className="w-5 h-5" aria-hidden="true" />,
      title: 'IA dual',
      stack: ['Gemini 3.5 Flash-Lite · redacción autónoma', 'GPT-OSS 120B en Groq · contraste de coherencia'],
    },
    {
      n: '04',
      label: 'Web3',
      icon: <Blocks className="w-5 h-5" aria-hidden="true" />,
      title: 'Sello en Hedera y documentos',
      stack: ['Hedera HCS SDK (@hiero-ledger/sdk)', 'Testnet', '@react-pdf/renderer'],
      hero: true,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-6"
    >
      <motion.div variants={itemVariants} className="mb-5 md:mb-6 space-y-3">
        <div className="inline-flex px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
          Stack tecnológico de producción
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-brand-yellow tracking-tight font-display">
          Arquitectura robusta y moderna
        </h2>
      </motion.div>

      <div className="border border-line">
        {layers.map((layer, idx) => (
          <motion.div
            key={layer.n}
            variants={itemVariants}
            className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? 'border-t border-line' : ''}`}
          >
            <div
              className={`md:col-span-3 p-4 lg:p-5 flex md:flex-col justify-between md:justify-center gap-2 ${
                layer.hero ? 'bg-brand-yellow text-brand-green' : 'bg-surface-deep text-text'
              }`}
            >
              <span className="font-mono text-sm font-semibold">{layer.n}</span>
              <span className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-tight">
                {layer.icon}
                {layer.label}
              </span>
            </div>

            <div className={`md:col-span-9 p-4 lg:p-5 space-y-2 ${layer.hero ? 'bg-brand-green' : 'bg-surface'}`}>
              <h3 className="text-lg lg:text-xl font-semibold text-text font-display leading-tight">{layer.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {layer.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-2.5 py-1 border border-line bg-ink/40 text-text text-xs sm:text-sm font-mono"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p variants={itemVariants} className="mt-3 font-mono text-xs text-text-muted">
        Cada capa lista para producción y 100% tipada.
      </motion.p>
    </motion.div>
  );
};
