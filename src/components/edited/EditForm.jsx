import React, { useState, useContext } from 'react';

import { RxCross1 } from 'react-icons/rx';
import user from '../../assests/images/computer-user.png';

import { DataContext } from '../../context/Provider';

import './editStyle.css';

const EditForm = ({ setIsEdit, item }) => {
  const { setCurrentData, currentData } = useContext(DataContext);
  const [editedData, setEditedData] = useState(item);
  console.log(item);
  const handleEdit = (param) => {
    const filterData = currentData.filter((item) => {
      return item.id != param.id;
    });
    filterData.push(param);
    setCurrentData(filterData);
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='main-userForm-cnt'>
      <div className='userForm-btn-cnt'>
        <button
          className='userForm-btn'
          onClick={() => {
            setIsEdit(false);
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
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit(editedData);
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
            value={editedData.name}
          />
          <label>Enter the email</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name='email'
            className='inputField'
            type='email'
            value={editedData.email}
          />
          <label>Enter the phone number</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name='number'
            className='inputField'
            type='number'
            value={editedData.number}
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
