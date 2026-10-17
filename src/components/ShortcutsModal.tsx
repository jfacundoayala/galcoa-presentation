import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const shortcuts = [
    { key: '→ / Espacio / Enter', desc: 'Siguiente diapositiva' },
    { key: '← / Retroceso', desc: 'Diapositiva anterior' },
    { key: 'Rueda del ratón', desc: 'Avanzar / retroceder suavemente' },
    { key: 'Deslizar / tocar', desc: 'Deslizar o tocar el borde derecho avanza; el izquierdo retrocede' },
    { key: 'F', desc: 'Pantalla completa' },
    { key: 'Inicio / Fin', desc: 'Primera / Última diapositiva' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90"
          role="dialog"
          aria-modal="true"
          aria-label="Atajos de teclado"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md max-h-[90dvh] overflow-y-auto bg-surface border border-line"
            data-no-nav="true"
          >
            <div className="flex items-stretch justify-between border-b border-line">
              <div className="flex items-center gap-3 px-5 py-4">
                <Keyboard className="w-5 h-5 text-brand-yellow" />
                <h3 className="font-semibold text-lg font-display text-text">
                  Atajos de teclado
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center border-l border-line text-text-muted hover:bg-surface-deep hover:text-text transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5">
              {shortcuts.map((sc, i) => (
                <div
                  key={i}
                  className="flex items-start sm:items-center justify-between gap-3 text-xs sm:text-sm py-3 border-b border-line last:border-0"
                >
                  <span className="text-text-muted">{sc.desc}</span>
                  <kbd className="shrink-0 px-2 py-1 bg-surface-deep border border-line font-mono text-[11px] font-medium text-text">
                    {sc.key}
                  </kbd>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full min-h-[44px] bg-brand-yellow hover:brightness-95 text-brand-green font-semibold text-sm transition-colors"
            >
              Entendido
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
