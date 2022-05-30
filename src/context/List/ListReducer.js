import {
    LIST_PLAILYST,
    OBTAIN_PLAILYST,
    ADD_PLAILYST,
    CURRENT_LIST,
    CLEAR_PLAILYST,
} from "../../components/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case LIST_PLAILYST:
            return {
                ...state,
                form: true
            }
        case OBTAIN_PLAILYST:
            return {
                ...state,
                lists: action.payload
            }
        case ADD_PLAILYST:
            return {
                ...state,
                list: [...state.list, action.payload],
                form: false
            }
        case CURRENT_LIST:
            return {
                ...state,
                lists: state.list.filter(lists => lists.id === action.payload)
            }
        case CLEAR_PLAILYST:
            return {
                ...state,
                list: state.list.filter(lists => lists.id !== action.payload),
                lists: null
            }


        default:
            return state;
    }
}