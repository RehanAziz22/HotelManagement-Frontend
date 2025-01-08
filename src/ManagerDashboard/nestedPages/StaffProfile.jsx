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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";

const StaffProfile = () => {
  const [users, setUsers] = useState([]);
  const [showStaff, setShowStaff] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [updateUserId, setUpdateUserId] = useState(null);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user");
      const filteredUsers = response.data.data.filter(
        (user) => user.role !== "guest"
      );
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for creating staff
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signup",
        formData
      );
      if (response.data.status) {
        toast.success("Signup successful!");
        setFormData({ name: "", email: "", password: "", role: "" });
        setUsers((prev) => [...prev, response.data.data]);
      } else {
        toast.error(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("An error occurred");
    }
  };

  // Delete a user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/user/${id}`);
      setUsers((prev) => prev.filter((user) => user._id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
    }
  };

  // Show the update form with pre-filled data
  const handleUpdate = (user) => {
    setUpdateUserId(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    setShowUpdateForm(true);
  };

  // Handle update submission
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/user/update/${updateUserId}`,
        { name: formData.name, role: formData.role }
      );
      if (response.data.status) {
        toast.success("User updated successfully!");
        setShowUpdateForm(false);
        setUpdateUserId(null);
        fetchUsers(); // Refresh the user list
      } else {
        toast.error(response.data.message || "Update failed");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <Box p={4}>
      <ToggleButtonGroup
        value={showStaff ? "show" : "create"}
        exclusive
        onChange={(e, newValue) => setShowStaff(newValue === "show")}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="show">Show Staff</ToggleButton>
        <ToggleButton value="create">Create Staff</ToggleButton>
      </ToggleButtonGroup>

      {showStaff && !showUpdateForm ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(user)}
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
      ) : showUpdateForm ? (
        <Box component="form" onSubmit={handleUpdateSubmit} sx={{ maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Update Staff
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
            fullWidth
            disabled
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth required sx={{ mb: 2 }}>
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            >
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="receptionist">Receptionist</MenuItem>
              <MenuItem value="housekeeping">Housekeeping</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Confirm Update
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => setShowUpdateForm(false)}
          >
            Cancel
          </Button>
        </Box>
      ) : (
        <Box component="form" onSubmit={handleFormSubmit} sx={{ maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Create Staff
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
          <FormControl fullWidth required sx={{ mb: 2 }}>
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            >
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="receptionist">Receptionist</MenuItem>
              <MenuItem value="housekeeping">Housekeeping</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default StaffProfile;
