import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Buttons.scss';

function Buttons() {
    const globalState = useContext(store);
    const { letters, mysteryWord } = globalState.state;
    const { dispatch } = globalState;

    const handleClick = (e) => {
        let choice = e.target.value;

        //Compare selected letter with mystery animal
        if(mysteryWord !== null){
            let eureka = mysteryWord.includes(choice);
            // if eureka is false, then dispatch wrong guess, otherwise correct guess
            // eslint-disable-next-line
            let letterChoice = eureka ? dispatch({ type: 'CORRECT_GUESS', payload: choice }) : dispatch({ type: 'WRONG_GUESS' });
        }
        console.log(choice, mysteryWord);
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
