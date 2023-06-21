import { createContext, useState } from 'react';

import { createContext } from 'react';

export const DataContext = createContext();

const GlobalState = ({ children }) => {
  const [userData, setUserData] = useState();

  return (
    <DataContext.Provider value={{ setUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export default GlobalState;
