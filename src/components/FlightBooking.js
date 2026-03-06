import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../redux/bookingSlice';

const FlightBooking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flightDetails = useSelector((state) => state.booking.flightDetails);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('All fields are required.');
      return;
    }
    
    // Dispatch to Redux
    dispatch(setUserDetails({ name, email, phone }));
    navigate('/confirmation');
  };

  if (!flightDetails) return <p>No flight selected. Please go back and search.</p>;

  return (
    <div>
      <h2>Enter User Details</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        {/* Cypress test specifically looks for input[type='text'] */}
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: '10px' }} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '10px' }} />
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ marginBottom: '10px' }} />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default FlightBooking;
