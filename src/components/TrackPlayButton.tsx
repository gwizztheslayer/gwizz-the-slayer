// @ts-nocheck
"use client";
import React from "react";
import { useAudio, Track } from "../context/AudioContext";
import { Play, Pause, Loader2 } from "lucide-react";

export default function TrackPlayButton({ track, albumTracks, children }) {
  const { currentTrack, isPlaying, isBuffering, playTrack, togglePlayPause } = useAudio();
  const isThisTrackPlaying = currentTrack?.url === track.url;
  const handlePlay = () => { if (isThisTrackPlaying) { togglePlayPause(); } else { playTrack(track, albumTracks); } };

  return (
    <div onClick={handlePlay} className="cursor-pointer group flex items-center gap-2 w-full text-left">
      {children ? children : (
        <button className="flex items-center gap-2 text-zinc-400 group-hover:text-cyan-400 transition-colors w-full text-left">
          {isThisTrackPlaying && isBuffering ? <Loader2 size={16} className="animate-spin text-cyan-500 flex-shrink-0" /> : isThisTrackPlaying && isPlaying ? <Pause size={16} fill="currentColor" className="flex-shrink-0" /> : <Play size={16} fill="currentColor" className="flex-shrink-0" />}
          <span className="font-mono text-sm text-inherit transition-colors truncate">{track.title}</span>
        </button>
      )}
    </div>
  );
}
