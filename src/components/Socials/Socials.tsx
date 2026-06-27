"use client";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Spotify", url: "#" },
  { name: "SoundCloud", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "X / Twitter", url: "#" },
];

export default function Socials() {
  return (
    <section id="socials" className="w-full bg-void py-24 px-6 border-t border-toxic/30 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase text-center drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
          The Network
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-surface border border-white/10 hover:border-toxic hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300"
            >
              <span className="font-bold tracking-widest uppercase text-white/70 group-hover:text-toxic">{link.name}</span>
              <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-toxic transition-colors" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}