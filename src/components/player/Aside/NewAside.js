import React, { Fragment, useState, useContext } from 'react';
import listContex from '../../../context/List/ListContext';
import './NewAside.css'

const Aside = () => {
    const listContext = useContext(listContex);

    const { form, seeListFn, addPlailystFn } = listContext;


    const [plailyst, setPlailyst] = useState({
        name: ''
    });
    const { name } = plailyst;

    const onChangePlailyst = e => {
        setPlailyst({
            ...plailyst,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitPlailyst = e => {
        e.preventDefault();
        if (name === '') {
            return;
        }
        addPlailystFn(plailyst);

        setPlailyst({
            name: ''
        })

    }


    return (
        <Fragment>


            {
                form ? (
                    <form
                        className='Form'
                        onSubmit={onSubmitPlailyst}
                    >
                        <div className='form__'>
                            <input
                                type='text'
                                className='input'
                                name='name'
                                value={name}
                                onChange={onChangePlailyst}
                            />
                            <span className="input-border"></span>
                        </div>
                        <input
                            type='submit'
                            className='noselect'
                            value='Add Playlist'
                        />
                    </form>
                ) : (<button
                    type='button'
                    className='noselect'
                    onClick={() => seeListFn()}
                >Add Plailyst</button>)
            }
        </Fragment>
    );
}

export default Aside;