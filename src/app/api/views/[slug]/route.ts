import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    await prisma.views.upsert({
      where: { id: slug },
      create: {
        id: slug,
        count: 1,
      },
      update: {
        count: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ message: 'View incremented' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to increment view' },
      { status: 500 },
    );
  }
}
