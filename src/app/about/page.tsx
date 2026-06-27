import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Biography | G-Wizz, The Slayer",
  description: "The official biography of G-Wizz, The Slayer. Discover the story, creative vision, and modern trap evolution of South Africa's prominent independent artist.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-white uppercase tracking-wider border-b border-zinc-800 pb-4">
          G-Wizz, <span className="text-red-600">The Slayer</span>
        </h1>
        
        <p className="text-zinc-300 leading-relaxed text-lg">
          Operating independently out of the Western Cape, South Africa, G-Wizz, The Slayer has systematically engineered a localized evolution of the modern trap sound. Blending heavy sonic textures, intricate visual aesthetics, and cutthroat delivery, the catalog acts as an uncompromising window into his world.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          From groundbreaking full-length releases like <span className="text-zinc-200 font-medium">IN THE DEEPEND 3 SIDE B</span> to conceptual standalone drops, G-Wizz continues to pioneer an entirely self-sustained creative ecosystem encompassing cutting-edge audio production, digital storytelling, and street-level lyricism.
        </p>

        <div className="pt-6 border-t border-zinc-800 flex gap-8 text-sm font-mono text-zinc-500">
          <div>
            <p className="text-zinc-400 uppercase font-semibold">Origin</p>
            <p>Knysna, South Africa</p>
          </div>
          <div>
            <p className="text-zinc-400 uppercase font-semibold">Genre</p>
            <p>Modern Heavy Trap</p>
          </div>
        </div>
      </div>
    </main>
  );
}
