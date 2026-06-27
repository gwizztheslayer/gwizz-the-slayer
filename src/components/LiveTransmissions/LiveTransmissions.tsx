"use client";
import { motion } from "framer-motion";

export default function LiveTransmissions() {
  return (
    <section id="shows" className="py-24 bg-black/90 border-t border-toxic/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-5xl font-black text-toxic mb-12 uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]"
        >
          LIVE TRANSMISSIONS
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* THE GLOBAL RADAR (Left) */}
          <div className="w-full lg:w-1/2 relative aspect-square sm:aspect-video lg:aspect-square bg-[#050505] border border-toxic/30 overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.05)]">
             {/* Radar Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

             {/* Sweeping Scanner */}
             <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute w-[200%] h-[200%] rounded-full border border-toxic/10 border-t-toxic/60 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(57,255,20,0.2)_90deg,transparent_90deg)] origin-center"
             />

             {/* Concentric Rings */}
             <div className="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] rounded-full border border-toxic/20"></div>
             <div className="absolute w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full border border-toxic/10"></div>

             {/* TARGET BLIP: 640 Concordia St, Knysna */}
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute z-20 top-[40%] left-[55%] flex flex-col items-center"
             >
                <div className="w-4 h-4 bg-toxic rounded-full shadow-[0_0_15px_#39ff14]"></div>
                <div className="mt-2 border border-toxic bg-black/80 px-3 py-2 pointer-events-none">
                   <p className="text-toxic font-mono text-[10px] tracking-widest whitespace-nowrap">TARGET LOCKED</p>
                   <p className="text-white font-mono text-[10px] whitespace-nowrap mt-1">640 CONCORDIA ST, KNYSNA</p>
                </div>
             </motion.div>

             {/* Radar HUD Text */}
             <div className="absolute top-4 left-4 z-30 pointer-events-none">
                <h3 className="text-toxic font-black tracking-widest uppercase text-xl drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">GLOBAL RADAR</h3>
                <p className="text-white/50 font-mono text-xs mt-1">MONITORING SECTOR...</p>
                <p className="text-white/50 font-mono text-[10px] mt-1">LAT: -34.0351 | LNG: 23.0471</p>
             </div>
          </div>

          {/* GIG LISTINGS (Right) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            {/* Archived Gig (Updated Address) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }} 
              className="flex flex-col xl:flex-row justify-between items-center border border-white/10 p-8 bg-black/80 opacity-50 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <div className="flex gap-8 items-center mb-6 xl:mb-0 w-full xl:w-auto">
                <div className="text-white/50 font-black text-4xl text-center">JUN<br/>20</div>
                <div>
                  <h3 className="text-white/50 text-2xl font-black uppercase">LOVE LIFE CENTER</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase mt-1">640 CONCORDIA ST, KNYSNA</p>
                </div>
              </div>
              <button className="border border-white/30 text-white/30 px-8 py-3 tracking-widest font-bold uppercase text-sm whitespace-nowrap w-full xl:w-auto cursor-not-allowed" disabled>
                ARCHIVED
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}