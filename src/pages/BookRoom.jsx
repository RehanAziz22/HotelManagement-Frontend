import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { toast } from 'react-toastify';

const BookRoom = () => {
    const [roomData, setRoomData] = useState(null);
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const [formData, setFormData] = useState({
        guestName: user?.name || '',
        guestContact: user?.contact || '',
        checkInDate: '',
        checkOutDate: ''
    });
    const [billAmount, setBillAmount] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/room/${id}`)
            .then(response => setRoomData(response.data.data))
            .catch(error => console.error('Error fetching room data:', error));
    }, [id]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { checkInDate, checkOutDate, guestName, guestContact } = formData;
        const { roomNumber } = roomData;
        const startDate = new Date(checkInDate);
        const endDate = new Date(checkOutDate);
        const daysStayed = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

        if (daysStayed <= 0) {
            toast.error('Check-out date must be after check-in date.');
            return;
        }

        const totalBill = daysStayed * roomData.pricePerNight;
        setBillAmount(totalBill);

        console.log('Booking data:',{
            guestId: user._id,
            guestName,
            guestContact,
            checkInDate,
            checkOutDate,
            roomNumber,
            totalBill
        } );
        try {
            const response = await axios.post('http://localhost:3000/api/room/book', {
                guestId: user._id,
                guestName,
                guestContact,
                checkInDate,
                checkOutDate,
                roomNumber,
                totalBill
            });

            toast.success(`Room booked successfully! Total Bill: $${totalBill}`);
            console.log('Room booking successful:', response.data);
        } catch (error) {
            toast.error(error.response.data.message);
            console.error('Booking error:', error.response);
        }
    };



    return (
        <div>
            <div style={{ backgroundColor: 'black', border: '1px solid #B89146', height: '120px' }}>
                {/* <Header /> */}
            </div>

            <Container maxWidth="lg" style={{ padding: '2rem' }}>
                <Typography variant="h4" gutterBottom style={{ color: '#B89146' }}>
                    Room Booking
                </Typography>

                <Grid container spacing={4} alignItems="flex-start">
                    {/* Left Side: Room Details */}
                    <Grid item xs={12} md={6}>
                        {roomData && (
                            <Box>
                                <img
                                    src={roomData.imageUrl}
                                    alt="Room"
                                    style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }}
                                />
                                <Typography variant="h6">Room Number: {roomData.roomNumber}</Typography>
                                <Typography>Room Type: {roomData.roomType}</Typography>
                                <Typography>Price Per Night: ${roomData.pricePerNight}</Typography>
                            </Box>
                        )}
                    </Grid>

                    {/* Right Side: Booking Form */}
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Guest Name"
                                name="guestName"
                                value={formData.guestName}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Guest Contact"
                                name="guestContact"
                                value={formData.guestContact}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Check-In Date"
                                name="checkInDate"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={formData.checkInDate}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Check-Out Date"
                                name="checkOutDate"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={formData.checkOutDate}
                                onChange={handleChange}
                                required
                            />

                            {billAmount > 0 && (
                                <Typography variant="h6" mt={2} style={{ color: '#B89146' }}>
                                    Total Bill: ${billAmount}
                                </Typography>
                            )}

                            <Button
                                type="submit"
                                variant="contained"
                                style={{ backgroundColor: '#B89146', color: 'white', marginTop: '1rem' }}
                                fullWidth
                            >
                                Book Room
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            {/* <Footer /> */}
        </div>
    );
};

export default BookRoom;
