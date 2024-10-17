import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Link,
  Button,
  Checkbox,
} from "@mui/material";
import LoginImage from "../assets/Login.Image.png";
import Logo from "../assets/Logo.png";
import LoginSideImage from "../assets/Login.Box.Background.png";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false); // Added state for Remember Me checkbox
  const [error, setError] = useState<string>("");

  // Check if data exists in localStorage (runs once when component mounts)
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedRememberMe = localStorage.getItem("rememberMe");

    if (storedRememberMe === "true") {
      if (storedUsername) setUsername(storedUsername);
      if (storedPassword) setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = () => {
    if (username === "" || password === "") {
      setError("Both fields are required.");
    } else {
      setError("");

      if (rememberMe) {
        // Save to localStorage if Remember Me is checked
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("rememberMe", "true");
      } else {
        // Clear localStorage if Remember Me is not checked
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
      }

      alert("Form submitted successfully!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        background: "linear-gradient(to right, #3A2076FF, #fbc2eb)", 
      }}
    >
      {/* Left side with welcome message */}
      <Box
        sx={{
          flex: 2,
          background: "linear-gradient(to bottom right, #00c6ff, #0072ff)", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          color: "white",
          backgroundImage: `url(${LoginImage})`, 
          backgroundSize: "cover",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Welcome to Our Shopping Haven!🌟
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 1, color: "white", fontSize: "18px" }}
        >
          Join our community and gain access to amazing discounts and offers
          tailored just for you!
        </Typography>
      </Box>

      {/* Right side with the form */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${LoginSideImage})`, 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 4,
          border: "2px solid #1976d2", 
          borderRadius: "8px", 
          width: "500px", 
          height: "auto", 
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
          Login Page
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          Welcome! Login to get amazing discounts and offers only for you.
        </Typography>

        {/* Username Field */}
        <TextField
          label="User Name"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={error !== "" && username === ""}
          helperText={
            error !== "" && username === "" ? "Username is required" : ""
          }
          sx={{ mb: 2 }}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error !== "" && password === ""}
          helperText={
            error !== "" && password === "" ? "Password is required" : ""
          }
          sx={{ mb: 2 }}
        />

        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Typography variant="body2">Remember me</Typography>
        </Box>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: "10px" }}
          onClick={handleSubmit}
        >
          LOGIN
        </Button>

        {/* Error Message */}
        {error && (
          <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
            {error}
          </Typography>
        )}

        {/* Signup and Forgot Password Links */}
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
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
