import React, { useContext } from 'react';

import { DataContext } from '../../context/Provider';
import EditForm from '../edited/EditForm';

import Modal from '../../modal/Modal';

const DisplayCard = () => {
  const { currentData } = useContext(DataContext);

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
              </div>
            );
          })
        : null}
      <div>
        <Modal>
          <EditForm />
        </Modal>
      </div>
    </div>
  );
};

export default DisplayCard;
