import React from 'react';
import Nav from './Nav';
import Hangman from './Hangman';
import Mystery from './Mystery';
import Buttons from './Buttons';
import { ProgressProvider } from './ProgressContext';
import './App.css';

function App() {
  return (
    <ProgressProvider>
      <div className="App">
        <Nav />
        <Hangman />
        <Mystery />
        <Buttons />
      </div>
    </ProgressProvider>
  );
}

export default App;
