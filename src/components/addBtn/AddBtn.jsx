import React from 'react';

import { BiPlus } from 'react-icons/bi';

import './addBtnStyle.css';

const AddBtn = ({ setIsOpen, isOpen }) => {
  return (
    <div className='addBtn-cnt'>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className='addBtn'
      >
        <BiPlus />
      </button>
    </div>
  );
};

export default AddBtn;
