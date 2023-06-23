import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/Provider';

import './userListStyle.css';

import Modal from '../../modal/Modal';

import Nav from '../../components/nav/Nav';
import AddBtn from '../../components/addBtn/AddBtn';
import UserForm from '../../components/userForm/UserForm';
import DisplayCard from '../../components/displayCard/DisplayCard';

const UserLIst = () => {
  const { currentData } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='mainUser-cnt'>
      <Nav />
      {currentData.length ? (
        <DisplayCard />
      ) : (
        <div className='userList-noData-msg-cnt'>
          <h1 className='noData-msg'>You have no User</h1>
        </div>
      )}
      <div>
        <Modal isOpen={isOpen}>
          <UserForm setIsOpen={setIsOpen} />
        </Modal>
      </div>
      <div>
        <AddBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default UserLIst;
