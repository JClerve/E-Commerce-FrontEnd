import React from "react";
import {
  Box,
  Typography,
  TextField,
  Link,
  Button,
  Checkbox,
} from "@mui/material";
import LoginImage from "../assets/LoginImage.png";
import Logo from "../assets/Logo.png";

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        background: "linear-gradient(to right, #3A2076FF, #fbc2eb)", // Background gradient for the entire page
      }}
    >
      {/* Left side with welcome message */}
      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(to bottom right, #00c6ff, #0072ff)", // Blue gradient on the left side
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          color: "white",
        }}
      >
        <img
          src={LoginImage}
          alt="Login"
          style={{ marginBottom: "16px", width: "200px", height: "200px" }}
        />
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Welcome to Our Shopping Haven!🌟
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 1, color: "white", fontSize: "18px" }}
        >
          Join our community and gain access to amazing discounts and offers
          tailored just for you!{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 4,
          border: "2px solid #1976d2", // Blue border
          borderRadius: "8px", // Rounded corners
          width: "300px", // Box width
          height: "auto", // Auto height for dynamic content
        }}
      >
        <img
          src={Logo}
          alt="Login"
          style={{
            marginBottom: "16px",
            width: "100px",
            height: "100px",
            alignSelf: "center",
          }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
        >
          Login
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          Welcome! Login to get amazing discounts and offers only for you.
        </Typography>

        <TextField label="User Name" fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} />

        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <Checkbox />
          <Typography variant="body2">Remember me</Typography>
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
            maxWidth: "300px",
          }}
        >
          <Button variant="contained" color="primary">
            LOGIN
          </Button>
        </Box> */}

        <Button variant="contained" color="primary" fullWidth sx={{mb: '10px'}}>
          LOGIN
          </Button >

        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2">
            New User? <Link href="#">Signup</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#">Forgot your password?</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
