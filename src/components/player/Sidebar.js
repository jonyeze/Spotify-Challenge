import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from '../../context/DataLayer';
import Aside from './Aside/Aside';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <img
                className='sidebar__logo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='logo-spotify' />

            <SidebarOption title="Home" />
            <SidebarOption title="Search" />
            <SidebarOption title="Your Library" />

            <br />
            <strong className='sidebar__title'>PLAYLIST</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} key={playlist.id} />
            ))}
            <br />
            <div>
                <Aside />
            </div>
        </div>

    )
}
export default Sidebar;
