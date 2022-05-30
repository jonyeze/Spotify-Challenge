import React, { useState } from 'react';
import './Header.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonFill, BsFillFileEarmarkMusicFill } from 'react-icons/bs';
import { useDataLayerValue } from '../../context/DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';
import { v4 as uuidv4 } from 'uuid';

const s = new SpotifyWebApi();

const Header = () => {

    const [search, setSearch] = useState({
        name: ''
    });
    const [results, setResults] = useState();
    const { name } = search;

    const [{ user }, dispatch] = useDataLayerValue();


    const onChangeFilter = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitFilter = e => {
        e.preventDefault();
        if (name === '') {
            return;
        }
       
        s.searchTracks(name, { limit: 10 }).then(
            function (search) {
                setResults(search.tracks.items.map((items) =>
                    items.name));
            }
        );
      

    }


    return (
        <div>
            <div className='header'>
                <form className='header__left'
                    onSubmit={onSubmitFilter}
                >
                    <BiSearchAlt2 />
                    <input
                        placeholder='Search for Artists, Songs or Podcasts'
                        type='search'
                        name='name'
                        value={name}
                        onChange={onChangeFilter} />
                </form>
                <div className='header__right'>
                    <BsFillPersonFill alt={user} />
                    <h4>{user?.display_name}</h4>
                </div>
            </div>

            <div className='song'>
                <div className='song__info'>
                   
                    {results?.map(results => (
                        <h1 className='title' key={uuidv4()} > <BsFillFileEarmarkMusicFill 
                        className='icon__music'
                        />{results}</h1>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default Header;