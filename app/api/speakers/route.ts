import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const speakers = await prisma.speaker.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(speakers);
  } catch (error) {
    console.error('Error fetching speakers:', error);
    return NextResponse.json({ error: 'Failed to fetch speakers' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const speaker = await prisma.speaker.create({
      data: {
        name: data.name,
        bio: data.bio || null,
        jobTitle: data.jobTitle || null,
        company: data.company || null,
        imageUrl: data.imageUrl || null,
        speakersId: data.speakersId || 'default', // You may want to adjust this default value
      }
    });
    return NextResponse.json(speaker);
  } catch (error) {
    console.error('Error creating speaker:', error);
    return NextResponse.json({ error: 'Failed to create speaker' }, { status: 500 });
  }
} 