import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, date, time, partySize, note } = await request.json();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_EMAIL,
      subject: `New Reservation from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${date}
        Time: ${time}
        Party Size: ${partySize}
        Note: ${note}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
