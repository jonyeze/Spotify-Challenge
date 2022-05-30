import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

import listContext from './ListContext';
import listReducer from './ListReducer';
import {
    LIST_PLAILYST,
    OBTAIN_PLAILYST,
    ADD_PLAILYST,
    CURRENT_LIST,
    CLEAR_PLAILYST,
} from '../../components/types/index';



const ListState = props => {

    const list = [];

    

    const initialState = {
        list : [],
        form: false,
        lists: null,
        songs: [],
        
    }

    const [state, dispatch] = useReducer(listReducer, initialState);

    const seeListFn = () => {
        dispatch({
            type: LIST_PLAILYST
        })
    }
    const obtainPlailystFn = () => {
        dispatch({
            type: OBTAIN_PLAILYST,
            payload: list
        })
    }

    const addPlailystFn = list => {
        list.id = uuidv4();
        dispatch({
            type: ADD_PLAILYST,
            payload: list
        })
    }
    const selectListsFn = listsId => {
        dispatch({
            type: CURRENT_LIST,
            payload: listsId
        })
    }
    const clearPlailystFn = listsId => {
        dispatch({
            type: CLEAR_PLAILYST,
            payload: listsId
        })
    }
  

    return (
        <listContext.Provider
        value={{
            list: state.list,
            form: state.form,
            lists: state.lists,
            songs: state.songs,
            seeListFn,
            obtainPlailystFn,
            addPlailystFn,
            selectListsFn,
            clearPlailystFn,
            }}>
            {props.children}
        </listContext.Provider>
    )
}

export default ListState;