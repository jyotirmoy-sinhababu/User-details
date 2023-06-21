import './App.css';

import { Routes, Route } from 'react-router-dom';
import GlobalState from './context/Provider';
import MainPage from './pages/mainPage/MainPage';
import LandingPage from './pages/landingPage/LandingPage';
import UserLIst from './pages/userList/UserLIst';

function App() {
  return (
    <GlobalState>
      {' '}
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />}>
            <Route index element={<MainPage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/user' element={<UserLIst />} />
          </Route>
        </Routes>
      </div>
    </GlobalState>
  );
}

export default App;
