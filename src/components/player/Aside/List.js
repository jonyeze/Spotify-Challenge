import React, { useContext, useEffect } from 'react';
import ListPlailyst from './Listplailyst';
import listContex from '../../../context/List/ListContext';


const List = () => {
//extract list to initialState
const listContext = useContext(listContex);
const { list, obtainPlailystFn } = listContext;
    
useEffect(() => {
    obtainPlailystFn();
},[]);

if(list.lenght === 0) return null;
    return ( 
        <div className='List__plailyst'>
            {list.map(list => (
                <ListPlailyst 
                    list={list} key={list.id}/>
            ))}
        </div>
     );
}
 
export default List;