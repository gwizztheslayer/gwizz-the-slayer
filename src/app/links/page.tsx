import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | G-Wizz, The Slayer",
  description: "Official links to stream music, watch videos, and find the latest releases from South African trap artist G-Wizz, The Slayer.",
};

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 uppercase tracking-widest mb-2">G-Wizz, The Slayer</h1>
          <p className="text-zinc-400">Official Artist Links</p>
        </div>
        
        <div className="flex flex-col gap-4 w-full">
          <a href="/music/demons-dont-sleep" className="w-full p-4 text-center border border-zinc-800 rounded bg-zinc-900 hover:bg-zinc-800 hover:border-red-600 transition-all font-semibold tracking-wide">
            ?? Stream "Demons Don't Sleep"
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="w-full p-4 text-center border border-zinc-800 rounded bg-zinc-900 hover:bg-zinc-800 transition-all font-semibold tracking-wide">
            ?? Spotify
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-full p-4 text-center border border-zinc-800 rounded bg-zinc-900 hover:bg-zinc-800 hover:border-red-500 transition-all font-semibold tracking-wide">
            ?? YouTube
          </a>
          <a href="/booking" className="w-full p-4 text-center border border-zinc-800 rounded bg-zinc-900 hover:bg-zinc-800 hover:border-blue-500 transition-all font-semibold tracking-wide">
            ?? Booking & Contact
          </a>
        </div>
      </div>
    </main>
  );
}
