import React, {useContext, useState} from 'react';
import listContext from '../../../context/List/ListContext';
import SongContext from '../../../context/Songs/songContext';
import './FormList.css'

const FormList = () => {

    const listsContext = useContext(listContext);
    const { lists } = listsContext;
    

    const SongsContext = useContext(SongContext);
    const { errorLetter , addSong, validateSong, obtainLetters } = SongsContext;

    const [song, setSong] = useState({
        name: ''
    });

    const { name } = song;

    if(!lists) return ;
    const [selectListsFn] = lists;

    const handleChange = e => {
        setSong({
            ...song,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(name.trim() === ''){
            validateSong();
            return;
        }

        song.letterId = selectListsFn.id;
        addSong(song);

        //obtain and filter songs
        obtainLetters(selectListsFn.id);

        setSong({
            name: ''
        })
        
    }

    return ( 
        <div className='Form'>
            <form
            onSubmit={onSubmit}
            >
                <div className='container__'>
                    <input 
                    type='text'
                    className='input__text'
                    placeholder='Name Song...'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    />
                    
                </div>
                <div className='container__btn'>
                    <input 
                    type='submit'
                    className='btn'
                    value='add Song'
                    />

                </div>
            </form>
        {errorLetter ? <p className='error'>the song is mandatory</p> : null}
        </div>
     );
}
 
export default FormList;