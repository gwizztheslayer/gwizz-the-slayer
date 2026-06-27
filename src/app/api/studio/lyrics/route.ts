import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// [ FORCE VERCEL TO BYPASS CACHE AND PULL FRESH DATA ]
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM lyrics ORDER BY created_at DESC;`;
    return NextResponse.json({ lyrics: rows }, { status: 200 });
  } catch (error) {
    console.error("Database read error:", error);
    return NextResponse.json({ error: "Failed to extract data." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, text_content, cover_image } = await request.json();
    const track_slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    await sql`
      INSERT INTO lyrics (track_slug, title, text_content, cover_image)
      VALUES (${track_slug}, ${title}, ${text_content}, ${cover_image || null})
      ON CONFLICT (track_slug) 
      DO UPDATE SET title = EXCLUDED.title, text_content = EXCLUDED.text_content, cover_image = EXCLUDED.cover_image, created_at = CURRENT_TIMESTAMP;
    `;
    
    return NextResponse.json({ message: "Payload saved to matrix." }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database rejection." }, { status: 500 });
  }
}
