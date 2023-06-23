import { createContext, useState } from 'react';

export const DataContext = createContext();

const GlobalState = ({ children }) => {
  const [currentData, setCurrentData] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    id: '',
  });
  const [err, setErr] = useState({ nameEr: '', maiEr: '', numEr: '' });

  const controlSave = () => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^[0-9]+$/;

    if (!userData.name) {
      setErr({ ...err, nameEr: 'enter the name' });
    }
    if (!nameRegex.test(userData.name)) {
      setErr({ ...err, nameEr: 'wrong format' });
    }
    if (!userData.email) {
      setErr({ ...err, maiEr: 'enter the email' });
    }
    if (!emailRegex.test(userData.email)) {
      setErr({ ...err, maiEr: 'wrong format' });
    }
    if (!userData.number) {
      setErr({ ...err, numEr: 'enter the mobile number' });
    }
    if (!numberRegex.test(userData.number)) {
      setErr({ ...err, numEr: 'wrong format' });
    } else {
      let newData = { ...userData, id: idGenerator() };
      setUserData(newData);
      setCurrentData([...currentData, newData]);
    }
  };

  const idGenerator = () => {
    return Math.floor(Math.random() * 100000) + 1;
  };

  return (
    <DataContext.Provider
      value={{ setUserData, userData, err, controlSave, currentData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default GlobalState;
