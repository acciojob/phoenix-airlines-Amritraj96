import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./components/Home";
import FlightSearch from "./components/FlightSearch";
import FlightBooking from "./components/FlightBooking";
import Confirmation from "./components/Confirmation";
import '../styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <header style={{ backgroundColor: '#3f51b5', color: 'white', padding: '15px' }}>
            <h2 style={{ margin: 0 }}>Flight Booking App</h2>
          </header>
          <div className="container" style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flight-search" element={<FlightSearch />} />
              <Route path="/flight-booking" element={<FlightBooking />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
