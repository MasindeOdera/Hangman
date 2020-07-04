import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Buttons.scss';

function Buttons() {
    const globalState = useContext(store);
    const { letters, mysteryCharacters } = globalState.state;
    const { dispatch } = globalState;

    const handleClick = (e) => {
        let choice = e.target.value;

        //Compare selected letter with mystery animal
        if(mysteryCharacters !== null){
            let eureka = mysteryCharacters.includes(choice);
            // eslint-disable-next-line
            let letterChoice = eureka ? null : dispatch({ type: 'WRONG_GUESS' });
        }
        console.log(choice, mysteryCharacters);
    };

    const alphabet = letters.map(letter => (
        <button
            className="Letter"
            // className={`Letter ${clicked ? ":active" : ""}`}
            key={letter}
            id={letter}
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
