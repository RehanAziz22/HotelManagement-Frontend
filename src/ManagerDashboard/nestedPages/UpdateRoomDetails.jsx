import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
import { toast } from 'react-toastify';

const UpdateRoomDetails = ({router}) => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');
    const [formData, setFormData] = useState({
        imageUrl: '',
        roomNumber: '',
        roomType: '',
        availability: '',
        pricePerNight: '',
        status: ''
    });

    useEffect(() => {
        axios.get('https://hotel-management-backend-ruby.vercel.app/api/room')
            .then(response => {
                setRooms(response.data.data);
                console.log(response.data7.data);
            })
            .catch(error => console.error('Error fetching rooms:', error));
    }, []);

    const handleRoomSelect = (event) => {
        const roomNumber = event.target.value;
        setSelectedRoom(roomNumber);
        const room = rooms.find(room => room.roomNumber === roomNumber);
        setFormData({
            imageUrl: room.imageUrl,
            roomNumber: room.roomNumber,
            roomType: room.roomType,
            availability: room.availability,
            pricePerNight: room.pricePerNight,
            status: room.status
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://hotel-management-backend-ruby.vercel.app/api/room/update`, formData);
            toast.success(response.data.message);
            router.navigate('/roommanagement')

        } catch (error) {
            toast.error('Error updating room details');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
            <Typography variant="h5">Update Room Details</Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel>Select Room</InputLabel>
                <Select value={selectedRoom} onChange={handleRoomSelect}>
                    {rooms.map((room) => (
                        <MenuItem key={room.roomNumber} value={room.roomNumber}>
                            {`Room Number: ${room.roomNumber} | Type: ${room.roomType}`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {selectedRoom && (
                <form onSubmit={handleSubmit} style={{ maxWidth: '500px', width: '100%' }}>
                    <TextField label="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleChange} fullWidth required margin="normal" />
                    <TextField label="Room Number" name="roomNumber" value={formData.roomNumber} onChange={handleChange} fullWidth required margin="normal" disabled />
                    <TextField label="Room Type" name="roomType" value={formData.roomType} onChange={handleChange} fullWidth required margin="normal" />
                    <TextField label="Availability" name="availability" value={formData.availability} onChange={handleChange} fullWidth required margin="normal" />
                    <TextField label="Price Per Night" name="pricePerNight" value={formData.pricePerNight} onChange={handleChange} fullWidth required margin="normal" />
                    <TextField label="Status" name="status" value={formData.status} onChange={handleChange} fullWidth required margin="normal" />

                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Update Room
                    </Button>
                </form>
            )}
        </Box>
    );
};

export default UpdateRoomDetails;
