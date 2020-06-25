import React, { useContext } from 'react';
import {ProgressContext} from './ProgressContext';


function Hangman() {
    const [stages] = useContext(ProgressContext);

    return ( 
        <div style={{color:'#000'}}>
            <img style={{backgroundColor:'#000', filter:'invert(1)'}} src={stages[6]} alt="Be sure to make this dynamic" />  
        </div>
    )
}

export default Hangman;
