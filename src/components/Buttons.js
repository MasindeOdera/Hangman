import React, { useState, useContext } from 'react';
import {ProgressContext} from './ProgressContext';
import '../style/Buttons.scss';

function Buttons() {
    // eslint-disable-next-line
    const [stages, animals, letters] = useContext(ProgressContext);
    const [clicked, setClicked] = useState('');

    const handleClick = (e) => {
        // setClicked(true);
        let choice = e.target.value;
        if(e.target){
            setClicked(true);
        }
        console.log(choice, clicked);
    }; 

    // const className = clicked ? "Letter:active" : "Letter";

    const alphabet = letters.map(letter => (
        <button
            className="Letter"
            // className={`Letter ${selected ? ":active" : ""}`}
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
