import React, { useContext } from 'react';
import {ProgressContext} from '../context/ProgressContext';
import '../style/Nav.scss';

function Nav() {
    const { state } = useContext(ProgressContext);

    return (
        <div className="Header">
            <nav>
                <div className="Title">
                    <h2>Hangman</h2>
                </div>
                <div className="Guess">
                    <p>Guesses: {state.guess}</p>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
