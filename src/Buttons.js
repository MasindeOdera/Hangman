import React, { useContext } from 'react';
import {ProgressContext} from './ProgressContext';
import './Buttons.scss';

function Buttons() {
    // eslint-disable-next-line
    const [stages, animals, letters] = useContext(ProgressContext);

    const handleClick = (e) => {
        let choice = e.target.value;
        console.log(choice);
    }; 

    const alphabet = letters.map(letter => (
        <button
            className="Letter"
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
