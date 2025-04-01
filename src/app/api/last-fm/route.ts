import { NextResponse } from 'next/server';

import { getRecentSongs } from '@/lib/last-fm';

export async function GET() {
  try {
    const recentSongs = await getRecentSongs();

    return NextResponse.json(recentSongs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch recent songs' },
      { status: 500 },
    );
  }
}
