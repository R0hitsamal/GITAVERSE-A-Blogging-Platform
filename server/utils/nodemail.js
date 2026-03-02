require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",  
  auth: {
    user: process.env.myMail,
    pass: process.env.appPassword, 
  },
});

const sendMailResister = async (toEmail, username) => {
  try {
    const info = await transporter.sendMail({
      from: `"GITAVERSE" <${process.env.myMail}>`,
      to: toEmail,
      subject: "Welcome to GITAVERSE 🎉 Start Your Blogging Journey!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
          <h2 style="color: #4A90E2;">Welcome to GITAVERSE, ${username}! 🎉</h2>
          
          <p>We're thrilled to have you join our growing community of writers, thinkers, and creators.</p>
          
          <p>
            GITAVERSE is more than just a blogging platform — it's a space where your ideas matter.
            Whether you're here to share your knowledge, tell your stories, explore new perspectives,
            or build your personal brand, you’re in the right place.
          </p>

          <h3 style="color: #4A90E2;">🚀 What You Can Do Now:</h3>
          <ul>
            <li>✍️ Write and publish your first blog post</li>
            <li>🖼️ Customize your profile and showcase your personality</li>
            <li>💬 Engage with other writers through comments and discussions</li>
            <li>📚 Explore trending blogs and discover new ideas</li>
          </ul>

          <p>
            We encourage you to take a few minutes to complete your profile and start writing.
            Your voice has power — and someone out there is waiting to read what you have to say.
          </p>

          <p>
            If you have any questions, need support, or just want to say hello,
            feel free to reply to this email. We're here to help you every step of the way.
          </p>

          <p>
            Once again, welcome to <strong>GITAVERSE</strong> — where ideas come alive. 🌍
          </p>

          <hr style="margin: 30px 0;" />

          <p style="font-size: 12px; color: #777;">
            You’re receiving this email because you recently signed up for a GITAVERSE account.
            If this wasn’t you, please ignore this email.
          </p>
        </div>
      `,
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.log("Email error:", error);
  }
};

module.exports = { sendMailResister };