import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@aikitchen.com.tr';
const CONTACT_EMAILS =
  process.env.CONTACT_EMAILS ||
  'support@aikitchen.com.tr,sales@aikitchen.com.tr,ferdi@aikitchen.com.tr,elena@aikitchen.com.tr';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, company, email, phone, solution, message } = body;

    // Validate required fields
    if (!fullName || !company || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const recipients = CONTACT_EMAILS.split(',').map((address) => address.trim()).filter(Boolean);

    const emailData = {
      to: recipients,
      from: FROM_EMAIL,
      subject: `New contact request from ${fullName}`,
      html: `
        <h2>New contact request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Solution:</strong> ${solution || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    console.log('Contact form submission:', {
      fullName,
      company,
      email,
      phone,
      solution,
      message,
      recipients,
      timestamp: new Date().toISOString(),
    });

    if (!SENDGRID_API_KEY) {
      console.warn('SendGrid API key is not configured. Contact form is logged but not emailed.');
      return NextResponse.json(
        {
          success: true,
          message: 'Your request has been received. Email delivery is not configured yet.',
        },
        { status: 200 }
      );
    }

    await sgMail.send(emailData);

    return NextResponse.json(
      {
        success: true,
        message: 'Your request has been received. We will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
