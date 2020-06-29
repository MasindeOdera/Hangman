import React, { useContext } from 'react';
import {ProgressContext} from '../context/ProgressContext';
import '../style/Mystery.scss';

function Mystery() {
    const { state, startGame } = useContext(ProgressContext);

    const handleClick = (e) => {
        startGame();
    };

    return (
        <div className="Mystery">
            {state.mystery === null ? 
                <button className="Start" onClick={handleClick}>Start</button> : 
                <div><h2>Guess the animal: </h2><h4>{state.mystery}</h4></div>
            }
        </div>
    )
}

export default Mystery;
