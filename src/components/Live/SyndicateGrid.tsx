"use client";
import React, { useEffect, useState } from 'react';

export default function SyndicateGrid() {
  const [shows, setShows] = useState<any[]>([]);

  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_BANDSINTOWN_APP_ID || "gwizz_matrix_01";
    fetch(`https://rest.bandsintown.com/artists/G-Wizz%2C%20The%20Slayer/events?app_id=${appId}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setShows(data);
      })
      .catch(err => {
        // Silently catch network drops or ad-blocker rejections to prevent complete system crash
        console.warn("[ SYNDICATE GRID ] Network offline or API blocked by client.", err);
      });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 font-mono">
      <h2 className="text-2xl text-toxic font-black tracking-[0.2em] uppercase mb-8">
        [ SYNDICATE ROUTING GRID ]
      </h2>
      <div className="space-y-4">
        {shows.length > 0 ? shows.map((show, i) => (
          <div key={i} className="flex justify-between items-center border border-zinc-900 bg-black p-4 hover:border-toxic/50 transition-colors">
            <div>
              <div className="text-white font-bold tracking-widest">{new Date(show.datetime).toLocaleDateString()}</div>
              <div className="text-zinc-500 text-xs mt-1 uppercase">{show.venue.name} // {show.venue.city}, {show.venue.country}</div>
            </div>
            <a href={show.offers[0]?.url || show.url} target="_blank" rel="noopener noreferrer" className="bg-toxic text-black px-6 py-2 text-xs font-bold uppercase hover:bg-white transition-colors">
              Acquire Pass
            </a>
          </div>
        )) : (
          <div className="border border-zinc-900 bg-black p-8 text-center text-zinc-500 text-xs tracking-widest uppercase">
            [ NO ACTIVE DEPLOYMENTS AT THIS TIME. STANDBY. ]
          </div>
        )}
      </div>
    </div>
  );
}
