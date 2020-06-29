import React, { useContext } from 'react';
import {ProgressContext} from './ProgressContext';
import '../style/Hangman.scss';


function Hangman() {
    // eslint-disable-next-line
    const [stages, animals, letters] = useContext(ProgressContext);

    return ( 
        <div className="Hangman">
            <img src={stages[6]} alt="Be sure to make this dynamic" />  
        </div>
    )
}

export default Hangman;
