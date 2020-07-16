import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Hangman.scss';


function Hangman() {
    const globalState = useContext(store);
    const { stages, guess } = globalState.state;

    // Using state.guess as the integer, the hangman stages are updated.
    return ( 
        <div className="Hangman">
            <img src={stages[ guess ]} alt={`You have ${guess} guesses left.`} />  
        </div>
    )
}

export default Hangman;
