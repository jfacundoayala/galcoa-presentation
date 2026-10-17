import React from 'react';
import { Flame, Pill, Apple } from 'lucide-react';

/** Casos concretos en los que la falta de evidencia termina en descarte. */
export const DescarteStrip: React.FC = () => {
  const cases = [
    {
      icon: <Flame className="w-5 h-5" aria-hidden="true" />,
      who: 'Cannabis',
      text: 'Un lote que no puede demostrar su trazabilidad se descarta: hay que incinerar el material.',
    },
    {
      icon: <Pill className="w-5 h-5" aria-hidden="true" />,
      who: 'Medicamentos',
      text: 'Si pierden la cadena de frío, hay que descartarlos.',
    },
    {
      icon: <Apple className="w-5 h-5" aria-hidden="true" />,
      who: 'Alimentos',
      text: 'Vencidos o sin cadena de frío: también se descartan.',
    },
  ];

  return (
    <div className="border border-line bg-surface-deep">
      <div className="px-4 pt-2.5 font-mono text-[11px] uppercase tracking-[0.05em] text-brand-yellow">
        Sin evidencia, se descarta
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
        {cases.map((c) => (
          <div key={c.who} className="p-3 space-y-1">
            <div className="flex items-center gap-2 text-text font-display font-semibold">
              <span className="text-brand-yellow">{c.icon}</span>
              {c.who}
            </div>
            <p className="text-text-muted text-sm leading-snug">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
