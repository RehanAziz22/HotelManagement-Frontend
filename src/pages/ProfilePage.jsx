import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, CircularProgress, Grid, Avatar } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProfilePage = () => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [bookedRooms, setBookedRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userData) {
            axios.get('http://localhost:3000/api/room')
                .then(response => {
                    const rooms = response.data.data;
                    const userBookings = rooms.filter(room =>
                        room.guest?.guestId === userData._id
                    );
                    setBookedRoom(userBookings);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching room data:', error);
                    setLoading(false);
                });
        }
    }, [userData]);

    if (loading) {
        return <CircularProgress style={{ color: '#B89146' }} />;
    }

    return (
        <div>
            <div style={{ backgroundColor: 'black',      height: '120px' }}>
                {/* <Header /> */}
            </div>
            <Container style={{ padding: '2rem', borderRadius: '10px', backgroundColor: 'white' }}>
                <Grid container spacing={2} alignItems="center">
                <Grid item xs={3} style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', padding: '1rem', borderRadius: '10px' }}>
                        <Typography variant="h4" gutterBottom style={{ color: '#B89146', }}>
                            Profile
                        </Typography>
                        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', gap: '1rem' }}>

                            <Avatar
                                src="data:image/jpeg;base64,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"
                                alt="Profile Picture"
                                sx={{ width: 150, height: 150, border: '2px solid #B89146' }}
                            />
                            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', gap: '1rem' }}>

                                <Typography variant="h6"><strong>Name:</strong> {userData?.name}</Typography>
                                <Typography variant="h6"><strong>Email:</strong> {userData?.email}</Typography>
                                <Typography variant="h6"><strong>Role:</strong> {userData?.role}</Typography>
                                <Typography variant="h6"><strong>Contact:</strong> {userData?.contact}</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={9}>
                        <Typography variant="h4" gutterBottom style={{ color: '#B89146' }}>
                         My   Booking Details
                        </Typography>
                        <Box sx={{height:"400px",overflowY:"scroll"}}>

                        {bookedRooms && bookedRooms.length > 0 ? (
                            bookedRooms.map((room, index) => (
                                <Box key={index} style={{ padding: '1rem', border: '1px solid #B89146', borderRadius: '10px', marginBottom: '1rem',display:"flex",flexDirection: "row", alignItems: "center", gap: '1rem' }}>
                                    <img src={room.imageUrl} alt="Room" style={{ width: '200px',height:"140px", borderRadius: '10px', marginTop: '1rem' }} />

                                    <Box>

                                        <Typography>Room Number: {room.roomNumber}</Typography>
                                        <Typography>Room Type: {room.roomType}</Typography>
                                        <Typography>Check-in Date: {new Date(room.guest.checkInDate).toLocaleDateString()}</Typography>
                                        <Typography>Check-out Date: {new Date(room.guest.checkOutDate).toLocaleDateString()}</Typography>
                                        <Typography>Total Bill: ${room.guest.totalBill}</Typography>
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Typography>No bookings found.</Typography>
                        )}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default ProfilePage;
