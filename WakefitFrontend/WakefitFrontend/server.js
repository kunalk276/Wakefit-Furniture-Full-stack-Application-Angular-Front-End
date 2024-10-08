const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// POST endpoint to send email
app.post('/send-email', (req, res) => {
  const { name, email, mobile, category, description } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wakefitqueries@gmail.com', 
      pass: 'Wakefit@123'               
    }
  });

  const mailOptions = {
    from: 'wakefitqueries@gmail.com',
    to: 'kunalkadam2762001@gmail.com', 
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Category: ${category}
      Description: ${description}
      File: No file uploaded
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});