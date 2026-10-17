import React from 'react';
import { Deck } from './components/Deck';
import { getDeckFromUrl } from './data/slides';

export const App: React.FC = () => {
  return <Deck deck={getDeckFromUrl()} />;
};

export default App;
