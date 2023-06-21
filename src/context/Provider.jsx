import { createContext, useState } from 'react';

export const DataContext = createContext();

const GlobalState = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    id: '',
  });
  const [mainData, setMainData] = useState([]);
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
      setUserData({ ...userData, id: idGenerator() });
      setMainData({ ...mainData, userData });
    }
  };
  console.log(mainData);
  const idGenerator = () => {
    return Math.floor(Math.random() * 100000);
  };

  return (
    <DataContext.Provider value={{ setUserData, userData, controlSave }}>
      {children}
    </DataContext.Provider>
  );
};

export default GlobalState;
