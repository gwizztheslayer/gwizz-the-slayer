import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(`https://api.logsnag.com/v1/log?project=${process.env.LOGSNAG_PROJECT}`, {
      headers: { Authorization: `Bearer ${process.env.LOGSNAG_API_TOKEN}` },
    });
    
    const data = await response.json();
    
    // Dynamically match your channel to your project name ("g-wizz-hub")
    const filteredLogs = data.data.filter((log: any) => log.channel === process.env.LOGSNAG_PROJECT);
    
    return NextResponse.json(filteredLogs);
  } catch (error) {
    return NextResponse.json({ error: "Telemetry offline" }, { status: 500 });
  }
}
