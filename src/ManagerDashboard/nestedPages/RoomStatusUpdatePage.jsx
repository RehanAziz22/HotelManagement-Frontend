import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, MenuItem, FormControl, Select, InputLabel, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const RoomStatusUpdatePage = ({router}) => {
  const { id } = router.params // Get the room ID from the URL
  const [room, setRoom] = useState(null);
  const [status, setStatus] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Fetch the room details by ID
  useEffect(() => {
    axios.get(`https://hotel-management-backend-ruby.vercel.app/api/room/${id}`)
      .then(response => {
        setRoom(response.data.data);
        setStatus(response.data.data.status);
      })
      .catch(error => {
        console.error('Error fetching room details:', error);
      });
  }, []
);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`https://hotel-management-backend-ruby.vercel.app/api/room/${id}/status`, { status });
      setSnackbarMessage('Room status updated successfully.');
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage('Error updating room status.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Update Room Status</Typography>
      {room && (
        <>
          <Typography variant="h6">Room Number: {room.roomNumber}</Typography>
          <Typography variant="body1">Current Status: {room.status}</Typography>
          
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={handleStatusChange}
              label="Status"
            >
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="occupied">Occupied</MenuItem>
              <MenuItem value="maintenance">Maintenance</MenuItem>
            </Select>
          </FormControl>
          
          <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: 2 }}>
            Update Status
          </Button>
        </>
      )}

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RoomStatusUpdatePage;
