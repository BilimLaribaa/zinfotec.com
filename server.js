const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000; // backend server

app.use(cors());
app.use(express.json());

// API route
app.post("/sendmail", async (req, res) => {
  const { name, email, phone, date, message } = req.body;

  if (!name || !email || !message) {
    return res.json({ success: false, message: "Name, Email, and Message are required." });
  }

  try {
    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "",  // ✅ your Gmail
        pass: "", // ✅ Gmail App Password
      },
    });

    const mailOptions = {
      from: `"Website Contact Form" <aitakef@gmail.com>`,
      to: "aitakef@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Your message has been sent successfully!" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Error sending email." });
  }
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
