import React, { useContext, useState } from 'react';

import { DataContext } from '../../context/Provider';
import EditForm from '../edited/EditForm';

import Modal from '../../modal/Modal';
import { FaRegEdit } from 'react-icons/fa';

const DisplayCard = () => {
  const { currentData } = useContext(DataContext);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {currentData
        ? currentData?.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  <strong>Name :</strong>
                  {item.name}
                </p>
                <p>
                  <strong>Email :</strong>
                  {item.email}
                </p>
                <p>
                  <strong>Number :</strong>
                  {item.number}
                </p>
                <div>
                  <button
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    <FaRegEdit />
                  </button>
                  <button></button>
                </div>
              </div>
            );
          })
        : null}
      <div>
        <Modal isOpen={isEdit}>
          <EditForm setIsEdit={setIsEdit} />
        </Modal>
      </div>
    </div>
  );
};

export default DisplayCard;
