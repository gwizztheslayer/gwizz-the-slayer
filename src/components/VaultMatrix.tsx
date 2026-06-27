"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Track = {
  id: string;
  title: string;
  url: string;
  artwork: string;
  artists?: string;
  plays?: string | number;
};

type PlatformStream = {
  platform: string;
  status: string;
  data: Track[];
};

type VaultData = {
  spotify?: PlatformStream;
  apple?: PlatformStream;
  soundcloud?: PlatformStream;
  youtube?: PlatformStream;
};

export default function VaultMatrix() {
  const [streams, setStreams] = useState<VaultData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMatrix() {
      try {
        const res = await fetch("/api/vault-streams");
        if (!res.ok) throw new Error("Matrix connection failed");
        const json = await res.json();
        setStreams(json.streams);
      } catch (err) {
        console.error("VaultMatrix Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMatrix();
  }, []);

  if (error) {
    return (
      <div className="w-full p-6 border border-red-900 bg-black text-red-500 font-mono text-sm">
        [ SYSTEM FAULT ] - UNABLE TO ESTABLISH UPLINK WITH STREAMING NODES.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full p-6 bg-black border border-toxic/20 animate-pulse rounded-lg">
        <div className="h-6 w-48 bg-zinc-900 mb-6 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[320px] bg-zinc-950 border border-zinc-900 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-6 bg-black border border-toxic/30 rounded-lg font-mono shadow-[0_0_30px_rgba(57,255,20,0.05)]">
      <h2 className="text-xl text-white mb-6 uppercase tracking-widest border-b border-toxic/20 pb-4 flex items-center gap-3">
        <span className="text-toxic animate-pulse drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">◆</span> GLOBAL AUDIO MATRIX
      </h2>
      
      {/* High-density grid tailored to eliminate empty space */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(streams || {}).map(([key, platform]) => {
          if (!platform || platform.status !== "ACTIVE" || !platform.data.length) return null;

          return (
            <div key={key} className="flex flex-col border border-toxic/20 bg-zinc-950/80 p-3 rounded hover:border-toxic/60 transition-colors h-[320px] group">
              <div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
                <span className="text-toxic font-black tracking-widest text-sm uppercase">{platform.platform}</span>
                <span className="text-[9px] text-black font-bold uppercase tracking-widest bg-toxic px-2 py-0.5 rounded shadow-[0_0_10px_rgba(57,255,20,0.4)]">LIVE</span>
              </div>
              
              {/* Tightened flex-col gap and custom scrollbar for a dense terminal look */}
              <div className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1 custom-scrollbar">
                {platform.data.map((track) => (
                  <a 
                    key={track.id} 
                    href={track.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-black border border-zinc-900 p-2 hover:border-toxic/50 transition-all hover:bg-zinc-900/50"
                  >
                    <div className="relative h-10 w-10 flex-shrink-0 border border-zinc-800 transition-colors">
                      {track.artwork && (
                        <Image 
                          src={track.artwork} 
                          alt={track.title} 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          sizes="40px"
                        />
                      )}
                    </div>
                    <div className="flex flex-col overflow-hidden min-w-0">
                      <span className="text-[11px] text-zinc-200 truncate font-bold group-hover:text-toxic transition-colors uppercase tracking-wide">
                        {track.title}
                      </span>
                      {track.artists && (
                        <span className="text-[9px] text-zinc-500 truncate uppercase tracking-widest mt-0.5">{track.artists}</span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Global CSS for the dense custom scrollbar within this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #39ff14;
        }
      `}} />
    </div>
  );
}