const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const serverless = require('serverless-http'); // <-- Yeh package naya add kiya hai
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*', // Abhi ke liye sab allow kar dete hain taaki AWS se testing aasan ho. Production mein ise 'https://aatif.jhoja.tech' kar dijiyega.
    methods: ['POST']
}));

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// API Route for Contact Form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Please fill all fields" });
    }

    try {
        // Email jo aapko aayega
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Aap khud ko hi mail bhej rahe hain
            replyTo: email, // Jisse reply karne par direct user ko mail jaye
            subject: `Portfolio Contact from ${name}`,
            text: `You have a new message from your portfolio!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ error: "Failed to send message." });
    }
});

// ==========================================
// AWS LAMBDA SERVERLESS EXPORT
// ==========================================
// Localhost wala app.listen() hata diya gaya hai.
// Ab hum app ko Lambda handler ke roop mein export kar rahe hain.
module.exports.handler = serverless(app);