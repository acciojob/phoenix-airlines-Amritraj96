import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetBooking } from '../redux/bookingSlice';

const Confirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { flightDetails, userDetails } = useSelector((state) => state.booking);

  const handleHomeReturn = () => {
    dispatch(resetBooking());
    navigate('/');
  };

  if (!flightDetails || !userDetails) return <p>No booking found.</p>;

  return (
    <div>
      <h2 style={{ color: 'green' }}>Booking Confirmed!</h2>
      <div style={{ border: '1px solid #ccc', padding: '15px', marginTop: '15px' }}>
        <h3>Passenger Details:</h3>
        <p>Name: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        
        <h3>Flight Details:</h3>
        <p>From: {flightDetails.source} To: {flightDetails.destination}</p>
        <p>Date: {flightDetails.date}</p>
        <p>Type: {flightDetails.tripType}</p>
      </div>
      
      {/* Required button selector to return to home page */}
      <button style={{ marginTop: '20px' }} onClick={handleHomeReturn}>
        Return to Home
      </button>
    </div>
  );
};

export default Confirmation;
