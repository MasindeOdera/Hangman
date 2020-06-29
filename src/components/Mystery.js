import React, { useContext } from 'react';
import {ProgressContext} from '../context/ProgressContext';
import '../style/Mystery.scss';

function Mystery() {
    const { state } = useContext(ProgressContext);

    let randomAnimal = Math.floor(Math.random() * state.animals.length);
    let choice = state.animals[randomAnimal];
    console.log(choice);

    // const mysteryAnimal = () => {
    //     let randomAnimal = Math.floor(Math.random() * state.animals.length);
    //     let choice = state.animals[randomAnimal];
    //     setGuess(choice);
        // console.log(guess);
        // setState({
        //     guess: state.animals[randomAnimal]
        // });
    return (
        <div className="Mystery">
            <h4>{choice}</h4>
        </div>
    )
}

export default Mystery;
