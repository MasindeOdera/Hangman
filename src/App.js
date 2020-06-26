import React from 'react';
import Nav from './Nav';
import Hangman from './Hangman';
import Buttons from './Buttons';
import { ProgressProvider } from './ProgressContext';
import './App.css';

function App() {
  return (
    <ProgressProvider>
      <div className="App">
        <Nav />
        <Hangman />
        <Buttons />
      </div>
    </ProgressProvider>
  );
}

export default App;
