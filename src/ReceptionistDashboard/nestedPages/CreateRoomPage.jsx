import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Snackbar, Alert, Card, CardContent, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Room as RoomIcon, PriceChange as PriceChangeIcon, CalendarToday as CalendarIcon, Image as ImageIcon } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateRoomPage = ({router}) => {
  const [roomDetails, setRoomDetails] = useState({
    imageUrl: '',
    roomNumber: '',
    roomType: '',
    pricePerNight: '',
    availability: true,
    status: 'available',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error'); // 'error' or 'success'

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({ ...roomDetails, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setRoomDetails({ ...roomDetails, availability: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roomDetails.imageUrl || !roomDetails.roomNumber || !roomDetails.roomType || !roomDetails.pricePerNight || !roomDetails.status) {
      setSnackbarMessage('Please fill in all fields.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      // Make sure the URL points to your backend API correctly
      const response = await axios.post('http://localhost:3000/api/room/create', roomDetails);

      if (response.data.status) {
        setSnackbarMessage('Room created successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        toast(response.data.message)
        // router.navigate('/roommanagement/rooms');
      } else {
        setSnackbarMessage(response.data.message || 'Error creating room.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage('Error creating room.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
      <Card sx={{ width: 600, padding: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            <RoomIcon sx={{ marginRight: 1 }} /> Create Room
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Image URL */}
              <Grid item xs={12}>
                <TextField
                  label="Image URL"
                  name="imageUrl"
                  value={roomDetails.imageUrl}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: <ImageIcon sx={{ marginRight: 1 }} />,
                  }}
                />
              </Grid>

              {/* Room Number */}
              <Grid item xs={12}>
                <TextField
                  label="Room Number"
                  name="roomNumber"
                  value={roomDetails.roomNumber}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: <RoomIcon sx={{ marginRight: 1 }} />,
                  }}
                />
              </Grid>

              {/* Room Type */}
              <Grid item xs={12}>
                <TextField
                  label="Room Type"
                  name="roomType"
                  value={roomDetails.roomType}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: <PriceChangeIcon sx={{ marginRight: 1 }} />,
                  }}
                />
              </Grid>

              {/* Price Per Night */}
              <Grid item xs={12}>
                <TextField
                  label="Price Per Night"
                  name="pricePerNight"
                  type="number"
                  value={roomDetails.pricePerNight}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: <CalendarIcon sx={{ marginRight: 1 }} />,
                  }}
                />
              </Grid>

              {/* Availability Checkbox */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={roomDetails.availability}
                      onChange={handleCheckboxChange}
                      name="availability"
                    />
                  }
                  label="Room Available"
                />
              </Grid>

              {/* Status Dropdown */}
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Status</InputLabel>
                  <Select
                    label="Status"
                    name="status"
                    value={roomDetails.status}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="available">Available</MenuItem>
                    <MenuItem value="occupied">Occupied</MenuItem>
                    <MenuItem value="maintenance">Under Maintenance</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={(e) => {
                    console.log("Create Room button clicked");
                    handleSubmit(e);
                  }}
                >
                  Create Room
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {/* Snackbar for Error or Success Messages */}
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateRoomPage;
