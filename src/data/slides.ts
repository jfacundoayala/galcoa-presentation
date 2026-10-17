import React from 'react';
import { Slide0 } from '../components/slides/Slide0';
import { Slide1 } from '../components/slides/Slide1';
import { Slide2 } from '../components/slides/Slide2';
import { Slide5 } from '../components/slides/Slide5';
import { Slide3 } from '../components/slides/Slide3';
import { SlideAdopcion } from '../components/slides/SlideAdopcion';
import { Slide4 } from '../components/slides/Slide4';
import { Slide6 } from '../components/slides/Slide6';
import { Slide8 } from '../components/slides/Slide8';
import { Slide9 } from '../components/slides/Slide9';
import { Slide10 } from '../components/slides/Slide10';
import { Slide4Agro } from '../components/slides/Slide4';
import { AgroPortada } from '../components/slides/agro/AgroPortada';
import { AgroDolor } from '../components/slides/agro/AgroDolor';
import { AgroCiclo } from '../components/slides/agro/AgroCiclo';

export interface SlideDefinition {
  id: string;
  index: number;
  title: string;
  category: string;
  Component: React.ComponentType;
}

export const SLIDES: SlideDefinition[] = [
  {
    id: 'intro',
    index: 0,
    title: 'GALCOA+ · Trazabilidad de datos',
    category: 'Portada',
    Component: Slide0,
  },
  {
    id: 'estandares',
    index: 1,
    title: 'Estándares · GAMP 5 & ALCOA+',
    category: 'Compliance',
    Component: Slide1,
  },
  {
    id: 'dolor',
    index: 2,
    title: 'El dolor en las industrias reguladas',
    category: 'Problema',
    Component: Slide2,
  },
  {
    id: 'solucion',
    index: 3,
    title: 'Solución · Pipeline IA y Salida',
    category: 'Solución',
    Component: Slide5,
  },
  {
    id: 'adopcion-operativa',
    index: 4,
    title: 'Cero fricción de entrada = Máxima adopción operativa.',
    category: 'Propuesta de Valor',
    Component: SlideAdopcion,
  },
  {
    id: 'validacion',
    index: 5,
    title: 'Validación real en campo',
    category: 'Validación',
    Component: Slide3,
  },
  {
    id: 'como-funciona',
    index: 6,
    title: 'Cómo funciona · De mensaje a evidencia sellada',
    category: 'Producto',
    Component: Slide4,
  },
  {
    id: 'blockchain',
    index: 7,
    title: '¿Por qué Blockchain? · Hedera HCS',
    category: 'Tecnología',
    Component: Slide6,
  },
  {
    id: 'arquitectura',
    index: 8,
    title: 'Arquitectura robusta y moderna',
    category: 'Arquitectura',
    Component: Slide8,
  },
  {
    id: 'modelo-b2b',
    index: 9,
    title: 'Modelo SaaS B2B escalable',
    category: 'Negocio',
    Component: Slide9,
  },
  {
    id: 'roadmap-equipo',
    index: 10,
    title: 'Roadmap y equipo',
    category: 'Roadmap',
    Component: Slide10,
  },
];

export type DeckId = 'hedera' | 'agro';

export interface DeckDefinition {
  id: DeckId;
  label: string;
  slides: SlideDefinition[];
}

const byId = (id: string) => {
  const slide = SLIDES.find((s) => s.id === id);
  if (!slide) throw new Error(`Diapositiva inexistente: ${id}`);
  return slide;
};

/** Versión Agro: misma base, otro relato (campo y lote en primer plano; Hedera como sello de confianza). */
const AGRO_SLIDES: SlideDefinition[] = [
  { id: 'agro-portada', title: 'GALCOA+ Agro · Del lote a la auditoría', category: 'Portada', Component: AgroPortada },
  { id: 'agro-dolor', title: 'El dolor en el campo', category: 'Problema', Component: AgroDolor },
  byId('solucion'),
  { id: 'agro-como-funciona', title: 'Cómo funciona · Del lote a evidencia sellada', category: 'Producto', Component: Slide4Agro },
  { id: 'agro-ciclo', title: 'Cada etapa deja evidencia', category: 'Trazabilidad', Component: AgroCiclo },
  byId('blockchain'),
  byId('validacion'),
  byId('modelo-b2b'),
  byId('roadmap-equipo'),
].map((slide, index) => ({ ...slide, index }));

export const DECKS: Record<DeckId, DeckDefinition> = {
  hedera: { id: 'hedera', label: 'Hedera', slides: SLIDES },
  agro: { id: 'agro', label: 'Agro', slides: AGRO_SLIDES },
};

export const getDeckFromUrl = (): DeckDefinition => {
  const requested = new URLSearchParams(window.location.search).get('deck');
  return requested === 'agro' ? DECKS.agro : DECKS.hedera;
};
