import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Knysna's Saviour: Issue #1 | G-Wizz, The Slayer",
  description: "Read the official dark fantasy manga by G-Wizz, The Slayer. Something woke up beneath Knysna. Enter the lore.",
  keywords: ["Knysna's Saviour", "G-Wizz The Slayer comic", "South African manga", "dark fantasy manga", "anime style", "Knysna underground"],
  openGraph: {
    title: "Knysna's Saviour: Issue #1",
    description: "Something woke up beneath Knysna. Read the official dark fantasy manga by G-Wizz, The Slayer.",
    images: ['/comic/knysna-saviour-cover.png'],
  }
};

export default function Issue1Reader() {
  // Dynamically map the full 10-page spread
  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-black font-mono">
      <div className="sticky top-0 bg-black/90 border-b border-toxic/30 p-4 flex justify-between items-center z-50 backdrop-blur-md">
        <Link href="/lore" className="text-toxic text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">[ RETURN ]</Link>
        <h1 className="text-white text-sm font-black uppercase tracking-widest hidden md:block">KNYSNA'S SAVIOUR // ISSUE 1</h1>
        <div className="w-[70px]"></div>
      </div>
      
      <div className="max-w-3xl mx-auto flex flex-col items-center pb-32 pt-8 px-4">
        {/* Eager Load Cover */}
        <img src="/comic/knysna-saviour-cover.png" alt="Knysna's Saviour Cover" fetchPriority="high" className="w-full h-auto object-contain border border-zinc-900 mb-8 shadow-[0_0_30px_rgba(57,255,20,0.15)]" />
        
        {/* Render all 10 pages dynamically */}
        {pages.map((pageNum) => (
          <img 
            key={pageNum}
            src={`/comic/page-${pageNum}.png`} 
            alt={`Page ${pageNum}`} 
            loading={pageNum === 1 ? "eager" : "lazy"} 
            decoding="async" 
            className="w-full h-auto object-contain border border-zinc-900 mb-4" 
          />
        ))}
        
        <div className="mt-12 text-toxic/50 text-xs tracking-[0.3em] uppercase">
          [ END OF TRANSMISSION ]
        </div>
      </div>
    </div>
  );
}
