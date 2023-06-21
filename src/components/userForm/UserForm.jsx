import React from 'react';
import { RxCross1 } from 'react-icons/rx';

import './userFormStyle.css';

import user from '../../assests/images/computer-user.png';

const UserForm = ({ setIsOpen }) => {
  return (
    <div className='main-userForm-cnt'>
      <div className='userForm-btn-cnt'>
        <button
          className='userForm-btn'
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <RxCross1 />
        </button>
      </div>
      <div className='form-cnt'>
        <div className='userForm-img-cnt'>
          <img className='userForm-img' src={user} alt='nothing ' />
        </div>
        <form className='form'>
          <label>Enter the name</label>
          <input className='inputField' type='text' />
          <label>Enter the email</label>
          <input className='inputField' type='email' />
          <label>Enter the phone number</label>
          <input className='inputField' type='number' />
          <div className='form-btn-cnt'>
            <button className='form-btn'>SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
