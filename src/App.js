import './App.css';

import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<MainPage />} />
          <Route path='/main' element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
