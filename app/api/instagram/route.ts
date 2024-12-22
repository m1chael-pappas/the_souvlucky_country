import { NextResponse } from 'next/server';

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    return NextResponse.json(
      { error: 'Missing Instagram credentials' },
      { status: 500 }
    );
  }

  try {
    // For Basic Display API:
    // https://graph.instagram.com/{user-id}/media?fields=id,caption,media_url,permalink,thumbnail_url&access_token={access-token}
    const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${accessToken}`;

    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch Instagram media' },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error while fetching Instagram posts' },
      { status: 500 }
    );
  }
}