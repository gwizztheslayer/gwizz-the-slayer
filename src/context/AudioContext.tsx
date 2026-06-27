// @ts-nocheck
"use client";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";

export type Track = { title: string; artist: string; url: string; cover: string; albumContext?: string; };

type AudioContextType = {
  currentTrack: Track | null; isPlaying: boolean; isBuffering: boolean; playlist: Track[];
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  themeColor: string;
  playTrack: (track: Track, newPlaylist?: Track[]) => void;
  togglePlayPause: () => void; nextTrack: () => void; prevTrack: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [themeColor, setThemeColor] = useState("#00bcd4"); // Default Cyan
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Chameleon Engine: Extract dominant color when track cover changes
  useEffect(() => {
    if (currentTrack?.cover) {
      const fac = new FastAverageColor();
      fac.getColorAsync(currentTrack.cover)
        .then(color => setThemeColor(color.hex))
        .catch(e => {
          console.log("Color extraction failed, falling back to default.", e);
          setThemeColor("#00bcd4");
        });
    }
  }, [currentTrack]);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      setIsBuffering(true);
      audioRef.current.play().catch(e => { console.log("Autoplay blocked:", e); setIsBuffering(false); });
      setIsPlaying(true);

      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: currentTrack.title,
          artist: currentTrack.artist || 'G-Wizz, The Slayer',
          album: currentTrack.albumContext || 'Independent',
          artwork: [{ src: currentTrack.cover || '/icon.png', sizes: '512x512', type: 'image/png' }]
        });
      }
    }
  }, [currentTrack]);

  const playTrack = (track: Track, newPlaylist?: Track[]) => {
    if (newPlaylist) setPlaylist(newPlaylist);
    else if (playlist.length === 0) setPlaylist([track]);
    setCurrentTrack(track);
  };

  const togglePlayPause = () => {
    if (!currentTrack) return;
    if (audioRef.current) {
      if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
      else { setIsBuffering(true); audioRef.current.play().catch(e => { console.log(e); setIsBuffering(false); }); setIsPlaying(true); }
    }
  };

  const nextTrack = () => {
    if (!currentTrack || playlist.length <= 1) return;
    const currentIndex = playlist.findIndex(t => t.url === currentTrack.url);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextIndex]);
  };

  const prevTrack = () => {
    if (!currentTrack || playlist.length <= 1) return;
    const currentIndex = playlist.findIndex(t => t.url === currentTrack.url);
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentTrack(playlist[prevIndex]);
  };

  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => { audioRef.current?.play(); setIsPlaying(true); });
      navigator.mediaSession.setActionHandler('pause', () => { audioRef.current?.pause(); setIsPlaying(false); });
      navigator.mediaSession.setActionHandler('previoustrack', prevTrack);
      navigator.mediaSession.setActionHandler('nexttrack', nextTrack);
    }
  }, [playlist, currentTrack]);

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, isBuffering, playlist, audioRef, themeColor, playTrack, togglePlayPause, nextTrack, prevTrack }}>
      {children}
      <audio ref={audioRef} src={currentTrack?.url} preload="none" crossOrigin="anonymous" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={nextTrack} onWaiting={() => setIsBuffering(true)} onPlaying={() => setIsBuffering(false)} onCanPlay={() => setIsBuffering(false)} />
    </AudioContext.Provider>
  );
};
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) throw new Error("useAudio must be used within AudioProvider");
  return context;
};
