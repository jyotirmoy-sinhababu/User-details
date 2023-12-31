import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/Provider';

import './nav.css';

const Nav = () => {
  const { searchFunction } = useContext(DataContext);
  return (
    <div className='nav-cnt'>
      <div className='logo-hdng-cnt'>
        <div className='logo'>K</div>
        <div className='nav-txt-cnt'>
          <p className='nav-txt'>User List</p>
        </div>
      </div>
      <form className='nav-form'>
        <input
          onChange={(e) => {
            searchFunction(e.target.value);
          }}
          type='search'
          placeholder='search by name'
          className='nav-search-bar'
        />
      </form>
    </div>
  );
};

export default Nav;
