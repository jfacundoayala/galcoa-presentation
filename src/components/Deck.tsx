import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES } from '../data/slides';
import { Header } from './Header';
import { Footer } from './Footer';
import { ShortcutsModal } from './ShortcutsModal';

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 90 : -90,
    filter: 'blur(8px)',
    scale: 0.99,
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -90 : 90,
    filter: 'blur(8px)',
    scale: 0.99,
  }),
};

export const Deck: React.FC = () => {
  const getInitialIndex = () => {
    const hash = window.location.hash.replace('#', '');
    const parsed = parseInt(hash, 10);
    return !isNaN(parsed) && parsed >= 0 && parsed < SLIDES.length ? parsed : 0;
  };

  const [currentIndex, setCurrentIndex] = useState<number>(getInitialIndex);
  const [direction, setDirection] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isIdle, setIsIdle] = useState<boolean>(false);
  const [showShortcuts, setShowShortcuts] = useState<boolean>(false);

  const lastNavTime = useRef<number>(0);
  const lastWheelTime = useRef<number>(0);
  const pointerStart = useRef<{ x: number; y: number; time: number; onControl: boolean } | null>(null);
  const idleTimeout = useRef<number | null>(null);

  // Sync index with URL hash
  useEffect(() => {
    window.history.replaceState(null, '', `#${currentIndex}`);
  }, [currentIndex]);

  // Navigate to slide
  const goToSlide = useCallback((newIndex: number) => {
    const now = performance.now();
    if (now - lastNavTime.current < 250) return;

    setCurrentIndex((prev) => {
      const target = Math.max(0, Math.min(newIndex, SLIDES.length - 1));
      if (target === prev) return prev;
      lastNavTime.current = now;
      setDirection(target > prev ? 1 : -1);
      return target;
    });
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  // Listen for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Listen for URL hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const idx = getInitialIndex();
      goToSlide(idx);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if focus is in an input
      if (e.target instanceof HTMLElement && e.target.matches('input, textarea')) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
        case 'Enter':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDES.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case '?':
          e.preventDefault();
          setShowShortcuts((prev) => !prev);
          break;
        case 'Escape':
          setShowShortcuts(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, toggleFullscreen]);

  // Mouse wheel throttled navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = performance.now();
      if (now - lastWheelTime.current < 600) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 35) return;

      lastWheelTime.current = now;
      if (delta > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  // Idle timeout (auto-hide controls and cursor)
  useEffect(() => {
    const resetIdle = () => {
      setIsIdle(false);
      if (idleTimeout.current) window.clearTimeout(idleTimeout.current);
      idleTimeout.current = window.setTimeout(() => {
        setIsIdle(true);
      }, 3500);
    };

    window.addEventListener('pointermove', resetIdle);
    window.addEventListener('pointerdown', resetIdle);
    window.addEventListener('keydown', resetIdle);

    resetIdle();

    return () => {
      if (idleTimeout.current) window.clearTimeout(idleTimeout.current);
      window.removeEventListener('pointermove', resetIdle);
      window.removeEventListener('pointerdown', resetIdle);
      window.removeEventListener('keydown', resetIdle);
    };
  }, []);

  // Pointer interactions (swipe & tap navigation)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return; // Only left click

    const target = e.target as HTMLElement | null;
    const isControl = !!target?.closest('[data-no-nav], button, a, input, textarea');

    pointerStart.current = {
      x: e.clientX,
      y: e.clientY,
      time: performance.now(),
      onControl: isControl,
    };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;

    if (!start || start.onControl) return;

    const deltaX = e.clientX - start.x;
    const deltaY = e.clientY - start.y;
    const distance = Math.hypot(deltaX, deltaY);

    // Swipe gesture
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      return;
    }

    // Tap on screen margins (only if it wasn't a drag)
    if (distance < 12) {
      if (e.clientX < window.innerWidth * 0.18) {
        prevSlide();
      } else if (e.clientX > window.innerWidth * 0.28) {
        nextSlide();
      }
    }
  };

  const currentSlideData = SLIDES[currentIndex];
  const CurrentSlideComponent = currentSlideData.Component;

  return (
    <div
      className={`deck-container ${isIdle ? 'deck-idle cursor-none' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
    >
      {/* Header */}
      <Header
        currentIndex={currentIndex}
        totalSlides={SLIDES.length}
        category={currentSlideData.category}
        onShowShortcuts={() => setShowShortcuts(true)}
      />

      {/* Main Slide Stage */}
      <main className="relative z-10 flex-1 w-full h-full overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Controls */}
      <Footer
        currentIndex={currentIndex}
        totalSlides={SLIDES.length}
        slides={SLIDES}
        onSelectSlide={goToSlide}
        onPrev={prevSlide}
        onNext={nextSlide}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Keyboard Shortcuts Dialog */}
      <ShortcutsModal
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />
    </div>
  );
};
