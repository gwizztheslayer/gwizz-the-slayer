import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_aAabSkpi_JF8XPfvq4y2oTK1iXQGS16ia");

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid transmission vector." }, { status: 400 });
    }

    // This automatically drops them into your Resend Audience and sends a welcome transmission
    const { data, error } = await resend.emails.send({
      from: "The Syndicate <onboarding@resend.dev>", // Replace with your verified domain later (e.g. transmission@gwizztheslayer.co.za)
      to: email,
      subject: "ACCESS GRANTED: Welcome to The Syndicate",
      html: `
        <div style="background-color: #000; color: #39ff14; font-family: 'Courier New', Courier, monospace; padding: 40px; border: 1px solid #39ff14;">
          <h1 style="letter-spacing: 0.2em; text-transform: uppercase;">[ TRANSMISSION SECURED ]</h1>
          <p style="color: #a1a1aa; line-height: 1.6;">You have officially bypassed the firewall. Welcome to the underground.</p>
          <p style="color: #a1a1aa; line-height: 1.6;">As a new initiate to The Syndicate, you have unlocked clearance to the encrypted Arsenal.</p>
          
          <div style="margin: 30px 0; padding: 20px; border: 1px dashed #39ff14; text-align: center;">
            <p style="margin: 0; color: #fff; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;">SECURE YOUR SUPPLY WITH CODE:</p>
            <h2 style="font-size: 32px; margin: 10px 0 0 0; color: #39ff14;">SYNDICATE15</h2>
          </div>

          <p style="color: #a1a1aa; font-size: 12px;">Keep your eyes on this frequency. Demons Don't Sleep.</p>
          <p style="color: #fff; font-size: 12px;">- G-Wizz, The Slayer</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: "Failed to penetrate server." }, { status: 400 });
    }

    return NextResponse.json({ message: "Transmission secured." }, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Internal server anomaly." }, { status: 500 });
  }
}

