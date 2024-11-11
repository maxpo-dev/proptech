import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const submission = await prisma.subscription.create({
      data: { email },
    })
    return NextResponse.json({ success: true, submission })
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json({ success: false, error: 'Form submission failed' }, { status: 500 })
  }
}