import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Mystery.scss';

function Mystery() {
    const globalState = useContext(store);
    const { animals, mysteryWord, answer, mysteryLetters } = globalState.state;
    const { dispatch } = globalState;

    const handleClick = (e) => {
        //Get random animal from animals array, then save it in store as mystery.
        let randomAnimal = Math.floor(Math.random() * animals.length);

        //Save the randomly generated animal to the appStore
        dispatch({ type: 'UPDATE_MYSTERY_WORD', payload: animals[randomAnimal] });

        //Split up the mystery word and save it as mysteryLetters array in appStore.
        const letters = animals[randomAnimal].split('');
        dispatch({ type: 'SPLIT_MYSTERY_WORD', payload: letters });

    };

    console.log(globalState, mysteryLetters, mysteryWord, answer);

    return (
        <div className="Mystery">
            {mysteryWord === null ? 
                <button className="Start" onClick={handleClick}>Start</button> : 
                <div>
                    <h2>Guess the animal: </h2>
                    <div className="Word">
                    { mysteryLetters.map((mysteryLetter, index) => (
                        <span key={index} className={`Answer${answer.includes(mysteryLetter) ?  ":active" : ""}`}>
                            {mysteryLetter}
                        </span>
                    )) }
                    </div>
                </div>
            }
        </div>
    )
}

export default Mystery;
