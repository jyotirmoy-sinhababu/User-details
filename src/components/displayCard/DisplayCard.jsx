import React, { useContext } from 'react';

import { DataContext } from '../../context/Provider';

const DisplayCard = () => {
  const { currentData } = useContext(DataContext);

  return (
    <div>
      {currentData
        ? currentData?.map((item) => {
            return (
              <form key={item.id}>
                <label>Name :</label>
                <input type='text' value={item.name} />
                <label>Email :</label>
                <input type='email' placeholder='' value={item.email} />
                <label>Number :</label>
                <input type='number' value={item.number} />
              </form>
            );
          })
        : null}
    </div>
  );
};

export default DisplayCard;
