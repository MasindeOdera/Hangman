import React, { useContext } from 'react';
import { store } from '../context/appStore.js';
import '../style/Nav.scss';

function Nav() {
    const globalState = useContext(store);
    const { guess } = globalState.state;

    return (
        <div className="Header">
            <nav>
                <div className="Title">
                    <h2>Hangman</h2>
                </div>
                <div className="Guess">
                    <p>Guesses: { guess }</p>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
