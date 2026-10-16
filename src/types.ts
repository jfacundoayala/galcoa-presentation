import { ReactNode } from 'react';

export interface SlideData {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  category?: string;
}

export interface DeckState {
  currentSlide: number;
  totalSlides: number;
  direction: number;
  isFullscreen: boolean;
  isIdle: boolean;
}
