import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Mystery.scss';

function Mystery() {
    const globalState = useContext(store);
    const { animals, mystery } = globalState.state;
    const { dispatch } = globalState;

    const handleClick = (e) => {
        //Get random animal from animals array, then save it in store as mystery.
        let randomAnimal = Math.floor(Math.random() * animals.length);
        console.log(animals[randomAnimal]);
        dispatch({ type: 'UPDATE_MYSTERY_WORD', payload: animals[randomAnimal] });
    };

    return (
        <div className="Mystery">
            {mystery === null ? 
                <button className="Start" onClick={handleClick}>Start</button> : 
                <div><h2>Guess the animal: </h2><h4>{ mystery }</h4></div>
            }
        </div>
    )
}

export default Mystery;
