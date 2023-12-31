import React from 'react';
import { useNavigate } from 'react-router-dom';

import './mainPageStyle.css';

import workingPersonImg from '../../assests/images/illustration-working.svg';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className='mainPage-cnt'>
      <div className='mainPage-txt-area'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {' '}
          <h1 className='mainPage-header'>Make a list of users</h1>
          <p className='mainPage-para'>
            Get your user details in sync. Keep every user details up to date
            with our EDIT feature.
          </p>
        </div>

        <div className='mainPage-btn-cnt'>
          <button
            onClick={() => {
              navigate('/user');
            }}
            className='mainPage-btn'
          >
            Show my users
          </button>
        </div>
      </div>
      <div className='mainPage-img-cnt'>
        <img
          className='mainPage-img'
          src={workingPersonImg}
          alt='image is missing'
        />
      </div>
    </div>
  );
};

export default MainPage;
