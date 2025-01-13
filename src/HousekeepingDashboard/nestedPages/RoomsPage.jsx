import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility as VisibilityIcon } from '@mui/icons-material'; // Icon for viewing room details

const RoomInventory = ({router}) => {
  const [rooms, setRooms] = useState([]);

  // Fetching the room data from the backend
  useEffect(() => {
    fetch('https://hotel-management-backend-ruby.vercel.app/api/room')
      .then((response) => response.json())
      .then((data) => setRooms(data.data))
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <Container>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Room Number</TableCell>
                  <TableCell>Room Type</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rooms.map((room) => (
                  <TableRow key={room._id}>
                    <TableCell>{room.roomNumber}</TableCell>
                    <TableCell>{room.roomType}</TableCell>
                    <TableCell>{room.status}</TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RoomInventory;
