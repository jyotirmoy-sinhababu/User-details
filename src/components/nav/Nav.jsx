import React from 'react';

const Nav = () => {
  return (
    <div>
      <div>
        <h1>Keep track..</h1>
      </div>
      <form>
        <input
          type='search'
          placeholder='search by name'
          className='search-bar'
          name='userName'
        />
      </form>
    </div>
  );
};

export default Nav;
