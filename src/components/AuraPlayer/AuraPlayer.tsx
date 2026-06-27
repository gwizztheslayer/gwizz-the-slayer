"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// You will replace these src paths with your actual .mp3 or .wav files inside public/audio/
const playlist = [
  { id: "01", title: "DEMONS DON'T SLEEP", artist: "G-WIZZ", src: "/audio/ambient-loop.mp3" },
  { id: "02", title: "TAKING OVER", artist: "G-WIZZ FT. ICEBERGH", src: "/audio/ambient-loop.mp3" },
  { id: "03", title: "KNYSNA SAVIOUR", artist: "G-WIZZ", src: "/audio/ambient-loop.mp3" }
];

export default function AuraPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev === playlist.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100 || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = (Number(e.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
      setProgress(Number(e.target.value));
    }
  };

  return (
    <section className="w-full py-16 bg-black border-y border-zinc-900 relative overflow-hidden font-mono">
      {/* Background Grid & Blur */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-toxic/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <div className="text-toxic font-bold tracking-[0.4em] text-[10px] mb-2 uppercase animate-pulse">
            // AURA_ALPHA_TEST_v0.1
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-[0.2em]">
            AURA <span className="text-zinc-600">ENGINE</span>
          </h2>
        </div>

        <div className="bg-zinc-950 border border-zinc-900 shadow-[0_0_40px_rgba(0,0,0,0.8)] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          
          {/* Audio Element (Hidden) */}
          <audio 
            ref={audioRef} 
            src={playlist[currentTrack].src} 
            onTimeUpdate={handleTimeUpdate}
            onEnded={nextTrack}
          />

          {/* Track Info Display */}
          <div className="flex-1 w-full text-center md:text-left space-y-2">
            <div className="text-zinc-500 text-[10px] tracking-widest uppercase">
              TRACK {playlist[currentTrack].id} OF 0{playlist.length}
            </div>
            <motion.div 
              key={currentTrack}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest"
            >
              {playlist[currentTrack].title}
            </motion.div>
            <div className="text-toxic text-xs tracking-[0.3em] font-bold">
              {playlist[currentTrack].artist}
            </div>
          </div>

          {/* Controls & Progress */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            
            {/* Scrubber */}
            <div className="w-full flex items-center gap-4">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress} 
                onChange={handleSeek}
                className="w-full h-1 bg-zinc-900 appearance-none cursor-pointer accent-toxic"
              />
            </div>

            {/* Transport Buttons */}
            <div className="flex items-center justify-center md:justify-end gap-6">
              <button onClick={prevTrack} className="text-zinc-500 hover:text-white text-xs tracking-widest uppercase transition-colors">
                [ &lt;&lt; ]
              </button>
              
              <button 
                onClick={togglePlay} 
                className="border border-toxic text-toxic hover:bg-toxic hover:text-black px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-[0_0_15px_rgba(57,255,20,0.1)]"
              >
                {isPlaying ? "[ PAUSE ]" : "[ STREAM ]"}
              </button>

              <button onClick={nextTrack} className="text-zinc-500 hover:text-white text-xs tracking-widest uppercase transition-colors">
                [ &gt;&gt; ]
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
