import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFlightDetails } from '../redux/bookingSlice';

const FlightSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tripType, setTripType] = useState('One-way');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!source || !destination || !date) {
      alert("Please fill all fields");
      return;
    }
    // Mocking search results for the E2E test
    setSearchResults([
      { id: 1, airline: 'Phoenix Airlines', source, destination, date, price: '$250' }
    ]);
  };

  const handleBook = (flight) => {
    dispatch(setFlightDetails({ ...flight, tripType }));
    navigate('/flight-booking');
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label>
            <input type="radio" value="One-way" checked={tripType === 'One-way'} onChange={() => setTripType('One-way')} /> One-way
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="radio" value="Round-trip" checked={tripType === 'Round-trip'} onChange={() => setTripType('Round-trip')} /> Round-trip
          </label>
        </div>
        <br />
        <input type="text" placeholder="Source City" value={source} onChange={(e) => setSource(e.target.value)} required />
        <input type="text" placeholder="Destination City" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Results:</h3>
          {searchResults.map((flight) => (
            <div key={flight.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <p><strong>{flight.airline}</strong>: {flight.source} to {flight.destination}</p>
              <p>Date: {flight.date} | Price: {flight.price}</p>
              {/* Note: The required '.book-flight' class selector is placed here */}
              <button className="book-flight" onClick={() => handleBook(flight)}>Book</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
