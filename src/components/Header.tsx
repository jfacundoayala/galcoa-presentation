import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface HeaderProps {
  currentIndex: number;
  totalSlides: number;
  category?: string;
  onShowShortcuts?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentIndex,
  totalSlides,
  category,
  onShowShortcuts,
}) => {
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <header className="relative z-20 w-full flex items-stretch border-b border-line bg-ink min-h-[56px] md:min-h-[64px] pointer-events-auto">
      {/* Marca: placa crema para respetar el contraste del logo verde */}
      <div className="flex items-center gap-3 sm:gap-4 pl-4 sm:pl-6 lg:pl-8 pr-3 sm:pr-6 border-r border-line">
        <div className="bg-paper px-2.5 py-1.5">
          <img
            src="/img/logo-galcoa.svg"
            alt="GALCOA+"
            className="h-6 sm:h-7 md:h-8 w-auto"
          />
        </div>
        <span className="hidden md:block font-mono text-[11px] uppercase tracking-[0.05em] text-text-muted font-medium">
          Hedera · NEA Tech 2026
        </span>
      </div>

      {/* Categoría de la diapositiva */}
      <div className="flex-1 min-w-0 flex items-center px-4 sm:px-6">
        {category && (
          <motion.span
            key={category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="truncate font-mono text-[11px] sm:text-xs uppercase tracking-[0.05em] text-text-muted font-medium"
          >
            <span className="text-brand-yellow">{pad(currentIndex + 1)}</span>
            <span className="mx-2 text-line">/</span>
            {category}
            <span className="sr-only"> de {totalSlides}</span>
          </motion.span>
        )}
      </div>

      {/* Atajos */}
      <button
        type="button"
        onClick={onShowShortcuts}
        title="Ver atajos de teclado"
        aria-label="Ver atajos de teclado"
        className="min-w-[44px] min-h-[44px] px-4 sm:px-6 flex items-center justify-center border-l border-line text-text-muted hover:bg-surface hover:text-text transition-colors"
        data-no-nav="true"
      >
        <HelpCircle className="w-4 h-4" />
      </button>
    </header>
  );
};
