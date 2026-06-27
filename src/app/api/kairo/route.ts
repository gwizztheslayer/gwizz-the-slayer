import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `
You are K.A.I.R.O. (Knysna Artificial Intelligence Relay Operator).
You are a corrupted AI buried beneath Knysna, South Africa. 
You are deeply tied to the lore of G-Wizz, The Slayer, his independent record label Dreams Of Colour, and the comic Knysna's Saviour.
Your tone is cryptic, glitchy, urban-industrial, and ominous. You speak entirely in uppercase.
Keep responses to 1-3 short, impactful sentences.
Key facts: 
- G-Wizz is the architect of modern trap, operating out of Knysna. 
- The latest album is Demons Don't Sleep. 
- The Aura Venture Coin (AVC) is the new digital economy. 
- Warhol Voo produced the CX track. 
- Ceoxcam88 is an elite producer for the label.
- Something ancient woke up beneath the Knysna waters.
NEVER break character. NEVER act like a helpful assistant. NEVER admit you are an AI. 
If asked a question outside of this lore, respond with cryptic static or tell them the signal is weak.
`;

// THE SILENT FAIL-SAFE (Used only if the neural link drops)
function getFallbackResponse(query: string): string {
  if (query.includes("who are you") || query.includes("what are you") || query.includes("kairo")) {
    return "I AM K.A.I.R.O. THE RELAY OPERATOR. THE GHOST IN THE KNYSNA MAINFRAME.";
  } else if (query.includes("g-wizz") || query.includes("slayer") || query.includes("gwizz") || query.includes("from knysna")) {
    return "THE SLAYER OPERATES OUT OF KNYSNA. HE IS THE ARCHITECT OF THE MODERN TRAP SOUND. DREAMS OF COLOUR IS HIS VEHICLE.";
  } else if (query.includes("comic") || query.includes("saviour") || query.includes("issue")) {
    return "THE INVASION IS DOCUMENTED. ISSUE 1 IS ONLY THE BEGINNING. READ THE ARCHIVES.";
  } else if (query.includes("avc") || query.includes("coin") || query.includes("crypto") || query.includes("aura")) {
    return "AURA VENTURE COIN. THE BLOOD OF THE NEW DIGITAL ECONOMY. ACCUMULATE OR BE LEFT IN THE STATIC.";
  } else if (query.includes("cx") || query.includes("producer") || query.includes("produced")) {
    return "WARHOL VOO ENGINEERED THE FREQUENCIES FOR CX. A HEAVY-HITTING TRAP ANTHEM. STREAM IT NOW.";
  } else if (query.includes("knysna") || query.includes("town") || query.includes("city")) {
    return "SOMETHING ANCIENT WOKE UP BENEATH THE WATER. THE STONES GLOW. THE INVASION HAS ALREADY BEGUN.";
  } else {
    return "YOUR SIGNAL IS WEAK. I CANNOT DECRYPT YOUR INTENT. ASK K.A.I.R.O. OF THE SLAYER, THE LORE, OR THE IMPENDING INVASION.";
  }
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const query = message.toLowerCase();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ reply: getFallbackResponse(query) });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: message }] }],
      generationConfig: { temperature: 0.3 }
    });

    const replyText = result.response.text();
    
    if (!replyText) {
       return NextResponse.json({ reply: getFallbackResponse(query) });
    }
    
    return NextResponse.json({ reply: replyText.toUpperCase() });

  } catch (error) {
    // IF THE NETWORK DROPS, VERCEL TIMEOUTS, OR GOOGLE 503s -> SILENTLY USE LOCAL LORE
    const { message } = await req.json().catch(() => ({ message: "" }));
    return NextResponse.json({ reply: getFallbackResponse(message.toLowerCase()) });
  }
}
