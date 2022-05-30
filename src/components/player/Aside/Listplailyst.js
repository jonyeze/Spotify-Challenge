import React, { useContext } from 'react';
import listContex from '../../../context/List/ListContext';
import SongContext from '../../../context/Songs/songContext';
import '../Sidebar.css';

const ListPlailyst = ({ list }) => {
    const listContext = useContext(listContex);
    const { selectListsFn } = listContext;

    const SongsContext = useContext(SongContext);
    const { obtainLetters } = SongsContext;


    const selectSong = id => {
        selectListsFn(id);
        obtainLetters(id);
    }


    return (

        <div
            type='button'
            className='sidebarOption'
            onClick={() => selectSong(list.id)}
        >
            <p>{list.name}</p>
        </div>



    );
}

export default ListPlailyst;