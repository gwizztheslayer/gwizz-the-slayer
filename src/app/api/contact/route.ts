import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Log the transmission on the server (Vercel Logs)
    console.log("=== NEW TRANSMISSION RECEIVED ===");
    console.log(`FROM: ${data.name} (${data.email})`);
    console.log(`MESSAGE: ${data.message}`);
    console.log("=================================");

    // NOTE: To forward this to your gwizztheslayer@gmail.com inbox automatically, 
    // you can install a lightweight email package like 'Resend' or 'Nodemailer' here.

    return NextResponse.json({ status: "success", message: "Transmission secured." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "error", message: "Failed to process transmission." }, { status: 500 });
  }
}