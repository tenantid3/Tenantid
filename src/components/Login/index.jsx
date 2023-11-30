// Login/index.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../utils/authUtils';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login clicked');
  };

  return (
    <Grid container direction="column" spacing={1} style={{ minHeight: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h6">
                Tenant_ID - Login
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '1rem' }}>
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
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
              Login
            </Button>
          </form>
          <Typography variant="body2" style={{ marginTop: '1rem' }}>
            Don't have an account? <Link to="/register">Register here</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
