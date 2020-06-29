import React, { useState, useContext } from 'react';
import {ProgressContext} from '../context/ProgressContext';
import '../style/Buttons.scss';

function Buttons() {
    const { state, wrongGuess }= useContext(ProgressContext);
    const [clicked, setClicked] = useState('');

    const handleClick = (e) => {
        let choice = e.target.value;
        if(e.target){
            setClicked(true);
        }
        wrongGuess();
        console.log(choice, clicked);
    };

    const alphabet = state.letters.map(letter => (
        <button
            className="Letter"
            // className={`Letter ${clicked ? ":active" : ""}`}
            key={letter}
            value={letter}
            onClick={handleClick}
        >
            {letter}
        </button>
    ));

    return (
        <div className="Buttons">
            { alphabet }
        </div>
    )
}

export default Buttons;
