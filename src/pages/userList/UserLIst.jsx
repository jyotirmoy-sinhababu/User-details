import React, { useState } from 'react';

import './userListStyle.css';

import Nav from '../../components/nav/Nav';
import AddBtn from '../../components/addBtn/AddBtn';
import UserForm from '../../components/userForm/UserForm';

const UserLIst = () => {
  const [isForm, setIsForm] = useState(false);
  return (
    <div className='mainUser-cnt'>
      <Nav />
      <div className='userList-noData-msg-cnt'>
        <h1 className='userList-noData-msg'>You have no users</h1>
      </div>
      <div>
        <AddBtn setIsForm={setIsForm} />
      </div>
      <div>{!isForm ? <UserForm /> : null}</div>
    </div>
  );
};

export default UserLIst;
