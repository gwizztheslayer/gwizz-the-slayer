import { NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. FIRE WELCOME EMAIL
    await resend.emails.send({
      from: "G-Wizz, The Slayer <vault@gwizztheslayer.com>", 
      to: [email],
      subject: "WELCOME TO THE SYNDICATE",
      html: `<div style="background-color: #000; color: #fff; padding: 40px; font-family: monospace;">
               <h1 style="color: #39ff14;">ACCESS GRANTED.</h1>
               <p>You have successfully bypassed the algorithm. Welcome to the inner circle.</p>
               <p>Stay sharp. Transmissions and secure drops incoming.</p>
               <p>- G-Wizz, The Slayer</p>
             </div>`
    });

    // 2. INJECT INTO GOOGLE SHEETS CRM
    // The engine only runs if you have added the Google keys in Vercel
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
      // Format private key to handle Vercel's environment variable string formatting
      const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: formattedPrivateKey,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      
      // Get exact SAST Time for the Knysna timestamp
      const timestamp = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" });

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:C", // Injects into columns A, B, and C
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[timestamp, email, "THE SYNDICATE WEB FORM"]],
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("CRM Sync Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}