import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Flight Booking App</h1>
      <button 
        style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}
        onClick={() => navigate('/flight-search')}
      >
        SEARCH FLIGHTS HERE
      </button>
    </div>
  );
};

export default Home;
