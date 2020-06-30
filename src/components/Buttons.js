import React, { useContext } from 'react';
import {ProgressContext} from '../context/ProgressContext';
import '../style/Buttons.scss';

function Buttons() {
    const { state, wrongGuess }= useContext(ProgressContext);
    // const [state, setState] = useState({answer:""});
    console.log(state);

    const handleClick = (e) => {
        let choice = e.target.value;
        console.log(state.mystery);
        //Compare selected letter with mystery animal
        if (state.mystery !== null){
            if(state.mystery.has(choice)) {
                //show letter
            }
            else {
                wrongGuess();
            }
        }
        console.log(choice);
    };

    const alphabet = state.letters.map(letter => (
        <button
            className="Letter"
            // className={`Letter ${clicked ? ":active" : ""}`}
            key={letter}
            id={letter}
            value={letter}
            onClick={handleClick}
        >
            {letter}
        </button>
    ));

    return (
        <div className="Buttons">
            { alphabet }
        </div>
    )
}

export default Buttons;
