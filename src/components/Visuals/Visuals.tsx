"use client";
import { motion } from "framer-motion";

export default function Visuals() {
  const videos = [
    { title: "THE VISION", id: "TTGkmpgsLvM" },
    { title: "MEANS NOTHING", id: "JVFgXkb6QeQ" },
    { title: "MIA", id: "v-FKJKfcQ_o" },
    { title: "TAKING OVER", id: "eEUILyakJqA" }
  ];
  
  return (
    <section id="videos" className="py-24 bg-black/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          className="text-5xl font-black text-toxic mb-12 uppercase tracking-tighter"
        >
          VISUALS
        </motion.h2>

        {/* FEATURED TRANSMISSION: BETTY BOOP GOOGLE DRIVE EMBED */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="w-full max-w-3xl mx-auto shadow-[0_0_30px_rgba(57,255,20,0.15)] rounded-xl overflow-hidden border border-toxic/30 bg-black flex flex-col mb-24"
        >
          <div className="bg-toxic text-black px-4 py-2 text-xs font-black tracking-[0.2em] uppercase flex justify-between items-center">
            <span>[ TRANSMISSION: TAKING_OVER ]</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              <span>REC</span>
            </div>
          </div>
          
          {/* SIZING FIX: aspect-video (16:9) matches Image 2 and gives the Drive UI enough room so it doesn't crush the video */}
          <div className="relative w-full aspect-video bg-black">
            <iframe 
              src="https://drive.google.com/file/d/1T4g1HitxceZnGPcA35UfhFjeQ7VziAKg/preview" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="autoplay" 
              allowFullScreen
              loading="lazy"
              title="G-Wizz, The Slayer - Taking Over Ft. Ace Mclein (music video)"
              aria-label="G-Wizz, The Slayer - Taking Over Ft. Ace Mclein (music video)"
            ></iframe>
          </div>
          
          <div className="p-4 md:p-6 border-t border-toxic/20 bg-black">
            <h3 className="text-toxic font-black uppercase tracking-widest text-lg md:text-xl">
              G-Wizz, The Slayer - Taking Over Ft. Ace Mclein (music video)
            </h3>
            <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 font-mono">
              [ ARCHIVE FOOTAGE: BETTY BOOP "RED HOT MAMMA" (1934) ] // PUBLIC DOMAIN ASSET ACQUIRED
            </p>
          </div>
        </motion.div>

        {/* ARCHIVED YOUTUBE TRANSMISSIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((vid, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.2 }}
              className="aspect-video bg-black border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_15px_rgba(57,255,20,0.05)]"
            >
              <iframe 
                className="w-full h-full absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                src={`https://www.youtube.com/embed/${vid.id}?modestbranding=1&rel=0`} 
                title={`${vid.title} - G-Wizz The Slayer`} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
