// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    const subscription = await prisma.subscription.create({
      data: { email },
    })
    return NextResponse.json({ success: true, subscription })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Subscription failed' }, { status: 500 })
  }
}