import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Inject exact file extensions and specific casing
    await sql`UPDATE lyrics SET cover_image = '/images/drip.png' WHERE title LIKE 'Drip%'`;
    await sql`UPDATE lyrics SET cover_image = '/images/cx.png' WHERE title LIKE 'CX%'`;
    await sql`UPDATE lyrics SET cover_image = '/images/TAking Over-min.png' WHERE title LIKE 'Taking Over%'`;

    return NextResponse.json({ message: "IMAGE PATHS SECURED AND PATCHED." }, { status: 200 });
  } catch (error: any) {
    console.error("Patch Error:", error);
    return NextResponse.json({ error: "PATCH FAILED.", details: error.message }, { status: 500 });
  }
}
