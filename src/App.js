import React from 'react';
import Nav from './Nav';
import Hangman from './Hangman';
import { ProgressProvider } from './ProgressContext';
import './App.css';

function App() {
  return (
    <ProgressProvider>
      <div className="App">
        <Nav />
        <Hangman />
      </div>
    </ProgressProvider>
  );
}

export default App;
