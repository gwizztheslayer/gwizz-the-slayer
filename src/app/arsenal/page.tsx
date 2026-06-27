import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Arsenal | G-Wizz, The Slayer",
  description: "Extraterrestrial trap frequencies. Stream Demons Don't Sleep.",
};

export default function ArsenalPage() {
  return (
    <div className="min-h-screen bg-black font-mono pt-32 pb-24 px-4 relative overflow-hidden flex flex-col items-center">
      {/* Alien Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay animate-pulse"></div>
      </div>

      <div className="z-10 w-full max-w-6xl text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-[0.3em] drop-shadow-[0_0_15px_rgba(57,255,20,0.2)]">
          THE <span className="text-toxic">ARSENAL</span>
        </h1>
        <p className="text-zinc-500 text-xs md:text-sm tracking-widest mt-4 uppercase">
          [ HEAVY-HITTING TRAP ENERGY. EXTRATERRESTRIAL FREQUENCIES. ]
        </p>
      </div>

      {/* THE AUDIO ARRAY (SPOTIFY & SOUNDCLOUD EMBEDS ABOVE THE DISCOGRAPHY) */}
      <div className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        
        {/* Spotify Module */}
        <div className="w-full shadow-[0_0_30px_rgba(57,255,20,0.15)] rounded-xl overflow-hidden border border-toxic/30 bg-black">
          <div className="bg-toxic text-black px-4 py-2 text-xs font-black tracking-[0.2em] uppercase flex justify-between">
            <span>[ SPOTIFY_UPLINK ]</span>
            <span className="animate-pulse">ACTIVE</span>
          </div>
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: '0 0 12px 12px' }} 
            src="https://open.spotify.com/embed/artist/1GM9nGfwFjiwZtgIWO3sh2?utm_source=generator&theme=0&si=c5d2e908f6fb49fc" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen={false} 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="bg-black"
          ></iframe>
        </div>

        {/* SoundCloud Module */}
        <div className="w-full shadow-[0_0_30px_rgba(57,255,20,0.15)] rounded-xl overflow-hidden border border-toxic/30 bg-black flex flex-col">
          <div className="bg-toxic text-black px-4 py-2 text-xs font-black tracking-[0.2em] uppercase flex justify-between">
            <span>[ SOUNDCLOUD_TRANSMISSION ]</span>
            <span className="animate-pulse">ACTIVE</span>
          </div>
          <iframe 
            width="100%" 
            height="352" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/gwizztheslayer&color=%2339ff14&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            style={{ borderRadius: '0 0 12px 12px' }} 
            className="flex-1 bg-black"
          ></iframe>
        </div>

      </div>

      {/* THE DISCOGRAPHY GRID */}
      <div className="z-10 w-full max-w-6xl">
        <div className="border-b border-toxic/30 pb-4 mb-12">
          <h2 className="text-2xl font-black text-white tracking-widest uppercase">
            [ ARCHIVES & DROPS ]
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Album Item 1: Demons Don't Sleep */}
          <div className="group border border-toxic/20 bg-zinc-950 p-4 hover:border-toxic transition-all duration-300">
            <div className="aspect-square bg-zinc-900 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/demons-cover.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="text-toxic font-black tracking-wider text-lg">DEMONS DON'T SLEEP</h3>
            <p className="text-zinc-500 text-xs tracking-widest mt-1 uppercase">ALBUM</p>
          </div>

          {/* Single Item 1: CX */}
          <div className="group border border-toxic/20 bg-zinc-950 p-4 hover:border-toxic transition-all duration-300">
            <div className="aspect-square bg-zinc-900 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/cx-cover.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="text-toxic font-black tracking-wider text-lg">CX</h3>
            <p className="text-zinc-500 text-xs tracking-widest mt-1 uppercase">SINGLE</p>
          </div>

          {/* Single Item 2: Drip */}
          <div className="group border border-toxic/20 bg-zinc-950 p-4 hover:border-toxic transition-all duration-300">
            <div className="aspect-square bg-zinc-900 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/drip-cover.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="text-toxic font-black tracking-wider text-lg">DRIP</h3>
            <p className="text-zinc-500 text-xs tracking-widest mt-1 uppercase">SINGLE</p>
          </div>
        </div>
      </div>

    </div>
  );
}
