import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/Provider';

import './displayCardStyle.css';

import EditForm from '../edited/EditForm';

import Modal from '../../modal/Modal';

import { FaRegEdit, FaUserCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const DisplayCard = ({ item }) => {
  const { currentData, setCurrentData } = useContext(DataContext);
  const [isEdit, setIsEdit] = useState(false);

  const deleteFunction = (param) => {
    const filterData = currentData.filter((item) => {
      return item.id != param.id;
    });
    setCurrentData(filterData);
  };

  return (
    <div className='display-cnt'>
      <div className='card-info-cnt'>
        <div className='user-cnt'>
          <FaUserCircle className='user-icon' />
          <p className=' name'>
            <strong className='display-strong'></strong> {item.name}
          </p>
        </div>

        <div className='user-info'>
          <p className='display-text'>
            <strong className='display-strong'></strong> {item.email}
          </p>
          <p className='display-text'>
            <strong className='display-strong'></strong> {item.number}
          </p>
        </div>
      </div>
      <div className='display-btn-cnt'>
        <button
          className='display-edit-btn'
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <FaRegEdit />
        </button>
        <button
          className='display-delete-btn'
          onClick={() => {
            deleteFunction(item);
          }}
        >
          <MdDelete />
        </button>
      </div>

      <div>
        <Modal isOpen={isEdit}>
          <EditForm item={item} setIsEdit={setIsEdit} />
        </Modal>
      </div>
    </div>
  );
};

export default DisplayCard;
