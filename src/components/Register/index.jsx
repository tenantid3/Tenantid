import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const navigate = useNavigate();
  

  const handleRegister = () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    const newUser = { email, password };
  
    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  
    // Check if the user already exists
    if (existingUsers.some(user => user.email === newUser.email)) {
      console.error('User already exists');
      return;
    }
  
    // Add the new user
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
  
    console.log('Registration successful');
    navigate('/');
  };
  

  return (
    <Grid container direction="column" spacing={1} style={{ minHeight: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h6">
                Tenant_ID - Register
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid item container justifyContent="center" alignItems="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Typography variant="subtitle1" paragraph>
            Welcome To Simplified Tenant Management
          </Typography>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
              Get Started
            </Button>
          </form>
          <Typography variant="body2" style={{ marginTop: '1rem' }}>
            Already exploring? <Link to="/login">Login here</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
