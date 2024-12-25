import nodemailer from 'nodemailer';

export default async function sendMail(params: any) {
    const { firstName, lastName, email, subject, message } = params;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP_HOST!, // Replace with your SMTP server
      port: +process.env.MAIL_SMTP_PORT!, // Replace with your SMTP port
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER_AUTH!, // Replace with your email
        pass: process.env.MAIL_USER_PASSWORD!, // Replace with your email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: `${process.env.MAIL_USER_FROM}`, // Sender address
      to: `refuge.loriaz@orange.fr;${process.env.MAIL_USER_AUTH}`, // List of recipients
      subject: subject, // Subject line
      text: message, // Plain text body
      html: `
      <h1>From: ${firstName} ${lastName.toUpperCase()} <${email}></h1>
      <p>${message}</p>`, // HTML body
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
