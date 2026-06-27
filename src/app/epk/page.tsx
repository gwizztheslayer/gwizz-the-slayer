import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Press Kit | G-Wizz, The Slayer",
  description: "Official EPK for G-Wizz, The Slayer. Bio, rider, assets, and streaming statistics for industry professionals.",
  robots: { index: false, follow: false } // Keeps EPK hidden from public Google searches
};

export default function EPKPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 pt-24 pb-32">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="border-b border-cyan-500/20 pb-8">
          <h1 className="text-6xl font-black text-white mb-2 uppercase tracking-tighter">ELECTRONIC <span className="text-cyan-500">PRESS KIT</span></h1>
          <p className="text-xl text-zinc-400 font-mono tracking-widest uppercase">G-Wizz, The Slayer // Knysna, ZA</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4 uppercase tracking-widest">Biography</h2>
            <p className="text-zinc-300 leading-relaxed text-sm">
              Emerging from Knysna, Western Cape, G-Wizz, The Slayer is redefining the boundaries of modern trap and hip-hop. 
              Fusing aggressive 808s with dark, cinematic, and industrial soundscapes, his catalog stands as a testament to independent 
              vision. With highly anticipated projects like "Demons Don't Sleep" and "Knysna's Saviours," G-Wizz commands a sound that is both deeply regional and aggressively global.
            </p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Press Assets</h2>
            <p className="text-zinc-500 text-sm mb-6">Download high-resolution official photography, transparent logos, and brand guidelines for promotional use.</p>
            <a href="#" className="inline-block bg-cyan-500 text-black font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-cyan-400 transition-colors">
              Download Asset Pack (.ZIP)
            </a>
          </div>
        </section>

        <section className="border-t border-zinc-900 pt-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-8 uppercase tracking-widest">Technical Rider</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border border-zinc-800 bg-black">
              <h3 className="font-bold text-white mb-2">DJ / Backing</h3>
              <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-1">
                <li>2x CDJ-2000NXS2 or newer</li>
                <li>1x DJM-900NXS2 Mixer</li>
                <li>Stereo XLR Output to FOH</li>
              </ul>
            </div>
            <div className="p-4 border border-zinc-800 bg-black">
              <h3 className="font-bold text-white mb-2">Vocal Performance</h3>
              <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-1">
                <li>2x Shure SM58 (Wireless Preferred)</li>
                <li>Straight Mic Stand (Round Base)</li>
                <li>2x Wedge Monitors (Downstage)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
