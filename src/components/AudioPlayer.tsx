// @ts-nocheck
'use client';
import { useState, useEffect } from 'react';
import { Volume2, VolumeX, SkipForward, SkipBack, Play, Pause, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAudio } from '../context/AudioContext';

const formatTime = (time: number) => {
  if (!time || isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default function AudioPlayer() {
  const { currentTrack, isPlaying, isBuffering, togglePlayPause, nextTrack, prevTrack, audioRef, themeColor } = useAudio();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => setProgress(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    return () => { audio.removeEventListener('timeupdate', updateProgress); audio.removeEventListener('loadedmetadata', updateDuration); };
  }, [audioRef, currentTrack]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) { audioRef.current.currentTime = newTime; setProgress(newTime); }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);
    if (audioRef.current) { audioRef.current.volume = newVol; audioRef.current.muted = newVol === 0; }
    setIsMuted(newVol === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted && volume === 0) setVolume(0.5);
    }
  };

  if (!currentTrack) return null; 

  return (
    <motion.div 
      initial={{ y: 100 }} 
      animate={{ y: 0 }} 
      className="fixed bottom-0 left-0 right-0 h-[calc(6rem+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)] bg-black/85 backdrop-blur-2xl border-t z-50 flex flex-col justify-center px-4 md:px-8 transition-colors duration-700"
      style={{ borderTopColor: `${themeColor}40`, boxShadow: `0 -10px 40px ${themeColor}15` }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-900 group cursor-pointer">
        <input type="range" min="0" max={duration || 100} value={progress} onChange={handleSeek} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
        <div className="h-full relative transition-colors duration-700" style={{ width: `${(progress / (duration || 1)) * 100}%`, backgroundColor: themeColor, boxShadow: `0 0 10px ${themeColor}CC` }}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-2">
        <div className="flex items-center gap-4 w-1/3 min-w-0">
          <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex-shrink-0 relative overflow-hidden">
              <Image src={currentTrack.cover || "/icon.png"} alt={currentTrack.title} fill sizes="48px" className="object-cover relative z-10" />
              <div className="absolute inset-0 transition-colors duration-700 z-20 pointer-events-none" style={{ backgroundColor: `${themeColor}33` }}></div>
          </div>
          <div className="hidden sm:flex flex-col min-w-0 overflow-hidden">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm truncate">{currentTrack.title}</h4>
            <p className="text-xs font-mono tracking-widest truncate transition-colors duration-700" style={{ color: themeColor }}>{currentTrack.artist || "G-Wizz, The Slayer"}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 w-1/3">
          <div className="flex items-center gap-6">
            <button onClick={prevTrack} className="text-zinc-400 hover:text-white transition-colors active:scale-95"><SkipBack size={20} /></button>
            <button onClick={togglePlayPause} className="w-12 h-12 rounded-full text-black flex items-center justify-center transition-all duration-700 active:scale-90" style={{ backgroundColor: themeColor, boxShadow: `0 0 15px ${themeColor}80` }}>
              {isBuffering ? <Loader2 size={24} className="animate-spin text-black" /> : isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-1" />}
            </button>
            <button onClick={nextTrack} className="text-zinc-400 hover:text-white transition-colors active:scale-95"><SkipForward size={20} /></button>
          </div>
          <div className="text-[10px] text-zinc-500 font-mono tracking-widest hidden sm:block">
            {formatTime(progress)} / {formatTime(duration)}
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 w-1/3 text-zinc-400 hidden sm:flex">
          <button onClick={toggleMute} className="transition-colors hover:text-white" style={{ color: (isMuted || volume === 0) ? '#a1a1aa' : themeColor }}>{(isMuted || volume === 0) ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
          <div className="w-24 h-1 relative group bg-zinc-800 rounded-full flex items-center">
             <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={handleVolume} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
             <div className="h-full rounded-full transition-colors duration-700" style={{ width: `${(isMuted ? 0 : volume) * 100}%`, backgroundColor: themeColor }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
