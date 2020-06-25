import React from 'react';
import './Nav.scss';

function Nav() {
    return (
        <div className="Header">
            <nav>
                <div className="Title">
                    <h2>Hangman</h2>
                </div>
                <div className="Guess">
                    <p>Guesses: 6</p>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
