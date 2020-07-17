import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Buttons.scss';

function Buttons() {
    const globalState = useContext(store);
    const { letters, mysteryWord, mysteryLetters, answer, guess } = globalState.state;
    const { dispatch } = globalState;

    const handleClick = (e) => {
        e.preventDefault();
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
    };

    const handleClickRestart = (e) => {
        window.location.reload(true);
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

    //Restart the game, it is only displayed if either victory or loss is present. Controlled in return.
    const restart = <button className="Restart" onClick={handleClickRestart}>Restart</button>;

    //Only victors see this message.
    const victory = mysteryLetters.length === answer.length && mysteryWord !== null ? 
        <h4>Congratulations! You guessed correctly.</h4> : 
        null;

    //Losers are told what the word was.
    const loss = guess === 0 ? 
        <h4>You used up 6 guesses! The word was <b>{mysteryWord}</b>.</h4> : 
        null;

    //conclusion is responsible for displaying the consequences of the letters selected.
    const conclusion = victory || loss;

    return (
        <div className="Buttons">
            { conclusion }
            { !conclusion ? alphabet : null }
            { victory  || loss ? restart : null }
        </div>
    )
}

export default Buttons;
