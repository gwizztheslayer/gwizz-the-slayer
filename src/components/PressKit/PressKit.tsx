import React from 'react';

export default function PressKit() {
  const assets = [
    { title: "HI-RES PRESS PHOTOS", type: "ZIP FOLDER", status: "READY" },
    { title: "STAGE TECH RIDER", type: "PDF", status: "READY" },
    { title: "SPLIT SHEETS / CONTRACTS", type: "PDF", status: "SECURE" }
  ];

  return (
    <section className="w-full py-24 bg-black border-t border-zinc-900 relative overflow-hidden font-mono">
      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Left: Press Info */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-2">
            PRESS <span className="text-cyan-500">TERMINAL</span>
          </h2>
          <p className="text-zinc-500 tracking-[0.2em] uppercase text-[10px] mb-8">
            [ DREAMS OF COLOUR // OFFICIAL EPK ]
          </p>
          <div className="space-y-6 text-sm text-zinc-400">
            <p>
              Directing the modern trap soundscape from the Western Cape. G-Wizz, The Slayer operates independently alongside The Syndicate to deliver heavy-hitting, industrial-influenced hip-hop.
            </p>
            <div className="border-l-2 border-cyan-500 pl-4 py-1">
              <span className="block text-white font-bold tracking-widest text-xs mb-1">BOOKINGS & MANAGEMENT</span>
              <a href="mailto:gwizztheslayer@gmail.com" className="text-cyan-500 hover:text-white transition-colors">gwizztheslayer@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Right: Downloadable Assets */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {assets.map((asset, i) => (
            <div key={i} className="bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-colors group">
              <div>
                <span className="text-cyan-500/50 text-[10px] tracking-widest mb-4 block">FILE // 0{i + 1}</span>
                <h3 className="text-white font-bold tracking-widest text-sm mb-2 group-hover:text-cyan-400 transition-colors">{asset.title}</h3>
                <span className="text-zinc-500 text-[10px] bg-zinc-900 px-2 py-1 inline-block">{asset.type}</span>
              </div>
              <button className="w-full mt-6 border border-zinc-700 text-zinc-400 text-[10px] px-3 py-2 hover:border-cyan-500 hover:text-cyan-500 transition-all font-bold tracking-widest uppercase">
                [ DOWNLOAD ]
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
