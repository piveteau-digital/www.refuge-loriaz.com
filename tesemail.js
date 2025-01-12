const nodemailer = require('nodemailer');

// Create test email configuration
const testConfig = {
  host: 'smtppro.zoho.eu', // Change this to your email provider's SMTP server
  port: 465,
  secure: true,
  auth: {
    user: "contact@refuge-loriaz.com",
    pass: "k-Op8nac"
  },
};

async function testEmailCredentials() {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport(testConfig);

    // Verify connection configuration
    await transporter.verify();
    console.log('Credentials are valid! Connection successful.');

    // Try to send a test email
    const info = await transporter.sendMail({
      from: "contact@refuge-loriaz.com",
      to: "r.piveteau@outlook.com", // Sending to yourself for testing
      subject: 'Test Email',
      text: 'If you receive this email, your email configuration is working correctly!'
    });

    console.log('Test email sent successfully!');
    console.log('Message ID:', info.messageId);

  } catch (error) {
    console.error('Error occurred:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    if (error.response) {
      console.error('SMTP Response:', error.response);
    }
  }
}

// Run the test
testEmailCredentials();