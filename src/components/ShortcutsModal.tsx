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
    { key: 'Clic izq / der', desc: 'Tocar a la derecha avanza, izquierda retrocede' },
    { key: 'F', desc: 'Pantalla completa' },
    { key: 'Inicio / Fin', desc: 'Primera / Última diapositiva' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-stone-200 space-y-6"
            data-no-nav="true"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#174235]/10 text-[#174235]">
                  <Keyboard className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg font-display text-stone-900">
                  Atajos de Teclado
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {shortcuts.map((sc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-stone-100 last:border-0"
                >
                  <span className="text-stone-600 font-medium">{sc.desc}</span>
                  <kbd className="px-2 py-1 bg-stone-100 border border-stone-300 rounded font-mono text-[11px] font-semibold text-stone-800 shadow-xs">
                    {sc.key}
                  </kbd>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#174235] hover:bg-[#12362b] text-white font-semibold text-sm transition-colors"
            >
              Entendido
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
