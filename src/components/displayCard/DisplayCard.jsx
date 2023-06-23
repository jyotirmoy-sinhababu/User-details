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
    <div>
      <p>
        <strong>Name :</strong> {item.name}
      </p>
      <p>
        <strong>Email :</strong> {item.email}
      </p>
      <p>
        <strong>Number :</strong> {item.number}
      </p>
      <div>
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <FaRegEdit />
        </button>
        <button
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
