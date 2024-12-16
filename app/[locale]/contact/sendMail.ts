import nodemailer from 'nodemailer';

export default async function sendMail(params: any) {
    const { firstName, lastName, email, subject, message } = params;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your SMTP server
      port: 587, // Replace with your SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: `${firstName} ${lastName.toUpperCase()} <${email}>`, // Sender address
      to: 'benjamin.b@gmail.com', // List of recipients
      subject: subject, // Subject line
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body
    };

    // Send mail
    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error(error)
      return false;
    }
}
