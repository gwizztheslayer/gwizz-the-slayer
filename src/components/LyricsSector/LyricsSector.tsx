"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LyricsSector() {
  const [tracks, setTracks] = useState<any[]>([]);
  const [activeTrack, setActiveTrack] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFromMatrix() {
      try {
        const res = await fetch("/api/studio/lyrics", { cache: 'no-store' });
        const data = await res.json();
        
        if (data.lyrics && data.lyrics.length > 0) {
          setTracks(data.lyrics);
          setActiveTrack(data.lyrics[0]);
        }
      } catch (error) {
        console.error("Matrix connection severed.", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFromMatrix();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-black border-y border-toxic/20 flex justify-center items-center h-[50vh]">
        <div className="text-toxic font-mono tracking-widest text-sm animate-pulse">[ DECRYPTING LYRICAL PAYLOADS... ]</div>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div className="py-24 bg-black border-y border-toxic/20 flex justify-center items-center h-[50vh]">
        <div className="text-toxic/50 font-mono tracking-widest text-sm uppercase">[ VAULT EMPTY ]</div>
      </div>
    );
  }

  // BULLETPROOF IMAGE RESOLVER: Forces exact local filenames regardless of database errors
  const getCoverArt = (track: any) => {
    if (!track) return null;
    const title = track.title.toLowerCase();
    if (title.includes("drip")) return "/images/drip.png";
    if (title.includes("cx")) return "/images/cx.png";
    if (title.includes("taking over")) return "/images/TAking Over-min.png";
    if (title.includes("dead presidents")) return "/images/dead presidents.png";
    if (title.includes("metamorphosis")) return "/images/metamorphosis.jpg";
    return track.cover_image || null;
  };

  const activeCover = getCoverArt(activeTrack);

  // MASSIVE SEO PAYLOAD: Indexes ALL songs in the vault simultaneously for Google Search
  const jsonLd = tracks.map(track => ({
    "@context": "https://schema.org",
    "@type": "MusicComposition",
    "name": track.title,
    "lyricist": {
        "@type": "Person",
        "name": "G-Wizz, The Slayer"
    },
    "lyrics": {
        "@type": "CreativeWork",
        "text": track.text_content
    }
  }));

  return (
    <section id="lyrics" className="py-24 bg-black border-y border-toxic/20 relative overflow-hidden group">
      {/* INVISIBLE SEO MATRIX */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-700">
        {activeCover && (
          <Image src={activeCover} alt="ambient background" fill className="object-cover blur-3xl opacity-30 mix-blend-screen" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* === TRACK SELECTION CONSOLE (COL 1-4) === */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div className="border-l-2 border-toxic pl-4">
            <h2 className="text-3xl text-white font-black tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
              LYRICS <span className="text-toxic">ENGINE</span>
            </h2>
            <p className="text-xs text-zinc-500 font-mono tracking-widest mt-2 uppercase">Verified Transmissions</p>
          </div>

          {/* DYNAMIC COVER ART */}
          <div className="relative w-full aspect-square border border-toxic/30 bg-zinc-950 shadow-[0_0_20px_rgba(57,255,20,0.1)] group-hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-shadow duration-500 flex items-center justify-center overflow-hidden">
            {activeCover ? (
              <Image 
                src={activeCover} 
                alt={`${activeTrack.title} Cover Art`} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="text-toxic/20 font-black tracking-widest text-8xl">G</div>
            )}
            {/* Cyberpunk UI Element */}
            <div className="absolute top-2 right-2 bg-black/80 border border-toxic text-toxic text-[8px] px-2 py-1 tracking-widest">
              REC //
            </div>
          </div>

          {/* TRACK LISTING */}
          <div className="flex flex-col space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-toxic/20 scrollbar-track-transparent pr-2">
            {tracks.map((track) => (
              <button 
                key={track.id} 
                onClick={() => setActiveTrack(track)} 
                className={`w-full text-left px-4 py-3 font-mono text-xs tracking-widest border transition-all duration-300 uppercase ${ 
                  activeTrack.id === track.id 
                    ? "border-toxic bg-toxic/10 text-toxic shadow-[0_0_10px_rgba(57,255,20,0.2)]" 
                    : "border-zinc-900 text-zinc-500 hover:border-toxic/50 hover:text-zinc-300" 
                }`}
              >
                {track.title}
              </button>
            ))}
          </div>
        </div>

        {/* === LYRICAL PAYLOAD DISPLAY (COL 5-12) === */}
        <article className="lg:col-span-8 flex flex-col h-[700px] border border-toxic/20 bg-black/80 backdrop-blur-md relative shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
          
          <header className="p-6 border-b border-toxic/20 bg-zinc-950/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-2xl font-black text-white tracking-[0.1em] uppercase">{activeTrack.title}</h3>
              <p className="text-toxic text-xs font-mono tracking-widest mt-1">G-WIZZ, THE SLAYER</p>
            </div>
            {activeTrack.genius_url && (
              <Link 
                href={activeTrack.genius_url} 
                target="_blank" 
                className="flex items-center gap-2 px-4 py-2 border border-toxic text-toxic font-mono text-[10px] hover:bg-toxic hover:text-black transition-colors uppercase tracking-widest whitespace-nowrap"
              >
                [ VERIFY ON GENIUS ]
              </Link>
            )}
          </header>

          <div className="p-8 overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-toxic/30 scrollbar-track-transparent">
            <div className="text-zinc-300 font-mono text-sm sm:text-base whitespace-pre-wrap leading-loose tracking-wide">
              {activeTrack.text_content}
            </div>
          </div>

          <footer className="p-3 border-t border-toxic/20 bg-zinc-950/80 flex justify-between items-center text-[9px] font-mono text-toxic/50 tracking-widest">
            <span>// DECRYPTED PAYLOAD</span>
            <span>STATUS: SECURE</span>
          </footer>
        </article>

      </div>
    </section>
  );
}
