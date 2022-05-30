import React, {useReducer} from 'react';
import SongContext from './songContext';
import SongReducer from './songReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    LETTER_PLAILYST,
    ADD_SONG,
    VALIDATE_SONG,
    CLEAR_SONG
} from '../../components/types/index';


const SongState = props => {
    

    const initialState = {
        letter: [],
        letterState: null,
        errorLetter: false
    }

    const [state, dispatch] = useReducer(SongReducer, initialState);

    const obtainLetters = letterId => {
        dispatch({
            type: LETTER_PLAILYST,
           payload: letterId
        })
    }

    const addSong = lists => {
        lists.id = uuidv4();
        dispatch({
            type: ADD_SONG,
            payload: lists
        })
    }
    const validateSong = () => {
        dispatch({
            type: VALIDATE_SONG
        })
    }
    const clearSong = id => {
        dispatch({
            type: CLEAR_SONG,
            payload: id
        })
    }

    return (
        <SongContext.Provider
        value={{
            letter: state.letter,
            letterState : state.letterState,
            errorLetter: state.errorLetter,
            obtainLetters,
            addSong,
            validateSong,
            clearSong
        }}
        >
            {props.children}
        </SongContext.Provider>
    )
}

export default SongState;
