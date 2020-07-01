import React from 'react';
import Nav from './components/Nav';
import Hangman from './components/Hangman';
import Mystery from './components/Mystery';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hangman />
      <Mystery />
      <Buttons />
    </div>
  );
}

export default App;
