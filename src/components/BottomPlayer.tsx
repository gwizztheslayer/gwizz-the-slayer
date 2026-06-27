"use client";
import React from "react";

// This defines what a track looks like in your code
export interface Track {
  title: string;
  artist: string;
  audioSrc: string;
  coverArt?: string;
}

interface BottomPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function BottomPlayer({ currentTrack, isPlaying, onPlayPause, onNext, onPrev }: BottomPlayerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-zinc-900 flex items-center justify-between px-6 z-50">
      
      {/* LEFT: Cover Art & Track Info */}
      <div className="flex items-center gap-4 w-1/3">
        {/* THE MAGIC IMAGE LOGIC */}
        <div className="w-14 h-14 bg-zinc-900 flex-shrink-0 shadow-lg">
          <img 
            src={currentTrack?.coverArt ? currentTrack.coverArt : "/doc-update.png"} 
            alt={currentTrack ? currentTrack.title : "G-Wizz, The Slayer"}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col">
          <span className="text-white font-bold text-sm uppercase tracking-widest">
            {currentTrack ? currentTrack.title : "IDLE"}
          </span>
          <span className="text-[#00bcd4] text-xs font-mono mt-1">
            {currentTrack ? currentTrack.artist : "G-Wizz, The Slayer"}
          </span>
        </div>
      </div>

      {/* CENTER: Playback Controls */}
      <div className="flex items-center justify-center gap-6 w-1/3">
        <button onClick={onPrev} className="text-zinc-400 hover:text-white transition">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
        </button>
        
        {/* Teal Play/Pause Button from your video */}
        <button 
          onClick={onPlayPause} 
          className="w-12 h-12 rounded-full bg-[#00bcd4] flex items-center justify-center text-black hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,188,212,0.4)]"
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          )}
        </button>

        <button onClick={onNext} className="text-zinc-400 hover:text-white transition">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
        </button>
      </div>

      {/* RIGHT: Volume (Placeholder) */}
      <div className="flex justify-end w-1/3">
        <button className="text-zinc-400 hover:text-white transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
        </button>
      </div>

    </div>
  );
}

