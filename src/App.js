import React from 'react';
import Nav from './components/Nav';
import Hangman from './components/Hangman';
import Mystery from './components/Mystery';
import Buttons from './components/Buttons';
import { ProgressProvider } from './components/ProgressContext';
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
