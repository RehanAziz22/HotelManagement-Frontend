import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Paper,

} from "@mui/material";
import { styled } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Background video styling
const BackgroundVideo = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
});

// Centered form styling
const FormWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  maxWidth: 400,
  margin: "auto",
  position: "relative",
  zIndex: 1,
  borderRadius: theme.shape.borderRadius,
}));

const SignupPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("https://hotel-management-backend-ruby.vercel.app/api/user/signup", formData);

        if (response.data.status) {
          toast.success("Signup successful!");
          console.log("Signup Data:", response.data);
       
          navigate("/LoginPage")
          // Clear the form
          setFormData({ name: "", email: "", password: "", role: "" });
        } else {
          toast.error(response.data.message || "Signup failed");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred during signup");
        console.error("Signup Error:", error);
      }
    } else {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((error) => toast.error(error));
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <BackgroundVideo autoPlay loop muted>
        <source src={"/assets/img/video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>

      {/* Signup Form */}
      <FormWrapper
        sx={{ width: "400px", backgroundColor: "rgba(234, 234, 242, 0.7)" }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Signup
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
        >
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.password}
            helperText={errors.password}
          />
          <FormControl fullWidth required error={!!errors.role}>
            <InputLabel>Role</InputLabel>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="housekeeping">Housekeeping</MenuItem>
              <MenuItem value="receptionist">Receptionist</MenuItem>
              <MenuItem value="guest">Guest</MenuItem>

            </Select>
          </FormControl>
          <a className="theme-btn" style={{ textAlign: 'center', display: 'inline-block' }}onClick={handleSubmit}>Signup<i></i></a>

        </Box>
        <Typography component={"p"} variant="body2" sx={{ marginTop: 2 }}>
          Already have an account? <a href="LoginPage">Login</a>
        </Typography>
      </FormWrapper>

    
    </Box>
  );
};

export default SignupPage;
