import React, {createContext, useReducer} from 'react';

import step6 from "../images/0.png";
import step5 from "../images/1.png";
import step4 from "../images/2.png";
import step3 from "../images/3.png";
import step2 from "../images/4.png";
import step1 from "../images/5.png";
import step0 from "../images/6.png";

const initialState = {
    guess: 6,
    stages: [step0, step1, step2, step3, step4, step5, step6],
    animals: ["frog", "dog", "cat", "mouse", "rabbit", "hare", "horse", "donkey", "elephant", "bird"],
    letters: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    mysteryWord: null,
    mysteryLetters: [],
    answer: [],
    usedLetter:"",
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case 'CORRECT_GUESS':
          return {
              ...state,
              answer: [...state.answer, action.payload],
            };
        case 'WRONG_GUESS':
            return {
                ...state,
                guess: state.guess > 0 ? state.guess - 1 : 0,
              };
        case 'UPDATE_MYSTERY_WORD':
            return {
                ...state,
                mysteryWord: action.payload,
              };
        case 'SPLIT_MYSTERY_WORD':
            return {
                ...state,
                mysteryLetters: action.payload,
              };
        default:
            return initialState;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };