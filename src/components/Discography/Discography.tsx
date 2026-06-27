// @ts-nocheck
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAudioStore } from "@/store/audioStore";
import { useAudio } from "@/context/AudioContext";

const albums = [
  { title: "DEMONS DON'T SLEEP", link: "https://gwizztheslayer.bandcamp.com/", img: "/images/demons.png", tracks: [{ title: "All In A Day", audio: "/audio/all in a day.mp3" }, { title: "Side Eye Ft. Acidiq Truth", audio: "/audio/side eye.mp3" }, { title: "Running Shit", audio: "/audio/running shit.mp3" }, { title: "Godly Ft. Jo Oyat & TokyoSa", audio: "/audio/godly.mp3" }, { title: "Okapi Ft. Acidiq Truth", audio: "/audio/okapi.mp3" }, { title: "Metamorphosis", audio: "/audio/metamorphosis.mp3" }, { title: "Better Things", audio: "/audio/better things.mp3" }, { title: "All In A Day (Remastered)", audio: "/audio/all in a day remaster.mp3" }, { title: "Better Things (Shankari Remix)", audio: "/audio/better things - shankari remix.mp3" }] },
  { title: "KNYSNA'S SAVIOURS", link: "https://gwizztheslayer.bandcamp.com/", img: "/images/knysnas-saviours.png", tracks: [{ title: "Bozza", audio: "/audio/Bozza.mp3" }, { title: "IDGAF (Ft. Acidiq Truth)", audio: null, soundcloud: "https://soundcloud.com/gwizztheslayer/idgaf-ft-acidiq-truth" }, { title: "Lit", audio: null, soundcloud: "https://soundcloud.com/gwizztheslayer/lit-ft-icebergh" }, { title: "CX", audio: "/audio/CX.mp3" }, { title: "Drip", audio: "/audio/Drip.mp3" }, { title: "Escape (Ft. The Virus) [DEMO]", audio: null, soundcloud: "https://soundcloud.com/gwizztheslayer/escape" }, { title: "Drowning", audio: "/audio/Drowning.mp3" }] },
  { title: "HEAVEN IS WHAT YOU MAKE IT AND HELL IS WHAT YOU GO THROUGH", link: "", img: "/images/heaven-hell.png", tracks: [{ title: "Dead Presidents", audio: "/audio/dead presidents.mp3" }, { title: "MIA", audio: "/audio/mia.mp3" }, { title: "Taking Over", audio: "/audio/Taking Over.mp3" }, { title: "The Massacre", audio: "/audio/The Massacre.mp3" }] },
  { title: "LIL LAVA BABY", link: "", img: "/images/lil-lava-baby.png", tracks: [{ title: "The Vision", audio: "/audio/The Vision.mp3" }, { title: "Means Nothing", audio: "/audio/Means Nothing.mp3" }, { title: "Feeling Me Now", audio: "/audio/Feeling me now.mp3" }, { title: "Tryna Be Rude", audio: "/audio/Tryna Be Rude.mp3" }, { title: "Mr. Everywhere", audio: "/audio/mr everywhere.mp3" }, { title: "Living Life", audio: "/audio/Living life.mp3" }, { title: "Fully Equipped", audio: "/audio/fully equipped.mp3" }] },
  { title: "I DON'T THINK IT WAS LOVE", link: "https://gwizztheslayer.bandcamp.com/", img: "/images/idontthink.png", tracks: [{ title: "Dear Peaches", audio: "/audio/Dear Peaches.mp3" }, { title: "Better Off Without", audio: "/audio/Better Off Without.mp3" }, { title: "Better Off Ft. KID KEI", audio: "/audio/Better Off.mp3" }, { title: "Dear Peaches - Clean Version", audio: "/audio/Dear Peaches - Radio Edit.mp3" }] }
];

const singles = [
  { title: "Bozza", link: "https://gwizztheslayer.bandcamp.com/", img: "/images/bozza.png", audio: "/audio/Bozza.mp3" }, { title: "CX", link: "https://gwizztheslayer.bandcamp.com/track/cx-ft-acidiq-truth-icebergh-xxxceptional", img: "/images/cx.png", audio: "/audio/CX.mp3" }, { title: "Drip", link: "https://gwizztheslayer.bandcamp.com/track/drip-prod-ceoxcam88", img: "/images/drip.png", audio: "/audio/Drip.mp3" }, { title: "Drowning", link: "https://gwizztheslayer.bandcamp.com/track/drowning-ft-dash-maejor-icebergh", img: "/images/drowning.png", audio: "/audio/Drowning.mp3" }, { title: "Better Things", link: "https://gwizztheslayer.bandcamp.com/track/better-things-ft-xxxceptional-prod-ceoxcam88", img: "/images/BETTER THINGS.png", audio: "/audio/better things.mp3" }, { title: "Metamorphosis", link: "https://gwizztheslayer.bandcamp.com/track/metamorphosis-ft-hellraizer-prod-chemist", img: "/images/metamorphosis.jpg", audio: "/audio/metamorphosis.mp3" }, { title: "Okapi", link: "https://gwizztheslayer.bandcamp.com/track/okapi-ft-acidiq-truth-prod-ceoxcam88", img: "/images/Okapi.png", audio: "/audio/okapi.mp3" }, { title: "Dead Presidents", link: "https://gwizztheslayer.bandcamp.com/track/dead-presidents-rockstar-jeans", img: "/images/dead presidents.png", audio: "/audio/dead presidents.mp3" }, { title: "MIA", link: "https://gwizztheslayer.bandcamp.com/track/mia-prod-ceoxcam88", img: "/images/mia.jpg", audio: "/audio/mia.mp3" }, { title: "Taking Over", link: "https://gwizztheslayer.bandcamp.com/track/taking-over-ft-ace-mclein", img: "/images/TAking Over-min.png", audio: "/audio/Taking Over.mp3" }, { title: "Better Things (Remix)", link: "", img: "/images/better things remix.png", audio: "/audio/better things - shankari remix.mp3" }, { title: "Godly", link: "https://gwizztheslayer.bandcamp.com/track/godly-ft-jo-oyat-tokyo-sa-prod-nvsa-szn", img: "/images/godly.png", audio: "/audio/godly.mp3" }, { title: "Running Shit", link: "https://gwizztheslayer.bandcamp.com/track/running-shit", img: "/images/Running shit.png", audio: "/audio/running shit.mp3" }, { title: "All In A Day (Remaster)", link: "https://gwizztheslayer.bandcamp.com/track/all-in-a-day-remastered", img: "/images/all in a day remaster.png", audio: "/audio/all in a day remaster.mp3" }, { title: "All In A Day", link: "https://gwizztheslayer.bandcamp.com/track/all-in-a-day-prod-ceoxcam88", img: "/images/All in a day.png", audio: "/audio/all in a day.mp3" }, { title: "Dear Peaches", link: "", img: "/images/Dear Peaches.png", audio: "/audio/Dear Peaches.mp3" }, { title: "The Vision", link: "", img: "/images/The Vision.png", audio: "/audio/The Vision.mp3" }, { title: "Better Off", link: "", img: "/images/Better Off (1).png", audio: "/audio/Better Off.mp3" }
];

const Lightning = () => <svg className="absolute top-2 left-2 w-8 h-8 z-50 animate-pulse drop-shadow-[0_0_8px_#39ff14]" viewBox="0 0 24 24" fill="#39ff14"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;

