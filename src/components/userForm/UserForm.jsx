import React from 'react';
import { RxCross1 } from 'react-icons/rx';

import { useContext } from 'react';
import { DataContext } from '../../context/Provider';

import './userFormStyle.css';
import user from '../../assests/images/computer-user.png';

const UserForm = ({ setIsOpen }) => {
  const { userData, setUserData, controlSave } = useContext(DataContext);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData);
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
        <form
          className='form'
          onSubmit={() => {
            controlSave();
          }}
        >
          <label>Enter the name</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name='name'
            className='inputField'
            type='text'
          />
          <label>Enter the email</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name='email'
            className='inputField'
            type='email'
          />
          <label>Enter the phone number</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name='number'
            className='inputField'
            type='number'
          />
          <div className='form-btn-cnt'>
            <button type='submit' className='form-btn'>
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
