import React, { Fragment, useContext } from 'react';
import Forms from './Forms';
import listContext from '../../../context/List/ListContext';
import SongContext from '../../../context/Songs/songContext';
import './FormList.css';

const ListForms = () => {

    const listsContext = useContext(listContext);
    const { lists, clearPlailystFn } = listsContext;

    const SongsContext = useContext(SongContext);
    const { letterState } = SongsContext;

    if (!lists) return null;
    const [selectListsFn] = lists;

    const onClickClear = () => {
        clearPlailystFn(selectListsFn.id);
    }

  


    return (
        <Fragment>
            <h2>{selectListsFn?.name}</h2>

            <ul className='list'>
                {letterState?.lenght === 0 ?
                    null :
                    letterState?.map(forms => (
                        <Forms
                            key={forms.id}
                            forms={forms}
                        />
                    ))}

            </ul>
            <button
                type='button'
                className='clear'
                onClick={onClickClear}>
                Clear Plailyst
            </button>

        </Fragment>
    );
}

export default ListForms;