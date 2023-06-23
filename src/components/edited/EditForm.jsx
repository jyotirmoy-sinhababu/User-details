import React from 'react';

import { RxCross1 } from 'react-icons/rx';
import user from '../../assests/images/computer-user.png';

import './editStyle.css';

const EditForm = () => {
  return (
    <div className='main-edit-form'>
      <div className='userForm-btn-cnt'>
        <button
          className='userForm-btn'
          // onClick={() => {
          //   setIsOpen(false);
          // }}
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
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   controlSave();
          // }}
        >
          <label>Enter the name</label>
          <input
            // onChange={(e) => {
            //   handleChange(e);
            // }}
            name='name'
            className='inputField'
            type='text'
          />
          <label>Enter the email</label>
          <input
            // onChange={(e) => {
            //   handleChange(e);
            // }}
            name='email'
            className='inputField'
            type='email'
          />
          <label>Enter the phone number</label>
          <input
            // onChange={(e) => {
            //   handleChange(e);
            // }}
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

export default EditForm;
