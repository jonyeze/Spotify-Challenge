import React, { useContext } from 'react';
import SongContext from '../../../context/Songs/songContext';
import listContext from '../../../context/List/ListContext';
import './FormList.css';
import { BsSpotify } from 'react-icons/bs';

const Forms = ({ forms }) => {

    const SongsContext = useContext(SongContext);
    const { clearSong, obtainLetters } = SongsContext;

    const listsContext = useContext(listContext);
    const { lists } = listsContext;

    const [ListId] = lists;

    const clearSongFn = id => {
        clearSong(id);
        obtainLetters(ListId.id)
    }

    return (
        <li className='li'>

            <p className='name'>
                <BsSpotify className='icon' />
                {forms.name}</p>
            <div>
                <button className='clear space'
                    onClick={() => clearSongFn(forms.id)}
                >Clear</button>
            </div>
        </li>


    );
}

export default Forms;