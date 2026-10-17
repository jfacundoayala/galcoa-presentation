import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { SlideDefinition } from '../data/slides';

interface FooterProps {
  currentIndex: number;
  totalSlides: number;
  slides: SlideDefinition[];
  onSelectSlide: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

const controlBtn =
  'min-w-[44px] min-h-[44px] flex items-center justify-center border-l border-line text-text hover:bg-surface disabled:opacity-30 disabled:pointer-events-none transition-colors';

export const Footer: React.FC<FooterProps> = ({
  currentIndex,
  totalSlides,
  slides,
  onSelectSlide,
  onPrev,
  onNext,
  onToggleFullscreen,
  isFullscreen,
}) => {
  const padZero = (n: number) => String(n).padStart(2, '0');

  return (
    <footer className="relative z-20 w-full flex items-stretch border-t border-line bg-ink pointer-events-auto controls-bar">
      {/* Progreso por segmentos rectangulares (progreso real de la presentación) */}
      <nav
        className="flex-1 min-w-0 flex items-stretch"
        aria-label="Progreso de diapositivas"
        data-no-nav="true"
      >
        {slides.map((s, idx) => {
          const isCurrent = idx === currentIndex;
          const isViewed = idx < currentIndex;

          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelectSlide(idx)}
              className="group flex-1 min-h-[44px] flex items-end border-r border-line first:border-l-0 hover:bg-surface transition-colors"
              title={`Slide ${idx + 1}: ${s.title}`}
              aria-label={`Slide ${idx + 1}: ${s.title}`}
              aria-current={isCurrent ? 'true' : undefined}
              data-no-nav="true"
            >
              <span
                className={`block w-full transition-all duration-[260ms] ease-brand ${
                  isCurrent
                    ? 'h-1.5 bg-brand-yellow'
                    : isViewed
                    ? 'h-1 bg-text-muted'
                    : 'h-px bg-line'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Contador */}
      <div
        className="flex items-center px-3 sm:px-5 border-l border-line font-mono text-xs sm:text-sm font-medium text-text-muted"
        data-no-nav="true"
      >
        <span className="text-brand-yellow font-semibold">{padZero(currentIndex + 1)}</span>
        <span className="mx-1 text-line">/</span>
        <span>{padZero(totalSlides)}</span>
      </div>

      <div className="flex items-stretch" data-no-nav="true">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          className={controlBtn}
          aria-label="Diapositiva anterior"
          title="Anterior (Flecha Izq)"
          data-no-nav="true"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className={controlBtn}
          aria-label="Diapositiva siguiente"
          title="Siguiente (Espacio o Flecha Der)"
          data-no-nav="true"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onToggleFullscreen}
          className={`${controlBtn} hidden sm:flex`}
          aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          title="Pantalla Completa (F)"
          data-no-nav="true"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </footer>
  );
};
