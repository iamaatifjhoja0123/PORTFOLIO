const nodemailer = require('nodemailer');

const sendContactEmail = async (req, res) => {
    // Frontend se aane wala data extract kar rahe hain
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Please provide name, email, and message." });
    }

    try {
        // Nodemailer transporter setup (Gmail ke liye)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email ka format kaisa hoga
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Yeh mail aapko aayega
            subject: `New Portfolio Message from ${name}`,
            text: `You have a new message from your portfolio website!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Email send karo
        await transporter.sendMail(mailOptions);
        
        // Success response frontend ko bhejo
        res.status(200).json({ success: true, message: "Message sent successfully!" });

    } catch (error) {
        console.error("Email send error:", error);
        res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
};

module.exports = { sendContactEmail };