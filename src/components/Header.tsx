import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HelpCircle } from 'lucide-react';

interface HeaderProps {
  currentIndex: number;
  totalSlides: number;
  category?: string;
  onShowShortcuts?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentIndex,
  category,
  onShowShortcuts,
}) => {
  return (
    <header className="relative z-20 w-full px-6 lg:px-12 py-4 flex items-center justify-between pointer-events-none">
      {/* Brand logo */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <div className="w-8 h-8 rounded-xl bg-[#174235] text-amber-400 flex items-center justify-center font-bold text-sm shadow-sm">
          <ShieldCheck className="w-5 h-5 text-amber-300" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-extrabold tracking-wider font-display text-[#174235]">
            GALCOA+
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-semibold">
            Hedera · NEA Tech 2026
          </span>
        </div>
      </div>

      {/* Slide topic & Shortcuts helper */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {category && (
          <motion.span
            key={category}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#174235]/10 text-[#174235] border border-[#174235]/15"
          >
            {category}
          </motion.span>
        )}

        <button
          type="button"
          onClick={onShowShortcuts}
          title="Ver atajos de teclado"
          className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          data-no-nav="true"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
