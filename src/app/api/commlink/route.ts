import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Auto-generate the table if it doesn't exist yet
    await sql`
      CREATE TABLE IF NOT EXISTS syndicate_roster (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        clearance_level VARCHAR(50) DEFAULT 'TIER_1',
        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Inject the lead into the database
    await sql`
      INSERT INTO syndicate_roster (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING;
    `;
    
    return NextResponse.json({ message: "Uplink secured. Data logged to matrix." }, { status: 200 });
  } catch (error) {
    console.error("Comm-Link Error:", error);
    return NextResponse.json({ error: "Transmission failed." }, { status: 500 });
  }
}
