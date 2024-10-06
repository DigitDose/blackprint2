import { NextResponse, NextRequest } from 'next/server';
import { transporter } from '../../../utils/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Walidacja danych wejściowych
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sprawdź, czy EMAIL jest ustawione
    if (!process.env.EMAIL) {
      console.error('EMAIL is not set in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Wysyłanie e-maila
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Wysyłamy na adres ustawiony w zmiennych środowiskowych
      subject: `New contact form submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `<h1>New contact form submission</h1>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json(
      { message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}