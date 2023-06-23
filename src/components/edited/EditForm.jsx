import React, { useState, useContext } from 'react';

import { RxCross1 } from 'react-icons/rx';
import user from '../../assests/images/computer-user.png';

import { DataContext } from '../../context/Provider';

import './editStyle.css';

const EditForm = ({ setIsEdit, item }) => {
  const { setCurrentData, currentData, setErr, err } = useContext(DataContext);
  const [editedData, setEditedData] = useState(item);

  const handleEdit = (param) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^[0-9]+$/;
    if (!param.name) {
      setErr({ ...err, nameEr: 'enter the name' });
    } else if (!nameRegex.test(param.name)) {
      setErr({ ...err, nameEr: 'wrong format' });
    } else if (!param.email) {
      setErr({ ...err, maiEr: 'enter the email' });
    } else if (!emailRegex.test(param.email)) {
      setErr({ ...err, maiEr: 'wrong format' });
    } else if (!param.number) {
      setErr({ ...err, numEr: 'enter the mobile number' });
    } else if (!numberRegex.test(param.number)) {
      setErr({ ...err, numEr: 'wrong format' });
    } else {
      const filterData = currentData.filter((item) => {
        return item.id != param.id;
      });
      filterData.push(param);
      setCurrentData(filterData);
    }
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
            setIsEdit(false);
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
          {err ? <p className='er-txt'>{err.nameEr}</p> : null}
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
          {err ? <p className='er-txt'>{err.maiEr}</p> : null}
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
          {err ? <p className='er-txt'>{err.numEr}</p> : null}

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
