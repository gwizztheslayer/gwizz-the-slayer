import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache transmissions for 1 hour

export async function GET() {
  const apiKey = process.env.TUMBLR_API_KEY;
  const blogName = process.env.NEXT_PUBLIC_TUMBLR_BLOG || "gwizztheslayer.tumblr.com";

  if (!apiKey) {
    return NextResponse.json({ error: "Tumblr API key missing" }, { status: 500 });
  }

  try {
    const response = await fetch(`https://api.tumblr.com/v2/blog/${blogName}/posts?api_key=${apiKey}&limit=6`);
    const data = await response.json();

    if (data.meta.status !== 200) {
      throw new Error(data.meta.msg);
    }

    return NextResponse.json(data.response.posts);
  } catch (error) {
    console.error("[ TUMBLR API ERROR ]", error);
    return NextResponse.json({ error: "Failed to fetch transmissions" }, { status: 500 });
  }
}
