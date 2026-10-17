import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, QrCode, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Slide3: React.FC = () => {
  const steps = [
    {
      num: '1',
      icon: <Search className="w-5 h-5 text-brand-yellow" />,
      title: 'Búsqueda del problema:',
      content:
        'Investigamos las regulaciones farmacéuticas y vimos de cerca el dolor principal: la falta de trazabilidad de datos. Con el equipo llegamos a una solución simple y efectiva, que ahorra tiempo y dinero.',
    },
    {
      num: '2',
      icon: <Compass className="w-5 h-5 text-brand-yellow" />,
      title: 'El hallazgo:',
      content:
        'La falta de trazabilidad nace de la fricción en la captura diaria. Cargar datos en el lote es incómodo, lo que arruina la contemporaneidad del dato.',
    },
    {
      num: '3',
      icon: <QrCode className="w-5 h-5 text-brand-yellow" />,
      title: 'Resultado esperado:',
      content:
        'Escanear un QR en el lote y ver al instante su historial cronológico inmutable y firmas de conformidad.',
    },
  ];

  const cases = [
    {
      tag: 'ANMAT · Argentina · 2026',
      name: 'Laboratorios Solkotal',
      finding: 'Deficiencias en integridad de datos y documentación.',
      outcome: 'Restricciones regulatorias sobre sus actividades.',
      source: 'Boletín Oficial',
      href: 'https://www.boletinoficial.gob.ar/detalleAviso/primera/337361/20260112',
    },
    {
      tag: 'ANMAT · Argentina · 2026',
      name: 'Ugal Farmacéutica',
      finding: 'Problemas de trazabilidad, validación y controles documentales.',
      outcome: 'Restricciones regulatorias sobre sus actividades.',
      source: 'Boletín Oficial',
      href: 'https://www.boletinoficial.gob.ar/detalleAviso/primera/347528/20260916',
    },
    {
      tag: 'FDA · India · 2026',
      name: 'Intas Pharmaceuticals',
      finding:
        'Modificaciones de registros electrónicos sin un historial adecuado de cambios.',
      outcome: 'Observaciones de la FDA (carta de advertencia).',
      source: 'FDA Warning Letter',
      href: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/intas-pharmaceuticals-limited-721151-03302026',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-4"
    >
      <motion.div variants={cardVariants} className="mb-3 md:mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold uppercase tracking-wider mb-3">
          Caso de estudio directo
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-yellow tracking-tight font-display">
          Validación real en campo
        </h2>
      </motion.div>

      {/* Pasos: el espíritu original de la diapositiva */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
        {steps.map((step) => (
          <motion.div
            key={step.num}
            variants={cardVariants}
            className="bg-surface border border-line p-4 space-y-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 shrink-0 border-2 border-brand-yellow bg-brand-yellow/10 text-brand-yellow font-mono font-bold flex items-center justify-center text-sm">
                {step.num}
              </div>
              <h3 className="flex-1 text-base lg:text-lg font-bold text-text font-display">{step.title}</h3>
              {step.icon}
            </div>
            <p className="text-text-muted text-sm leading-snug">{step.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Casos reales documentados */}
      <motion.div variants={cardVariants} className="mt-4 md:mt-5 mb-2 space-y-0.5">
        <h3 className="text-lg md:text-xl font-semibold text-text font-display">
          Validamos el problema con casos reales documentados
        </h3>
        <p className="text-text-muted text-sm">
          Registros oficiales de ANMAT (Argentina) y de la FDA (Estados Unidos).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
        {cases.map((c) => (
          <motion.div
            key={c.name}
            variants={cardVariants}
            className="bg-surface-deep border border-line border-t-2 border-t-brand-yellow p-4 flex flex-col justify-between gap-2"
          >
            <div className="space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-brand-yellow font-medium">
                {c.tag}
              </div>
              <h4 className="text-lg font-semibold text-text font-display leading-tight">{c.name}</h4>
              <p className="text-text text-sm leading-snug">{c.finding}</p>
              <p className="text-text-muted text-sm leading-snug">{c.outcome}</p>
            </div>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[44px] font-mono text-xs text-text underline underline-offset-4 decoration-line hover:decoration-brand-yellow"
            >
              Fuente oficial: {c.source}
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={cardVariants}
        className="mt-3 bg-brand-green text-text px-4 py-3 text-sm leading-snug"
      >
        Son problemas concretos de integridad documental relacionados con ALCOA+, que GALCOA+ busca ayudar a prevenir mediante IA, verificación independiente y trazabilidad con Hedera.
      </motion.p>
    </motion.div>
  );
};
