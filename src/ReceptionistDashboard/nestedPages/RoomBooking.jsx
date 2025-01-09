import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, TextField, Snackbar, Alert, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { toast } from 'react-toastify';

const RoomBooking = () => {
  const { id } = useParams();
  const [rooms, setRooms] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const [formData, setFormData] = useState({
    guestName: user?.name || '',
    guestContact: user?.contact || '',
    checkInDate: '',
    checkOutDate: '',
    roomNumber: ''
  });
  const [billAmount, setBillAmount] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/room/')
      .then(response => {
        const availableRooms = response.data.data.filter(room => room.status === 'available' && room.availability);
        setRooms(availableRooms);
      })
      .catch(error => console.error('Error fetching room data:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { checkInDate, checkOutDate, guestName, guestContact, roomNumber } = formData;
    const selectedRoom = rooms.find(room => room.roomNumber === roomNumber);

    if (!selectedRoom) {
      toast.error('Please select a valid room.');
      return;
    }

    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const daysStayed = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    if (daysStayed <= 0) {
      toast.error('Check-out date must be after check-in date.');
      return;
    }

    const totalBill = daysStayed * selectedRoom.pricePerNight;
    setBillAmount(totalBill);

    try {
      await axios.post('http://localhost:3000/api/room/book', {
        guestId: user._id,
        guestName,
        guestContact,
        checkInDate,
        checkOutDate,
        roomNumber,
        totalBill
      });
      setSnackbarMessage(`Room booked successfully! Total Bill: $${totalBill}`);
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage('Error booking room.');
      setOpenSnackbar(true);
      console.error('Booking error:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
      <Typography variant="h5">Book a Room</Typography>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', width: '100%' }}>
        <TextField
          label="Guest Name"
          name="guestName"
          value={formData.guestName}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Guest Contact"
          name="guestContact"
          value={formData.guestContact}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Room Number</InputLabel>
          <Select
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          >
            {rooms.map((room) => (
              <MenuItem key={room.roomNumber} value={room.roomNumber}>
                {room.roomNumber} - {room.roomType} (${room.pricePerNight} per night)
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Check-in Date"
          name="checkInDate"
          type="date"
          value={formData.checkInDate}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          margin="normal"
        />
        <TextField
          label="Check-out Date"
          name="checkOutDate"
          type="date"
          value={formData.checkOutDate}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          margin="normal"
        />
        {billAmount > 0 && (
          <Typography mt={2}>Total Bill: ${billAmount}</Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Book Room
        </Button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarMessage.includes('Error') ? 'error' : 'success'}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RoomBooking;
