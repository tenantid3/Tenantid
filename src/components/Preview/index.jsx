import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // import useNavigate
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {
  TextFieldInput,
  TextArea,
  NumberInput,
  RadioInput,
  DateInput,
  TimeInput,
} from '../FormBuilder/elements/index.jsx'; // Adjust the path as needed

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate(); // use the hook here
  const formData = location.state?.formData;

  const renderElements = (item) => {
    switch (item.type) {
      case 'text':
        return <TextFieldInput item={item} />;
      case 'textarea':
        return <TextArea item={item} />;
      case 'number':
        return <NumberInput item={item} />;
      case 'radio':
        return <RadioInput item={item} />;
      case 'date':
        return <DateInput item={item} />;
      case 'time':
        return <TimeInput item={item} />;
      default:
        return null;
    }
  };

  const handleSendEmail = () => {
    navigate('/send-email'); // navigate to the send email page
  };

  return (
    <Grid container direction="column" spacing={1} style={{ minHeight: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h6">
                Tenant Reference - From Preview
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Add some space */}
      <Box mt={3}>
        <Grid item container direction="row" justifyContent="center" flex={1}>
          <Grid item md={6}>
            {formData.map(item => renderElements(item))}
          </Grid>
        </Grid>
      </Box>

      {/* Buttons */}
      <Grid item container justifyContent="center" spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleSendEmail}> 
            Send Form
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Preview;
