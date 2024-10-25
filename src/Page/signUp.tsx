import { Box, Typography, Stack, TextField, Button } from "@mui/material";

const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh", // Takes full viewport height
      }}
    >
      {/* Left Side with Logo and Introduction */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.main",
          color: "white",
          padding: 4,
        }}
      >
        <Typography variant="h4">Company Logo</Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Welcome to our Company
        </Typography>
        <img src="path/to/logo.png" alt="Logo" style={{ width: "150px" }} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Join us and be part of an amazing journey!
        </Typography>
      </Box>

      {/* Right Side with Sign Up Form */}
      <Box
        component="form"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: "white",
          border: "2px solid black",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} sx={{ width: "100%", maxWidth: 400 }}>
          <Typography variant="h4" color="primary.main" fontSize={50}>
            SignUp
          </Typography>

          {/* Row for First Name and Last Name */}
          <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Stack>

          {/* Row for Email and Phone Number */}
          <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
            <TextField id="email" label="Email" variant="outlined" fullWidth />
            <TextField
              id="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
          </Stack>

          <TextField id="gender" label="Gender" variant="outlined" fullWidth />

          <TextField
            id="street-address"
            label="Street Address"
            variant="outlined"
            fullWidth
          />

          <TextField id="city" label="City" variant="outlined" fullWidth />
          <TextField
            id="postal-code"
            label="Postal Code"
            variant="outlined"
            fullWidth
          />

          <TextField
            id="dob"
            label="Date of Birth"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true, // Ensures the label stays above the input
            }}
          />

          <Button variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUp;
