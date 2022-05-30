import React from 'react';
import NewAside from './NewAside';
import List from './List';
import '../SidebarOption.css';

const Aside = () => {


    return (
        <aside>
            <div className='list'>
                <List />
            </div>
            <NewAside />
        </aside>
    );
}

export default Aside;