import React, { useContext } from 'react';
import {ProgressContext} from '../context/ProgressContext';
import '../style/Hangman.scss';


function Hangman() {
    const { state } = useContext(ProgressContext);
    console.log(state);

    return ( 
        <div className="Hangman">
            <img src={state.stages[6]} alt="Be sure to make this dynamic" />  
        </div>
    )
}

export default Hangman;
