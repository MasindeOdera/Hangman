import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Buttons.scss';

function Buttons() {
    const globalState = useContext(store);
    const { letters, mystery } = globalState.state;
    const { dispatch } = globalState;

    const handleClick = (e) => {
        let choice = e.target.value;

        //Compare selected letter with mystery animal
        if(mystery !== null){
            let eureka = mystery.includes(choice);
            // eslint-disable-next-line
            let letterChoice = eureka ? null : dispatch({ type: 'WRONG_GUESS' });
        }
        console.log(choice, mystery);
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
