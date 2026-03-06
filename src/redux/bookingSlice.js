import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    flightDetails: null,
    userDetails: null,
  },
  reducers: {
    setFlightDetails: (state, action) => {
      state.flightDetails = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    resetBooking: (state) => {
      state.flightDetails = null;
      state.userDetails = null;
    }
  },
});

export const { setFlightDetails, setUserDetails, resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
