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
    <footer className="relative z-20 w-full px-6 lg:px-12 py-4 flex items-center justify-between pointer-events-auto controls-bar">
      {/* Segmented Progress Bar */}
      <nav
        className="flex items-center gap-1.5 max-w-md sm:max-w-xl w-full"
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
              className={`h-2 rounded-full transition-all duration-300 relative ${
                isCurrent
                  ? 'w-10 bg-[#174235] shadow-[0_0_8px_rgba(23,66,53,0.35)]'
                  : isViewed
                  ? 'w-4 bg-stone-400 hover:bg-stone-600'
                  : 'w-3 bg-stone-300/80 hover:bg-stone-400'
              }`}
              title={`Slide ${idx + 1}: ${s.title}`}
              aria-label={`Slide ${idx + 1}: ${s.title}`}
              data-no-nav="true"
            />
          );
        })}
      </nav>

      {/* Controls & Counter */}
      <div className="flex items-center gap-3 sm:gap-4 pl-4" data-no-nav="true">
        {/* Counter */}
        <div className="font-mono text-xs sm:text-sm font-semibold text-stone-600">
          <span className="text-[#174235] font-bold text-sm sm:text-base">
            {padZero(currentIndex + 1)}
          </span>
          <span className="text-stone-400 mx-1">/</span>
          <span>{padZero(totalSlides)}</span>
        </div>

        {/* Prev / Next buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-xl bg-white/80 hover:bg-white text-stone-800 disabled:opacity-30 disabled:pointer-events-none border border-stone-200/90 shadow-sm transition-all"
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
            className="p-2 rounded-xl bg-white/80 hover:bg-white text-stone-800 disabled:opacity-30 disabled:pointer-events-none border border-stone-200/90 shadow-sm transition-all"
            aria-label="Diapositiva siguiente"
            title="Siguiente (Espacio o Flecha Der)"
            data-no-nav="true"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Fullscreen Toggle */}
        <button
          type="button"
          onClick={onToggleFullscreen}
          className="p-2 rounded-xl bg-white/80 hover:bg-white text-stone-800 border border-stone-200/90 shadow-sm transition-all"
          aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          title="Pantalla Completa (F)"
          data-no-nav="true"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </footer>
  );
};
