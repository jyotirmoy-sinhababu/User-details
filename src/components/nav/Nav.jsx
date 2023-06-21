import React from 'react';

import './nav.css';

const Nav = () => {
  return (
    <div className='nav-cnt'>
      <div className='nav-txt-cnt'>
        <p className='nav-txt'>Keep track..</p>
      </div>
      <form className='nav-form'>
        <input
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
