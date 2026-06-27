import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music & Discography | G-Wizz, The Slayer",
  description: "Listen to the complete discography of G-Wizz, The Slayer. Stream 'IN THE DEEPEND 3 SIDE B', 'Demons Don't Sleep', and hit singles including 'Side Eye' and 'Godly'.",
};

export default function MusicHubPage() {
  const tracks = [
    { nr: "1", title: "All In A Day", features: "" },
    { nr: "2", title: "Side Eye", features: "ft. Acidiq Truth" },
    { nr: "3", title: "Running Shit", features: "" },
    { nr: "4", title: "Godly", features: "ft. Jo Oyat & TokyoSa" },
    { nr: "5", title: "Okapi", features: "ft. Acidiq Truth" },
    { nr: "6", title: "Metamorphosis", features: "" },
    { nr: "7", title: "Better Things", features: "" }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-2 uppercase tracking-widest">Discography</h1>
        <p className="text-zinc-400 mb-12">Official releases from G-Wizz, The Slayer.</p>
        
        {/* Album Spotlight */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg mb-12">
          <span className="text-xs font-mono uppercase bg-red-600/20 text-red-500 px-2 py-1 rounded">Latest Release</span>
          <h2 className="text-2xl font-bold mt-3 mb-1">IN THE DEEPEND 3 SIDE B</h2>
          <p className="text-zinc-400 text-sm mb-6">Available on all major streaming platforms.</p>
          
          <div className="space-y-3">
            {tracks.map((track) => (
              <div key={track.nr} className="flex justify-between items-center py-2 border-b border-zinc-800 text-sm font-mono">
                <span className="text-zinc-500">{track.nr}. <span className="text-white font-sans font-medium">{track.title}</span> <span className="text-zinc-400 text-xs italic">{track.features}</span></span>
                <span className="text-xs text-red-500 hover:underline cursor-pointer">Play</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
