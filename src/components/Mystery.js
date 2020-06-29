import React, { useContext } from 'react';
import {ProgressContext} from './ProgressContext';
import '../style/Mystery.scss';

function Mystery() {
    // eslint-disable-next-line
    const [stages, animals, letters] = useContext(ProgressContext);
    return (
        <div className="Mystery">
            <h4>{animals[4]}</h4>
        </div>
    )
}

export default Mystery;
