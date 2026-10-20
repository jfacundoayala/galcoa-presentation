import React from 'react';
import { motion } from 'framer-motion';

/** Piezas comunes de las diapositivas: encabezado, grilla de tarjetas y banda inferior. */

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Frame: React.FC<{
  badge: string;
  title: string;
  lead?: React.ReactNode;
  /** Ilustración que acompaña al título (ruta en public/). */
  art?: string;
  artAlt?: string;
  children: React.ReactNode;
}> = ({ badge, title, lead, art, artAlt = '', children }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center px-6 lg:px-12 py-6"
  >
    <motion.div variants={itemVariants} className="mb-5 md:mb-6 flex items-end justify-between gap-6">
      <div className="space-y-3 min-w-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold uppercase tracking-wider">
          {badge}
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold text-text tracking-tight font-display">{title}</h2>
        {lead && <p className="max-w-4xl text-text-muted text-base md:text-lg leading-snug">{lead}</p>}
      </div>
      {art && <img src={art} alt={artAlt} className="hidden md:block shrink-0 w-[200px] lg:w-[250px] h-auto -mb-2" />}
    </motion.div>
    {children}
  </motion.div>
);

export type CardItem = {
  icon?: React.ReactNode;
  tag?: string;
  title: string;
  text?: string;
  points?: string[];
  highlight?: boolean;
};

const COLS: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

export const Cards: React.FC<{ items: CardItem[]; cols: 2 | 3 | 4 }> = ({ items, cols }) => (
  <div className={`grid grid-cols-1 ${COLS[cols]} gap-px bg-line border border-line`}>
    {items.map((c) => (
      <motion.div
        key={c.title}
        variants={itemVariants}
        className={`${c.highlight ? 'bg-brand-green text-text' : 'bg-surface text-text'} p-5 lg:p-6 flex flex-col gap-2`}
      >
        {(c.icon || c.tag) && (
          <div className="flex items-center justify-between">
            <span className={c.highlight ? '' : 'text-brand-accent'}>{c.icon}</span>
            {c.tag && (
              <span className={`font-mono text-[11px] uppercase tracking-[0.05em] ${c.highlight ? 'opacity-80' : 'text-text-muted'}`}>
                {c.tag}
              </span>
            )}
          </div>
        )}
        <h3 className="text-lg lg:text-xl font-semibold font-display leading-tight">{c.title}</h3>
        {c.text && <p className={`text-sm leading-snug ${c.highlight ? '' : 'text-text-muted'}`}>{c.text}</p>}
        {c.points && (
          <ul className="space-y-1.5">
            {c.points.map((p) => (
              <li key={p} className={`text-sm leading-snug flex gap-2 ${c.highlight ? '' : 'text-text-muted'}`}>
                <span className={c.highlight ? '' : 'text-brand-accent'} aria-hidden="true">·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    ))}
  </div>
);

/** Captura de la app con marco y una aclaración debajo. */
export const Screenshot: React.FC<{ src: string; alt: string; caption: string; imgClassName?: string; className?: string }> = ({
  src,
  alt,
  caption,
  imgClassName = '',
  className = '',
}) => (
  <motion.figure variants={itemVariants} className={`border border-line bg-surface-deep ${className}`}>
    <img src={src} alt={alt} className={`block w-full ${imgClassName}`} />
    <figcaption className="border-t border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted">
      {caption}
    </figcaption>
  </motion.figure>
);

export const Band: React.FC<{ children: React.ReactNode; tone?: 'navy' | 'deep' }> = ({ children, tone = 'navy' }) => (
  <motion.div
    variants={itemVariants}
    className={`mt-px border border-t-0 border-line px-5 py-3 text-sm md:text-base leading-snug text-text ${
      tone === 'navy' ? 'bg-brand-navy' : 'bg-surface-deep'
    }`}
  >
    {children}
  </motion.div>
);
