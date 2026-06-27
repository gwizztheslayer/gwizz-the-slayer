import { NextResponse } from "next/server";

// Initialize Stripe (Requires STRIPE_SECRET_KEY in your Vercel Environment Variables)
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2023-10-16" });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { itemName, priceInZAR, size, color } = body;

    if (!itemName || !priceInZAR) {
      return NextResponse.json({ error: "INVALID PAYLOAD" }, { status: 400 });
    }

    console.log(`[ SECURE CHECKOUT INITIATED ] Item: ${itemName} | Size: ${size} | Color: ${color}`);

    // --- STRIPE SESSION GENERATION LOGIC ---
    /* const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "zar",
          product_data: { name: `${itemName} - ${color} (${size})` },
          unit_amount: priceInZAR * 100, // Stripe uses cents
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/arsenal`,
    });
    return NextResponse.json({ url: session.url });
    */

    // Fallback for testing before API keys are active
    return NextResponse.json({ 
      url: "https://checkout.stripe.com/pay/test_fallback_link",
      status: "AWAITING_LIVE_KEYS" 
    });

  } catch (error) {
    console.error("[ FIAT GATEWAY ERROR ]", error);
    return NextResponse.json({ error: "INTERNAL ENCRYPTION FAILURE" }, { status: 500 });
  }
}
