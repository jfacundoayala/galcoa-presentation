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
    title: 'Solucion · Pipeline IA y Salida',
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
    id: 'ejemplo',
    index: 6,
    title: '"Los operarios no registran mal por falta de voluntad..."',
    category: 'Contexto',
    Component: Slide4,
  },
  {
    id: 'blockchain',
    index: 7,
    title: 'Por que Blockchain? · Hedera HCS',
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
