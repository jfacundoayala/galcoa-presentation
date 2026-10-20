import React from 'react';
import { Slide0 } from '../components/slides/Slide0';
import {
  SlideProblema,
  SlideComoFunciona,
  SlideHedera,
  SlideValor,
  SlideModelo,
  SlideRoadmap,
  SlideCierre,
  SlideMercado,
} from '../components/slides/distribuidoras';

export interface SlideDefinition {
  id: string;
  index: number;
  title: string;
  category: string;
  Component: React.ComponentType;
}

/** Nueve diapositivas: distribuidoras pymes del NEA; su historial de entregas como prueba verificable en Hedera. */
export const SLIDES: SlideDefinition[] = [
  { id: 'intro', title: 'GALCOA+ · Evidencia comercial verificable', category: 'Portada', Component: Slide0 },
  { id: 'problema', title: 'Trabajan bien, pero no lo pueden demostrar', category: 'Problema', Component: SlideProblema },
  { id: 'como-funciona', title: 'Cada entrega se convierte en una prueba', category: 'Cómo funciona', Component: SlideComoFunciona },
  { id: 'hedera', title: 'Una prueba que nadie puede reescribir', category: 'Hedera', Component: SlideHedera },
  { id: 'valor', title: 'Tu historial es tu carta de presentación', category: 'Valor', Component: SlideValor },
  { id: 'modelo', title: 'Un abono mensual, accesible para una pyme', category: 'Negocio', Component: SlideModelo },
  { id: 'mercado', title: 'Empezamos en el NEA. El objetivo es el mundo.', category: 'Mercado', Component: SlideMercado },
  { id: 'roadmap-equipo', title: 'Próximos pasos y equipo', category: 'Roadmap', Component: SlideRoadmap },
  { id: 'cierre', title: 'Las distribuidoras ya trabajan bien. Nosotros hacemos que lo puedan demostrar.', category: 'Cierre', Component: SlideCierre },
].map((slide, index) => ({ ...slide, index }));

export type DeckId = 'hedera';

export interface DeckDefinition {
  id: DeckId;
  label: string;
  slides: SlideDefinition[];
}

export const DECKS: Record<DeckId, DeckDefinition> = {
  hedera: { id: 'hedera', label: 'Hedera', slides: SLIDES },
};

/** Queda una sola versión: Hedera. */
export const getDeckFromUrl = (): DeckDefinition => DECKS.hedera;
