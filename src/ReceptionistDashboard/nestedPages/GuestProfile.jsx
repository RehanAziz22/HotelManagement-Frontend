import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";

const GuestProfile = () => {
  const [users, setUsers] = useState([]);
  const [showGuest, setShowGuest] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [updateMode, setUpdateMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://hotel-management-backend-ruby.vercel.app/api/user");
      const filteredUsers = response.data.data.filter(
        (user) => user.role === "guest"
      );
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hotel-management-backend-ruby.vercel.app/api/user/signup",
        { ...formData, role: "guest" }
      );
      if (response.data.status) {
        toast.success("Signup successful!");
        setFormData({ name: "", email: "", contact: "" });
        setUsers((prev) => [...prev, response.data.data]);
      } else {
        toast.error(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("An error occurred");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hotel-management-backend-ruby.vercel.app/api/user/${id}`);
      setUsers((prev) => prev.filter((user) => user._id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
    }
  };

  const handleUpdate = (id) => {
    const user = users.find((user) => user._id === id);
    setFormData({
      name: user.name,
      email: user.email,
      contact: user.contact || "",
    });
    setCurrentUserId(id);
    setUpdateMode(true);
  };

  const handleConfirmUpdate = async () => {
    try {
      await axios.post(
        `https://hotel-management-backend-ruby.vercel.app/api/user/update/${currentUserId}`,
        formData
      );
      toast.success("User updated successfully");
      setUpdateMode(false);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    }
  };

  return (
    <Box p={4}>
      <ToggleButtonGroup
        value={showGuest ? "show" : "create"}
        exclusive
        onChange={(e, newValue) => setShowGuest(newValue === "show")}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="show">Show Guests</ToggleButton>
        <ToggleButton value="create">Create Guest</ToggleButton>
      </ToggleButtonGroup>

      {updateMode ? (
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleConfirmUpdate();
          }}
          sx={{ maxWidth: 400 }}
        >
          <Typography variant="h6" gutterBottom>
            Update Guest
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            disabled
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
          >
            Confirm Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => setUpdateMode(false)}
          >
            Cancel
          </Button>
        </Box>
      ) : showGuest ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.contact || "N/A"}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(user._id)}
                      sx={{ mr: 1 }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box component="form" onSubmit={handleFormSubmit} sx={{ maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Create Guest
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GuestProfile;
