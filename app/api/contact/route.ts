import { NextRequest, NextResponse } from 'next/server';

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

    // Here you would normally send an email or save to a database
    // For now, we'll just log and return success
    console.log('Contact form submission:', {
      fullName,
      company,
      email,
      phone,
      solution,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
    // or save to database

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your request has been received. We will contact you shortly.' 
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
