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
                <h4>{state.mystery}</h4>
            }
        </div>
    )
}

export default Mystery;
