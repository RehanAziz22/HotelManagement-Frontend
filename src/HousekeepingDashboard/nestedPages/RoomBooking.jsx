// This page is used to book a room based on the room number passed in the URL params
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField, Snackbar, Alert, Box } from '@mui/material';
import axios from 'axios';

const RoomBooking = () => {
  const { roomNumber } = useParams();
  const [guestName, setGuestName] = useState('');
  const [guestContact, setGuestContact] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http:/localhost:3000/api/room/${roomNumber}/book`, {
        guestName,
        guestContact,
        checkInDate,
        checkOutDate,
      });
      setSnackbarMessage('Room booked successfully.');
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage('Error booking room.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Guest Name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Guest Contact"
          value={guestContact}
          onChange={(e) => setGuestContact(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Check-in Date"
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Check-out Date"
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Book Room
        </Button>
      </form>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RoomBooking;
