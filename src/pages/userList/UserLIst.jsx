import React from 'react';

import './userListStyle.css';

import { BiPlus } from 'react-icons/bi';

import Nav from '../../components/nav/Nav';

const UserLIst = () => {
  return (
    <>
      <Nav />
      <div className='userList-addBtn-cnt'>
        <p className='userList-addBtn-txt'>Add Users</p>
        <button className='userList-addBtn-btn'>
          <BiPlus />
        </button>
      </div>
      <div className='userList-noData-msg-cnt'>
        <h1 className='userList-noData-msg'>You have no users</h1>
      </div>
    </>
  );
};

export default UserLIst;
