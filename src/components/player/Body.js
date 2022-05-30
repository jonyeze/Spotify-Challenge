import React from 'react'
import FormList from './plailystsList/FormList';
import ListForms from './plailystsList/ListForms';
import "./Body.css";
import SongRow from './SongRow';
import Header from './Header';
import { useDataLayerValue } from '../../context/DataLayer';


export default function Body() {
    // eslint-disable-next-line no-unused-vars
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className='body'>
            <Header />
            <FormList />
            <ListForms />

            <div className='body__songs'>

                <div className='body__icons'>
                    <h3 className='title'>recommended songs</h3>
                </div>
                {discover_weekly?.tracks.items.map((item) =>
                (<SongRow track={item.track} key={item.track.id} />
                ))}
            </div>
        </div>
    )
}
