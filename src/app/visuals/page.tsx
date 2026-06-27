"use client";
import React, { useRef, useState } from 'react';

export default function CinematicVault() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-32 px-4 font-mono relative overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-5xl z-10 mb-8 border-b border-toxic/30 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-black text-white uppercase tracking-widest aura-toxic-text">
            THE <span className="text-toxic">VISUALS</span>
          </h1>
          <p className="text-toxic/60 text-xs tracking-[0.3em] mt-2">[ RAW TRANSMISSIONS & DIRECTIVES ]</p>
        </div>
      </div>

      {/* Native Unbranded Cinematic Display */}
      <div className="w-full max-w-5xl z-10 aspect-video bg-zinc-950 border border-toxic/40 shadow-[0_0_30px_rgba(57,255,20,0.15)] flex flex-col items-center justify-center relative group overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>
         
         <video 
           ref={videoRef}
           className="w-full h-full object-cover relative z-10"
           controls={isPlaying} /* Hides controls until played */
           controlsList="nodownload"
           poster="/comic/knysna-saviour-cover.png"
           src="/video/latest-transmission.mp4"
           onPlay={() => setIsPlaying(true)}
           onPause={() => setIsPlaying(false)}
         />

         {/* Custom Toxic Overlay Button */}
         {!isPlaying && (
           <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
             <span className="text-toxic tracking-widest text-sm animate-pulse block mb-4">[ SECURE VIDEO FEED STANDBY ]</span>
             <button 
               onClick={toggleVideo}
               className="border border-toxic bg-black text-toxic px-8 py-4 text-xs font-black tracking-widest hover:bg-toxic hover:text-black transition-all uppercase cursor-pointer shadow-[0_0_15px_rgba(57,255,20,0.3)]"
             >
               [ DECRYPT VISUALS ]
             </button>
           </div>
         )}
      </div>
    </div>
  );
}
