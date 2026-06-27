"use client";
import React from 'react';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';

export default function SupplyGrid() {
  const { playTrack, currentTrack, isPlaying, togglePlayPause } = useAudio();

  const inventory = [
     { name: "SLAYER DRUMS V1", type: "WAV / MIDI", price: "0.05 ETH / R450", status: "AVAILABLE", link: "https://buy.stripe.com/test_link_1", previewUrl: "/audio/preview-drums.mp3" },
     { name: "SYNDICATE HEAVY TEE", type: "APPAREL", price: "R550", status: "AVAILABLE", link: "https://buy.stripe.com/test_link_merch", previewUrl: null },
     { name: "CX INSTRUMENTALS", type: "STEMS", price: "CLASSIFIED", status: "ENCRYPTED", link: "#", previewUrl: null },
     { name: "AURA SYNTH PRESETS", type: "BANKS", price: "0.02 ETH / R150", status: "AVAILABLE", link: "https://buy.stripe.com/test_link_3", previewUrl: "/audio/preview-synth.mp3" }
  ];

  const handlePreview = (item: any) => {
    if (!item.previewUrl) return;
    const trackInfo = { title: `${item.name} (PREVIEW)`, artist: "G-Wizz, The Slayer", url: item.previewUrl, cover: "/icon.png" };
    if (currentTrack?.title === trackInfo.title) { togglePlayPause(); } else { playTrack(trackInfo, [trackInfo]); }
  };

  return (
    <div className="z-10 w-full max-w-6xl mt-16">
      <div className="border-b border-toxic/30 pb-4 mb-12">
        <h2 className="text-2xl font-black text-white tracking-widest uppercase">
          [ TACTICAL SUPPLY & MERCH ]
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventory.map((item, i) => {
           const isThisPreviewPlaying = currentTrack?.title === `${item.name} (PREVIEW)` && isPlaying;
           
           return (
             <div key={i} className="bg-black/80 border border-toxic/30 p-6 shadow-[0_0_15px_rgba(57,255,20,0.05)] hover:border-toxic hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all flex flex-col justify-between h-64 group relative">
               <div className="absolute inset-0 bg-toxic/0 group-hover:bg-toxic/5 transition-colors pointer-events-none"></div>
               
               <div>
                 <div className="flex justify-between items-start mb-6">
                   <span className="text-toxic/80 text-[10px] tracking-widest bg-toxic/10 px-2 py-1">{item.type}</span>
                   <span className={`h-2 w-2 rounded-full ${item.status === 'AVAILABLE' ? 'bg-toxic animate-pulse' : 'bg-red-500'}`}></span>
                 </div>
                 <h2 className="text-white font-black tracking-widest uppercase text-sm group-hover:text-toxic transition-colors">{item.name}</h2>
               </div>
               
               <div className="flex flex-col gap-2 mt-4 relative z-20">
                 <span className="text-white/60 font-mono text-xs border-b border-toxic/20 pb-2 mb-1">{item.price}</span>
                 
                 {item.status === 'ENCRYPTED' ? (
                   <button disabled className="w-full border border-toxic/30 text-toxic/30 text-[10px] px-3 py-2 font-bold tracking-widest uppercase cursor-not-allowed">
                     [ LOCKED ]
                   </button>
                 ) : (
                   <div className="flex gap-2">
                     {item.previewUrl && (
                       <button onClick={() => handlePreview(item)} className="flex-1 border border-white text-white text-[10px] px-2 py-2 hover:bg-white hover:text-black transition-all font-bold tracking-widest uppercase">
                         {isThisPreviewPlaying ? '[ PAUSE ]' : '[ PREVIEW ]'}
                       </button>
                     )}
                     <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-toxic text-toxic text-[10px] px-2 py-2 hover:bg-toxic hover:text-black transition-all font-bold tracking-widest uppercase animate-aura-pulse block">
                       [ SECURE ]
                     </Link>
                   </div>
                 )}
               </div>
             </div>
           );
        })}
      </div>
    </div>
  );
}
