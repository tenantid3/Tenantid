import React, { useState, useRef } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SendEmailPage = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('Tenant Reference Form');
    const [message, setMessage] = useState('');
    const [template, setTemplate] = useState('');
    
    const previewPageLink = 'http://localhost:3000/preview'; // Change this based on your actual deployment

    const templates = {
        default: 'Dear [Landlord/Employer],\n\nPlease fill out the attached reference form. You can access it through the following link:\n' + previewPageLink + '\n\nThank you for your cooperation.',
        // Add more templates as needed
    };

    const handleTemplateChange = (event) => {
        setTemplate(event.target.value);
        setMessage(templates[event.target.value] || '');
    };

    const handleSubmit = () => {
        // Handle email sending logic here
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);
    };

    const insertLink = () => {
        setMessage((prevMessage) => {
            const cursorPos = textareaRef.current.selectionStart;
            const newMessage =
                prevMessage.substring(0, cursorPos) +
                previewPageLink +
                prevMessage.substring(cursorPos);
            return newMessage;
        });
    };
    
    const textareaRef = useRef();

    return (
        <Grid container direction="column" spacing={1} style={{ minHeight: '100vh' }}>
            {/* Navbar */}
            <AppBar position="static" color="default">
                <Toolbar>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Typography variant="h6">
                                Tenant Reference - Send Email
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            {/* Content */}
            <Box mt={3}>
                <Grid container direction="row" justifyContent="center">
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            label="Recipient's Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            margin="normal"
                            variant="outlined"
                        />
                        <FormControl fullWidth variant="outlined" margin="normal">
                            <InputLabel id="template-select-label">Template</InputLabel>
                            <Select
                                labelId="template-select-label"
                                id="template-select"
                                value={template}
                                onChange={handleTemplateChange}
                                label="Template"
                            >
                                <MenuItem value="default">Default Template</MenuItem>
                                {/* Add more templates as MenuItem components */}
                            </Select>
                        </FormControl>
                        <TextareaAutosize
                            rowsMin={8}
                            placeholder="Message Content"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Send Button */}
            <Grid item container justifyContent="center" spacing={2}>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Send Email
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SendEmailPage;
