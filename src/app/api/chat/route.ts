import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  console.log("TERMINAL RECEIVED REQUEST: Backend is alive.");
  try {
    const { messages } = await req.json();
    console.log("Backend received messages count:", messages.length);

    const result = await streamText({
      model: openai('gpt-4-turbo'),
      system: "You are the AI Terminal for G-Wizz, The Slayer.",
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("CRITICAL SERVER ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
