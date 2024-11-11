// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const contactForm = await prisma.contactForm.create({
      data: formData,
    });
    return NextResponse.json({ success: true, contactForm });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ success: false, error: 'Form submission failed' }, { status: 500 });
  }
}
