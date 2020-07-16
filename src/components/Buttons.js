import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Buttons.scss';

function Buttons() {
    const globalState = useContext(store);
    const { letters, mysteryWord } = globalState.state;
    const { dispatch } = globalState;

    const handleClick = (e) => {
        e.preventDefault();
        let choice = e.target.value;
        let letter = e.target.id;
        
        //If button is clicked & game has started, then disable button.
        if(e.target.id && mysteryWord !== null){
            e.target.disabled = true;
        }

        //Compare selected letter with mystery animal
        if(mysteryWord !== null){
            let eureka = mysteryWord.includes(letter);
            // if eureka is false, then dispatch wrong guess, otherwise correct guess
            if(eureka) {
                dispatch({ type: 'CORRECT_GUESS', payload: letter });
            }
            else {
                dispatch({ type: 'WRONG_GUESS' });
            }
        }

        //Improve user experince by scrolling up to the hangman image.
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log(choice, mysteryWord, letters);
    };

    const alphabet = letters.map((letter, index) => (
        <button
            className="Letter"
            key={index}
            id={letter}
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
