// server/controllers/emailController.js
const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { email, subject, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Replace with your Gmail email address
      pass: process.env.EMAIL_PASSWORD, // Replace with your Gmail password or app-specific password
    },
  });

  // Define email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: subject,
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Send a response to the frontend
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
};

module.exports = { sendEmail };
