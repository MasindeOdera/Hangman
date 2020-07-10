import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Mystery.scss';

function Mystery() {
    const globalState = useContext(store);
    const { animals, mysteryWord } = globalState.state;
    const { dispatch } = globalState;

    const handleClick = (e) => {
        //Get random animal from animals array, then save it in store as mystery.
        let randomAnimal = Math.floor(Math.random() * animals.length);
        console.log(animals[randomAnimal]);
        dispatch({ type: 'UPDATE_MYSTERY_WORD', payload: animals[randomAnimal] });
        const letters = animals[randomAnimal].split('');
        dispatch({ type: 'SPLIT_MYSTERY_WORD', payload: letters });
    };

    const mysteryLetters = mysteryWord !== null ? mysteryWord.split('') : null;
    console.log(globalState, mysteryLetters);

    return (
        <div className="Mystery">
            {mysteryWord === null ? 
                <button className="Start" onClick={handleClick}>Start</button> : 
                <div>
                    <h2>Guess the animal: </h2>
                    <div className="Word">
                    { mysteryLetters.map((mysteryLetter, index) => (
                        <h3 key={index}>
                            {mysteryLetter}
                        </h3>
                    )) }
                    </div>
                </div>
            }
        </div>
    )
}

export default Mystery;