export default function Discography() {
  const { currentTrack, isPlaying, playTrack, togglePlayPause, audioRef } = useAudio();
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const animationRef = useRef(null);
  const setAudioData = useAudioStore((state) => state.setAudioData);

  useEffect(() => {
    if (!audioRef?.current) return;
    const initVisualizer = () => {
      try {
        if (!audioCtxRef.current) {
          audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
          analyserRef.current = audioCtxRef.current.createAnalyser();
          analyserRef.current.fftSize = 256;
          if (!audioRef.current._hasSource) {
            const source = audioCtxRef.current.createMediaElementSource(audioRef.current);
            source.connect(analyserRef.current);
            analyserRef.current.connect(audioCtxRef.current.destination);
            audioRef.current._hasSource = true;
          }
        }
        if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();
      } catch (e) { console.log("Visualizer init skipped/failed", e); }
    };

    const analyzeAudio = () => {
      if (!analyserRef.current) return;
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const update = () => {
        if (isPlaying && analyserRef.current) {
          analyserRef.current.getByteFrequencyData(dataArray);
          const bassAverage = dataArray.slice(0, 10).reduce((a, b) => a + b, 0) / 10;
          setAudioData(bassAverage);
          animationRef.current = requestAnimationFrame(update);
        }
      };
      update();
    };

    if (isPlaying) { initVisualizer(); analyzeAudio(); } 
    else { if (animationRef.current) cancelAnimationFrame(animationRef.current); setAudioData(0); }
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, audioRef, setAudioData]);

  const handleTrackClick = (trackData, img, albumTitle, albumTracksData) => {
    if (!trackData.audio) return;
    if (currentTrack?.url === trackData.audio) { togglePlayPause(); } 
    else {
      const trackToPlay = { title: trackData.title, artist: "G-Wizz, The Slayer", url: trackData.audio, cover: img, albumContext: albumTitle };
      let playlist = [];
      if (albumTracksData) {
         playlist = albumTracksData.filter(t => t.audio).map(t => ({ title: t.title, artist: "G-Wizz, The Slayer", url: t.audio, cover: img, albumContext: albumTitle }));
      }
      playTrack(trackToPlay, playlist.length > 0 ? playlist : undefined);
    }
  };

  return (
    <section id="music" className="py-24 bg-black/90 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-6xl font-black text-toxic mb-16 uppercase tracking-tighter border-b border-toxic/20 pb-4">DISCOGRAPHY</motion.h2>

        <h3 className="text-2xl text-white mb-8 uppercase tracking-widest border-l-4 border-toxic pl-4">Albums</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
          {albums.map((album, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-black border border-white/10 p-4 hover:border-toxic/30 transition-all">
              <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => album.tracks[0] && handleTrackClick(album.tracks[0], album.img, album.title, album.tracks)}>
                <Image src={album.img} alt={album.title} fill priority={i < 3} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                {currentTrack?.url === album.tracks[0]?.audio && isPlaying && <Lightning />}
                {album.link && (
                  <a href={album.link} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 bg-black/80 p-2 rounded-full border border-toxic/50 text-toxic z-30 hover:bg-toxic hover:text-black transition-colors" onClick={(e) => e.stopPropagation()}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></a>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 overflow-y-auto">
                  {album.tracks.map((t, idx) => (
                    <button key={idx} onClick={(e) => {
                      e.stopPropagation();
                      if (t.audio) { handleTrackClick(t, album.img, album.title, album.tracks); }
                      else if (t.soundcloud) { window.open(t.soundcloud, '_blank', 'noopener,noreferrer'); }
                    }} className={`block text-xs text-left w-full font-mono py-1 truncate ${t.audio || t.soundcloud ? 'text-white hover:text-toxic cursor-pointer' : 'text-white/30 cursor-not-allowed'}`} disabled={!t.audio && !t.soundcloud}>
                      {idx + 1}. {t.title} {!t.audio && !t.soundcloud && " (UNAVAILABLE)"} {!t.audio && t.soundcloud && " (SOUNDCLOUD)"}
                    </button>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-toxic font-bold text-sm text-center uppercase tracking-widest">{album.title}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl text-white mb-8 uppercase tracking-widest border-l-4 border-toxic pl-4">Singles</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {singles.map((single, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 5) * 0.1 }} className="group relative bg-black border border-white/10 p-3 hover:border-toxic transition-all">
              <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => handleTrackClick(single, single.img, "Single")}>
                <Image src={single.img} alt={single.title} fill priority={i < 5} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw" className="object-cover transition-transform group-hover:scale-105" />
                {currentTrack?.url === single.audio && isPlaying && <Lightning />}
                {single.link && (
                  <a href={single.link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 bg-black/80 p-2 rounded-full border border-toxic/50 text-toxic z-30 hover:bg-toxic hover:text-black transition-colors" onClick={(e) => e.stopPropagation()}><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></a>
                )}
              </div>
              <p className="mt-3 text-white text-[10px] text-center uppercase tracking-widest truncate">{single.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
