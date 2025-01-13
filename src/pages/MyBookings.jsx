import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, CircularProgress, Grid, Button } from '@mui/material';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import { jsPDF } from "jspdf";
import { useMediaQuery } from '@mui/material';

const MyBookings = () => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [bookedRooms, setBookedRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        if (userData) {
            axios.get('https://hotel-management-backend-ruby.vercel.app/api/room')
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

    const generatePDF = (invoiceData) => {
        const doc = new jsPDF();
        const generatedDate = new Date(invoiceData.generatedDate).toLocaleDateString('en-US');
        const checkInDate = new Date(invoiceData.checkInDate).toLocaleDateString('en-US');
        const checkOutDate = new Date(invoiceData.checkOutDate).toLocaleDateString('en-US');

        doc.text(`Invoice ID: ${invoiceData._id}`, 20, 20);
        doc.text(`Invoice for: ${invoiceData.guestName}`, 20, 40);
        doc.text(`Guest Contact: ${invoiceData.contact}`, 20, 60);
        doc.text(`Room Number: ${invoiceData.roomNumber}`, 20, 80);
        doc.text(`Total Amount: $${invoiceData.totalBill}`, 20, 100);
        doc.text(`Generated Date: ${generatedDate}`, 20, 120);
        doc.text(`CheckIn Date: ${checkInDate}`, 20, 140);
        doc.text(`CheckOut Date: ${checkOutDate}`, 20, 160);
        doc.save(`Invoice_${invoiceData.guestName}.pdf`);
    };

    const handleCheckIn = async (room) => {
        try {
            const response = await axios.put(`https://hotel-management-backend-ruby.vercel.app/api/room/updatecheckin/${room.roomNumber}`, {
                guestId: room.guest.guestId,
                name: room.guest.name,
                contact: room.guest.contact,
                checkInDate: room.guest.checkInDate,
                checkOutDate: room.guest.checkOutDate,
                checkInStatus: true
            });
    
            if (response.status === 200) {
                toast.success('Check-in status updated successfully!');
                // Update the bookedRooms state
                setBookedRoom(prevRooms =>
                    prevRooms.map(r =>
                        r.roomNumber === room.roomNumber
                            ? { ...r, guest: { ...r.guest, checkInStatus: true } }
                            : r
                    )
                );
            } else {
                toast.error('Error updating check-in status!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };
    
    const handleCheckOut = async (room) => {
        try {
            const response = await axios.put(`https://hotel-management-backend-ruby.vercel.app/api/room/updatecheckout/${room.roomNumber}`, {
                guestId: room.guest.guestId,
                name: room.guest.name,
                contact: room.guest.contact,
                checkInDate: room.guest.checkInDate,
                checkOutDate: room.guest.checkOutDate,
                checkOutStatus: true
            });
    
            if (response.status === 200) {
                toast.success('Check-out status updated successfully!');
                setBookedRoom(prevRooms =>
                    prevRooms.map(r =>
                        r.roomNumber === room.roomNumber
                            ? { ...r, guest: { ...r.guest, checkOutStatus: true } }
                            : r
                    )
                );
            } else {
                toast.error('Error updating check-out status!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };
    
    const generateInvoice = async (room) => {
        try {
            const response = await axios.post('https://hotel-management-backend-ruby.vercel.app/api/invoice/generate', {
                roomNumber: room.roomNumber,
                guestId: room.guest.guestId,
                name: room.guest.name,
                contact: room.guest.contact,
                checkInDate: room.guest.checkInDate,
                checkOutDate: room.guest.checkOutDate,
                totalBill: room.guest.totalBill
            });
    
            if (response.status === 201) {
                toast.success('Invoice generated successfully!');
                generatePDF(response.data);
            } else {
                toast.error('Failed to generate the invoice.');
            }
        } catch (error) {
            console.error('Error generating invoice:', error);
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };
    

    return (
        <>
         <div style={{ backgroundColor: 'black', height: '120px' }}>
                {/* <Header /> */}
            </div>
        <Container style={{ padding: '2rem', borderRadius: '10px', backgroundColor: 'white' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#B89146' }}>
                My Booking Details
            </Typography>

            {bookedRooms && bookedRooms.length > 0 ? (
                bookedRooms.map((room, index) => (
                    <Box 
                    key={index} 
                    style={{
                            padding: '1rem', 
                            border: '1px solid #B89146', 
                            borderRadius: '10px', 
                            marginBottom: '1rem', 
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            gap: '1rem',
                            justifyContent: 'space-between'
                        }}>

                        <img src={room.imageUrl} alt="Room" style={{ width: isMobile ? '100%' : '300px', height: isMobile ? 'auto' : '140px', borderRadius: '10px' }} />

                        <Box>
                            <Typography>Room Number: {room.roomNumber}</Typography>
                            <Typography>Room Type: {room.roomType}</Typography>
                            <Typography>Check-in Date: {new Date(room.guest.checkInDate).toLocaleDateString()}</Typography>
                            <Typography>Check-out Date: {new Date(room.guest.checkOutDate).toLocaleDateString()}</Typography>
                            <Typography>Total Bill: ${room.guest.totalBill}</Typography>
                        </Box>

                        <Box>
                            <Button disabled={room.guest.checkInStatus} variant="contained" color="primary" onClick={() => handleCheckIn(room)}>CheckIn</Button>
                            <Button sx={{ marginX: "1rem" }} disabled={!room.guest.checkInStatus|| room.guest.checkOutStatus} variant="contained" color="primary" onClick={() => handleCheckOut(room)}>CheckOut</Button>
                            <Button disabled={!room.guest.checkOutStatus} variant="contained" color="primary" onClick={() => generateInvoice(room)}>Generate Invoice</Button>
                        </Box>
                    </Box>
                ))
            ) : (
                <Typography>No bookings found.</Typography>
            )}
        </Container>
            </>
    );
};

export default MyBookings;