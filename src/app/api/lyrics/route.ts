import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const track = searchParams.get('track');

  if (!track) return NextResponse.json({ error: "No track specified" }, { status: 400 });

  try {
    const response = await fetch(`https://api.genius.com/search?q=${encodeURIComponent(track + ' G-Wizz, The Slayer')}`, {
      headers: { Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}` },
    });
    
    const data = await response.json();
    const hit = data.response.hits[0]?.result;
    
    return NextResponse.json({ 
      title: hit?.title, 
      url: hit?.url, 
      art: hit?.song_art_image_thumbnail_url 
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch from Genius" }, { status: 500 });
  }
}
