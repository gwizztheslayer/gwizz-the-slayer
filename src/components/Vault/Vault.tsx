"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ExternalLink, ChevronDown, ShoppingCart } from "lucide-react";
import { useAudio } from "@/context/AudioContext";

const albums = [
  { id: 1, title: "Demons Don't Sleep", type: "Album", url: "https://ffm.to/demonsdontsleepalbum", image: "/images/demons.png" },
  { 
    id: 10, title: "Knysna's Saviours", type: "Album", image: "/images/knysnas-saviours.png",
    tracks: [
        { id: 101, title: "Drip", file: "/audio/drip.mp3" },
        { id: 102, title: "Bozza", file: "/audio/bozza.mp3" },
        { id: 103, title: "CX", file: "/audio/cx.mp3" },
        { id: 104, title: "Drowning", file: "/audio/drowning.mp3" }
    ]
  },
  { id: 11, title: "Heaven Is What You Make It", type: "Album", image: "/images/heaven-hell.png", tracks: [{ id: 111, title: "Track 1", file: "/audio/heaven-1.mp3" }] },
  { id: 7, title: "Lil Lava Baby", type: "Album", image: "/images/lil-lava-baby.png", tracks: [{ id: 701, title: "Track 1", file: "/audio/lava-1.mp3" }] },
  { id: 8, title: "I Don't Think It Was Love", type: "Album", image: "/images/idontthink.png", tracks: [{ id: 801, title: "Track 1", file: "/audio/love-1.mp3" }] },
];

const singles = [
  { id: 2, title: "Drip", type: "Single", file: "/audio/drip.mp3", image: "/images/drip.png", buyUrl: "https://gwizztheslayer.bandcamp.com/track/drip-prod-ceoxcam88" },
  { id: 3, title: "Bozza", type: "Single", file: "/audio/bozza.mp3", image: "/images/bozza.png" },
  { id: 4, title: "CX", type: "Single", file: "/audio/cx.mp3", image: "/images/cx.png", buyUrl: "https://gwizztheslayer.bandcamp.com/track/cx-ft-acidiq-truth-icebergh-xxxceptional" },
  { id: 6, title: "Drowning", type: "Single", file: "/audio/drowning.mp3", image: "/images/drowning.png", buyUrl: "https://gwizztheslayer.bandcamp.com/track/drowning-ft-dash-maejor-icebergh" },
];

export default function Vault() {
  const { currentTrack, isPlaying, playTrack } = useAudio();
  const [activeAlbumId, setActiveAlbumId] = useState<number | null>(null);

  const handleItemClick = (item: any) => {
    if (item.url) {
      window.open(item.url, "_blank");
    } else if (item.tracks) {
      setActiveAlbumId(activeAlbumId === item.id ? null : item.id);
    } else {
      playTrack(item);
    }
  };

  const renderGrid = (items: any[], isAlbumGrid: boolean) => (
    <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => {
            const isExpanded = activeAlbumId === item.id;
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className={`group relative aspect-square bg-surface border flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 drop-shadow-[0_0_30px_rgba(57,255,20,0.4)] ${isExpanded ? 'border-toxic shadow-[0_0_20px_rgba(57,255,20,0.3)]' : 'border-toxic/20 hover:border-toxic'}`}
              >
                {item.buyUrl && (
                    <a href={item.buyUrl} target="_blank" className="absolute top-4 right-4 z-30 bg-toxic p-2 rounded-full hover:scale-110 transition-transform shadow-lg">
                        <ShoppingCart className="w-5 h-5 text-void" />
                    </a>
                )}
                
                <div onClick={() => handleItemClick(item)} className="absolute inset-0 z-10" />
                {item.image ? <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500" /> : <div className="absolute inset-0 bg-gradient-to-br from-surface to-void opacity-80"></div>}
                
                <div className="relative z-0 flex flex-col items-center p-4 text-center pointer-events-none">
                    <span className="text-white font-bold text-xl tracking-wide">{item.title}</span>
                    <span className="text-toxic/70 text-sm uppercase tracking-widest mt-2">{item.type}</span>
                </div>
                
                <motion.div className="absolute inset-0 bg-void/80 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    {item.url ? <ExternalLink className="w-16 h-16 text-toxic" /> : item.tracks ? <ChevronDown className="w-16 h-16 text-toxic" /> : <Play className="w-16 h-16 text-toxic fill-toxic" />}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {isAlbumGrid && (
            <AnimatePresence>
                {activeAlbumId && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="relative overflow-hidden mt-4">
                        <div className="absolute -top-3 left-1/2 -ml-3 w-6 h-6 bg-surface border-t border-l border-toxic/30 rotate-45 z-0"></div>
                        <div className="bg-surface border border-toxic/30 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">
                            <h4 className="text-toxic font-black tracking-widest uppercase mb-8 text-2xl border-b border-toxic/20 pb-4">Tracklist // {albums.find(a => a.id === activeAlbumId)?.title}</h4>
                            <div className="flex flex-col gap-2">
                                {albums.find(a => a.id === activeAlbumId)?.tracks?.map((track: any, index: number) => {
                                    const isPlayingTrack = currentTrack?.title === track.title && isPlaying;
                                    return (
                                        <div key={track.id} onClick={() => playTrack({ ...track, image: albums.find(a => a.id === activeAlbumId)?.image })} className="flex items-center justify-between p-4 hover:bg-void border border-transparent hover:border-toxic/20 cursor-pointer group transition-all">
                                            <div className="flex items-center gap-6">
                                                <span className="text-white/30 font-mono text-xl">{String(index + 1).padStart(2, '0')}</span>
                                                <span className={`font-bold text-lg ${isPlayingTrack ? 'text-toxic' : 'text-white group-hover:text-toxic'}`}>{track.title}</span>
                                            </div>
                                            {isPlayingTrack ? <Pause className="w-6 h-6 text-toxic" /> : <Play className="w-6 h-6 text-white/30 group-hover:text-toxic" />}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        )}
    </div>
  );

  return (
    <section id="vault" className="w-full min-h-screen bg-void py-24 px-6 border-t border-toxic/30 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="w-full bg-surface border border-toxic/20 p-2"><iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2199079205&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></div>
           <div className="w-full"><iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/artist/1GM9nGfwFjiwZtgIWO3sh2?utm_source=generator&si=576c57ad91ed4f29" width="100%" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
        </div>
        <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase mb-12 drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">Discography</h2>
        <h3 className="text-xl text-white font-bold mb-6 tracking-widest uppercase">Albums</h3>
        {renderGrid(albums, true)}
        <h3 className="text-xl text-white font-bold mb-6 mt-16 tracking-widest uppercase">Singles</h3>
        {renderGrid(singles, false)}
      </div>
    </section>
  );
}
