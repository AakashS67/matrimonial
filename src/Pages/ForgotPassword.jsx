import React, { useState } from 'react';
import {
  Avatar,
  Paper,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
} from '@mui/material';
import { FaLock } from 'react-icons/fa';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    // Add your logic for handling forgot password here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('images/pexels-photo-1444442.jpeg')` }}>
      <CssBaseline />
      <Grid container component="main" className="sm:px-6 md:px-8 bg-transparent justify-center rounded p-8">
        <CssBaseline className="bg-transparent" />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{ background: 'rgba(255, 255, 255, 0.36)' }}
          className="bg-transparent p-6 rounded"
        >
          <div className="flex flex-col items-center bg-transparent justify-center py-12">
            <Avatar className="bg-primary bg-transparent">
              <FaLock className="text-white bg-transparent" />
            </Avatar>
            <Typography component="h1" variant="h5" className="mt-4 bg-opacity-0 text-2xl font-bold">
              Forgot Password
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
                sx={{ backgroundColor: '#FFF' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="py-2"
              >
                Reset Password
              </Button>
              <Grid container className="mt-4">
                <Grid item xs>
                  <Link href="/login" className=' fw-bolder ' variant="body2">
                    Back to Log In
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

export default ForgotPassword;
