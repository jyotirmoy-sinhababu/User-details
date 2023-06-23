import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/Provider';

import './displayCardStyle.css';

import EditForm from '../edited/EditForm';

import Modal from '../../modal/Modal';

import { FaRegEdit } from 'react-icons/fa';
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
      <p className='display-text'>
        <strong className='display-strong'>Name :</strong> {item.name}
      </p>
      <p className='display-text'>
        <strong className='display-strong'>Email :</strong> {item.email}
      </p>
      <p className='display-text'>
        <strong className='display-strong'>Number :</strong> {item.number}
      </p>
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
        <div>
          <Modal isOpen={isEdit}>
            <EditForm item={item} setIsEdit={setIsEdit} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
