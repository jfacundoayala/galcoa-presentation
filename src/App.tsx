import React from 'react';
import { Deck } from './components/Deck';
import { getDeckFromUrl } from './data/slides';
import { Demo } from './components/Demo';

export const App: React.FC = () => {
  if (window.location.pathname.replace(/\/+$/, '') === '/demo') return <Demo />;
  return <Deck deck={getDeckFromUrl()} />;
};

export default App;
