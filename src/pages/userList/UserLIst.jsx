import React from 'react';

import './userListStyle.css';

import Nav from '../../components/nav/Nav';

const UserLIst = () => {
  return (
    <div className='mainUser-cnt'>
      <Nav />
      <div className='userList-noData-msg-cnt'>
        <h1 className='userList-noData-msg'>You have no users</h1>
      </div>
    </div>
  );
};

export default UserLIst;
