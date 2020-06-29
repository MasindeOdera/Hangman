import React, { useContext } from 'react';
import {ProgressContext} from './ProgressContext';
import '../style/Nav.scss';

function Nav() {
    const [stages] = useContext(ProgressContext);

    return (
        <div className="Header">
            <nav>
                <div className="Title">
                    <h2>Hangman</h2>
                </div>
                <div className="Guess">
                    <p>Guesses: {stages.length -1}</p>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
