import nodemailer from "nodemailer";

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

// Temporarily commented out to allow build without env variables
// if (!emailUser || !emailPass) {
//   throw new Error("Please define EMAIL_USER and EMAIL_PASS in your environment variables");
// }

export const transporter = emailUser && emailPass ? nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
}) : null;

export const sendOTPEmail = async (to: string, otp: string, subject: string, text: string) => {
  if (!transporter) {
    console.warn("Email transporter not configured. Skipping email send.");
    return null;
  }

  const mailOptions = {
    from: `"EPiCentre" <${emailUser}>`,
    to,
    subject,
    text: `${text} ${otp}`,
    html: `<b>${text} ${otp}</b>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
