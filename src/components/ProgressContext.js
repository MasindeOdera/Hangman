import React, { createContext } from 'react';

import step0 from "../images/0.png";
import step1 from "../images/1.png";
import step2 from "../images/2.png";
import step3 from "../images/3.png";
import step4 from "../images/4.png";
import step5 from "../images/5.png";
import step6 from "../images/6.png";


export const ProgressContext = createContext();

export const ProgressProvider = props => {
    const stages = [step0, step1, step2, step3, step4, step5, step6];
    const animals = ["frog", "dog", "cat", "mouse", "rabbit", "hare", "horse", "donkey", "elephant", "bird"];
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    return(
        <ProgressContext.Provider value={[stages, animals, letters]}>
            {props.children}
        </ProgressContext.Provider>
    );
}