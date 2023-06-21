import React, { useState } from 'react';

import './userListStyle.css';

import Modal from '../../modal/Modal';

import Nav from '../../components/nav/Nav';
import AddBtn from '../../components/addBtn/AddBtn';
import UserForm from '../../components/userForm/UserForm';

const UserLIst = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='mainUser-cnt'>
      <Nav />
      <div className='userList-noData-msg-cnt'>
        <h1 className='userList-noData-msg'>You have no users</h1>
      </div>
      <div>
        <Modal isOpen={isOpen}>
          <UserForm />
        </Modal>
      </div>
      <div>
        <AddBtn setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default UserLIst;
