import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/Provider';

import './nav.css';

const Nav = () => {
  const { searchFunction } = useContext(DataContext);
  const [searchName, setSearchName] = useState('');
  return (
    <div className='nav-cnt'>
      <div className='nav-txt-cnt'>
        <p className='nav-txt'>Keep track..</p>
      </div>
      <form className='nav-form'>
        <input
          onChange={(e) => {
            setSearchName({ ...searchName, [e.target.name]: e.target.value });
            searchFunction(searchName.userName);
          }}
          type='search'
          placeholder='search by name'
          className='nav-search-bar'
          name='userName'
        />
      </form>
    </div>
  );
};

export default Nav;
