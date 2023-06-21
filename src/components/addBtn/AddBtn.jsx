import React from 'react';

import { BiPlus } from 'react-icons/bi';

import './addBtnStyle.css';

const AddBtn = ({ setIsOpen }) => {
  return (
    <div className='addBtn-cnt'>
      <button className='addBtn'>
        <BiPlus />
      </button>
    </div>
  );
};

export default AddBtn;
