import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const speaker = await prisma.speaker.update({
      where: { id: params.id },
      data: {
        name: data.name,
        bio: data.bio || null,
        jobTitle: data.jobTitle || null,
        company: data.company || null,
        imageUrl: data.imageUrl || null,
        speakersId: data.speakersId || 'default',
      }
    });
    return NextResponse.json(speaker);
  } catch (error) {
    console.error('Error updating speaker:', error);
    return NextResponse.json({ error: 'Failed to update speaker' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.speaker.delete({
      where: { id: params.id }
    });
    return NextResponse.json({ message: 'Speaker deleted successfully' });
  } catch (error) {
    console.error('Error deleting speaker:', error);
    return NextResponse.json({ error: 'Failed to delete speaker' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic'; 