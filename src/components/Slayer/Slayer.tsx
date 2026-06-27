"use client";
export default function Slayer() {
  return (
    <section id="slayer" className="w-full bg-void py-32 px-6 border-t border-toxic/30 relative z-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Visual Element */}
        <div className="relative aspect-[4/5] bg-surface border border-toxic/20 flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(57,255,20,0.1),_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
          
          {/* Corrected Image Path */}
          <img src="/images/slayer-photo.jpg" alt="G-Wizz The Slayer" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" />
        </div>

        {/* The Bio Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(57,255,20,0.3)] leading-none">
            G-Wizz,<br/>The Slayer
          </h2>
          <div className="w-16 h-1 bg-toxic mb-4"></div>
          
          <p className="text-white/80 text-lg leading-relaxed font-medium">
            Forged in the shadows of the Knysna underground, G-Wizz, The Slayer is more than an artist—he is an architect of audio-visual horror. Moving through the dark, atmospheric corridors of trap music, his sound is characterized by distorted 808s, haunting cinematic loops, and an unapologetic, gritty aesthetic.
          </p>
          <p className="text-white/80 text-lg leading-relaxed font-medium">
            As the visionary behind the <span className="text-toxic font-bold">G-Wizz, The Slayer</span> media house, The Slayer doesn’t just release music; he constructs entire worlds. From directing and editing high-voltage music videos to designing custom, spine-chilling visualizers, every transmission is a meticulously crafted nightmare.
          </p>
          <p className="text-white/80 text-lg leading-relaxed font-medium">
            With the release of <span className="italic text-white">Demons Don't Sleep</span>, the mission is clear: to push the boundaries of the Western Cape's underground scene and build an empire that refuses to be ignored.
          </p>
        </div>

      </div>
    </section>
  );
}
