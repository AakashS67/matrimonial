import React, { useState } from "react";
import {
  Avatar,
  Paper,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Alert,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import { FaLock } from "react-icons/fa";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorAlert, setErrorAlert] = useState("none");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      // Add your server login endpoint URL
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });

      Cookies.set('authToken', response.data.token, { expires: 7 }); // Set the expiry as needed
      console.log("Registration successful:", response.data);
      // Optionally, you can redirect the user to a new page after successful login
      // For example, replace the following line with the desired redirect logic:
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error("Login failed:", error);

      // Handle login errors
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;

        // Show alert with error messages
        // Show alert with error messages
        setErrorMessage(Object.values(errorMessage).flat().join("\n"));
        setErrorAlert("block");

        console.log("Registration error message:", errorMessage);

        // Remove the error message after 3 seconds
        setTimeout(() => {
          setErrorAlert("none");
        }, 10000);
        // You can set the error message in your component state or display it to the user.
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('images/pexels-photo-1444442.jpeg')` }}
    >
      <CssBaseline />
      <Grid
        container
        component="main"
        className="sm:px-6 md:px-8 bg-transparent justify-center rounded p-8"
      >
        <CssBaseline className="bg-transparent" />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{ background: "rgba(255, 255, 255, 0.36)" }}
          className="bg-transparent p-6 rounded"
        >
          {" "}
          <div className="flex flex-col items-center bg-transparent  justify-center py-12">
            <Avatar className="bg-primary bg-transparent">
              <FaLock className="text-white bg-transparent" />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              className="mt-4 bg-opacity-0 text-2xl font-bold"
            >
              Sign in
            </Typography>
            <form className="mt-4 w-full max-w-md" onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className="mb-4"
              />
              <div style={{ display: errorAlert }}>
                {errorMessage && (
                  <Alert severity="error" onClose={() => setErrorAlert("none")}>
                    {errorMessage.split("\n").map((msg, index) => (
                      <div key={index}>{msg}</div>
                    ))}
                  </Alert>
                )}
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="py-2"
              >
                Sign In
              </Button>
              <Grid container className="mt-4">
                <Grid item xs>
                  <Link
                    href="/forgotpassword"
                    className=" fw-bolder "
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/registration"
                    className=" fw-bolder "
                    variant="body2"
                  >
                    Don't have an account? register
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
