
import {
    LETTER_PLAILYST,
    ADD_SONG,
    VALIDATE_SONG,
    CLEAR_SONG
} from "../../components/types";


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case LETTER_PLAILYST:
            return {
                ...state,
                letterState: state.letter.filter(lists => lists.letterId === action.payload)
            }
        case ADD_SONG:
            return {
                ...state,
                letter: [...state.letter, action.payload],
                errorLetter: false
            }
            case VALIDATE_SONG:
                return {
                    ...state,
                    errorLetter: true
                }
            case  CLEAR_SONG:
                return {
                    ...state,
                    letter: state.letter.filter(lists => lists.id !== action.payload)
                }

        default:
            return state;
    }
}